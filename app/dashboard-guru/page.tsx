"use client";
import { motion } from 'framer-motion';
import { useAuth } from '../../store/useAuth';
import { useRouter } from 'next/navigation';
import { Users, BookOpen, QrCode, MessageSquareText } from 'lucide-react';

export default function DashboardGuru() {
  const user = useAuth(state => state.user);
  const router = useRouter();

  if (!user) { router.push('/'); return null; }

  const classes = ["7A", "7B", "8A"]; // Ini nantinya difetch dari API

  return (
    <div className="p-6 pb-24 min-h-screen">
      <header className="mb-8 mt-4">
        <h1 className="font-poppins text-2xl font-bold">Halo, {user.nama} 👋</h1>
        <p className="text-gray-400 text-sm">Mari kelola kelasmu hari ini.</p>
      </header>

      {/* AI Assistant Quick Banner */}
      <motion.div whileHover={{ scale: 1.02 }} onClick={() => router.push('/ai-chat')}
        className="w-full bg-gradient-to-r from-accent to-primary rounded-2xl p-5 mb-8 shadow-lg shadow-primary/20 flex items-center justify-between cursor-pointer"
      >
        <div>
          <h3 className="font-bold font-poppins text-lg">Tanya BashAI</h3>
          <p className="text-sm opacity-90">Buat modul, soal, & ide ajar</p>
        </div>
        <MessageSquareText size={32} />
      </motion.div>

      <h2 className="font-poppins font-bold text-xl mb-4">Kelas Aktif</h2>
      <div className="grid grid-cols-2 gap-4">
        {classes.map((kls, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            key={kls} onClick={() => router.push(`/kelas/${kls}`)}
            className="glass-card flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-xl">{kls}</h3>
            <p className="text-xs text-gray-400">30 Siswa</p>
          </motion.div>
        ))}
      </div>

      {/* Floating Scanner Button */}
      <div className="fixed bottom-6 right-0 left-0 flex justify-center max-w-md mx-auto">
        <button onClick={() => router.push('/scanner')} className="bg-dark border border-white/10 shadow-2xl flex items-center gap-2 px-6 py-4 rounded-full font-bold text-accent hover:bg-gray-800 transition-all">
          <QrCode size={24} /> Scanner Absensi
        </button>
      </div>
    </div>
  );
}
