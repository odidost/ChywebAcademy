"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Plus, Trash2, Edit2, X } from 'lucide-react';

interface SeoEntry {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
}

export default function SeoManager() {
  const [entries, setEntries] = useState<SeoEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<SeoEntry>>({});
  const [isCreating, setIsCreating] = useState(false);

  const fetchEntries = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('pages_seo').select('*').order('path');
    if (!error && data) setEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSave = async () => {
    if (isCreating) {
      const { error } = await supabase.from('pages_seo').insert([editForm]);
      if (!error) {
        setIsCreating(false);
        setEditingId(null);
        fetchEntries();
      } else {
        alert(error.message);
      }
    } else if (editingId) {
      const { error } = await supabase.from('pages_seo').update(editForm).eq('id', editingId);
      if (!error) {
        setEditingId(null);
        fetchEntries();
      } else {
        alert(error.message);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this SEO configuration?')) {
      await supabase.from('pages_seo').delete().eq('id', id);
      fetchEntries();
    }
  };

  const startEdit = (entry: SeoEntry) => {
    setEditingId(entry.id);
    setEditForm(entry);
    setIsCreating(false);
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingId('new');
    setEditForm({ path: '/', title: '', description: '', keywords: '' });
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">SEO Manager</h1>
          <p className="text-slate-600">Dynamically inject meta tags into any route.</p>
        </div>
        <button 
          onClick={startCreate}
          className="flex items-center gap-2 px-5 py-2.5 bg-brand-emerald text-white font-bold rounded-xl hover:bg-brand-emerald-hover transition-colors shadow-lg"
        >
          <Plus size={18} /> Add Route
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading configurations...</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Path</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Meta Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Keywords</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isCreating && (
                <tr className="bg-blue-50/50">
                  <td colSpan={4} className="p-6">
                    <EditForm form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={() => setIsCreating(false)} />
                  </td>
                </tr>
              )}
              
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-slate-50 transition-colors group">
                  {editingId === entry.id && !isCreating ? (
                    <td colSpan={4} className="p-6 bg-blue-50/50">
                      <EditForm form={editForm} setForm={setEditForm} onSave={handleSave} onCancel={() => setEditingId(null)} />
                    </td>
                  ) : (
                    <>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-100 text-slate-800 font-mono">
                          {entry.path}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-slate-900">{entry.title}</p>
                        <p className="text-xs text-slate-500 truncate max-w-xs">{entry.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs text-slate-600 truncate max-w-[200px]">{entry.keywords}</p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => startEdit(entry)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Edit2 size={16} />
                          </button>
                          <button onClick={() => handleDelete(entry.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
              {!loading && entries.length === 0 && !isCreating && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    No SEO entries found. Add one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function EditForm({ form, setForm, onSave, onCancel }: { form: any, setForm: any, onSave: () => void, onCancel: () => void }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Route Path (e.g., /about)</label>
          <input 
            type="text" 
            value={form.path || ''} 
            onChange={(e) => setForm({...form, path: e.target.value})}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none text-sm font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Meta Title Tag</label>
          <input 
            type="text" 
            value={form.title || ''} 
            onChange={(e) => setForm({...form, title: e.target.value})}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none text-sm"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Meta Description</label>
        <textarea 
          value={form.description || ''} 
          onChange={(e) => setForm({...form, description: e.target.value})}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none text-sm h-20 resize-none"
        />
        <div className="text-[10px] text-slate-400 text-right mt-1">{(form.description?.length || 0)} / 160 characters recommended</div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Keywords (Comma separated)</label>
        <input 
          type="text" 
          value={form.keywords || ''} 
          onChange={(e) => setForm({...form, keywords: e.target.value})}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 outline-none text-sm"
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button onClick={onCancel} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">
          <X size={16} /> Cancel
        </button>
        <button onClick={onSave} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors">
          <Save size={16} /> Save Changes
        </button>
      </div>
    </div>
  );
}
