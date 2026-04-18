
import API from '../api/axios';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {

  //name,email,inquiry,message

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [inquiry,setInquiry] = useState('');
  const [message,setMessage] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setError('');
    try{

      const response = await API.post('/api/v1/resume/inquiry',{name,email,inquiry,message});
      console.log(response.data);
      toast.success('Message sent successfully! We will get back to you soon.');

    }catch(err){
      setError('Something went wrong. Please try again later.');
      toast.error('Failed to send message. Please try again later.');

    }finally{
      setLoading(false);
      setName('');
      setEmail('');
      setInquiry('');
      setMessage('');
    }
  }



  return (
    <div className="min-h-screen bg-black text-slate-200 py-20 px-6 relative overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] -top-40 -left-20 animate-pulse"></div>
      <div className="absolute w-100 h-100 bg-blue-900/10 rounded-full blur-[100px] -bottom-20 -right-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Get in <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Touch</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Have a feature request, a bug to report, or just want to say hi? 
            We're building for the student community, and we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Info & Socials */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Reach Out
              </h3>
              
              <div className="space-y-10">
                {/* Email Card */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-slate-800 text-2xl group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                    📧
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-500 uppercase font-black tracking-[0.2em] mb-1">Email Us</p>
                    <p className="text-white text-lg font-bold group-hover:text-blue-400 transition-colors">support@resumeai.com</p>
                  </div>
                </div>

                {/* Support Card */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-slate-800 text-2xl group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                    💬
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-500 uppercase font-black tracking-[0.2em] mb-1">Live Chat</p>
                    <p className="text-white text-lg font-bold group-hover:text-blue-400 transition-colors">Available for Pro Users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xs font-black text-slate-600 uppercase tracking-[0.3em] mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  Github
                </a>
                <a href="#" className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="md:col-span-8">
            <div className="bg-slate-900/30 border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              
              <form 
              onSubmit={handleSubmit}
              className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    
                    <input
                      type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className="w-full p-4 rounded-2xl border border-slate-800 bg-black/50 text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all duration-300"
                      placeholder="e.g. Alex Rivera"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="w-full p-4 rounded-2xl border border-slate-800 bg-black/50 text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all duration-300"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">How can we help?</label>
                  <div className="relative">
                    <select 
                    value={inquiry}
                    onChange={(e)=>setInquiry(e.target.value)}
                    className="w-full p-4 rounded-2xl border border-slate-800 bg-black/50 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                      <option className="bg-slate-900">General Inquiry</option>
                      <option className="bg-slate-900">Technical Support</option>
                      <option className="bg-slate-900">Feature Suggestion</option>
                      <option className="bg-slate-900">Collaboration</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">Message Details</label>
                  <textarea
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    rows="4"
                    className="w-full p-5 rounded-2xl border border-slate-800 bg-black/50 text-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all resize-none duration-300"
                    placeholder="Tell us about your project or issue..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-lg transition-all active:scale-[0.98] shadow-2xl shadow-blue-900/40"
                >
                  <span>

                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="mt-32 border-t border-slate-900 pt-10 text-center">
          <p className="text-slate-700 text-[10px] tracking-[0.6em] uppercase font-black">
            ResumeBuilder AI • Excellence in Engineering
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;