"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Mouse değerlerini eğime dönüştür
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth - 0.5);
      y.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const handleDownloadCV = () => {
    // CV dosya yolun: public/docs
    const link = document.createElement('a');
    link.href = '/public/docs/Mehmet Ekrem Dinç CV (2).pdf';
    link.download = 'Mehmet_Ekrem_Dinc_CV.pdf';
    link.click();
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-24 lg:pt-0">

      {/* --- ARKA PLAN ŞOVU --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[100px] dark:bg-blue-600/10"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-500/20 rounded-full blur-[120px] dark:bg-indigo-600/10"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20 lg:pb-0">

        {/* --- SOL TARAF: TİPOGRAFİK ALAN --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="hidden sm:block h-[2px] w-12 bg-blue-500" />
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-blue-500">
              Bilgisayar Mühendisi
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight lg:leading-none select-none">
            MEHMET EKREM <br />
            <span className="relative text-blue-600 dark:text-blue-500">
              DİNÇ
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Modern web teknolojileriyle; yüksek performanslı, ölçeklenebilir ve kullanıcı deneyimini merkeze alan dijital ürünler geliştiriyorum. Temiz kod, sürdürülebilir mimari ve detaylara verilen önemle projeleri fikir aşamasından yayına hazır hâle getiriyorum.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button
              onClick={handleDownloadCV}
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                CV_İNDİR.exe <span className="text-xs opacity-50 font-mono">↓</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <div className="text-xs font-mono opacity-50 text-center sm:text-left">
              // Location: Turkey <br />
              // Status: Open to Projects
            </div>
          </div>
        </motion.div>

        {/* --- SAĞ TARAF: RESPONSIVE TERMINAL --- */}
        <motion.div
          style={{
            rotateX: typeof window !== 'undefined' && window.innerWidth > 1024 ? rotateX : 0,
            rotateY: typeof window !== 'undefined' && window.innerWidth > 1024 ? rotateY : 0,
            transformStyle: "preserve-3d"
          }}
          className="relative perspective-1000 w-full max-w-lg mx-auto lg:max-w-none"
        >
          {/* Arka Parlama */}
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl translate-z-[-50px] blur-2xl" />

          <div className="relative bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl">

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-500/20 to-transparent" />
            </div>

            <div className="space-y-4 font-mono text-[13px] md:text-sm">
              <div className="flex gap-3">
                <span className="text-blue-500 font-bold">{">"}</span>
                <p className="text-slate-600 dark:text-slate-300">Sistem başlatılıyor...</p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4 py-2">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="text-[10px] uppercase opacity-50 mb-1">Frontend</div>
                  <div className="font-bold text-blue-500 uppercase">Next.js</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="text-[10px] uppercase opacity-50 mb-1">Backend</div>
                  <div className="font-bold text-purple-500 uppercase">Go / Node</div>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-white/5">
                <p className="text-[11px] text-emerald-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                  Veritabanı bağlantısı başarılı
                </p>
                <p className="text-[11px] text-slate-400 italic">// Temiz kod prensipleri yüklendi</p>
              </div>
            </div>
          </div>

          {/* Floating Kart (Mobilde gizlenebilir veya küçültülebilir) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-2 md:-right-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 z-20"
          >
            <div className="text-xl md:text-2xl font-black text-blue-600 tracking-tighter">100%</div>
            <div className="text-[8px] md:text-[9px] uppercase font-bold opacity-50">Çözüm Odaklı</div>
          </motion.div>
        </motion.div>

      </div>

      {/* --- ALT KISIM: SCROLL GÖSTERGESİ --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-40">Kaydır</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>

    </section>
  );
}