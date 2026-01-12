"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Project = {
    title: string;
    description: string;
    logo: string;
    url: string;
    tech: string[];
    accent: string; // marka rengi
};

const projects: Project[] = [
    {
        title: "Parotya",
        description: "E-ticaret odaklı, hızlı ve kullanıcı deneyimini ön planda tutan bir web projesi. Ürün yönetimi, performans optimizasyonu ve mobil alışveriş deneyimi üzerine çalışıldı.",
        logo: "/logos/parotya.png",
        url: "https://www.parotya.com/",
        tech: ["E-Ticaret", "UI/UX", "Performans", "SEO"],
        accent: "#3b82f6",
    },
    {
        title: "Maya Proje",
        description: "Mimarlık ve proje firması için sade, prestijli ve güven veren bir kurumsal web sitesi. Marka kimliğine uygun tasarım ve içerik yapısı oluşturuldu.",
        logo: "/logos/mayaproje-removebg-preview.png",
        url: "https://www.mayaproje.com.tr/",
        tech: ["Kurumsal Web", "UI/UX Tasarım", "Responsive Yapı"],
        accent: "#f59e0b",
    },
    {
        title: "KRC Catering",
        description: "Catering firması için güçlü görsellerle desteklenen, mobil uyumlu ve hızlı bir web sitesi. Hizmetlerin net anlatıldığı kullanıcı dostu bir yapı kuruldu.",
        logo: "/logos/krccatering.png",
        url: "https://www.krccatering.com.tr/",
        tech: ["Responsive Tasarım", "Görsel Optimizasyon", "Kullanıcı Deneyimi"],
        accent: "#10b981",
    },
];

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    const onMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };

    return (
        <Link href={project.url} target="_blank" className="group block">
            <div
                ref={ref}
                onMouseMove={onMove}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="
          relative h-full overflow-hidden rounded-2xl
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          backdrop-blur-md
          transition-all duration-300
        "
            >
                {/* Cursor glow */}
                <div
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                    style={{
                        opacity: hover ? 1 : 0,
                        background: `radial-gradient(
              600px circle at ${pos.x}px ${pos.y}px,
              ${project.accent}40,
              transparent 40%
            )`,
                    }}
                />

                {/* İçerik */}
                <div className="relative z-10 flex h-full flex-col p-8">
                    {/* Logo */}
                    <div
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl"
                        style={{
                            background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)`,
                        }}
                    >
                        <div className="relative h-full w-full rounded-lg bg-black/70 flex items-center justify-center">
                            <Image
                                src={project.logo}
                                alt={project.title}
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </div>

                    {/* Başlık */}
                    <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">
                        {project.title}
                    </h3>

                    {/* Açıklama */}
                    <p className="mb-6 flex-grow text-sm leading-relaxed text-[var(--muted)]">
                        {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mb-6 flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="
                  rounded-full px-2.5 py-1 text-xs font-medium
                  border border-[var(--card-border)]
                  bg-[var(--background)]
                  text-[var(--muted)]
                "
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: project.accent }}
                    >
                        Siteyi Ziyaret Et
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function FeaturedProjects() {
    return (
        <section className="relative overflow-hidden py-24 bg-[var(--background)] transition-colors">
            {/* Grid arkaplan (global.css’teki smart-grid) */}
            <div className="smart-grid absolute inset-0 pointer-events-none" />

            {/* Üst glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-[120px] bg-[var(--primary)]/20" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <div className="mb-4 inline-block rounded-full border border-[var(--card-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                        Portfolyo
                    </div>

                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
                        Öne Çıkan Projeler
                    </h2>

                    <p className="text-lg text-[var(--muted)]">
                        Gerçek müşteriler için geliştirdiğim, yayında olan projelerden bazıları.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
