"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Plus, Trash2, Edit2, X, Globe, EyeOff, Image as ImageIcon, FileText } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published: boolean;
  published_at: string;
  meta_title: string;
}

export default function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<BlogPost>>({});
  const [isCreating, setIsCreating] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyLink = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = editForm.content || '';
    
    const selectedText = content.substring(start, end) || 'Link Text';
    const url = window.prompt('Enter the URL:', 'https://');
    
    if (url) {
      const newContent = content.substring(0, start) + `[${selectedText}](${url})` + content.substring(end);
      setEditForm({ ...editForm, content: newContent });
    }
  };

  const applyHeading = (level: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = editForm.content || '';
    
    const prefix = '#'.repeat(parseInt(level)) + ' ';
    const selectedText = content.substring(start, end) || 'Heading';
    
    const newContent = content.substring(0, start) + `\n${prefix}${selectedText}\n` + content.substring(end);
    setEditForm({ ...editForm, content: newContent });
  };

  const fetchPosts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
    if (!error && data) setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setEditForm(prev => ({ 
      ...prev, 
      title, 
      slug: prev.slug || generateSlug(title) 
    }));
  };

  const handleSave = async () => {
    // Exclude meta_title from payload since it's not in the database schema yet
    const { meta_title, ...restForm } = editForm;
    
    const dataToSave = {
      ...restForm,
      published_at: restForm.published && !restForm.published_at ? new Date().toISOString() : restForm.published_at
    };

    if (isCreating) {
      const { error } = await supabase.from('blog_posts').insert([dataToSave]);
      if (!error) {
        setIsCreating(false);
        setEditingId(null);
        fetchPosts();
      } else {
        alert(error.message);
      }
    } else if (editingId) {
      const { error } = await supabase.from('blog_posts').update(dataToSave).eq('id', editingId);
      if (!error) {
        setEditingId(null);
        fetchPosts();
      } else {
        alert(error.message);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await supabase.from('blog_posts').delete().eq('id', id);
      fetchPosts();
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setEditForm(post);
    setIsCreating(false);
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingId('new');
    setEditForm({ title: '', slug: '', excerpt: '', content: '', published: false, meta_title: '' });
  };

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Blog Content</h1>
          <p className="text-slate-600">Create SEO-optimized articles to capture long-tail traffic.</p>
        </div>
        {!isCreating && !editingId && (
          <button 
            onClick={startCreate}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-emerald text-white font-bold rounded-xl hover:bg-brand-emerald-hover transition-colors shadow-lg"
          >
            <Plus size={18} /> Write Post
          </button>
        )}
      </div>

      {(isCreating || editingId) ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900">
              {isCreating ? 'Create New Post' : 'Edit Post'}
            </h2>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={editForm.published || false}
                  onChange={(e) => setEditForm({...editForm, published: e.target.checked})}
                  className="w-4 h-4 text-brand-emerald rounded focus:ring-brand-emerald"
                />
                <span className="text-sm font-bold text-slate-700">Published</span>
              </label>
              <button onClick={() => { setIsCreating(false); setEditingId(null); }} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200">
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Post Title</label>
                <input 
                  type="text" 
                  value={editForm.title || ''} 
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none font-medium"
                  placeholder="e.g. 10 Local SEO Tips for Lagos Businesses"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">URL Slug</label>
                <input 
                  type="text" 
                  value={editForm.slug || ''} 
                  onChange={(e) => setEditForm({...editForm, slug: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Meta Title</label>
              <input 
                type="text" 
                value={editForm.meta_title || ''} 
                onChange={(e) => setEditForm({...editForm, meta_title: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none"
                placeholder="SEO Meta Title (defaults to Post Title if empty)"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Excerpt (Meta Description)</label>
              <textarea 
                value={editForm.excerpt || ''} 
                onChange={(e) => setEditForm({...editForm, excerpt: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none h-24 resize-none"
                placeholder="A short summary for search engines and blog previews..."
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-slate-700">Main Content (Markdown/HTML supported)</label>
                <div className="flex gap-2">
                  <select 
                    onChange={(e) => {
                      if(e.target.value) {
                        applyHeading(e.target.value);
                        e.target.value = "";
                      }
                    }}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded outline-none cursor-pointer"
                  >
                    <option value="">Heading</option>
                    <option value="1">Heading 1 (H1)</option>
                    <option value="2">Heading 2 (H2)</option>
                    <option value="3">Heading 3 (H3)</option>
                    <option value="4">Heading 4 (H4)</option>
                  </select>
                  <button 
                    type="button" 
                    onClick={applyLink}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded"
                  >
                    Link
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setEditForm({...editForm, content: (editForm.content || '') + '\n![Alt Text](https://)\n'})}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded"
                  >
                    Media
                  </button>
                </div>
              </div>
              <textarea 
                ref={textareaRef}
                value={editForm.content || ''} 
                onChange={(e) => setEditForm({...editForm, content: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none h-96 font-mono text-sm"
                placeholder="Write your amazing content here..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Featured Image URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <ImageIcon size={18} />
                </div>
                <input 
                  type="text" 
                  value={editForm.featured_image || ''} 
                  onChange={(e) => setEditForm({...editForm, featured_image: e.target.value})}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:border-brand-emerald focus:ring-4 focus:ring-brand-emerald/10 outline-none"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button onClick={handleSave} className="flex items-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-lg">
                <Save size={18} /> Save Post
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full p-12 text-center text-slate-500">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="col-span-full p-12 text-center bg-white rounded-3xl border border-slate-200 flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <FileText className="text-slate-400" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">No blog posts yet</h3>
              <p className="text-slate-500 text-sm">Create your first SEO article to start ranking.</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col group">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  {post.featured_image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <ImageIcon size={48} strokeWidth={1} />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    {post.published ? (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-emerald-600 shadow-sm">
                        <Globe size={14} /> Published
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-500 shadow-sm">
                        <EyeOff size={14} /> Draft
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-3 flex-1">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400 truncate max-w-[120px]">
                      /{post.slug}
                    </span>
                    <div className="flex gap-2">
                      <button onClick={() => startEdit(post)} className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
