"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, Calendar, Search, BookOpen, Clock } from 'lucide-react';

interface Lead {
  id: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  email: string;
  phone?: string;
  course?: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
}

export default function LeadsManager() {
  const [enrollments, setEnrollments] = useState<Lead[]>([]);
  const [messages, setMessages] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'enrollments' | 'messages'>('enrollments');

  useEffect(() => {
    const fetchLeads = async () => {
      setLoading(true);
      const [enrollData, messageData] = await Promise.all([
        supabase.from('enrollments').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false })
      ]);
      
      if (enrollData.data) setEnrollments(enrollData.data);
      if (messageData.data) setMessages(messageData.data);
      setLoading(false);
    };

    fetchLeads();
  }, []);

  const updateStatus = async (table: string, id: string, newStatus: string) => {
    await supabase.from(table).update({ status: newStatus }).eq('id', id);
    // Optimistic update locally
    if (table === 'enrollments') {
      setEnrollments(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
    } else {
      setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
    }
  };

  const activeData = activeTab === 'enrollments' ? enrollments : messages;

  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Leads Inbox</h1>
        <p className="text-slate-600">Manage student enrollments and contact inquiries.</p>
      </header>

      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setActiveTab('enrollments')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'enrollments' 
            ? 'bg-slate-900 text-white shadow-lg' 
            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Enrollments ({enrollments.length})
        </button>
        <button 
          onClick={() => setActiveTab('messages')}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
            activeTab === 'messages' 
            ? 'bg-slate-900 text-white shadow-lg' 
            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Contact Messages ({messages.length})
        </button>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="p-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-200">Loading leads...</div>
        ) : activeData.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Search className="text-slate-400" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">No {activeTab} yet</h3>
            <p className="text-slate-500 text-sm">When users submit the form, they will appear here.</p>
          </div>
        ) : (
          activeData.map((lead) => (
            <div key={lead.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {lead.first_name ? `${lead.first_name} ${lead.last_name}` : lead.name}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                    lead.status === 'pending' || lead.status === 'unread' ? 'bg-amber-100 text-amber-700' :
                    lead.status === 'enrolled' || lead.status === 'replied' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {lead.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1.5"><Mail size={16} /> {lead.email}</div>
                  {lead.phone && <div className="flex items-center gap-1.5"><Phone size={16} /> {lead.phone}</div>}
                  <div className="flex items-center gap-1.5"><Calendar size={16} /> {new Date(lead.created_at).toLocaleDateString()}</div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl text-slate-700 text-sm">
                  {lead.course && (
                    <div className="mb-2 font-semibold flex items-center gap-2">
                      <BookOpen size={16} className="text-brand-emerald" /> 
                      Interested in: {lead.course}
                    </div>
                  )}
                  {lead.subject && (
                    <div className="mb-2 font-semibold border-b border-slate-200 pb-2">
                      Subject: {lead.subject}
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{lead.message || "No message provided."}</p>
                </div>
              </div>
              
              <div className="w-full md:w-48 shrink-0 flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Update Status</label>
                <select 
                  value={lead.status}
                  onChange={(e) => updateStatus(activeTab === 'enrollments' ? 'enrollments' : 'contact_messages', lead.id, e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-emerald text-sm font-semibold text-slate-700"
                >
                  {activeTab === 'enrollments' ? (
                    <>
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="enrolled">Enrolled</option>
                    </>
                  ) : (
                    <>
                      <option value="unread">Unread</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
