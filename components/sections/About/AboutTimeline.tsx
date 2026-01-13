"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ... (experiences verisi aynı kalıyor, buraya yapıştırmıyorum kalabalık olmasın)

export default function UltraExperience() {
    // Mobilde tıklanan kartı takip etmek için state
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-700 overflow-hidden">

            {/* HOVER OVERLAY - Sadece Desktop'ta veya aktif kartta gözükür */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.14 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(circle at center, ${experiences[activeIndex].color}55, transparent 70%)`,
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-32">

                {/* TITLE */}
                <div className="mb-20 md:mb-32 relative">
                    <h2 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-neutral-200 dark:text-neutral-800 absolute -top-5 md:top-[-40px] left-0 -z-10 select-none opacity-50">
                        History
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold">
                        Kariyer <br />
                        <span className="text-[var(--muted)] font-light italic text-3xl md:text-4xl">
                            Gelişim Süreci
                        </span>
                    </h3>
                </div>

                {/* TIMELINE */}
                <div className="flex flex-col border-t border-[var(--card-border)]">
                    {experiences.map((exp, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                // Desktop için hover, Mobil için click
                                onMouseEnter={() => setHoveredIndex(index)} // Not: setHoveredIndex yerine setActiveIndex kullanıyoruz
                                onMouseLeave={() => setActiveIndex(null)}
                                onClick={() => setActiveIndex(isActive ? null : index)}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative py-10 md:py-16 border-b border-[var(--card-border)] cursor-pointer"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-10">

                                    {/* LEFT: Başlık ve Özet */}
                                    <div className="flex items-start gap-4 md:gap-8">
                                        <span className="text-lg md:text-xl font-mono text-[var(--muted)] pt-1">
                                            {exp.id}
                                        </span>
                                        <div>
                                            <h4 className={`text-3xl md:text-6xl font-bold uppercase tracking-tighter transition-all duration-500 ${isActive ? "translate-x-3 text-blue-500" : ""}`}>
                                                {exp.title}
                                            </h4>
                                            <p className="text-xs md:text-sm tracking-widest text-[var(--muted)] mt-2">
                                                {exp.company} / {exp.period}
                                            </p>
                                            <p className="mt-4 text-[var(--muted)] max-w-xl text-sm md:text-base">
                                                {exp.summary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* RIGHT: Detay Panel (Framer Motion ile Expand Edilebilir Yapıldı) */}
                                    <AnimatePresence>
                                        {(isActive) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "circOut" }}
                                                className="overflow-hidden lg:max-w-md"
                                            >
                                                <div className="pt-4 lg:pt-0">
                                                    <h5 className="font-bold mb-3 text-sm md:text-base">
                                                        Neler Yaptım?
                                                    </h5>
                                                    <ul className="space-y-2 text-xs md:text-sm text-[var(--muted)]">
                                                        {exp.details.map((d, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="text-blue-500">•</span>
                                                                {d}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex flex-wrap gap-2 mt-6">
                                                        {exp.stack.map((s) => (
                                                            <span
                                                                key={s}
                                                                className="text-[9px] md:text-[10px] px-2 py-1 font-bold bg-[var(--foreground)] text-[var(--background)]"
                                                            >
                                                                {s}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* HOVER / ACTIVE BACKGROUND BAR */}
                                <motion.div
                                    className="absolute inset-0 -z-10 origin-left bg-[var(--card-bg)] opacity-10 md:opacity-100"
                                    style={{ backgroundColor: `${exp.color}11` }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}