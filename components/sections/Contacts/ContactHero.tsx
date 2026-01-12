"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, Mail, MessageSquare, Sparkles } from "lucide-react";
import { useEffect } from "react";

export default function ContactHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Daha yumuşak hareket için Spring ekledik
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const glowX = useTransform(springX, [0, 1], ["30%", "70%"]);
    const glowY = useTransform(springY, [0, 1], ["30%", "70%"]);

    // Parallax etkisi için transformlar
    const rotateX = useTransform(springY, [0, 1], [10, -10]);
    const rotateY = useTransform(springX, [0, 1], [-10, 10]);

    return (
        <section
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                mouseX.set((e.clientX - rect.left) / rect.width);
                mouseY.set((e.clientY - rect.top) / rect.height);
            }}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-[var(--background)] transition-colors duration-500"
        >
            {/* 1. Dinamik Arka Plan Katmanı */}
            <div className="absolute inset-0 z-0">
                {/* Hareketli Ana Glow */}
                <motion.div
                    style={{ left: glowX, top: glowY }}
                    className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full 
          bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-purple-500/20 blur-[120px] will-change-transform"
                />

                {/* Sabit Dekoratif Glowlar */}
                <div className="absolute top-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

                {/* Modern Grid Yapısı */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* 2. İçerik Katmanı */}
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Üst Küçük Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-400 backdrop-blur-md"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Müsaitlik: Projeler için açık</span>
                    </motion.div>

                    {/* Ana Başlık - Reveal Efekti */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-[var(--foreground)]"
                    >
                        Birlikte <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Harika Bir Şey
                            </span>
                            {/* Metin altı shadow/glow efekti */}
                            <span className="absolute inset-x-0 bottom-2 -z-10 h-4 w-full bg-indigo-500/20 blur-lg" />
                        </span>
                        <br /> Yapalım
                    </motion.h1>

                    {/* Alt Metin */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mx-auto mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)]"
                    >
                        Dijital dünyada iz bırakacak, kullanıcı deneyimi yüksek ve modern
                        çözümler için doğru yerdesin.
                        <span className="text-[var(--foreground)] font-medium"> Kahveni al ve mesajını ilet.</span>
                    </motion.p>

                    {/* Aksiyon Butonları */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#contact-form"
                            className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-indigo-600 px-10 py-5 font-semibold text-white transition-all hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-500/25"
                        >
                            <MessageSquare className="h-5 w-5" />
                            Projeyi Başlat
                            <ArrowDownRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </a>

                        <a
                            href="mailto:mehmetekremdinc@gmail.com"
                            className="group flex items-center gap-3 rounded-2xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/5 px-10 py-5 font-semibold text-[var(--foreground)] backdrop-blur-md transition-all hover:bg-[var(--foreground)]/10 active:scale-95"
                        >
                            <Mail className="h-5 w-5" />
                            E-posta Gönder
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. Floating Elements (Dekoratif Objeler) */}
            <FloatingIcon delay={0} className="top-[20%] left-[10%] opacity-20" size={40} />
            <FloatingIcon delay={1} className="bottom-[20%] right-[10%] opacity-20" size={60} />
            <FloatingIcon delay={2} className="top-[60%] left-[15%] opacity-10" size={30} />
        </section>
    );
}

// Dekoratif uçan simgeler için yardımcı bileşen
function FloatingIcon({ className, delay, size }: { className: string; delay: number; size: number }) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
            className={`absolute hidden lg:block ${className}`}
        >
            <div
                style={{ width: size, height: size }}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
            />
        </motion.div>
    );
}