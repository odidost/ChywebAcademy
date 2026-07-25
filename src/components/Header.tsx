"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Award, Monitor, Sparkles, Megaphone, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const courses = [
    {
      name: "SEO Training",
      desc: "Rank on search engines and optimize content for AI search queries.",
      href: "/seo-training",
      icon: <Award className="text-[#2258FF]" size={20} />,
      duration: "5 Weeks",
    },
    {
      name: "Web Design Training",
      desc: "Build stunning, modern WordPress websites from scratch.",
      href: "/web-design",
      icon: <Monitor className="text-[#2258FF]" size={20} />,
      duration: "6 Weeks",
    },
    {
      name: "AI & Productivity",
      desc: "Supercharge your output using ChatGPT, Claude, Gemini, and Cursor.",
      href: "/ai-productivity",
      icon: <Sparkles className="text-[#2258FF]" size={20} />,
      duration: "4 Weeks",
    },
    {
      name: "Digital Marketing",
      desc: "Learn Social Media, Google Ads, Meta Ads, Copywriting, and Funnels.",
      href: "/digital-marketing",
      icon: <Megaphone className="text-[#2258FF]" size={20} />,
      duration: "10 Weeks",
    },
    {
      name: "Graphic Design",
      desc: "Master Photoshop, Illustrator, Canva, and Brand Identity creation.",
      href: "/graphic-design",
      icon: <Palette className="text-[#2258FF]" size={20} />,
      duration: "6 Weeks",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-navbar text-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img src="/logo.png" alt="Chyweb Academy Logo" className="h-20 w-auto object-contain group-hover:scale-105 transition-all duration-300" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Courses Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={() => setIsCoursesOpen(false)}
          >
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-650 hover:text-brand-navy transition-colors py-2 cursor-pointer"
            >
              Courses
              <ChevronDown size={14} className={`transition-transform duration-300 ${isCoursesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white/95 border border-slate-200/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
                >
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 font-sans">Our Programs</div>
                  <div className="flex flex-col gap-3">
                    {courses.map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        onClick={() => setIsCoursesOpen(false)}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center group-hover:bg-[#2258FF]/10 group-hover:border-[#2258FF]/20 transition-all">
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <strong className="text-sm text-slate-905 group-hover:text-[#2258FF] transition-colors">{course.name}</strong>
                            <span className="text-[10px] text-[#2258FF] bg-[#2258FF]/10 py-0.5 px-2.5 rounded-full font-bold">{course.duration}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{course.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-2 ${
                  isActive ? "text-[#2258FF] font-bold" : "text-slate-600 hover:text-[#0b0f19]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2258FF] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-sm shadow-[0_8px_20px_rgba(34,88,255,0.25)] hover:shadow-[0_12px_24px_rgba(34,88,255,0.35)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Enroll Now
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-650 hover:text-brand-navy transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden w-full bg-[#f2f2ec] border-b border-slate-200 overflow-y-auto max-h-[calc(100vh-80px)] text-slate-800"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Courses</div>
              <div className="grid grid-cols-1 gap-3 pl-2">
                {courses.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center text-sm font-semibold text-slate-700 hover:text-brand-navy"
                  >
                    <span>{c.name}</span>
                    <span className="text-[10px] text-[#2258FF] bg-[#2258FF]/10 py-0.5 px-2.5 rounded-full">{c.duration}</span>
                  </Link>
                ))}
              </div>
              <hr className="border-slate-200" />
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Navigation</div>
              {links.map((link) => (
                <Link
                  key={link.name}
                  onClick={() => setIsOpen(false)}
                  href={link.href}
                  className="text-base font-semibold text-slate-700 hover:text-brand-navy transition-colors pl-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                onClick={() => setIsOpen(false)}
                href="/enroll"
                className="w-full text-center py-3.5 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold shadow-lg"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
