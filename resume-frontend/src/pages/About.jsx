import React from 'react'
import { Rocket, Cpu, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

function About() {
 return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 px-6 text-center bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-800 uppercase bg-blue-100 rounded-full">
            100% Free for Students
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            The Future of Job Applications is <span className="text-blue-600">AI-Powered</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ResumeAI is a minimalist resume builder designed to help students bypass 
            the stress of formatting and focus on what matters—landing the interview.
          </p>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY (The "Why") */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">The Power of Minimalism</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Most students think a resume needs to be "fancy" to get noticed. The truth? 
              Recruiters and <strong>ATS (Applicant Tracking Systems)</strong> prefer clean, 
              structured, and readable documents.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              We’ve stripped away the clutter to provide a single, high-performance template 
              that works for every industry—from software engineering to finance.
            </p>
            <ul className="space-y-4">
              {[
                "Optimized for 6-second recruiter reviews",
                "100% ATS-friendly layout",
                "Mobile-responsive design",
                "Standard professional fonts"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 font-medium text">
                  <CheckCircle className="text-blue-600 h-5 w-5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-3xl p-10 flex flex-col justify-center items-center text-center">
            <div className="bg-blue-600 p-4 rounded-2xl mb-4 shadow-lg shadow-blue-200">
              <Zap className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Zero Distractions</h3>
            <p className="text-sm text-black italic">"Focus on your story, let us handle the margins."</p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Input Details", desc: "Fill in your education, projects, and experience via our intuitive UI." },
              { step: "02", title: "AI Refinement", desc: "Our Spring Boot engine optimizes your language for maximum professional impact." },
              { step: "03", title: "Instant Export", desc: "Download your recruiter-ready PDF in seconds. No watermarks, no fees." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-slate-800 rounded-2xl border border-slate-700">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-slate-900">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK & CREATOR */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <div className="bg-blue-600 rounded-[2rem] p-12 text-white shadow-2xl">
          <Cpu className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-6">Engineering Your Success</h2>
          <p className="text-blue-50 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            ResumeAI is built for speed and security. We leverage <strong>React</strong> for a 
            seamless interface, <strong>Spring Boot</strong> for a secure backend, and 
            <strong>Tailwind CSS</strong> for modern styling. Built with ❤️ by developers 
            who believe great tools should be free for students.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
               'Spring Boot', 
               'TailwindCSS',
                'AI Logic'
              ].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-blue-700/50 rounded-lg border border-blue-400/30 text-sm font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Common Questions</h2>
        <div className="space-y-8">
          {[
            { q: "Why is it free?", a: "We're currently in our launch phase and want to support the student community first. No hidden fees, just a tool to help you succeed." },
            { q: "Will you add more templates?", a: "We believe in the 'Power of One.' Our current template is scientifically designed for high readability and ATS success." },
            { q: "Is my data secure?", a: "Absolutely. We use your data only to generate your resume. Your privacy is baked into our Spring Boot architecture." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-border pb-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" /> {faq.q}
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 px-6 bg-card text-center">
        <div className="max-w-2xl mx-auto border-2 border-blue-600 rounded-3xl p-12 bg-white shadow-xl">
          <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to build your career?</h2>
          <p className="text-slate-600 mb-8">Stop staring at a blank page. Let AI write your first draft today.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105">
            Create My Resume Now
          </button>
        </div>
      </section>

    </div>
  );
}

export default About;


