"use client";

import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Award, Monitor, Sparkles, Megaphone, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const courses = [
    {
      name: "SEO Training",
      desc: "Rank on search engines and optimize content for AI search queries (GEO/AEO).",
      href: "/seo-training",
      icon: <Award className="text-brand-emerald" size={24} />,
      duration: "5 Weeks",
      price: "₦100,000",
    },
    {
      name: "Web Design Training",
      desc: "Build stunning, modern WordPress websites from scratch with Elementor Pro.",
      href: "/web-design",
      icon: <Monitor className="text-brand-emerald" size={24} />,
      duration: "6 Weeks",
      price: "₦120,000",
    },
    {
      name: "AI & Productivity",
      desc: "Supercharge your output using ChatGPT, Claude, Gemini, and Cursor AI.",
      href: "/ai-productivity",
      icon: <Sparkles className="text-brand-emerald" size={24} />,
      duration: "4 Weeks",
      price: "₦80,000",
    },
    {
      name: "Digital Marketing",
      desc: "Learn Social Media, Google Ads, Meta Ads, Copywriting, and Funnels.",
      href: "/digital-marketing",
      icon: <Megaphone className="text-brand-emerald" size={24} />,
      duration: "10 Weeks",
      price: "₦150,000",
    },
    {
      name: "Graphic Design",
      desc: "Master Photoshop, Illustrator, Canva, and Brand Identity creation.",
      href: "/graphic-design",
      icon: <Palette className="text-brand-emerald" size={24} />,
      duration: "6 Weeks",
      price: "₦100,000",
    },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-36 pb-24">
      {/* Decorative Orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 orb-glow-emerald opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Professional Curriculums
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Training Programs</h1>
          <p className="text-slate-600 text-base md:text-lg">
            Explore our practical, hands-on training courses designed to build high-income digital skills and careers.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
              className="premium-glass-card rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-6">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{course.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">{course.desc}</p>
                <div className="flex gap-4 text-xs text-slate-500 mb-6 border-y border-slate-100/80 py-3">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                  <span className="flex items-center gap-1.5"><BookOpen size={14} /> Practical Learning</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs font-bold mt-4">
                <span className="text-brand-emerald text-base">{course.price}</span>
                <Link
                  href={course.href}
                  className="inline-flex items-center gap-1.5 text-brand-emerald hover:text-brand-emerald-hover transition-colors"
                >
                  Syllabus Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
