"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Award, Monitor, Sparkles, Megaphone, Palette, Hotel, CalendarCheck, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isAgencyOpen, setIsAgencyOpen] = useState(false);
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

  const agencyServices = [
    {
      name: "Hospitality Marketing",
      desc: "Turn empty rooms & tables into high-margin direct bookings.",
      href: "/hospitality-digital-marketing-agency-nigeria",
      icon: <Hotel className="text-[#2258FF]" size={18} />,
      tag: "Hotels & Dining",
    },
    {
      name: "Hospitality Web Design",
      desc: "Fast, mobile-first websites built to convert.",
      href: "/hospitality-web-designer-nigeria",
      icon: <Monitor className="text-[#2258FF]" size={18} />,
      tag: "Conversion",
    },
    {
      name: "Hotel Digital Marketing",
      desc: "Web, SEO, Paid Ads & Social under one coordinated roof.",
      href: "/hotel-digital-marketing-agency-nigeria",
      icon: <Megaphone className="text-[#2258FF]" size={18} />,
      tag: "4-in-1 Stack",
    },
    {
      name: "Hotel Booking Web Design",
      desc: "Frictionless booking engines & native payment checkout.",
      href: "/hotel-booking-web-designer-nigeria",
      icon: <CalendarCheck className="text-[#2258FF]" size={18} />,
      tag: "Engine UX",
    },
    {
      name: "Hotel SEO (AEO & GEO)",
      desc: "Google Maps 3-Pack, ChatGPT & Gemini AI citations.",
      href: "/hotel-seo-agency-nigeria",
      icon: <Search className="text-[#2258FF]" size={18} />,
      tag: "AEO + GEO",
    },
    {
      name: "Ecommerce SEO",
      desc: "Get found on Jumia, Google, and conversational AI Search.",
      href: "/ecommerce-seo-agency-nigeria",
      icon: <ShoppingBag className="text-[#2258FF]" size={18} />,
      tag: "Marketplace",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-navbar text-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Chyweb Academy Logo"
            width={120}
            height={80}
            priority
            className="h-20 w-auto object-contain group-hover:scale-105 transition-all duration-300"
          />
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

            {isCoursesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[460px] bg-white/95 border border-slate-200/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-all duration-200">
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
              </div>
            )}
          </div>

          {/* Agency Solutions Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsAgencyOpen(true)}
            onMouseLeave={() => setIsAgencyOpen(false)}
          >
            <button
              onClick={() => setIsAgencyOpen(!isAgencyOpen)}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-650 hover:text-brand-navy transition-colors py-2 cursor-pointer"
            >
              Agency Solutions
              <ChevronDown size={14} className={`transition-transform duration-300 ${isAgencyOpen ? "rotate-180" : ""}`} />
            </button>

            {isAgencyOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white/95 border border-slate-200/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xl transition-all duration-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                    Client Growth Services
                  </span>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                    Hotels • Dining • Retail
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {agencyServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsAgencyOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center group-hover:bg-[#2258FF]/10 group-hover:border-[#2258FF]/20 transition-all flex-shrink-0 mt-0.5">
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <strong className="text-xs text-slate-900 group-hover:text-[#2258FF] transition-colors block truncate">
                          {service.name}
                        </strong>
                        <p className="text-[11px] text-slate-500 line-clamp-1">{service.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* High-Converting Audit Banner inside Dropdown */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between bg-amber-50/70 -mx-2 -mb-2 p-3 rounded-b-xl">
                  <div>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-600" />
                      Free 48-Hour Property Audit
                    </span>
                    <span className="text-[11px] text-slate-500">Uncover booking leaks & cut OTA fees</span>
                  </div>
                  <Link
                    href="/hospitality-audit"
                    onClick={() => setIsAgencyOpen(false)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-all flex items-center gap-1 shadow-sm"
                  >
                    Audit Property →
                  </Link>
                </div>
              </div>
            )}
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
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2258FF] rounded-full transition-all duration-200" />
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
      {isOpen && (
        <div className="lg:hidden w-full bg-[#f2f2ec] border-b border-slate-200 overflow-y-auto max-h-[calc(100vh-80px)] text-slate-800 transition-all duration-200">
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
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Agency Solutions</div>
            <div className="grid grid-cols-1 gap-3 pl-2">
              {agencyServices.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  onClick={() => setIsOpen(false)}
                  className="flex justify-between items-center text-sm font-semibold text-slate-700 hover:text-brand-navy"
                >
                  <span>{s.name}</span>
                  <span className="text-[10px] text-amber-600 bg-amber-50 py-0.5 px-2.5 rounded-full font-bold">{s.tag}</span>
                </Link>
              ))}
              <Link
                href="/hospitality-audit"
                onClick={() => setIsOpen(false)}
                className="mt-1 flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-300 text-xs font-bold text-slate-900"
              >
                <span className="flex items-center gap-1.5 text-amber-900">
                  <Sparkles size={13} className="text-amber-600" />
                  Free 48-Hour Property Audit
                </span>
                <span className="text-amber-700 font-black">Free →</span>
              </Link>
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
        </div>
      )}
    </header>
  );
}
