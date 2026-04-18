import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import API from '../api/axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router';

function SignUp() {


  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();


  const handleSignUp = async(e)=>{
      e.preventDefault();
      setLoading(true);
      setError("");

    try{

      const response = await API.post("/api/v1/auth/signup",{name,email,password});
      console.log(response.data)
      navigate("/login");
      toast.success("Account created successfully! Please login to continue.");
     

    }catch(err){
      toast.error("Failed to create account. Please try again.");
    }finally{
      setLoading(false);
    }

  }






 return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[150px] opacity-20 -top-20 -right-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-blue-900 rounded-full blur-[150px] opacity-20 -bottom-20 -left-20"></div>

      <div className="relative w-full max-w-lg bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Branding/Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white tracking-tight">
            Join the <span className="text-blue-500">Future</span>
          </h1>
          <p className="text-gray-400 mt-2 font-medium">Create your professional profile in seconds.</p>

          {
            error && <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
          }
        </div>
        

        <form 
        onSubmit={handleSignUp}
        className="space-y-5">
          {/* Username Field */}
          <div className="group">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1 mb-2 block group-focus-within:text-blue-500 transition-colors">
              Full Name
            </label>
            <input 
              name="username"
              type="text" 
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="John Doe"
              className="w-full p-4 rounded-2xl bg-black/40 border border-slate-800 text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all duration-300"
              required
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1 mb-2 block group-focus-within:text-blue-500 transition-colors">
              Email Address
            </label>
            <input 
              name="email"
              type="email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full p-4 rounded-2xl bg-black/40 border border-slate-800 text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-1 mb-2 block group-focus-within:text-blue-500 transition-colors">
              Password
            </label>
            <input 
              name="password"
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 rounded-2xl bg-black/40 border border-slate-800 text-white placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all duration-300"
              required
            />
          </div>

          {/* Terms (Optional but looks professional) */}
          <p className="text-[10px] text-gray-500 px-2">
            By signing up, you agree to our <span className="text-blue-500 cursor-pointer">Terms of Service</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
          </p>

          {/* Register Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-4 rounded-2xl shadow-xl shadow-blue-600/20 transform transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-4 bg-[#0f172a] text-gray-500 font-bold uppercase tracking-tighter">Already a member?</span>
          </div>
        </div>

        {/* Login Redirect */}
        <a 
          href="/login" 
          className="w-full flex items-center justify-center font-bold text-white py-4 rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all duration-300"
        >
          Sign In to Your Account
        </a>
      </div>
    </div>
  );
}

export default SignUp
