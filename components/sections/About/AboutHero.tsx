"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden pt-32 lg:pt-0">
            {/* Arka Plan Hareketli Glowlar */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* SOL TARAF - İÇERİK */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1 text-center lg:text-left"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-block mb-4 text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400"
                    >
                        Hakkımda
                    </motion.span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
                        <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 dark:from-white dark:via-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                            Mehmet Ekrem
                        </span>
                        <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                            Dinç
                        </span>
                    </h1>

                    <p className="mt-8 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Bilgisayar Mühendisliği disipliniyle yetişmiş, dijital dünyada estetiği ve fonksiyonelliği en üst seviyede buluşturmayı hedefleyen bir
                        <span className="text-foreground font-semibold"> Full-Stack Developer</span>'ım.
                        Karmaşık mimarileri, akıcı animasyonlar ve yüksek performanslı kod bloklarıyla sanata dönüştürüyor; kullanıcı deneyimini her zaman merkezde tutarak ölçeklenebilir çözümler inşa ediyorum.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                        {["Computer Engineer", "Full-Stack Dev", "Front-End Dev"].map((item) => (
                            <motion.span
                                key={item}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-6 py-2.5 rounded-2xl text-xs md:text-sm font-bold bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-300 shadow-sm"
                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* SAĞ TARAF – FOTO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center"
                >
                    <div className="relative group">
                        <motion.div
                            whileHover={{ rotateX: 5, rotateY: -5 }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-[40px] overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl z-20"
                        >
                            <Image
                                src="/photos/Mehmet Ekrem Dinç.jpg"
                                alt="Mehmet Ekrem Dinç"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority
                            />
                        </motion.div>

                        {/* Foto Glow Efekti */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 90, 180, 270, 360]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}