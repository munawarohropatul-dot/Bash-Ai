"use client";
import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

export default function Scanner() {
  const [result, setResult] = useState<string | null>(null);
  const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL;

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);
    
    scanner.render(async (decodedText) => {
      scanner.pause(true);
      setResult("Memproses...");
      
      try {
        const res = await axios.post(GAS_URL || '', {
          action: 'scan_qr',
          data: { student_id: decodedText, kelas_aktif: "7A" }
        });
        
        if(res.data.success) {
           setResult(res.data.message);
        } else {
           setResult(res.data.message);
        }
      } catch(e) { setResult("Gagal menghubungi server"); }
      
      setTimeout(() => { scanner.resume(); setResult(null); }, 3000);
    }, () => { /* ignore */ });

    return () => { scanner.clear().catch(error => console.error(error)); };
  }, [GAS_URL]);

  return (
    <div className="p-6 flex flex-col h-screen">
      <h1 className="font-poppins text-2xl font-bold mb-6 text-center">Scan QR Siswa</h1>
      <div className="glass-card overflow-hidden">
        <div id="reader" className="w-full bg-black rounded-xl"></div>
      </div>
      
      {result && (
        <div className={`mt-8 p-4 text-center rounded-xl font-bold text-lg ${result.includes("berhasil") ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-400'}`}>
          {result}
        </div>
      )}
    </div>
  );
}
