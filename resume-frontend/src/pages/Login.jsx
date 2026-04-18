
import React from 'react'
import { useState } from 'react';
import { useAuth } from '../LOG&SIG/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/axios';
import toast from 'react-hot-toast';
function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    const {login} = useAuth();
    const navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");

        try{
          const response = await API.post("/api/v1/auth/login",{email,password});
          const userData = response.data;
          login(userData);
          toast.success("Login successful!");
          navigate("/generate-resume");
        } catch (err) {
          setError(  err.response?.data?.message || "Login Failed . Invalid email or password");
          toast.error("Login failed. Please check your credentials and try again.");
        } finally {
          setLoading(false);
        }
    }

  
 return (
  
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      {/* Background Glow Effect */}
       <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[150px] opacity-20 -top-20 -right-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-blue-900 rounded-full blur-[150px] opacity-20 -bottom-20 -left-20"></div>

      <div className="absolute w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 top-10 left-10"></div>
      <div className="absolute w-64 h-64 bg-blue-900 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

      <div className="relative w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Welcome <span className="text-blue-500">Back</span>
          </h1>
          <p className="text-gray-400 mt-2">Enter your details to access your resumes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email/Username Field */}
          <div>
            <label className="text-sm font-medium text-gray-300 ml-1 mb-2 block">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-2 ml-1">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <Link to={"/reset"} className="text-xs text-blue-500 hover:underline">Forgot?</Link>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 rounded-xl bg-black/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transform transition-all duration-300 active:scale-[0.98]"
          >
           {
            loading ? "Logging in..." : "Login"
           }
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-slate-900 text-gray-500 uppercase tracking-widest text-xs">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300">
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
          Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Don't have an account? 
          <a href="/signup" className="text-blue-500 font-semibold hover:text-blue-400 transition-colors ml-1">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}


export default Login
