"use client";

import Link from "next/link";
import { ArrowRight, Check, Monitor, Shield, Award, Sparkles, Search, Star, Clock, BookOpen, Activity, ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function SeoTrainingPage() {
  const stats = [
    { value: "7+ Years", label: "SEO Experience" },
    { value: "45+", label: "Websites Optimized" },
    { value: "300+", label: "Students Trained" },
    { value: "500+", label: "Keywords Ranked #1" },
  ];

  const modules = [
    {
      num: "Module 1",
      title: "Introduction to SEO",
      topics: [
        "Understanding how search engines work",
        "SEO terminology and concepts",
        "Google ranking factors",
        "White Hat vs. Black Hat SEO",
        "SEO trends and best practices for 2026",
      ],
    },
    {
      num: "Module 2",
      title: "Keyword Research",
      topics: [
        "Understanding search intent",
        "Finding profitable keywords",
        "Long-tail keyword research",
        "Competitor keyword analysis",
        "Building keyword strategies",
        "Keyword mapping",
      ],
    },
    {
      num: "Module 3",
      title: "On-Page SEO",
      topics: [
        "Title tags and meta descriptions",
        "Header tag optimization (H1–H6)",
        "URL structure",
        "Internal linking strategies",
        "Image SEO & Content optimization",
        "Featured snippets optimization",
      ],
    },
    {
      num: "Module 4",
      title: "Technical SEO",
      topics: [
        "Website crawling and indexing",
        "XML sitemaps & Robots.txt",
        "Canonical tags & Schema markup",
        "Core Web Vitals & Page speed",
        "Mobile SEO",
        "HTTPS and website security",
      ],
    },
    {
      num: "Module 5",
      title: "Content SEO",
      topics: [
        "SEO copywriting",
        "AI-assisted content optimization",
        "Topic clusters & Pillar pages",
        "Content planning & freshness",
        "EEAT guidelines",
      ],
    },
    {
      num: "Module 6",
      title: "Local SEO",
      topics: [
        "Google Business Profile optimization",
        "Local keyword research",
        "Google Maps ranking",
        "Local citations & reviews",
        "Local link building",
      ],
    },
    {
      num: "Module 7",
      title: "Off-Page SEO",
      topics: [
        "Link building strategies",
        "Guest posting & Digital PR",
        "Backlink audits & authority",
        "Competitor backlink analysis",
      ],
    },
    {
      num: "Module 8",
      title: "WordPress SEO",
      topics: [
        "SEO-friendly WordPress setup",
        "Essential WordPress SEO plugins",
        "Optimizing product pages & archives",
        "WordPress speed optimization",
      ],
    },
    {
      num: "Module 9",
      title: "SEO Auditing & Reporting",
      topics: [
        "How to conduct a manual SEO audit",
        "Using Screaming Frog and site crawlers",
        "Client report templates & metrics",
        "Developing SEO proposals & pricing",
      ],
    },
    {
      num: "Module 10",
      title: "Artificial Intelligence (AI) & SEO",
      topics: [
        "Understanding Search Generative Experience (SGE)",
        "AI content generation vs. editing",
        "Using AI tools (ChatGPT, Claude) for SEO tasks",
        "Preparing websites for AEO (Answer Engine Optimization)",
      ],
    },
  ];

  const packages = [
    {
      title: "Virtual SEO Training",
      type: "Group Class Model",
      price: "₦100,000",
      duration: "5 Weeks",
      features: [
        "Live instructor-led classes",
        "Every Friday & Saturday",
        "Practical SEO projects",
        "Weekly assignments & materials",
        "SEO tools training",
        "Q&A sessions",
        "Certificate of Completion",
      ],
      isFeatured: false,
    },
    {
      title: "One-on-One SEO Training",
      type: "Personalized Mentorship",
      price: "₦150,000",
      duration: "5 Weeks",
      features: [
        "Personalized coaching & plan",
        "Flexible learning schedule",
        "Practical live-site projects",
        "Weekly feedback & guidance",
        "Premium direct mentorship",
        "Advanced SEO tools",
        "Certificate of Completion",
      ],
      isFeatured: true,
    },
    {
      title: "Corporate SEO Training",
      type: "For Teams & Agencies",
      price: "₦350,000",
      duration: "Customized",
      features: [
        "Team training (On-site/Online)",
        "Customized curriculum",
        "Live workshops & practicals",
        "Company website SEO audit",
        "Company-focused strategies",
        "Post-training templates",
        "Certificates for participants",
      ],
      isFeatured: false,
    },
  ];

  const faqs = [
    { question: "1. What is SEO?", answer: "SEO (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google to increase organic traffic, leads, and sales." },
    { question: "2. Do I need prior SEO experience?", answer: "No. This course is beginner-friendly and starts from the fundamentals before progressing to advanced SEO techniques." },
    { question: "3. How long is the SEO training?", answer: "The training runs for 5 weeks, with live online classes every Friday and Saturday." },
    { question: "4. Is the training online or physical?", answer: "This program is delivered live online, allowing you to learn from anywhere in Nigeria or abroad." },
    { question: "5. Will I receive a certificate?", answer: "Yes. Participants who successfully complete the training and practical assignments will receive a Certificate of Completion from Chyweb Academy." },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Premium Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Award} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading and CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              Search Engine Optimization Core Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              SEO Training in <br/>
              <span className="text-[#2258FF]">Nigeria</span>
            </h1>
            <p className="text-slate-655 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Master Search Engine Optimization (SEO) through practical training. Rank websites #1 on Google and optimize content for modern generative AI engines (AEO/GEO).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link
                href="/enroll"
                className="px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_8px_24px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5"
              >
                Join Next Cohort
              </Link>
              <Link
                href="#modules"
                className="px-8 py-4 rounded-xl bg-slate-200/60 border border-slate-350 text-slate-800 font-bold text-base hover:bg-slate-200/80 transition-all"
              >
                Explore Modules
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-300 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Google Search Console & GA4</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>On-Page, Off-Page & Technical</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Generative Engine (GEO) Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Real Client SEO Audit Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered SEO Widgets */}
          <div className="hidden lg:block lg:col-span-5 relative h-[450px]">
            {/* Base GSC Graph Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 bg-slate-900/75 border border-white/15 backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">search-console-gsc</span>
              </div>
              <div className="flex-1 flex flex-col justify-end pt-4">
                <div className="flex items-end justify-between gap-2 h-32 w-full">
                  <div className="bg-brand-emerald/10 border border-brand-emerald/20 w-8 h-[20%] rounded-t"></div>
                  <div className="bg-brand-emerald/20 border border-brand-emerald/30 w-8 h-[45%] rounded-t"></div>
                  <div className="bg-brand-emerald/30 border border-brand-emerald/40 w-8 h-[60%] rounded-t"></div>
                  <div className="bg-brand-emerald/40 border border-brand-emerald/50 w-8 h-[80%] rounded-t"></div>
                  <div className="bg-brand-emerald border border-brand-emerald/80 w-8 h-[100%] rounded-t"></div>
                </div>
                <span className="text-[9px] text-slate-400 font-mono mt-3 text-center block">Organic Search Traffic (5 Months)</span>
              </div>
            </motion.div>

            {/* Overlapping Ranking badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/10 border border-white/15 backdrop-blur-lg rounded-xl p-4 shadow-xl w-44"
            >
              <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider flex items-center gap-1">
                <TrendingUp size={12} /> SERP Position
              </span>
              <strong className="text-xl font-black text-white block mt-1">Page #1 Rank</strong>
            </motion.div>

            {/* Overlapping Audit Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-6 left-4 bg-slate-900 border border-brand-gold/40 backdrop-blur-md rounded-xl p-4 shadow-2xl w-44 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Search size={16} />
              </div>
              <div>
                <span className="text-[9px] text-brand-gold font-bold block">SEO Score</span>
                <span className="text-xs text-white font-bold">98/100 Perfect</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is SEO / Why it matters */}
      <section id="about" className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-3 font-sans">Course Overview</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What is Search Engine Optimization (SEO)?
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Search Engine Optimization (SEO) is the process of improving a website's visibility on search engines like Google, Bing & Yahoo so that it appears higher in organic (non-paid) search results when people search for relevant products, services, or information.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              SEO involves optimizing your website's content, technical structure, user experience, and authority to help search engines understand your pages and rank them for the right keywords.
            </p>
          </div>
          <div className="premium-bento-card rounded-[20px] p-8 border-t-4 border-brand-emerald/30">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Why is SEO Important?</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Check size={16} className="text-brand-emerald mt-1 flex-shrink-0" />
                <span>Over 68% of online experiences begin with a search engine.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={16} className="text-brand-emerald mt-1 flex-shrink-0" />
                <span>More than 90% of users never go beyond the first page of Google.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* GEO & AEO definitions */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="premium-bento-card rounded-[20px] p-8 relative">
            <span className="absolute top-4 right-4 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-[10px] font-extrabold uppercase py-1 px-2.5 rounded-full">Future of Search</span>
            <h3 className="text-xl font-bold text-slate-900 mb-4">What is Generative Engine Optimization (GEO)?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Generative Engine Optimization (GEO) is the process of optimizing your website and content so it can be discovered, understood, and referenced by AI-powered search engines and generative AI platforms such as ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, and Microsoft Copilot.
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-3 font-sans">Modern Search Dynamics</span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">What is Answer Engine Optimization (AEO)?</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Answer Engine Optimization (AEO) is the practice of optimizing content to provide direct, accurate, and concise answers to users' questions. The goal is to help your content appear in featured snippets, voice search results, Google's AI Overviews, and AI assistants.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            What You Will Learn in Our SEO Training Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="premium-bento-card rounded-[20px] p-6"
              >
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider block mb-2">{m.num}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{m.title}</h3>
                <ul className="flex flex-col gap-2 text-xs text-slate-500">
                  {m.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-emerald">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-slate-50/50 backdrop-blur-sm border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            SEO Tools You'll Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-brand-emerald mb-4">Google SEO Tools</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Google Search Console, Google Analytics 4 (GA4), Google Keyword Planner, Google Trends, PageSpeed Insights, Google Business Profile, Google Tag Manager.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-brand-emerald mb-4">Research & Technical</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ahrefs, SEMrush, Ubersuggest, KeywordTool.io, AnswerThePublic, Screaming Frog SEO Spider, GTmetrix, Lighthouse, Rich Results Test.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-brand-emerald mb-4">AI-Powered & Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ChatGPT, Google Gemini, Claude AI, Perplexity AI, Yoast SEO, Rank Math SEO, Surfer SEO, Looker Studio, Notion, Canva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Bio */}
      <section className="py-24 bg-transparent relative z-10 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Meet Your SEO Trainer
          </h2>
          <div className="premium-bento-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 rounded-full border-4 border-[#2258FF]/30 flex-shrink-0 overflow-hidden shadow-md">
              <img src="/oko-david.jpg" alt="Oko David Egbodor" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-2 font-sans">Lead SEO Instructor</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Oko David Egbodor</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                Hi, I'm Oko David Egbodor, a Digital Marketing and SEO Expert with over 7 years of experience helping businesses improve their online visibility, rank higher on Google, and generate more leads through proven SEO strategies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-100/80 pt-6">
                {stats.map((s, i) => (
                  <div key={i}>
                    <span className="block text-2xl font-bold text-slate-900">{s.value}</span>
                    <span className="text-xs text-slate-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 bg-slate-50/50 backdrop-blur-sm border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            SEO Training Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`premium-bento-card rounded-[20px] p-8 flex flex-col justify-between relative ${
                  pkg.isFeatured ? "border-brand-emerald border-2 shadow-xl" : ""
                }`}
              >
                {pkg.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-emerald text-[10px] font-bold uppercase text-white tracking-widest">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                  <span className="text-xs text-slate-500 block mb-6">{pkg.type}</span>
                  <div className="text-3xl font-bold text-slate-900 mb-6">
                    {pkg.price} <span className="text-xs text-slate-500 font-normal">/ {pkg.duration}</span>
                  </div>
                  <ul className="flex flex-col gap-3 text-xs text-slate-600 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-brand-emerald flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="#enroll"
                  className={`w-full text-center py-3 rounded-lg font-bold text-sm transition-all ${
                    pkg.isFeatured
                      ? "bg-brand-emerald hover:bg-brand-emerald-hover text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions About SEO Training" />

      {/* CTA Box */}
      <section id="enroll" className="py-24 bg-transparent border-t border-slate-200/60 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-slate-50/80 backdrop-blur-md p-12 md:p-16 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Learn SEO, AEO & GEO at Chyweb Academy</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              The future of digital marketing extends beyond traditional SEO. Learn practical strategies to help businesses rank on Google, appear in AI-powered search experiences, and remain competitive.
            </p>
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Join the Next SEO Training Cohort
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
