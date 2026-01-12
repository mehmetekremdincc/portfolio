"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
    {
        id: "01",
        title: "Front-End Developer",
        company: "Solution House",
        period: "2023 - 2025",
        summary: "Modern, hızlı ve ölçeklenebilir arayüzler geliştirdim.",
        details: [
            "Next.js App Router mimarisiyle SEO uyumlu yapılar kurdum",
            "Tailwind ile design system mantığında reusable component’ler geliştirdim",
            "Animasyon ve mikro etkileşimlerle kullanıcı deneyimini artırdım",
        ],
        stack: ["NEXT.JS", "TAILWIND", "GSAP"],
        color: "#3b82f6",
    },
    {
        id: "02",
        title: "Stajyer Öğrenci",
        company: "OdakGIS",
        period: "Haz 2022 - Eyl 2022",
        summary: "Coğrafi verilerle çalışan sistemler geliştirdim.",
        details: [
            "CBS tabanlı veri görselleştirme arayüzleri oluşturdum",
            "C# ile backend süreçlerine destek verdim",
            "SQL üzerinde veri sorgulama ve optimizasyon yaptım",
        ],
        stack: ["CSS3", "C#", "SQL"],
        color: "#a855f7",
    },
    {
        id: "03",
        title: "Bilgisayar Mühendisi",
        company: "Kırıkkale Üniversitesi",
        period: "Eğitim Süreci",
        summary: "Mühendislik temelli düşünme yetisi kazandım.",
        details: [
            "Algoritma ve veri yapıları üzerine yoğunlaştım",
            "Problem çözme ve sistematik düşünme becerisi geliştirdim",
            "Matematiksel temelli yazılım yaklaşımı edindim",
        ],
        stack: ["CS", "ALGORITHMS", "MATH"],
        color: "#10b981",
    },
];

export default function UltraExperience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-700 overflow-hidden">

            {/* HOVER OVERLAY (DARK / LIGHT UYUMLU) */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.14 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(circle at center, ${experiences[hoveredIndex].color}55, transparent 70%)`,
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10 max-w-[1400px] mx-auto px-10 py-32">

                {/* TITLE */}
                <div className="mb-32 relative">
                    <h2 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-neutral-200 dark:text-neutral-800 absolute -top-10 left-0 -z-10 select-none">
                        History
                    </h2>
                    <h3 className="text-5xl font-bold">
                        Kariyer <br />
                        <span className="text-[var(--muted)] font-light italic text-4xl">
                            Gelişim Süreci
                        </span>
                    </h3>
                </div>

                {/* TIMELINE */}
                <div className="flex flex-col border-t border-[var(--card-border)]">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative py-16 border-b border-[var(--card-border)]"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                                {/* LEFT */}
                                <div className="flex items-start gap-8">
                                    <span className="text-xl font-mono text-[var(--muted)]">
                                        {exp.id}
                                    </span>
                                    <div>
                                        <h4 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter transition-transform duration-500 group-hover:translate-x-3">
                                            {exp.title}
                                        </h4>
                                        <p className="text-sm tracking-widest text-[var(--muted)] mt-2">
                                            {exp.company} / {exp.period}
                                        </p>
                                        <p className="mt-4 text-[var(--muted)] max-w-xl">
                                            {exp.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT – DETAY PANEL */}
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-md">
                                    <h5 className="font-bold mb-3">
                                        Neler Yaptım?
                                    </h5>
                                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                                        {exp.details.map((d, i) => (
                                            <li key={i}>• {d}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {exp.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="text-[10px] px-2 py-1 font-bold bg-[var(--foreground)] text-[var(--background)]"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* HOVER BAR */}
                            <motion.div
                                className="absolute inset-0 -z-10 origin-left bg-[var(--card-bg)]"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
