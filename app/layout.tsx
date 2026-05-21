import './globals.css';

export const metadata = {
  title: 'BashAI | Smart Teacher Assistant',
  description: 'Aplikasi kelas digital modern berbasis AI',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark text-light font-inter selection:bg-primary selection:text-white antialiased">
        <main className="min-h-screen w-full max-w-md mx-auto bg-[#131E3A] relative overflow-x-hidden shadow-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}
