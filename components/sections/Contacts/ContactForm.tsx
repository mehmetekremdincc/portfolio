"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Send, Terminal, Cpu, Zap, CheckCircle, ArrowRight, ShieldCheck, Globe, Activity } from "lucide-react";

export default function FinalBossContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // 3D Tilt & Parallax
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]));
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <section id="contact-form" className="relative py-40 bg-[var(--background)] overflow-hidden">
            {/* Arka Plan Hareketli Işıklar */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full animate-pulse delay-700" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => { x.set(0); y.set(0); }}
                    className="perspective-2000"
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative rounded-[3.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                    >
                        <div className="bg-[var(--background)]/90 rounded-[3.2rem] p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-stretch overflow-hidden relative">

                            {/* SOL PANEL: CANLI STATUS & BİLGİ */}
                            <div className="lg:col-span-5 flex flex-col justify-between space-y-12 relative z-20">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-3 w-3 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                        </div>
                                        <span className="font-mono text-xs tracking-widest text-emerald-500 uppercase">System.Status: Online</span>
                                    </div>

                                    <h2 className="text-6xl md:text-8xl font-black text-[var(--foreground)] tracking-tighter leading-[0.9]">
                                        HADİ <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">YAPALIM.</span>
                                    </h2>
                                    <p className="text-lg text-[var(--muted-foreground)] max-w-xs">
                                        Formu doldur, projeni dijital bir sanat eserine dönüştürelim.
                                    </p>
                                </div>

                                {/* Dinamik Veri Kartları */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <StatusSmallCard icon={<Globe className="w-4 h-4" />} label="LOKASYON" value="Ankara, TR" />
                                        <StatusSmallCard icon={<ShieldCheck className="w-4 h-4" />} label="GÜVENLİK" value="SSL Active" />
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                                        <div className="flex justify-between items-center text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                                            <span>İşlem Yükü</span>
                                            <Activity className="w-3 h-3 animate-bounce" />
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "65%" }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SAĞ PANEL: İNTERAKTİF FORM */}
                            <div className="lg:col-span-7 relative z-20 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-inner">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSuccess(true) }, 2000) }}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <ModernInput label="KİMSİN?" name="name" placeholder="Adın Soyadın" />
                                        <ModernInput label="E-POSTA" name="email" type="email" placeholder="ornek@mail.com" />
                                    </div>
                                    <ModernInput label="KONU" name="subject" placeholder="Proje Başlığı" />
                                    <ModernTextarea label="MESAJIN" name="message" placeholder="Buraya detayları yazabilirsin..." />

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(79, 70, 229, 0.4)" }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={loading || success}
                                        className="group relative w-full h-20 rounded-3xl overflow-hidden bg-[var(--foreground)] text-[var(--background)] font-black text-xl tracking-tighter transition-all"
                                    >
                                        <AnimatePresence mode="wait">
                                            {loading ? (
                                                <motion.div key="l" className="flex items-center justify-center gap-3">
                                                    <div className="w-6 h-6 border-4 border-[var(--background)]/30 border-t-[var(--background)] rounded-full animate-spin" />
                                                    <span>İŞLENİYOR...</span>
                                                </motion.div>
                                            ) : success ? (
                                                <motion.div key="s" initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-3 text-emerald-500">
                                                    <CheckCircle className="w-8 h-8" />
                                                    <span>MESAJINIZ ALINDI</span>
                                                </motion.div>
                                            ) : (
                                                <div className="flex items-center justify-center gap-4">
                                                    <span>PROJEYİ BAŞLAT</span>
                                                    <Zap className="w-5 h-5 fill-current transition-transform group-hover:scale-125 group-hover:rotate-12" />
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </form>
                            </div>

                            {/* Köşe Süslemeleri */}
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Terminal className="w-24 h-24 rotate-12" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ---------- UI BİLEŞENLERİ ---------- */

function StatusSmallCard({ icon, label, value }: any) {
    return (
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-indigo-400">
                {icon}
                <span className="text-[10px] font-black tracking-widest">{label}</span>
            </div>
            <p className="text-sm font-bold text-[var(--foreground)]">{value}</p>
        </div>
    );
}
/* ---------- GELİŞTİRİLMİŞ UI BİLEŞENLERİ ---------- */

function ModernInput({ label, name, type = "text", placeholder }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 tracking-[0.3em] ml-1 uppercase">
                {label}
            </label>
            <input
                required
                type={type}
                name={name}
                placeholder={placeholder}
                className="
          w-full h-16 rounded-2xl px-6 outline-none transition-all shadow-inner
          /* Light Mod Ayarları */
          bg-slate-100/50 border-slate-200 text-slate-900 placeholder:text-slate-400
          focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white
          /* Dark Mod Ayarları */
          dark:bg-[var(--background)] dark:border-white/10 dark:text-[var(--foreground)] dark:placeholder:text-white/10
          dark:focus:border-indigo-500 dark:focus:ring-indigo-500/50 dark:focus:bg-white/[0.05]
          border
        "
            />
        </div>
    );
}

function ModernTextarea({ label, name, placeholder }: any) {
    return (
        <div className="space-y-3">
            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 tracking-[0.3em] ml-1 uppercase">
                {label}
            </label>
            <textarea
                required
                name={name}
                rows={4}
                placeholder={placeholder}
                className="
          w-full rounded-[2rem] p-6 outline-none transition-all shadow-inner resize-none
          /* Light Mod Ayarları */
          bg-slate-100/50 border-slate-200 text-slate-900 placeholder:text-slate-400
          focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:bg-white
          /* Dark Mod Ayarları */
          dark:bg-[var(--background)] dark:border-white/10 dark:text-[var(--foreground)] dark:placeholder:text-white/10
          dark:focus:border-indigo-500 dark:focus:ring-indigo-500/50 dark:focus:bg-white/[0.05]
          border
        "
            />
        </div>
    );
}