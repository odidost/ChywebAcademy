"use client";

import Link from "next/link";
import { Check, Sparkles, Cpu, Zap, Code } from "lucide-react";
import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function AiProductivityPage() {
  const tools = [
    { name: "ChatGPT (OpenAI)", desc: "Master GPT-4o for document generation, scripting, strategy drafts, and deep data analysis workflows." },
    { name: "Claude (Anthropic)", desc: "Leverage Claude's massive context window for long-form copywriting, content edits, and codebase analyses." },
    { name: "Google Gemini", desc: "Integrate Google Workspace tasks, real-time web references, and multi-modal image/text generation." },
    { name: "Perplexity AI", desc: "Supercharge your online research, citation discovery, competitor audits, and resource finding." },
    { name: "Midjourney", desc: "Create high-fidelity graphic assets, interface concepts, stock photos, and branding mockups via text." },
    { name: "Cursor AI Editor", desc: "Master the AI-native code editor. Write, refactor, and debug React, HTML, and Python codebases 10x faster." },
  ];

  const modules = [
    { num: "Module 1", title: "Introduction to Generative AI & Ecosystems", desc: "Understand LLMs, context windows, parameters, and how to select the right AI model for content, research, or coding tasks." },
    { num: "Module 2", title: "Advanced Prompt Engineering Frameworks", desc: "Master prompt styling patterns: Role-playing, few-shot prompting, chain-of-thought logic, and prompt chaining for precise outputs." },
    { num: "Module 3", title: "AI Copywriting & Multi-format Content Workflows", desc: "Establish high-speed writing systems. Draft blogs, email sequences, landing pages, and pitch decks retaining a specific human voice." },
    { num: "Module 4", title: "Deep Market Research & Analysis with Perplexity", desc: "Automate technical audits, research whitepapers, synthesize competitors' data, and compile structured research reports with sources." },
    { num: "Module 5", title: "AI Image Assets & Visual Design with Midjourney", desc: "Learn visual prompt structures, aspect ratios, image weights, rendering engines, and scaling assets for client web work." },
    { num: "Module 6", title: "AI-Powered Coding & Web Prototyping with Cursor", desc: "Build layouts, code components, and configure scripts using AI editing suggestions. Write code with natural language inputs." },
    { num: "Module 7", title: "Workflow Automation & Zapier Integrations", desc: "Connect LLMs to Google Sheets, Gmail, Slack, and webhooks. Build automated lead qualification and auto-responder pathways." },
    { num: "Module 8", title: "AI in Business Operations & Client Pitching", desc: "Integrate AI workflows to write business proposals, structure agency services, automate invoicing schedules, and draft client contracts." },
    { num: "Module 9", title: "Ethics, Plagiarism, Security & Compliance", desc: "Protect client data. Understand copyright laws, data privacy, detecting AI content, and humanizing outputs for optimal SEO." },
    { num: "Module 10", title: "AI Project & Portfolio Presentation", desc: "Build, automate, and document a real business AI workflow system. Present it as a capstone portfolio to clients or employers." },
  ];

  const faqs = [
    { question: "1. Do I need a technical background to learn AI tools?", answer: "No. This course is designed to take non-technical students, marketers, writers, and business owners to advanced AI levels." },
    { question: "2. Are the premium subscriptions to ChatGPT/Claude required?", answer: "We will demonstrate using both free and premium versions. Free accounts are sufficient to learn, though premium is recommended for maximum value." },
    { question: "3. Will this course help me build apps?", answer: "Yes! In Module 6, we use Cursor AI to write functional HTML, CSS, and JS components to build simple functional web apps without manual coding." },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Sparkles} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              Generative AI & Productivity Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              AI Marketing & <br/>
              <span className="text-[#2258FF]">Productivity Course</span>
            </h1>
            <p className="text-slate-655 text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Supercharge your workflow. Master prompt engineering, generative copywriting, and code co-piloting to automate daily business tasks and work 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href="/enroll" className="px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_8px_24px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5">
                Join Next AI Cohort
              </Link>
              <Link href="#tools" className="px-8 py-4 rounded-xl bg-slate-200/60 border border-slate-355 text-slate-800 font-bold text-base hover:bg-slate-200/80 transition-all">
                Explore AI Tools
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-300 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>ChatGPT, Claude & Gemini Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Zapier Workflow Automations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Midjourney Graphic Prompts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Cursor AI Editor Boilerplate Coding</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered AI Widgets */}
          <div className="hidden lg:block lg:col-span-5 relative h-[450px]">
            {/* Base AI Chat Console Card */}
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
                <span className="text-[10px] text-slate-400 font-mono">claude-assistant-copilot</span>
              </div>
              <div className="flex-1 flex flex-col gap-3 justify-center">
                <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-[10px] text-slate-300 font-mono">
                  &gt; System prompt loaded.
                </div>
                <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-3 rounded-lg text-[10px] text-brand-emerald font-mono">
                  Writing optimized copy sequences... Done.
                </div>
              </div>
            </motion.div>

            {/* Floating Zapier Automation Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/10 border border-white/15 backdrop-blur-lg rounded-xl p-4 shadow-xl w-44 flex items-center gap-2"
            >
              <Zap size={18} className="text-brand-emerald" />
              <div>
                <span className="text-[9px] text-slate-300 font-bold block">Integrations</span>
                <span className="text-xs text-white font-bold">Workflow Active</span>
              </div>
            </motion.div>

            {/* Floating Model Parameters Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-6 left-4 bg-slate-900 border border-brand-gold/40 backdrop-blur-md rounded-xl p-4 shadow-2xl w-44 flex items-center gap-2"
            >
              <Code size={18} className="text-brand-gold" />
              <div>
                <span className="text-[9px] text-brand-gold font-bold block">Cursor AI</span>
                <span className="text-xs text-white font-bold">10x Coding Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Mastered */}
      <section id="tools" className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">AI Tools You Will Master</h2>
          <p className="text-center text-slate-600 max-w-xl mx-auto mb-12">Learn hands-on integration of industry-leading generative platforms into your daily professional tasks.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((t, idx) => (
              <div key={idx} className="premium-bento-card rounded-[20px] p-8">
                <div className="w-10 h-10 rounded-lg bg-brand-emerald/10 flex items-center justify-center text-brand-emerald mb-6 font-bold">
                  🤖
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative">
            Syllabus & Course Modules
            <span className="block w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="premium-bento-card rounded-[20px] p-8 hover:-translate-y-1 transition-all"
              >
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-2">{m.num}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Outcomes */}
      <section className="py-24 bg-transparent border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Career & Productivity Outcomes</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
            Adding AI skills to your resume immediately makes you a competitive candidate for remote roles, marketing positions, and copy editing tasks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">10x Speed Improvement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automate writing research, content drafts, formatting spreadsheets, and writing boilerplate scripts, turning days of tasks into minutes.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">AI Workflow Consultant</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Help local and international businesses audit their current task structures and build automated pipelines using customized LLM prompts.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">AI Content Strategist</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Create high-volume search-optimized blogs, scripts, newsletters, and visual copy without sacrificing human readability or brand voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions About AI Productivity Training" />

      {/* CTA Box */}
      <section id="enroll" className="py-24 bg-slate-50/50 backdrop-blur-sm text-center border-t border-slate-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-12 md:p-16 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Supercharge Your Work Output</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Master the exact prompts and tools that elite tech workers use to automate their productivity. Start scaling your output today.
            </p>
            <Link href="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all">
              Register for AI Course
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
