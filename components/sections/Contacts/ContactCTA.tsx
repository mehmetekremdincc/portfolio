"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function ShowstopperFinalCTA() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Manyetik Etki ve Perspektif için Motion Valuelar
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            className="relative py-40 overflow-hidden bg-[var(--background)] transition-colors duration-500"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* 1. ARKA PLAN: AKAN YAZI (MARQUEE) */}
            <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-[20vw] font-black uppercase tracking-tighter"
                >
                    Hadi Başlayalım • Let's Work • Hadi Başlayalım • Let's Work •
                </motion.div>
            </div>

            {/* 2. DİNAMİK GLOW KATMANLARI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
                <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse delay-1000" />
            </div>

            {/* 3. ANA KART (3D PERSPEKTİF) */}
            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <motion.div
                    ref={containerRef}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative group rounded-[4rem] border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-3xl p-12 md:p-24 overflow-hidden shadow-2xl"
                >
                    {/* İçerik */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-indigo-500/40"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Geleceği İnşa Et</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
                            AKLINDA BİR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 italic">
                                FİKİR Mİ VAR?
                            </span>
                        </h2>

                        <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                            Bir mesaj her şeyi değiştirebilir. <br />
                            Gerisini birlikte şekillendirmek için sabırsızlanıyorum.
                        </p>

                        {/* ŞOV BUTONU (MANYETİK HİS) */}
                        <motion.div
                            style={{ x: useSpring(useTransform(x, [-0.5, 0.5], [-30, 30])), y: useSpring(useTransform(y, [-0.5, 0.5], [-30, 30])) }}
                            className="mt-8"
                        >
                            <a
                                href="#contact-form"
                                className="
                  group relative inline-flex items-center gap-4 rounded-full px-16 py-7 text-xl font-black tracking-tighter
                  bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-all 
                  hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)]
                "
                            >
                                HEMEN YAZALIM
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />

                                {/* Buton Glow (Hover) */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Süsleme: Grid Arka Planı (Sadece kart içinde) */}
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [bg-size:20px_20px] opacity-40" />
                </motion.div>
            </div>
        </section>
    );
}