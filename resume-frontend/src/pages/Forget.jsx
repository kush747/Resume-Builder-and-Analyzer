
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Forget() {


    const [showPassword,setShowPassword] = useState(false);

    const togglePassword=()=>{
        setShowPassword(!showPassword);
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
            Reset <span className="text-blue-500">Password</span>
          </h1>
          <p className="text-gray-400 mt-2">Enter your details to reset your password</p>
        </div>

        <form  className="space-y-6">
          {/* Email/Username Field */}
          <div>
            <label className="text-sm font-medium text-gray-300 ml-1 mb-2 block">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-4 rounded-xl bg-black/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-2 ml-1">
              <label className="text-sm font-medium text-gray-300">Password</label>
               <Link onClick={togglePassword} className="text-xs text-blue-500 hover:underline">show/hide</Link>
              
            </div>
            <input 
              id="password"
              type={showPassword? "text":"password"} 
            //   value={password}
            //   onChange={(e)=>setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 rounded-xl bg-black/50 border border-slate-700 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2 ml-1">
              <label className="text-sm font-medium text-gray-300">Confirm Password</label>
              
            </div>
            <input 
            id='password'
              type={showPassword? "text":"password"}
            //   value={password}
            //   onChange={(e)=>setPassword(e.target.value)}
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
          Reset Password
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}


export default Forget
