import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy py-20 mt-auto text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 orb-glow-emerald opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-5 md:col-span-2">
          <Link href="/" className="flex items-center group w-fit">
            <img src="/logo.png" alt="Chyweb Academy Logo" className="h-24 w-auto object-contain brightness-0 invert" />
          </Link>
          <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-sans">
            Become a Certified Digital Marketing Professional in Nigeria. We equip learners with practical, AI-powered digital skills to build careers, secure freelancing gigs, and grow businesses.
          </p>
          <div className="flex gap-4 items-center mt-2">
            {/* Inline SVG Facebook */}
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            {/* Inline SVG LinkedIn */}
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-emerald hover:border-brand-emerald hover:text-white transition-all duration-300">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider font-sans">Programs</h4>
          <ul className="flex flex-col gap-3.5">
            <li>
              <Link href="/seo-training" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                SEO Training
              </Link>
            </li>
            <li>
              <Link href="/web-design" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                Web Design
              </Link>
            </li>
            <li>
              <Link href="/digital-marketing" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                All Courses
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Support Column */}
        <div>
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-wider font-sans">Support & Resources</h4>
          <ul className="flex flex-col gap-3.5 mb-6">
            <li>
              <Link href="/free-resources" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                Free Resources
              </Link>
            </li>
            <li>
              <Link href="/career-services" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                Career Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-slate-400 text-sm hover:text-white transition-colors font-medium flex items-center gap-1 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-brand-emerald" />
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 border-t border-slate-800/80 pt-4">
            <li className="flex gap-2.5 items-start text-slate-400 text-sm">
              <Phone size={16} className="text-brand-emerald mt-0.5" />
              <span>0906 762 3555</span>
            </li>
            <li className="flex gap-2.5 items-start text-slate-400 text-sm">
              <Mail size={16} className="text-[#2258FF] mt-0.5" />
              <a href="mailto:chywebacademy@gmail.com" className="hover:text-white transition-colors">
                chywebacademy@gmail.com
              </a>
            </li>
            <li className="flex gap-2.5 items-start text-slate-400 text-sm">
              <MapPin className="text-brand-emerald mt-0.5" size={16} />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans relative z-10">
        <p>&copy; {new Date().getFullYear()} Chyweb Academy. All rights reserved.</p>
        <p>Empowering Digital Growth in Nigeria</p>
      </div>
    </footer>
  );
}
