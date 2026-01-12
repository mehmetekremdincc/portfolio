"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Cpu, Database, Star, Zap, Activity } from "lucide-react";

// Veri yapısı: Buraya istediğin kadar teknoloji ekleyebilirsin
const techData = [
    {
        id: "frontend",
        title: "Frontend Development",
        icon: <Code2 className="w-5 h-5" />,
        skills: [
            { name: "React", level: 75, color: "#61DAFB" },
            { name: "Next.js", level: 70, color: "#000000" }, // Dark modda beyaz görünecek şekilde ayarlı
            { name: "Tailwind CSS", level: 80, color: "#06B6D4" },
            { name: "TypeScript", level: 75, color: "#3178C6" },
            { name: "Bootstrap", level: 85, color: "#E10098" },
        ],
    },
    {
        id: "backend",
        title: "Backend & Systems",
        icon: <Terminal className="w-5 h-5" />,
        skills: [
            { name: "C# / .NET 8", level: 80, color: "#512BD4" },
            { name: "Java", level: 65, color: "#ED8B00" },
            { name: "Node.js", level: 70, color: "#339933" },
            { name: "RESTful API", level: 75, color: "#FF6C37" },
        ],
    },
    {
        id: "database",
        title: "Data & DevOps",
        icon: <Database className="w-5 h-5" />,
        skills: [
            { name: "PostgreSQL", level: 65, color: "#4169E1" },
            { name: "MSSQL", level: 70, color: "#CC2927" },
            { name: "Git / GitHub", level: 85, color: "#F05032" },
        ],
    },
];

export default function ProjectsTech() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative py-24 px-6 min-h-screen transition-colors duration-700 bg-white dark:bg-[#050505]">

            {/* 1. KATMAN: ARKA PLAN EFEKTLERİ (MODA GÖRE RENK DEĞİŞTİRİR) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* BAŞLIK: MODERN & AGRESİF */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono uppercase tracking-[0.3em] mb-6"
                    >
                        <Activity className="w-3 h-3 text-blue-500" /> System.Capabilities
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.8]">
                        TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">STACK</span>
                    </h2>
                </div>

                {/* ANA KONTROL PANELİ */}
                <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">

                    {/* SOL: KATEGORİ SEÇİCİ */}
                    <div className="flex flex-col gap-4">
                        {techData.map((tab, idx) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(idx)}
                                className={`group relative p-6 rounded-3xl transition-all duration-500 border-2 text-left ${activeTab === idx
                                    ? "bg-white dark:bg-white/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] translate-x-4"
                                    : "bg-slate-50 dark:bg-white/5 border-transparent hover:border-slate-200 dark:hover:border-white/10"
                                    }`}
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`p-3 rounded-2xl transition-colors ${activeTab === idx ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"}`}>
                                        {tab.icon}
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeTab === idx ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-zinc-500"}`}>
                                            {tab.title}
                                        </h3>
                                        <p className="text-xs font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity italic">View details_</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* SAĞ: İLERLEME BARLARI (ANALİZ PANELİ) */}
                    <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
                        {/* Dekoratif Grid Arkaplan */}
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [bg-size:20px_20px]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="relative z-10 space-y-10"
                            >
                                {techData[activeTab].skills.map((skill, i) => (
                                    <div key={skill.name} className="relative group">
                                        <div className="flex justify-between items-end mb-3">
                                            <div className="flex items-center gap-3">
                                                <Zap className="w-4 h-4 text-yellow-500" />
                                                <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="font-mono text-sm font-black text-blue-600 dark:text-blue-400">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* PROGRESS BAR: CUSTOM LABORATORY DESIGN */}
                                        <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden p-[3px] border border-slate-300 dark:border-white/10">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                                                style={{ backgroundColor: skill.color }}
                                                className="h-full rounded-full relative shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                                            >
                                                {/* Parlama efekti */}
                                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}

                                {/* ALT VERİ DETAYI */}
                                <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <StatBox label="Uptime" value="99.9%" color="text-green-500" />
                                    <StatBox label="Security" value="Verified" color="text-blue-500" />
                                    <StatBox label="Experience" value="Junior" color="text-purple-500" />
                                    <StatBox label="Status" value="Active" color="text-emerald-500" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* CUSTOM ANIMATION & STYLE */}
            <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </section>
    );
}

function StatBox({ label, value, color }) {
    return (
        <div className="flex flex-col">
            <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500 uppercase tracking-widest">{label}</span>
            <span className={`text-sm font-black ${color} tracking-tighter`}>{value}</span>
        </div>
    );
}