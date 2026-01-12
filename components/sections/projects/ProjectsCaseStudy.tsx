"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
    ArrowUpRight, Target, Zap,
    Microscope, Code2, Rocket,
    ShieldCheck, Quote, MousePointer2
} from "lucide-react";

const steps = [
    {
        title: "Teşhis",
        icon: <Microscope className="w-6 h-6" />,
        description: "Kullanıcı davranışlarını veri odaklı analiz ederek, e-ticaret akışındaki darboğazları ve yüksek terk edilme oranına sahip sayfaları tespit ettim.",
        detail: "Veri Denetimi: %100",
    },
    {
        title: "Strateji",
        icon: <Target className="w-6 h-6" />,
        description: "Tespit edilen sorunlar için düşük gecikmeli, mobil öncelikli bir navigasyon yapısı ve sadeleştirilmiş üç aşamalı bir ödeme süreci kurguladım.",
        detail: "UX Mimari: v2.4",
    },
    {
        title: "Geliştirme",
        icon: <Code2 className="w-6 h-6" />,
        description: "Next.js 15 ve React Server Components kullanarak sunucu taraflı optimizasyon sağladım; TTI (Etkileşim Süresi) değerlerini minimize ettim.",
        detail: "Performans: 100/100",
    },
    {
        title: "Sonuç",
        icon: <Rocket className="w-6 h-6" />,
        description: "Lansman sonrası dönüşüm oranlarında %40'lık bir artış ve sayfa açılış hızlarında %65'lik bir performans iyileşmesi sağlandı.",
        detail: "Verimlilik: +%35",
    }
];

export default function ProjectsCaseStudy() {
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const backgroundGradient = useTransform(
        [springX, springY],
        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.25), transparent 80%)`
    );

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return <div className="min-h-screen bg-background" />;

    return (
        <section id="case-study" className="relative py-40 overflow-hidden bg-background transition-colors duration-500">
            {/* MOUSE GLOW */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 opacity-60 dark:opacity-30 transition-opacity duration-300"
                style={{ background: backgroundGradient }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-md shadow-sm mx-auto lg:mx-0">
                            <MousePointer2 size={14} className="text-primary animate-pulse" />
                            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-foreground">İnteraktif Vaka Analizi</span>
                        </div>
                        {/* Title: Mimarisi kelimesi biraz aşağı kaydırıldı (mt-4) */}
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase text-foreground">
                            Parotya <br />
                            <span className="text-muted-foreground/20 block mt-4">Mimarisi</span>
                        </h2>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        className="relative p-10 rounded-[2.5rem] bg-card border border-border max-w-xs shadow-2xl mx-auto lg:mx-0"
                    >
                        <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary opacity-20" />
                        <p className="relative z-10 text-base italic leading-relaxed text-foreground font-medium">
                            "Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır."
                        </p>
                        <div className="mt-6 text-[10px] font-black tracking-widest uppercase text-primary">— Steve Jobs</div>
                    </motion.div>
                </div>

                {/* 4 Step Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary via-primary/40 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-80 transition-all duration-700 blur-xl scale-95 group-hover:scale-110" />

                            <div className={`
                                relative h-full p-10 rounded-[2.5rem] border-2 border-border flex flex-col
                                transition-all duration-700 group-hover:border-primary group-hover:shadow-2xl group-hover:-translate-y-4
                                ${index === 0 ? 'bg-gradient-to-br from-purple-500/10 to-transparent dark:from-purple-900/20' : ''}
                                ${index === 1 ? 'bg-gradient-to-br from-blue-500/10 to-transparent dark:from-blue-900/20' : ''}
                                ${index === 2 ? 'bg-gradient-to-br from-emerald-500/10 to-transparent dark:from-emerald-900/20' : ''}
                                ${index === 3 ? 'bg-gradient-to-br from-amber-500/10 to-transparent dark:from-amber-900/20' : ''}
                            `}>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="p-5 rounded-3xl bg-foreground text-background transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-primary shadow-2xl">
                                        {step.icon}
                                    </div>
                                    <span className="text-6xl font-black text-muted/5 group-hover:text-primary/30 transition-all duration-700">
                                        0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-10 flex-grow font-medium">
                                    {step.description}
                                </p>
                                <div className="flex items-center gap-3 py-4 px-6 rounded-2xl bg-primary text-primary-foreground shadow-lg">
                                    <ShieldCheck size={20} className="animate-pulse" />
                                    <span className="text-xs font-black tracking-widest uppercase">
                                        {step.detail}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Action Bar */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="mt-20 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-background p-10 md:p-24 shadow-3xl border-2 border-primary/30"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[3rem]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="flex-1 space-y-6 md:space-y-8">
                            <h4 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none uppercase">
                                MİSYON <br /> <span className="opacity-70">TAMAMLANDI.</span>
                            </h4>
                            <p className="text-lg md:text-2xl opacity-80 font-medium max-w-lg italic">
                                Parotya e-ticaret altyapısı yayında ve her saniye değer üretiyor.
                            </p>
                        </div>
                        <a
                            href="https://www.parotya.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-6 px-12 py-6 md:px-16 md:py-8 rounded-full bg-background font-black tracking-[0.3em] uppercase text-xs md:text-sm transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50"
                            style={{ color: '#3B73EE' }} // Yazı rengi istediğin şekilde ayarlandı
                        >
                            PROJEYİ KEŞFET
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-all duration-500" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}