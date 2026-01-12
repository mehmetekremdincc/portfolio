"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiDotnet,
} from "react-icons/si";

import {
    DiDotnet,
    DiJava,
    DiMsqlServer,
} from "react-icons/di";

const techs = [
    { name: "HTML", icon: SiHtml5, level: "Advanced", color: "#e34f26" },
    { name: "CSS", icon: SiCss3, level: "Advanced", color: "#1572b6" },
    { name: "JavaScript", icon: SiJavascript, level: "Advanced", color: "#f7df1e" },
    { name: "React", icon: SiReact, level: "Advanced", color: "#61dafb" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", color: "#22d3ee" },
    { name: "TypeScript", icon: SiTypescript, level: "Intermediate", color: "#3178c6" },
    { name: "C#", icon: DiDotnet, level: "Intermediate", color: "#512bd4" },
    { name: ".NET", icon: SiDotnet, level: "Intermediate", color: "#512bd4" },
    { name: "Java", icon: DiJava, level: "Intermediate", color: "#f89820" },
    { name: "MSSQL", icon: DiMsqlServer, level: "Intermediate", color: "#cc2927" },
];

export default function AboutTechStack() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="relative py-28 overflow-hidden bg-[var(--background)] transition-colors duration-700">

            {/* BACKGROUND GRID */}
            <div className="absolute inset-0 smart-grid opacity-40 dark:opacity-30" />

            {/* SOFT GLOW */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-400/10 blur-[120px] rounded-full animate-pulse-slow" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-[var(--muted)] max-w-xl mx-auto">
                        Aktif olarak kullandığım ve projelerde derinlemesine deneyimlediğim teknolojiler
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {techs.map((tech, i) => {
                        const Icon = tech.icon;
                        const isHovered = hovered === i;

                        return (
                            <motion.div
                                key={tech.name}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* CARD */}
                                <div
                                    className="relative h-full rounded-2xl border backdrop-blur-xl p-6 flex flex-col items-center justify-center
                  bg-[var(--card-bg)] border-[var(--card-border)]
                  transition-all duration-500
                  hover:-translate-y-2 hover:shadow-2xl"
                                    style={{
                                        boxShadow: isHovered
                                            ? `0 20px 50px ${tech.color}40`
                                            : "none",
                                    }}
                                >
                                    {/* ICON */}
                                    <Icon
                                        size={48}
                                        className="mb-4 transition-transform duration-500 group-hover:scale-110"
                                        style={{ color: tech.color }}
                                    />

                                    {/* NAME */}
                                    <h3 className="font-semibold text-[var(--foreground)] mb-1">
                                        {tech.name}
                                    </h3>

                                    {/* LEVEL */}
                                    <span className="text-sm text-[var(--muted)]">
                                        {tech.level}
                                    </span>

                                    {/* HOVER GLOW */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at center, ${tech.color}33, transparent 70%)`,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
