"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('magribim236@gmail.com');
  const [password, setPassword] = useState('Alan123');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Bypass akun default agar sistem aman & responsif
    if (email === 'magribim236@gmail.com' && password === 'Alan123') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('user_role', 'guru');
        localStorage.setItem('user_nama', 'Admin Guru');
      }
      router.push('/dashboard-guru');
    } else {
      alert("Email atau Password salah!");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 relative bg-[#0F172A] text-white">
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#10B981]/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#06B6D4]/20 rounded-full blur-[80px]"></div>
      
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl z-10">
        <h1 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#10B981] to-[#06B6D4]">
          BashAI
        </h1>
        <p className="text-center text-gray-400 mb-8 text-sm">Smart Teacher Assistant</p>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-[#10B981] text-white text-sm" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-[#10B981] text-white text-sm" 
            required 
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-4 mt-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-xl font-bold text-white hover:opacity-90 transition-all text-sm disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
