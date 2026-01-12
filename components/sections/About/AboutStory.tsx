"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
    return (
        <section className="relative py-24 overflow-hidden">

            {/* BASE BACKGROUND */}
            <div className="absolute inset-0 -z-20 bg-white dark:bg-neutral-950 transition-colors duration-500" />

            {/* GLOW / LIGHT LEAKS */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%]
          bg-blue-500/10 dark:bg-blue-600/5
          blur-[120px] rounded-full" />

                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%]
          bg-purple-500/10 dark:bg-purple-600/5
          blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* ANA METİN - MARKA VİZYONU */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-white/80 dark:bg-neutral-900/60
              backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60
              p-8 md:p-12 rounded-[2rem] shadow-xl"
                    >
                        <span className="inline-block px-3 py-1 rounded-full
              bg-blue-100 dark:bg-blue-500/10
              text-blue-600 dark:text-blue-400
              text-xs font-bold uppercase tracking-widest mb-6">
                            Vizyon ve Strateji
                        </span>

                        <h2 className="text-4xl md:text-6xl font-black
              text-neutral-900 dark:text-white
              leading-[1.1] tracking-tighter">
                            Herkes site kurar, <br />
                            <span className="text-neutral-400 dark:text-neutral-500">
                                biz dijital kimlik inşa ederiz.
                            </span>
                        </h2>

                        <p className="mt-8 text-lg md:text-xl
              text-neutral-600 dark:text-neutral-400
              leading-relaxed max-w-2xl font-medium">
                            Dijital dünyada var olmak sadece bir URL sahibi olmak değildir. Ben, markanızın karakterini
                            <span className="text-neutral-900 dark:text-white"> mühendislik disiplini ve estetikle </span>
                            yoğurarak, rakiplerinizden ayrışan, güven veren ve akılda kalan yüksek prestijli deneyimler kurguluyorum.
                        </p>
                    </motion.div>

                    {/* SAĞ KART - KATMA DEĞER */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-8 md:p-12 rounded-[2rem]
              bg-gradient-to-br from-blue-600 to-purple-600
              text-white shadow-2xl flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl
                flex items-center justify-center">
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight">Dijital <br />Prestij Yönetimi</h3>
                        </div>

                        <p className="mt-12 text-blue-100/90 font-medium text-sm leading-relaxed">
                            Sadece kod satırları değil; hız, güven ve modern tasarım algısıyla markanızın pazar değerini yukarı taşıyan bütüncül çözümler.
                        </p>
                    </motion.div>

                    {/* ALT SOL - MOTTO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-neutral-900 dark:bg-white
              text-white dark:text-black
              p-8 md:p-12 rounded-[2rem] shadow-xl"
                    >
                        <p className="text-2xl md:text-3xl font-bold italic leading-snug tracking-tight">
                            "Markanızın dijitaldeki gücü, en zayıf halkası kadardır."
                        </p>

                        <div className="mt-8 flex gap-2">
                            <div className="h-1 w-12 bg-blue-500" />
                            <div className="h-1 w-4 bg-blue-500/30" />
                        </div>
                    </motion.div>

                    {/* ALT SAĞ - EKOSİSTEM */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/80 dark:bg-neutral-900/60
              backdrop-blur-xl border border-neutral-200/60 dark:border-neutral-800/60
              p-8 md:p-12 rounded-[2rem]"
                    >
                        <p className="text-neutral-500 dark:text-neutral-400
              font-bold mb-6 uppercase text-xs tracking-widest">
                            Teknoloji & Strateji Seti
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Marka Konumlandırma",
                                "Performans Odaklı UI",
                                "Scalable Architecture",
                                "SEO Mühendisliği",
                                "User Psychology",
                                "Conversion Rate Opt.",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-5 py-2 rounded-xl
                    border border-neutral-200 dark:border-neutral-700
                    text-neutral-800 dark:text-neutral-200
                    font-semibold text-sm
                    hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600
                    transition-all duration-300 cursor-default shadow-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}