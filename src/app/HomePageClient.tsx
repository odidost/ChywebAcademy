"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Star, Monitor, Shield, Award, Users, BookOpen, Clock, ShieldCheck, ChevronRight, Activity, Cpu, Calendar, Zap, Layout, Play, BarChart2, Briefcase, Globe, Sparkles, Code, CheckCircle, Mail, MessageSquare, TrendingUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DecorativeIcon from "@/components/DecorativeIcon";
import FaqSection from "@/components/FaqSection";

export default function HomePage() {
  const [activeFaqTab, setActiveFaqTab] = useState<"general" | "curriculum">("general");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // States for interactive workspace selectors (Step 1)
  const [selectedCourse, setSelectedCourse] = useState("Digital Marketing Masterclass");
  const [selectedMode, setSelectedMode] = useState("Online Cohort");
  
  // States for live analytics counter (Step 2)
  const [conversionClicks, setConversionClicks] = useState(2410);
  const [conversionLeads, setConversionLeads] = useState(412);
  const [roiFactor, setRoiFactor] = useState(4.2);

  // Real-time student counter state matching Kobble's layout
  const [liveStudentsCount, setLiveStudentsCount] = useState(10224);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStudentsCount((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Update live campaign stats simulation (Step 2)
  useEffect(() => {
    const statsTimer = setInterval(() => {
      setConversionClicks((prev) => prev + Math.floor(Math.random() * 3) + 1);
      if (Math.random() > 0.7) {
        setConversionLeads((prev) => prev + 1);
      }
      if (Math.random() > 0.85) {
        setRoiFactor((prev) => parseFloat((prev + (Math.random() > 0.5 ? 0.1 : -0.1)).toFixed(1)));
      }
    }, 3000);
    return () => clearInterval(statsTimer);
  }, []);

  const categoriesRow1 = [
    "🔍 SEO Auditing",
    "💬 Paid Meta Advertising",
    "📊 Google Ads Optimization",
    "🌐 WordPress Web Design",
    "✍️ Conversion Copywriting",
    "🤖 Generative AI Workflow",
    "🎨 Brand Identity Design",
    "✉️ Email Automation",
    "📈 Marketing Analytics",
    "🚀 GEO/AI Engine Prep",
    "🏢 Local Business Audits"
  ];

  const categoriesRow2 = [
    "📈 Search Engine Optimization",
    "📢 Facebook & Instagram Ads",
    "⚡ Sales Funnel Construction",
    "🛠️ Technical SEO Audits",
    "🎯 PPC Bidding Strategy",
    "🧠 AI Prompt Automation",
    "🛍️ E-commerce Web Building",
    "📊 Google Analytics 4 (GA4)",
    "📂 Content Cluster Planning",
    "🤝 LinkedIn Lead Generation",
    "🔄 Conversion Rate Optimization"
  ];

  const pillStyles = [
    { bg: "#2258FF", text: "#FFFFFF", border: "#2258FF" }, // Vibrant Blue
    { bg: "#6CAA42", text: "#FFFFFF", border: "#6CAA42" }, // Warm Green
    { bg: "#FC4444", text: "#FFFFFF", border: "#FC4444" }, // Coral Red
    { bg: "#8B5CF6", text: "#FFFFFF", border: "#8B5CF6" }, // Purple
    { bg: "#F59E0B", text: "#FFFFFF", border: "#F59E0B" }, // Amber
    { bg: "#06B6D4", text: "#FFFFFF", border: "#06B6D4" }, // Cyan
    { bg: "#EC4899", text: "#FFFFFF", border: "#EC4899" }  // Pink
  ];

  const philosophy = [
    {
      title: "Our Mission",
      desc: "We equip our learners with practical, in-demand digital marketing skills that are easy to learn, profitable, and relevant in today’s AI-driven economy.",
      icon: <Award className="text-[#2258FF]" size={20} />
    },
    {
      title: "Our Approach",
      desc: "Hands-on learning with AI integration, real-world application, and step-by-step guidance to attract local and international clients.",
      icon: <Activity className="text-[#2258FF]" size={20} />
    },
    {
      title: "Course Design & Support",
      desc: "Each course is designed for skill mastery, career growth, and business success with mentorship, real projects, toolkits, and community support.",
      icon: <Shield className="text-[#2258FF]" size={20} />
    }
  ];

  const modules = [
    {
      num: "Module 1",
      title: "Introduction to Digital Marketing",
      desc: "Understand the foundations of digital marketing and how businesses attract, engage, and convert customers online.",
      topics: [
        "Introduction to digital marketing",
        "Digital marketing channels",
        "Customer journey and funnels",
        "Understanding audience behavior",
        "Digital marketing strategy fundamentals",
        "Marketing trends and opportunities"
      ]
    },
    {
      num: "Module 2",
      title: "Search Engine Optimization (SEO)",
      desc: "Learn how websites rank on Google and how to increase visibility using modern SEO techniques.",
      topics: [
        "Keyword research",
        "Search intent analysis",
        "On-page SEO",
        "Technical SEO fundamentals",
        "Local SEO",
        "Content optimization",
        "SEO tools and reporting",
        "AI-powered SEO workflows"
      ]
    },
    {
      num: "Module 3",
      title: "Content Marketing & Copywriting",
      desc: "Create content that attracts visitors and converts audiences into customers.",
      topics: [
        "Content strategy",
        "Blog writing",
        "Conversion copywriting",
        "Landing page optimization",
        "Storytelling for marketing",
        "AI-assisted content creation",
        "Content planning"
      ]
    },
    {
      num: "Module 4",
      title: "Social Media Marketing",
      desc: "Build and manage effective social media campaigns across major platforms.",
      topics: [
        "Social media strategy",
        "Content creation",
        "Audience growth",
        "Engagement tactics",
        "Campaign management",
        "Social media analytics",
        "Community building"
      ]
    },
    {
      num: "Module 5",
      title: "Paid Advertising (Google Ads & Meta Ads)",
      desc: "Learn how to create and optimize paid campaigns that generate leads and sales.",
      topics: [
        "Google Ads setup",
        "Search advertising",
        "Display advertising",
        "Meta Ads (Facebook & Instagram)",
        "Audience targeting",
        "Campaign optimization",
        "Budget management",
        "Conversion tracking"
      ]
    },
    {
      num: "Module 6",
      title: "Email Marketing & Automation",
      desc: "Build customer relationships and increase conversions through email campaigns.",
      topics: [
        "Email strategy",
        "List building",
        "Campaign creation",
        "Email automation",
        "Segmentation",
        "Conversion optimization",
        "Customer retention"
      ]
    },
    {
      num: "Module 7",
      title: "AI Marketing Tools & Productivity",
      desc: "Learn how to improve marketing performance using AI-powered tools.",
      topics: [
        "AI for content creation",
        "AI for campaign planning",
        "Marketing automation",
        "Prompt development",
        "Workflow optimization",
        "AI-assisted research"
      ]
    },
    {
      num: "Module 8",
      title: "WordPress Website Design",
      desc: "Learn how to build and manage websites that support digital marketing goals.",
      topics: [
        "WordPress setup",
        "Website structure",
        "Landing pages",
        "SEO-friendly design",
        "Forms and lead capture",
        "Basic website management"
      ]
    },
    {
      num: "Module 9",
      title: "Analytics & Performance Tracking",
      desc: "Measure campaign performance and make data-driven decisions.",
      topics: [
        "Marketing KPIs",
        "Website analytics",
        "Traffic measurement",
        "Conversion tracking",
        "Campaign reporting",
        "Performance improvement"
      ]
    },
    {
      num: "Module 10",
      title: "Practical Projects & Certification",
      desc: "Apply your skills through practical implementation and project-based learning.",
      topics: [
        "Real-world exercises",
        "Campaign execution",
        "Portfolio projects",
        "Performance review",
        "Final assessment",
        "Certification"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Digital Marketing Masterclass",
      desc: "SEO, Social Media, Google & Meta Ads, Copywriting, Email Marketing, AI tools and Performance Analytics.",
      duration: "10 Weeks",
      mode: "Online / Cohort",
      price: "₦150,000",
      isFeatured: true,
      features: [
        "All 10 course modules",
        "Live campaign allocations",
        "Personal portfolio project",
        "Direct Oko David mentorship",
        "Verified certificate"
      ]
    },
    {
      title: "SEO Training Programme",
      desc: "Keyword research, technical audits, ranking funnels, GEO engine prep, search metrics.",
      duration: "5 Weeks",
      mode: "Online",
      price: "₦100,000",
      isFeatured: false,
      features: [
        "Focus keyword research",
        "On-page & Technical parameters",
        "SEO reporting dashboards",
        "AI optimization tools",
        "Verified certificate"
      ]
    },
    {
      title: "Paid Advertising Training",
      desc: "Google Ads, Meta campaigns (Facebook & Instagram), ROI targeting, budget control.",
      duration: "4 Weeks",
      mode: "Online / Hybrid",
      price: "₦80,000",
      isFeatured: false,
      features: [
        "Google search campaigns",
        "Meta pixel & conversions",
        "A/B split testing options",
        "Budget scaling rules",
        "Verified certificate"
      ]
    }
  ];

  const faqs = {
    general: [
      {
        q: "What is digital marketing training?",
        a: "Digital marketing training is a practical learning programme that teaches how to promote businesses online using channels such as SEO, Social Media Marketing, Google Ads, Content Marketing, Email Marketing, and analytics tools."
      },
      {
        q: "Who can join your digital marketing training in Nigeria?",
        a: "Our training is designed for students, entrepreneurs, freelancers, professionals, business owners, graduates, and anyone looking to build practical digital skills and career opportunities."
      },
      {
        q: "Do I need previous experience to learn digital marketing?",
        a: "No. Our digital marketing courses are beginner-friendly and structured to help learners start from foundational concepts and progress into practical implementation."
      },
      {
        q: "Is certification included after completing the training?",
        a: "Yes. Learners receive a certificate after completing the programme requirements."
      },
      {
        q: "Is your digital marketing training available online?",
        a: "Yes. We offer both online and physical classes, allowing students across Nigeria to participate from any location."
      },
      {
        q: "How long does digital marketing training take?",
        a: "Training duration depends on the selected programme. Courses typically range from several weeks to more comprehensive multi-week training tracks."
      },
      {
        q: "Will I work on practical projects during training?",
        a: "Yes. Our training focuses on hands-on learning through assignments, practical exercises, and project-based application to build real-world experience."
      },
      {
        q: "Can I earn money after learning digital marketing?",
        a: "Digital marketing skills can create opportunities in freelancing, employment, consulting, agency work, business growth, and online services. Outcomes depend on skill development, implementation, and market demand."
      },
      {
        q: "Why choose Chyweb Academy for digital marketing training in Nigeria?",
        a: "Chyweb Academy focuses on practical learning, AI-powered tools, mentorship, real-world projects, flexible learning options, and industry-relevant digital marketing skills."
      }
    ],
    curriculum: [
      {
        q: "What courses are included in your digital marketing training programme?",
        a: "The training may include Search Engine Optimization (SEO), Social Media Marketing, Google Ads, Meta Advertising, Content Marketing, Email Marketing, AI Marketing Tools, WordPress Website Design, and Analytics and Reporting."
      }
    ]
  };

  return (
    <div className="relative overflow-hidden bg-line-grid bg-dot-grid bg-noise min-h-screen text-slate-800">
      
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2258FF]/5 to-transparent blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-br from-[#4f46e5]/4 to-transparent blur-[100px] pointer-events-none z-0"></div>

      {/* Hero Section (Kobble Layout: Background #EAEBE0) */}
      <section className="relative pt-32 pb-28 overflow-hidden z-10 bg-[#EAEBE0] border-b border-slate-300/40 rounded-b-[40px]">
        {/* Subtle dot-grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        {/* Large framed Sparkles watermark framing the content offset to the right */}
        <DecorativeIcon Icon={Sparkles} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading & Copy */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2258FF] animate-pulse"></span>
              Digital Marketing Courses in Nigeria
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-900 font-sans">
              Digital Marketing <br/>
              <span className="text-[#2258FF]">
                Training in Nigeria
              </span>
            </h1>
            
            <p className="text-slate-655 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Join Our Digital Marketing Courses in Nigeria and Gain practical, job-ready digital skills through hands-on digital marketing training designed to help you build a career, grow a business, or work with clients confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/enroll"
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_10px_30px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5 group"
              >
                ENROLL NOW
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Avatar Stack Proof Group */}
            <div className="flex items-center gap-4 border-t border-slate-300 pt-6 w-full">
              <div className="flex -space-x-3">
                <span className="w-9 h-9 rounded-full bg-slate-300 border-2 border-[#EAEBE0] flex items-center justify-center font-bold text-[10px] text-slate-800">T.O</span>
                <span className="w-9 h-9 rounded-full bg-slate-300 border-2 border-[#EAEBE0] flex items-center justify-center font-bold text-[10px] text-slate-800">C.N</span>
                <span className="w-9 h-9 rounded-full bg-slate-300 border-2 border-[#EAEBE0] flex items-center justify-center font-bold text-[10px] text-slate-800">I.A</span>
                <span className="w-9 h-9 rounded-full bg-[#2258FF]/10 text-[#2258FF] border-2 border-[#EAEBE0] flex items-center justify-center font-bold text-[9px]">+10K</span>
              </div>
              <p className="text-xs text-slate-600 font-medium font-sans">
                Join <strong className="text-slate-900 font-bold">10,000+ active students</strong> acquiring high-value digital marketing skills.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Widgets Layout */}
          <div className="hidden lg:block lg:col-span-5 relative h-[480px]">
            
            {/* Widget 1: Active Academy Cohorts Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-10 left-4 w-72 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl z-10 text-slate-900"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Live Academy Status</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-black text-slate-900 font-sans tracking-tight">
                  {liveStudentsCount.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 font-medium">Active enrolled learners currently tracking courses.</div>
              </div>
            </motion.div>

            {/* Widget 2: Floating Student Review Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-2 w-64 bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl z-20 text-white"
            >
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
                <Star size={11} fill="currentColor" />
              </div>
              <p className="text-[11px] text-slate-350 leading-relaxed mb-3">
                "The AI tools integration completely changed how I write copy and do keyword research. I secured my first freelance gig before ending the Masterclass!"
              </p>
              <div className="flex justify-between items-center border-t border-slate-800/80 pt-2 text-[10px]">
                <strong className="text-white">Tunde Olanrewaju</strong>
                <span className="text-slate-400">Graduate</span>
              </div>
            </motion.div>

            {/* Widget 3: Practical Tools Connected */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-1/2 -left-8 w-60 bg-white border border-slate-200/80 rounded-2xl p-4.5 shadow-xl z-30 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center text-[9px] text-slate-400 uppercase tracking-widest font-mono">
                <span>Tools Config</span>
                <span>Active</span>
              </div>
              <div className="flex items-center gap-3 justify-center py-2 bg-slate-50 rounded-xl border border-slate-200/60">
                <Globe size={15} className="text-[#2258FF]" />
                <span className="w-6 h-0.5 bg-slate-200 relative">
                  <span className="absolute inset-0 bg-[#2258FF] w-2/3 animate-pulse"></span>
                </span>
                <Cpu size={15} className="text-[#2258FF]" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Scrolling Categories Marquee (Background #F5F4F0) */}
      <section className="py-12 bg-[#F5F4F0] overflow-hidden border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
            Explore our Digital Marketing Course Specializations
          </span>
        </div>
        
        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden select-none w-full gap-4">
          <div className="animate-marquee flex gap-4">
            {categoriesRow1.map((c, i) => {
              const style = pillStyles[i % pillStyles.length];
              return (
                <span
                  key={i}
                  style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                  className="px-5 py-2.5 border rounded-full font-bold text-xs transition-all hover:scale-105 cursor-default shadow-sm flex-shrink-0 whitespace-nowrap w-max"
                >
                  {c}
                </span>
              );
            })}
          </div>
          <div className="animate-marquee flex gap-4" aria-hidden="true">
            {categoriesRow1.map((c, i) => {
              const style = pillStyles[i % pillStyles.length];
              return (
                <span
                  key={`dup-${i}`}
                  style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                  className="px-5 py-2.5 border rounded-full font-bold text-xs transition-all hover:scale-105 cursor-default shadow-sm flex-shrink-0 whitespace-nowrap w-max"
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolling Right (Opposite Direction) */}
        <div className="flex overflow-hidden select-none w-full gap-4 mt-6">
          <div className="animate-marquee-reverse flex gap-4">
            {categoriesRow2.map((c, i) => {
              const style = pillStyles[i % pillStyles.length];
              return (
                <span
                  key={i}
                  style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                  className="px-5 py-2.5 border rounded-full font-bold text-xs transition-all hover:scale-105 cursor-default shadow-sm flex-shrink-0 whitespace-nowrap w-max"
                >
                  {c}
                </span>
              );
            })}
          </div>
          <div className="animate-marquee-reverse flex gap-4" aria-hidden="true">
            {categoriesRow2.map((c, i) => {
              const style = pillStyles[i % pillStyles.length];
              return (
                <span
                  key={`dup2-${i}`}
                  style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                  className="px-5 py-2.5 border rounded-full font-bold text-xs transition-all hover:scale-105 cursor-default shadow-sm flex-shrink-0 whitespace-nowrap w-max"
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section (Background #F5F4F0) */}
      <section className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-line-grid opacity-25 pointer-events-none z-0"></div>
        {/* Diagonally placed Activity watermark cropped out */}
        <DecorativeIcon Icon={Activity} size="w-[28rem] h-[28rem]" position="absolute -left-20 -bottom-20" opacity="opacity-[0.03]" rotation="-rotate-12" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest block mb-3 font-mono">
              Our Methodology
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight font-sans">
              Syllabus Design & Support Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((p, i) => (
              <div
                key={i}
                className="premium-bento-card p-8 rounded-[24px] flex flex-col justify-between bg-white/80 animate-float-1"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2258FF]/10 flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
                <span className="text-xs text-[#2258FF] font-bold mt-6 inline-flex items-center gap-1 cursor-pointer font-mono">
                  Explore Mode
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Student Review Spotlight (Background #F5F4F0) */}
      <section className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-y border-slate-200/60">
        {/* Subtle dot-grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none z-0"></div>
        {/* Floating MessageSquare icon partially visible behind layout */}
        <DecorativeIcon Icon={MessageSquare} size="w-[32rem] h-[32rem]" position="absolute right-10 top-1/2 -translate-y-1/2" opacity="opacity-[0.03]" rotation="rotate-6" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Side Quote Card */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6 inline-block font-mono">
                STUDENTS REVIEWS / TESTIMONIALS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6 font-sans">
                Real Outcomes. <br/>
                Real Transformations.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md font-sans">
                Hear directly from our graduates who have launched careers, grown businesses, and secured international remote contracts.
              </p>
              <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm w-full">
                <MessageSquare className="text-[#2258FF]" size={24} />
                <div>
                  <strong className="text-slate-900 text-sm block">4.9 / 5.0 Rating</strong>
                  <span className="text-xs text-slate-500 font-sans">Based on 300+ graduate submissions</span>
                </div>
              </div>
            </div>

            {/* Right Side Testimonials Grid */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-bento-card rounded-2xl p-6.5 bg-white/90"
              >
                <div className="flex gap-1 text-yellow-500 mb-3">
                  <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-4">
                  "The AI tools integration completely changed how I write copy and do keyword research. I secured my first freelance gig before ending the Masterclass!"
                </blockquote>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs">
                  <strong className="text-slate-900">Tunde Olanrewaju</strong>
                  <span className="text-slate-500 font-medium">Digital Marketing Graduate</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-bento-card rounded-2xl p-6.5 bg-white/90"
              >
                <div className="flex gap-1 text-yellow-500 mb-3">
                  <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-4">
                  "Oko David is a brilliant mentor. The hands-on sessions made building SEO funnels easy. Highly recommend Chyweb Academy!"
                </blockquote>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs">
                  <strong className="text-slate-900">Chioma Nkem</strong>
                  <span className="text-slate-500 font-medium">Business Owner & Designer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-bento-card rounded-2xl p-6.5 bg-white/90"
              >
                <div className="flex gap-1 text-yellow-555 mb-3">
                  <Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" />
                </div>
                <blockquote className="text-slate-700 text-sm leading-relaxed mb-4">
                  "Excellent training structure. Setting up live Meta Ads and Google Ads campaigns during classes gave me the confidence to work with international clients."
                </blockquote>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3 text-xs">
                  <strong className="text-slate-900">Ibrahim Audu</strong>
                  <span className="text-slate-500 font-medium">Freelance Consultant</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Modules (Curriculum Grid - Background #F5F4F0) */}
      <section id="modules" className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-line-grid opacity-20 pointer-events-none z-0"></div>
        {/* Large BookOpen watermark behind the title, offset for readability */}
        <DecorativeIcon Icon={BookOpen} size="w-[24rem] h-[24rem]" position="absolute top-12 left-1/2 -translate-x-[60%]" opacity="opacity-[0.025]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest text-center block mb-3 font-mono">
            Syllabus Grid
          </span>
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16 tracking-tight leading-tight font-sans">
            Explore our Digital Marketing Course Modules
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="premium-bento-card rounded-[20px] p-8 hover:border-[#2258FF]/30 transition-all bg-white/80"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest font-mono">{m.num}</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-0.5 rounded-full border border-slate-200">
                    You will learn:
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">{m.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500">
                  {m.topics.map((t, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#2258FF]">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Speed Step Flow (Recreated Actionable Workspace: Background #1A202C) */}
      <section className="py-24 bg-[#1A202C] relative overflow-hidden z-10 text-white rounded-[32px] my-16 mx-6 shadow-2xl border border-slate-800">
        {/* Subtle grid line and dot overlay */}
        <div className="absolute inset-0 bg-line-grid opacity-10 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none z-0"></div>
        {/* Dual glowing blur orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#2258FF]/15 rounded-full blur-[70px] pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[70px] pointer-events-none z-0"></div>
        {/* Giant Cpu watermark offset in the background */}
        <DecorativeIcon Icon={Cpu} size="w-[30rem] h-[30rem]" position="absolute top-1/2 -right-24 -translate-y-1/2" opacity="opacity-[0.02]" color="text-white" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest block mb-3 font-mono">
              Actionable Workspaces
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Interactive Execution Panels
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              Test out our learning workspace environment by adjusting settings below in real time.
            </p>
          </div>

          {/* Step 1: Interactive Program Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            
            {/* Step Panel Visual (Left) */}
            <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-[24px] p-8 shadow-2xl text-white">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <h4 className="text-sm font-bold text-slate-200">Interactive Workspace Configuration</h4>
                <span className="text-[10px] font-mono text-[#2258FF] animate-pulse">● Simulator Live</span>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 font-mono">1. Choose Specialization Track</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-200 py-3 px-4 rounded-xl text-xs font-bold focus:outline-none focus:border-[#2258FF]"
                  >
                    <option value="Digital Marketing Masterclass">Digital Marketing Masterclass (₦150k)</option>
                    <option value="SEO Training Programme">SEO Training Programme (₦100k)</option>
                    <option value="Paid Advertising Training">Paid Advertising Training (₦80k)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 font-mono">2. Choose Delivery Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Online Cohort", "Hybrid Mode"].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setSelectedMode(mode)}
                        className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                          selectedMode === mode
                            ? "bg-[#2258FF]/15 border-[#2258FF] text-[#2258FF]"
                            : "bg-slate-950 border-slate-800 text-slate-400"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-mono">Calculated Price</span>
                    <strong className="text-white text-base">
                      {selectedCourse === "Digital Marketing Masterclass" ? "₦150,000" : selectedCourse === "SEO Training Programme" ? "₦100,000" : "₦80,000"}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase font-mono">Access Mode</span>
                    <strong className="text-[#2258FF] text-xs font-bold">{selectedMode}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Content (Right) */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-[#2258FF] font-mono block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2258FF] to-indigo-400">STEP 01 / CHOOSE YOUR PROGRAM</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Choose Your Program in Minutes</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Select your preferred specialization track, set your timeline goals, and join the active learning space. Your workspace is configured automatically with direct references to live domains.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2258FF]" />
                  <span>Choose from 5 high-income tracks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-[#2258FF]" />
                  <span>Access all workspace syllabus documents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Animated SVG Campaign Chart Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Step Content (Left) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="text-xs font-bold text-[#2258FF] font-mono block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2258FF] to-indigo-400">STEP 02 / LAUNCH CAMPAIGNS</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Launch & Review Actual Ad Channels</h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Every marketing strategy is executed live. Configure Meta Ads budgets, design landing pages, and analyze click statistics. Oko David reviews your submissions directly to approve or provide recommendations.
              </p>
              <div className="grid grid-cols-3 gap-4 bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Live Clicks</span>
                  <strong className="text-white text-sm font-black">{conversionClicks.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Leads Secured</span>
                  <strong className="text-green-400 text-sm font-black">+{conversionLeads}</strong>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Return (ROI)</span>
                  <strong className="text-[#2258FF] text-sm font-black">{roiFactor}x</strong>
                </div>
              </div>
            </div>

            {/* Step Panel Visual (Right) */}
            <div className="lg:col-span-6 order-1 lg:order-2 bg-slate-950 border border-slate-800 rounded-[24px] p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-300">Live Campaign Optimizer</span>
                <span className="text-[9px] bg-green-500/10 text-green-400 py-0.5 px-2.5 rounded font-mono border border-green-500/20">Active Ads</span>
              </div>
              
              {/* Animated SVG Sparkline Chart */}
              <div className="h-32 w-full relative mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2258FF" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#2258FF" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Fill Area */}
                  <path
                    d="M0,30 L0,22 Q15,8 30,18 T60,5 T90,12 T100,6 L100,30 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Stroke line */}
                  <motion.path
                    d="M0,22 Q15,8 30,18 T60,5 T90,12 T100,6"
                    fill="none"
                    stroke="#2258FF"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                  
                  {/* Pulsing indicator dot */}
                  <circle cx="100" cy="6" r="1.5" fill="#2258FF">
                    <animate attributeName="r" values="1.5;2.5;1.5" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="flex justify-between items-center border-t border-slate-800/80 pt-4 text-xs">
                <span className="text-slate-500 font-medium font-mono">CTR: +5.2% Avg.</span>
                <span className="text-slate-350 font-bold flex items-center gap-1"><TrendingUp size={12} className="text-green-400" /> Outperforming Benchmark</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Students Choose Chyweb Academy (Background #F5F4F0) */}
      <section className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-t border-slate-200/60">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none z-0"></div>
        {/* ShieldCheck watermark centered vertically and offset to the right */}
        <DecorativeIcon Icon={ShieldCheck} size="w-[30rem] h-[30rem]" position="absolute -right-24 top-1/4" opacity="opacity-[0.03]" rotation="-rotate-12" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest block mb-2 font-mono">
                Why Students Choose Chyweb Academy
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight font-sans">
                Industry-Focused Digital Marketing Training in Nigeria
              </h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-4 font-sans">
                Chyweb Academy provides industry-focused digital marketing training in Nigeria designed to help learners gain practical experience and develop in-demand digital skills.
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-6 font-sans">
                Our training programme combines practical learning, real business projects, mentorship, and modern AI tools to prepare students for employment, freelancing, entrepreneurship, and business growth.
              </p>
              <p className="text-slate-655 text-sm md:text-base leading-relaxed font-sans">
                Whether you are starting from scratch or improving existing skills, our digital marketing course equips you with practical knowledge to succeed.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/70 border border-slate-200 p-10 flex flex-col gap-6 shadow-xl rounded-[28px]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2258FF]/10 flex items-center justify-center text-[#2258FF]">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">100% Practical</h4>
                  <span className="text-[11px] text-slate-500">Launch actual campaigns</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2258FF]/10 flex items-center justify-center text-[#2258FF]">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">AI Integrations</h4>
                  <span className="text-[11px] text-slate-500">Supercharge your workflows</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2258FF]/10 flex items-center justify-center text-[#2258FF]">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">Cohort Mentorship</h4>
                  <span className="text-[11px] text-slate-500">Feedback from Oko David</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trainer Section (Background #F5F4F0) */}
      <section className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-t border-slate-200/60">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none z-0"></div>
        {/* Briefcase watermark behind the bio text */}
        <DecorativeIcon Icon={Briefcase} size="w-80 h-80" position="absolute left-1/4 top-1/4" opacity="opacity-[0.025]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16 tracking-tight leading-tight font-sans">
            Meet Your Trainer
          </h2>

          <div className="premium-bento-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center bg-white/70">
            <div className="w-48 h-48 rounded-full border-4 border-[#2258FF]/30 flex-shrink-0 overflow-hidden shadow-md">
              <img src="/oko-david.jpg" alt="Oko David" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2258FF] uppercase tracking-widest block mb-2 font-mono">Lead Instructor</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Oko David</h3>
              <p className="text-slate-655 text-sm md:text-base leading-relaxed mb-4">
                Hi, I'm Oko David, a Digital marketing & SEO expert, with over 7 years of hands-on experience helping businesses improve their online visibility, generate qualified leads, and achieve sustainable growth through proven digital marketing strategies.
              </p>
              <p className="text-slate-655 text-sm md:text-base leading-relaxed mb-4">
                Over the years, I have trained students, entrepreneurs, business owners, freelancers, and professionals across Nigeria, equipping them with practical, job-ready skills in SEO, Google Ads, Social Media Marketing, Content Marketing, AI-powered marketing, and other essential digital marketing disciplines. My training combines hands-on projects, real-world case studies, and modern AI tools to ensure learners gain practical experience they can apply immediately.
              </p>
              <p className="text-slate-655 text-sm md:text-base leading-relaxed">
                Whether your goal is to start a career in digital marketing, grow your business, secure remote opportunities, or become a successful freelancer, I am committed to helping you succeed through practical mentorship, industry best practices, and continuous support. My mission at Chyweb Academy is to empower Nigerians with in-demand digital skills that create lasting career and business opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Bento Cards Tracks (Background #F5F4F0) */}
      <section id="pricing" className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-t border-slate-200/60">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-line-grid opacity-25 pointer-events-none z-0"></div>
        {/* Large BarChart2 watermark centered behind pricing cards */}
        <DecorativeIcon Icon={BarChart2} size="w-[38rem] h-[38rem]" position="absolute left-1/2 -translate-x-1/2 top-[40%]" opacity="opacity-[0.025]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-16 tracking-tight leading-tight font-sans">
            Our Digital Marketing Training Pricing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((pkg, idx) => (
              <div
                key={idx}
                className={`premium-bento-card p-8 flex flex-col justify-between bg-white relative ${
                  pkg.isFeatured ? "border-[#2258FF] border-2 shadow-xl" : ""
                }`}
              >
                {pkg.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2258FF] text-[10px] font-bold uppercase text-white tracking-widest font-mono">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.title}</h3>
                  <div className="text-slate-500 text-[11px] mb-6 font-mono">{pkg.duration} • {pkg.mode}</div>
                  
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">{pkg.desc}</p>
                  
                  <div className="text-3xl font-black text-slate-900 mb-6">
                    {pkg.price}
                  </div>
                  
                  <ul className="flex flex-col gap-3 text-xs text-slate-500 mb-8 border-t border-slate-200 pt-6">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-[#2258FF] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/enroll"
                  className={`w-full text-center py-3 rounded-xl font-bold text-xs transition-all ${
                    pkg.isFeatured
                      ? "bg-[#2258FF] hover:bg-[#1040e6] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Table Detail Matrix */}
          <div className="mt-16 overflow-x-auto rounded-2xl border border-slate-250 shadow-lg backdrop-blur-md bg-white/70">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Programme</th>
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Course Syllabus</th>
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Duration</th>
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Learning Mode</th>
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Certification</th>
                  <th className="p-6 text-slate-600 font-bold text-xs uppercase tracking-wider font-mono">Price (NGN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 text-slate-900 font-bold">Digital Marketing Masterclass</td>
                  <td className="p-6 text-slate-600 text-sm">SEO, Social Media Marketing, Google Ads, Content Marketing, Email Marketing, AI Marketing, Analytics</td>
                  <td className="p-6 text-slate-655 text-sm">10 Weeks</td>
                  <td className="p-6 text-slate-655 text-sm">Online</td>
                  <td className="p-6 text-slate-655 text-sm">Included</td>
                  <td className="p-6 text-[#2258FF] font-extrabold text-lg">₦150,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 text-slate-900 font-bold">SEO Training Programme</td>
                  <td className="p-6 text-slate-600 text-sm">Keyword Research, On-Page SEO, Technical SEO, Local SEO, Content SEO, AI SEO Tools</td>
                  <td className="p-6 text-slate-655 text-sm">5 Weeks</td>
                  <td className="p-6 text-slate-655 text-sm">Online</td>
                  <td className="p-6 text-slate-655 text-sm">Included</td>
                  <td className="p-6 text-[#2258FF] font-extrabold text-lg">₦100,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 text-slate-900 font-bold">Paid Advertising Training (Google & Meta Ads)</td>
                  <td className="p-6 text-slate-600 text-sm">Google Ads, Facebook Ads, Campaign Setup, Conversion Tracking, Optimization</td>
                  <td className="p-6 text-slate-655 text-sm">4 Weeks</td>
                  <td className="p-6 text-slate-655 text-sm">Online / Hybrid</td>
                  <td className="p-6 text-slate-655 text-sm">Included</td>
                  <td className="p-6 text-[#2258FF] font-extrabold text-lg">₦80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accordion FAQs (Background #F5F4F0) */}
      <section className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-t border-slate-200/60">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none z-0"></div>
        {/* HelpCircle watermark subtly behind the accordion area */}
        <DecorativeIcon Icon={HelpCircle} size="w-[26rem] h-[26rem]" position="absolute left-10 bottom-10" opacity="opacity-[0.03]" rotation="-rotate-12" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight font-sans">
              Frequently Asked Questions About Digital Marketing Training in Nigeria
            </h2>
            
            {/* Tab switch wrapper */}
            <div className="inline-flex bg-slate-200 border border-slate-300 p-1.5 rounded-full mt-4">
              <button
                onClick={() => { setActiveFaqTab("general"); setOpenFaqIndex(null); }}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFaqTab === "general" ? "bg-[#2258FF] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                General FAQs
              </button>
              <button
                onClick={() => { setActiveFaqTab("curriculum"); setOpenFaqIndex(null); }}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFaqTab === "curriculum" ? "bg-[#2258FF] text-white shadow-sm" : "text-slate-400 hover:text-white"
                }`}
              >
                Curriculum
              </button>
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="flex flex-col gap-4">
            {faqs[activeFaqTab].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#2258FF] text-lg font-bold">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA (Background #F5F4F0) */}
      <section id="enroll" className="py-24 bg-[#F5F4F0] relative overflow-hidden z-10 border-t border-slate-200/60">
        {/* Subtle grid line */}
        <div className="absolute inset-0 bg-line-grid opacity-20 pointer-events-none z-0"></div>
        {/* Large Zap watermark in the bottom corner */}
        <DecorativeIcon Icon={Zap} size="w-96 h-96" position="absolute -right-16 -bottom-16" opacity="opacity-[0.03]" rotation="rotate-45" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="rounded-[32px] border border-slate-250 bg-white/90 backdrop-blur-md p-12 md:p-16 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#2258FF]/10 to-transparent blur-[50px] pointer-events-none"></div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 relative z-10 font-sans">Ready to Start Your Digital Marketing Journey?</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto relative z-10 font-sans">
              Join Chyweb Academy and build practical skills in Digital Marketing, SEO, and Paid Advertising through hands-on learning and real-world projects.
            </p>
            <a
              href="https://wa.me/2349067623555"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold shadow-[0_8px_24px_rgba(34,88,255,0.3)] hover:-translate-y-0.5 transition-all relative z-10"
            >
              Chat on WhatsApp to Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Recreated Lower Split Screen Layouts */}
      <section className="py-24 bg-[#F5F4F0] relative z-10 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#1A202C] border border-slate-800 rounded-[28px] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2258FF]/15 to-transparent blur-[50px] pointer-events-none"></div>
            <div>
              <h3 className="text-2xl font-extrabold mb-4 font-sans text-white">Become a Certified Digital Marketing Professional</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Chyweb Academy provides industry-focused digital marketing training in Nigeria designed to help learners gain practical experience and develop in-demand digital skills.
              </p>
            </div>
            <Link
              href="/enroll"
              className="px-6 py-3.5 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-sm text-center shadow-md w-fit transition-all hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>

          <div className="bg-[#EAEBE0] border border-slate-300 rounded-[28px] p-10 md:p-12 text-slate-900 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff882a]/15 to-transparent blur-[50px] pointer-events-none"></div>
            <div>
              <h3 className="text-2xl font-extrabold mb-4 font-sans text-slate-900">Need custom team training?</h3>
              <p className="text-slate-655 text-sm leading-relaxed mb-8 max-w-sm">
                Prepare your employees or client services group with custom enterprise courses, prompt modules, and SEO audits.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#FF882A] hover:bg-[#e07722] text-white font-bold text-sm text-center shadow-md w-fit transition-all hover:-translate-y-0.5"
            >
              Inquire Corporate Plan
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
