import React from 'react';
import { 
  Sparkles, 
  Search, 
  Zap, 
  FileText, 
  Layout, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

function Service() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-in">
            <Cpu size={14} /> AI-Powered Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
            Smart Features for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              High-Octane Careers
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            We’ve engineered ResumeAI to handle the heavy lifting of job applications. 
            From neural-driven content generation to ATS-proof schemas.
          </p>
        </div>
      </section>

      {/* 2. BENTO SERVICES GRID */}
      <section className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Content */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Sparkles size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Neural Content Engine</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Our AI synthesizes professional bullet points from your raw data, 
                optimizing for high-impact action verbs and metrics.
              </p>
            </div>
          </div>

          {/* Card 2: ATS Tech */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">ATS-Vulnerability Guard</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                100% machine-readable formatting. We ensure your resume structure 
                survives every Applicant Tracking System on the market.
              </p>
            </div>
          </div>

          {/* Card 3: Real-time */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Sync Engine</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Zero-latency live preview. What you build in our editor is 
                rendered pixel-perfectly in real-time.
              </p>
            </div>
          </div>

          {/* Card 4: Layouts */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Layout size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Executive Layouts</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Battle-tested minimalist templates designed by recruiters. 
                Focus on your skills, not the margins.
              </p>
            </div>
          </div>

          {/* Card 5: PDF Export */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vector PDF Export</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                High-fidelity exports that preserve hyperlinks and metadata 
                across all digital and print platforms.
              </p>
            </div>
          </div>

          {/* Card 6: Student Focus */}
          <div className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Incubator</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                Specialized modules for hackathons, open-source, and academic 
                achievements to bridge the experience gap.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TECH STACK MARQUEE */}
      <section className="py-20 bg-slate-950/50 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-blue-500 text-center uppercase tracking-[0.5em] mb-12">
            The Core Infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40">
             <span className="font-black text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">SPRING BOOT 3</span>
             <span className="font-black text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">REACT 18</span>
             <span className="font-black text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">GPT-4o</span>
             <span className="font-black text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">TAILWIND</span>
             <span className="font-black text-2xl tracking-tighter hover:opacity-100 transition-opacity cursor-default">POSTGRE-SQL</span>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(29,78,216,0.3)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 tracking-tighter">
            Zero Formatting. <br />
            Total Performance.
          </h2>
          <p className="text-blue-100/80 mb-12 text-lg md:text-xl font-medium max-w-xl mx-auto relative z-10 leading-relaxed">
            Stop fighting with Microsoft Word. Join the elite students 
            dominating the interview cycle today.
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl relative z-10">
            Initialize Builder <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>
        </div>
      </section>

    </div>
  );
}

export default Service;