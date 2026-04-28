/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  TrendingUp, 
  FileText,
  Mail,
  ArrowRight,
  Globe,
  Wallet,
  Settings,
  ShieldCheck,
  Zap,
  ExternalLink
} from "lucide-react";

/**
 * STRATEGIC PORTFOLIO DATA
 * Targeted at: BizOps, PM, Strategic Partnerships, Finance
 */

const EXPERIENCE = [
  {
    role: "Senior Associate",
    company: "PwC Indonesia",
    period: "May 2023 – Jan 2026",
    description: "Appointed Senior-in-Charge ahead of schedule. Led high-stakes financial audits and advisory for IDX-listed conglomerates.",
    impact: [
      "Led consolidation testing across 60+ entities at parent and subsidiary levels for major industrial groups.",
      "Managed audit lifecycles for major subsidiaries in coal mining and water logistics as Senior-in-Charge.",
      "Developed Excel automation tools reducing reconciliation turnaround by 85% (from 2 weeks to 2 days).",
      "Contributed to IPO readiness by preparing pro forma financial reports for major subsidiary spin-offs."
    ],
    tags: ["Audit Leadership", "IDX Reporting", "Process Automation"]
  }
];

const WHY_HIRE_ME = [
  { title: "Proven in High-Stakes Environments", description: "Experience managing complex audits and multi-entity consolidations for publicly listed companies." },
  { title: "Finance Foundation + Automation", description: "Chartered-track accounting background combined with the ability to engineer custom data automation tools." },
  { title: "Cross-Border Adaptability", description: "Bilingual (English/Indonesian) with a professional footprint across Indonesia and Taiwan." },
  { title: "Execution-First Mindset", description: "Track record of delivering critical regulatory reporting under intense deadlines and resource constraints." }
];

const EDUCATION = [
  {
    school: "National Taiwan University of Science and Technology",
    degree: "Master of Science in Finance",
    period: "Sept 2025 – Feb 2028 (Expected)",
    location: "Taipei, Taiwan"
  },
  {
    school: "Airlangga University",
    degree: "Bachelor of Accounting",
    period: "2019 – 2023",
    status: "GPA: 3.96 / 4.00",
    achievements: [
      "1st Place – Satya Wacana National Accounting Competition (2022)",
      "1st Place – UNNES Accounting Competition (2021)"
    ]
  }
];

const PROJECTS = [
  {
    title: "SplitBill Pro",
    type: "OCR FINANCIAL SETTLEMENT ENGINE",
    description: "Engineered an OCR-driven financial settlement tool to solve multi-currency social debt tracking and friction.",
    metric: "85% Workflow Optimization",
    tags: ["Product Strategy", "OCR", "FinOps"],
    link: "https://kennkeitarotw.github.io/SplitBill/",
    icon: Wallet
  },
  {
    title: "FinanceEN",
    type: "TAIWAN FINANCE LOCALIZATION PLATFORM",
    description: "Localized financial literacy platform for Taiwan's international community, bridging 400+ critical terms.",
    metric: "420+ Terms Localized",
    tags: ["Global Strategy", "Localization", "FinEd"],
    link: "https://kennkeitarotw.github.io/FinanceMiniProject/",
    icon: Globe
  }
];

const STRATEGIC_STRENGTHS = [
  { label: "Financial Operations", description: "Audit, process optimization, and multi-entity consolidation for IDX-listed groups." },
  { label: "Product Strategy", description: "Translating complex financial user friction into technical requirements and OCR-driven solutions." },
  { label: "Project Execution", description: "Leading audit engagements and technical builds under tight regulatory deadlines." },
  { label: "AI Workflows", description: "Implementing LLM and Vision API solutions to automate legacy manual bottlenecks." },
  { label: "Intl BizDev", description: "Bridging Indonesia-Taiwan cross-border operations and community localization." }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col elegant-border selection:bg-emerald-500 selection:text-black font-sans technical-grid">
      
      {/* Header / Nav */}
      <header className="flex items-center justify-between px-5 md:px-12 py-4 md:py-6 border-b border-white/5 sticky top-0 bg-[#050505]/95 backdrop-blur-xl z-50">
        <div className="flex flex-col">
          <h1 className="text-base md:text-lg font-bold tracking-tight text-white uppercase italic tracking-tighter">Kenn Keitaro</h1>
          <div className="flex items-center gap-2 mt-0.5">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] md:text-[9px] text-zinc-500 font-mono uppercase tracking-[0.2em]">Summer 2026 Internship Candidate</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-10 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
          <a href="https://www.linkedin.com/in/kenn-keitaro/" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
        </nav>
        <div className="flex gap-4">
          <a 
            href="https://drive.google.com/drive/folders/1NXgp4MAg5mev95a51oDVRz6jblDDDVPe?usp=drive_link" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 md:px-6 py-2 bg-white text-black rounded-none text-[9px] font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-emerald-500/20 transition-all active:scale-95 no-underline"
          >
            <FileText size={10} /> <span className="hidden sm:inline">Download</span> Resume
          </a>
        </div>
      </header>

      <main className="flex-1 text-[#E5E5E5]">
        {/* Recruitment-Optimized Hero */}
        <section className="px-5 md:px-12 py-12 md:py-24 border-b border-white/5">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl leading-[1.1] md:leading-[1.05]">
                Ex-PwC Senior Associate. <br className="hidden md:block" />
                <span className="text-zinc-600 italic">Summer 2026 Internship Candidate.</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                <div>
                  <p className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5 font-mono">Current Candidate</p>
                  <p className="text-white text-xs md:text-sm">M.S. in Finance @ NTUST (Feb 2028 Expected)</p>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5 font-mono">Core Experience</p>
                  <p className="text-white text-xs md:text-sm">Ex-PwC Senior Associate / Audit Lead</p>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5 font-mono">Specialization</p>
                  <p className="text-white text-xs md:text-sm">Financial Ops & Workflow Engineering</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Snapshot / Recruiter Cheat Sheet */}
        <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5">
          <div className="snapshot-card bg-zinc-950/40">
            <p className="text-[8px] md:text-[9px] text-emerald-500 uppercase font-black tracking-widest mb-1 font-mono">PwC TRACK RECORD</p>
            <p className="text-lg md:text-2xl font-bold text-white tracking-tighter">Sr. Associate</p>
            <p className="text-[9px] md:text-[10px] text-zinc-500 mt-1 italic leading-tight">Audit lead for IDX-listed groups</p>
          </div>
          <div className="snapshot-card border-l border-white/5 bg-zinc-950/40">
            <p className="text-[8px] md:text-[9px] text-emerald-500 uppercase font-black tracking-widest mb-1 font-mono">FINANCIAL SCALE</p>
            <p className="text-lg md:text-2xl font-bold text-white tracking-tighter">60+ Entities</p>
            <p className="text-[9px] md:text-[10px] text-zinc-500 mt-1 italic leading-tight">Complex consolidation testing</p>
          </div>
          <div className="snapshot-card border-t md:border-t-0 md:border-l lg:border-l border-white/5 bg-zinc-950/40">
            <p className="text-[8px] md:text-[9px] text-emerald-500 uppercase font-black tracking-widest mb-1 font-mono">PROCESS IMPACT</p>
            <p className="text-lg md:text-2xl font-bold text-white tracking-tighter">85% Reduction</p>
            <p className="text-[9px] md:text-[10px] text-zinc-500 mt-1 italic leading-tight">Manual workflow automation</p>
          </div>
          <div className="snapshot-card border-t border-l md:border-t-0 border-white/5 bg-zinc-950/40">
            <p className="text-[8px] md:text-[9px] text-emerald-500 uppercase font-black tracking-widest mb-1 font-mono">ACADEMIC STANDING</p>
            <p className="text-lg md:text-2xl font-bold text-white tracking-tighter">1st Place</p>
            <p className="text-[9px] md:text-[10px] text-zinc-500 mt-1 italic leading-tight">National Competition Award</p>
          </div>
        </section>

        {/* Why Hire Me: Explicit Value Prop */}
        <section className="px-5 md:px-12 py-12 md:py-20 border-b border-white/5 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[9px] md:text-xs font-black text-zinc-500 uppercase tracking-[.4em] mb-10 leading-relaxed text-center md:text-left">Recruiter Fast-Fact / Value Proposition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_HIRE_ME.map((item, idx) => (
                <div key={idx} className="border-l border-emerald-500/30 pl-6 h-full">
                  <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Primary Track: Work Experience */}
        <section id="experience" className="px-6 md:px-12 py-12 md:py-16 border-b border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs font-black text-white uppercase tracking-[.4em]">Section 01 / Commercial Professional Experience</h2>
            <FileText size={14} className="text-zinc-800" />
          </div>

          <div className="space-y-16">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-10 opacity-90">
                <div className="lg:col-span-4 border-l border-emerald-500 pl-6 py-2">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{job.company}</h3>
                  <p className="text-emerald-500 font-bold text-sm tracking-tight mb-4">{job.role}</p>
                  <p className="text-zinc-600 text-[10px] font-mono tracking-widest mb-4">{job.period}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {job.tags.map(t => <span key={t} className="text-[8px] uppercase tracking-widest text-zinc-600 bg-white/5 border border-white/10 px-2 py-0.5">{t}</span>)}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-zinc-400 mb-8 text-lg font-light leading-relaxed max-w-2xl">{job.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {job.impact.map((point, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-1.5 h-1.5 rounded-none bg-emerald-500 mt-1.5 group-hover:scale-150 transition-transform" />
                        <span className="text-sm text-zinc-300 leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Execution: Business Case Studies */}
        <section id="projects" className="px-6 md:px-12 py-12 md:py-16 border-b border-white/5">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-xs font-black text-white uppercase tracking-[.4em] mb-3 font-mono text-zinc-500 italic font-mono">Section 02 / Strategic Implementations</h2>
              <p className="text-zinc-600 text-xs">Technical proof supporting the finance track record.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all p-6 md:p-10 relative overflow-hidden no-underline"
              >
                <div className="flex justify-between items-start mb-6 md:mb-10">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-emerald-500">
                    <p.icon size={24} />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{p.metric}</p>
                    <p className="text-[9px] text-zinc-600 font-mono uppercase mt-1 tracking-widest">{p.type}</p>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors uppercase italic tracking-tighter">{p.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-sm">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {p.tags.map(tag => <span key={tag} className="text-[9px] uppercase font-bold tracking-widest text-zinc-600 group-hover:text-emerald-500 transition-colors">{tag}</span>)}
                </div>
                
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <ArrowRight size={20} className="text-emerald-400" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Global Strategy & Academic Credentials */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-b border-white/5">
          <div className="lg:col-span-4 p-8 md:p-12 border-b md:border-r md:border-b-0 border-white/5 bg-[#080808]">
             <h2 className="text-xs font-black text-white uppercase tracking-[.4em] mb-8">Academic Credentials</h2>
             <div className="space-y-10">
              {EDUCATION.map((edu, idx) => (
                <div key={idx}>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-2 font-mono">{edu.period}</p>
                  <h4 className="text-white font-bold leading-tight mb-1">{edu.school}</h4>
                  <p className="text-zinc-400 text-sm italic">{edu.degree}</p>
                  {edu.status && <p className="text-emerald-500 text-[10px] font-bold mt-2 uppercase">{edu.status}</p>}
                  {edu.achievements && (
                    <div className="mt-4 flex flex-col gap-2">
                      {edu.achievements.map((a, i) => (
                        <div key={i} className="text-[10px] text-zinc-500 flex gap-2">
                         <span className="text-emerald-500">/</span> {a}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
             </div>
          </div>
          
          <div className="lg:col-span-8 p-8 md:p-12 h-full text-left">
            <h2 className="text-xs font-black text-white uppercase tracking-[.4em] mb-8">Functional Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {STRATEGIC_STRENGTHS.map((s, i) => (
                <div key={i} className="group">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 mb-4 group-hover:border-emerald-500 transition-colors">
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500">0{i+1}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-3">{s.label}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strong CTA: Hiring Intention */}
        <section id="contact" className="px-5 md:px-12 py-12 md:py-20 bg-white text-black">
          <div className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[.6em] mb-6 opacity-40 italic">Section 03 / Recruitment Contact</p>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-10 uppercase italic">
              Available for <br />
              Summer 2026 <br />
              <span className="text-emerald-600">Internships.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 mb-16 border-t border-black/5 pt-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3 font-mono">01 / Email</p>
                <a href="mailto:kennkeitaro25@gmail.com" className="text-lg md:text-2xl font-bold hover:text-emerald-600 transition-colors no-underline block truncate">
                  kennkeitaro25@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3 font-mono">02 / Network</p>
                <a href="https://www.linkedin.com/in/kenn-keitaro/" target="_blank" rel="noreferrer" className="text-lg md:text-2xl font-bold hover:text-emerald-600 transition-colors no-underline block italic underline underline-offset-4 decoration-emerald-500/30">
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3 font-mono">03 / Regional Advantage</p>
                <p className="text-lg md:text-2xl font-bold leading-tight">
                  Taiwan ↔ Indonesia <br />
                  <span className="text-zinc-400 text-[10px] md:text-xs font-medium uppercase tracking-wider">Cross-Border Operations</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="mailto:kennkeitarotw@gmail.com" 
                className="group flex items-center justify-between gap-12 px-10 py-6 bg-black text-white text-xs font-black uppercase tracking-[.3em] overflow-hidden relative no-underline active:scale-95 transition-all"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <Mail size={16} /> Contact Me
                </div>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-3 transition-transform" />
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kenn-keitaro/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 px-10 py-6 border-2 border-black text-black text-xs font-black uppercase tracking-[.3em] hover:bg-black hover:text-white transition-all no-underline active:scale-95"
              >
                <Linkedin size={16} /> LinkedIn Profile
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1NXgp4MAg5mev95a51oDVRz6jblDDDVPe?usp=drive_link" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-10 py-6 border-2 border-black/10 text-black/40 text-xs font-black uppercase tracking-[.3em] hover:border-black hover:text-black transition-all no-underline active:scale-95"
              >
                <FileText size={16} /> Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-12 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="text-center md:text-left text-[10px] font-mono tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Kenn Keitaro.</p>
        </div>
        <div className="flex gap-8">
           <a href="mailto:kennkeitaro25@gmail.com" className="hover:text-white transition-colors"><Mail size={16} /></a>
           <a href="https://www.linkedin.com/in/kenn-keitaro/" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
        </div>
      </footer>
    </div>
  );
}
