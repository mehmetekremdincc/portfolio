"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Layout, Globe, Sparkles } from "lucide-react";

const projects = [
    {
        title: "Web Tasarım Ankara",
        bgTitle: "ANKARA",
        description: "Yüksek trafikli kurumsal yapılar için optimize edilmiş, uçtan uca mimari ve SEO mühendisliği.",
        category: "Full-stack",
        tech: ["Next.js", "PostgreSQL", "Prisma", "SEO"],
        link: "https://www.webtasarimankarada.com/",
        color: "from-blue-600/30",
    },
    {
        title: "Parotya",
        bgTitle: "PAROTYA",
        description: "Global ölçekli dijital varlık yönetimi için geliştirilmiş, dinamik içerik altyapılı modern platform.",
        category: "Full-stack",
        tech: ["React", "Node.js", "TypeScript", "REST API"],
        link: "https://www.parotya.com/",
        color: "from-purple-600/30",
    },
    {
        title: "Maya Proje",
        bgTitle: "MAYA",
        description: "Mimari ve mühendislik vizyonunu yansıtan, performans odaklı ve yüksek etkileşimli arayüz tasarımı.",
        category: "Frontend",
        tech: ["Tailwind CSS", "Headless CMS", "Framer Motion"],
        link: "https://www.mayaproje.com.tr/",
        color: "from-emerald-600/30",
    },
    {
        title: "KRC Catering",
        bgTitle: "CATERING",
        description: "Kullanıcı deneyimi (UX) öncelikli, modern tasarım prensipleriyle geliştirilmiş dijital showroom.",
        category: "Frontend",
        tech: ["Next.js", "UI Kit", "Cloudinary", "RWD"],
        link: "https://www.krccatering.com.tr/",
        color: "from-orange-600/30",
    },
];

const categories = ["Tümü", "Frontend", "Full-stack"];

export default function ProjectsShowcase() {
    const [active, setActive] = useState("Tümü");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const filteredProjects = projects.filter((p) =>
        active === "Tümü" ? true : p.category === active
    );

    return (
        <section id="projeler" className="relative py-32 bg-background overflow-hidden">
            {/* ARKA PLAN HAYALET YAZI */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
                <AnimatePresence>
                    {hoveredIndex !== null && filteredProjects[hoveredIndex] && (
                        <motion.h1
                            key={filteredProjects[hoveredIndex].bgTitle}
                            initial={{ opacity: 0, scale: 0.8, y: 100 }}
                            animate={{ opacity: 0.08, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.2, y: -100 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="text-[20vw] font-black tracking-tighter text-foreground/5 absolute whitespace-nowrap"
                        >
                            {filteredProjects[hoveredIndex].bgTitle}
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header & Filter */}
                <div className="flex flex-col gap-12 mb-20">
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-primary font-bold tracking-widest text-xs mb-4 uppercase">
                            <Sparkles size={14} /> Seçili Çalışmalar
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                            Dijitalde <span className="text-muted-foreground">İz Bırakan</span> Mühendislik.
                        </h2>
                    </div>

                    {/* FİLTRE BUTONLARI */}
                    <div className="flex flex-wrap p-2 gap-2 bg-secondary/40 backdrop-blur-2xl rounded-3xl border border-border/50 w-fit mx-auto lg:mx-0 shadow-2xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActive(cat);
                                    setHoveredIndex(null); // Kategori değiştiğinde index hatasını önlemek için
                                }}
                                className={`relative px-9 py-4 text-sm font-bold transition-all rounded-2xl group overflow-hidden
                                    ${active === cat
                                        ? "text-primary-foreground shadow-lg"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {active === cat && (
                                    <motion.div
                                        layoutId="activeTabHighlight"
                                        className="absolute inset-0 bg-primary rounded-2xl"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid gap-12 md:grid-cols-2">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block h-full rounded-[3rem] overflow-hidden transition-all duration-1000
                                        border border-border/40 bg-card/90 backdrop-blur-xl
                                        shadow-2xl hover:shadow-[0_0_100px_-20px_rgba(59,130,246,0.2)] hover:border-primary/40
                                        hover:translate-y-[-12px]"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-1000`} />
                                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('/noise.png')] pointer-events-none" />

                                    <div className="relative z-10 p-12 flex flex-col h-full min-h-[460px]">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="flex gap-5">
                                                <motion.div
                                                    animate={{ rotate: [0, 12, -8, 0] }}
                                                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                                    className="w-14 h-14 rounded-3xl bg-background/70 border border-border/60 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-primary/30 transition-all duration-700"
                                                >
                                                    {project.category === "Full-stack" ? <Code2 size={24} className="text-primary" /> : <Layout size={24} className="text-primary" />}
                                                </motion.div>
                                                <div className="w-14 h-14 rounded-3xl bg-background/70 border border-border/60 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-700">
                                                    <Globe size={24} className="text-primary" />
                                                </div>
                                            </div>
                                            <motion.div
                                                whileHover={{ scale: 1.2, rotate: 90 }}
                                                className="w-14 h-14 rounded-full border-2 border-border/60 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:border-primary group-hover:shadow-primary/50 transition-all duration-700"
                                            >
                                                <ArrowUpRight size={28} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                                            </motion.div>
                                        </div>

                                        <div className="mt-auto space-y-6">
                                            <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase block opacity-80">
                                                {project.category}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-700">
                                                {project.title}
                                            </h3>
                                            <p className="text-foreground/70 text-base md:text-lg max-w-md leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-700">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 pt-4">
                                                {project.tech.map((t, i) => (
                                                    <span
                                                        key={t}
                                                        className="text-[10px] font-bold px-5 py-2.5 rounded-full bg-background/80 border border-border/50 backdrop-blur-sm shadow-sm group-hover:border-primary/50 transition-all duration-500"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}