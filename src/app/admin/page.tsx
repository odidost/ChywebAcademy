"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Search, Users, FileText, ArrowRight } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ seo: 0, leads: 0, blogs: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      // Just fetching counts for a quick overview
      const [{ count: seoCount }, { count: leadsCount }, { count: blogsCount }] = await Promise.all([
        supabase.from('pages_seo').select('*', { count: 'exact', head: true }),
        supabase.from('enrollments').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        seo: seoCount || 0,
        leads: leadsCount || 0,
        blogs: blogsCount || 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    {
      title: 'SEO Manager',
      description: 'Update meta titles and descriptions across your pages.',
      count: stats.seo,
      label: 'Pages Managed',
      icon: Search,
      href: '/admin/seo',
      color: 'bg-blue-500',
    },
    {
      title: 'Leads Inbox',
      description: 'View student enrollments and contact messages.',
      count: stats.leads,
      label: 'Total Enrollments',
      icon: Users,
      href: '/admin/leads',
      color: 'bg-brand-emerald',
    },
    {
      title: 'Blog Content',
      description: 'Publish SEO-optimized articles to attract traffic.',
      count: stats.blogs,
      label: 'Published Posts',
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-purple-500',
    }
  ];

  return (
    <div className="max-w-5xl">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-600">Here is a quick overview of your academy's online presence.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} href={card.href} className="block group">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${card.color}`} />
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${card.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-bold text-slate-900">{card.count}</span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{card.label}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">{card.description}</p>
                
                <div className="flex items-center text-sm font-bold text-brand-emerald group-hover:gap-2 transition-all gap-1 mt-auto">
                  Manage module <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
