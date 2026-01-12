"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const contactData = [
    {
        id: "01",
        label: "Email",
        value: "mehmetekremdinc@gmail.com",
        icon: Mail,
        href: "mailto:mehmetekremdinc@gmail.com",
        color: "#6366f1", // Indigo
        bgClass: "bg-indigo-500"
    },
    {
        id: "02",
        label: "Github",
        value: "github.com/ekremdinc",
        icon: Github,
        href: "https://github.com/mehmetekremdincc",
        color: "#24292e", // Github Black
        bgClass: "bg-slate-900"
    },
    {
        id: "03",
        label: "LinkedIn",
        value: "linkedin.com/in/ekremdinc",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/ekrem-dinç-9281b2246/",
        color: "#0077b5", // LinkedIn Blue
        bgClass: "bg-blue-600"
    },
    {
        id: "04",
        label: "Instagram",
        value: "@ekremdinc",
        icon: Instagram,
        href: "https://www.instagram.com/ekremdinc_/",
        color: "#e1306c", // Instagram Pink
        bgClass: "bg-pink-600"
    },
];

export default function UltimateContact() {
    const containerRef = useRef(null);
    const [activeColor, setActiveColor] = useState("var(--foreground)");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-800, 800]);
    const xRight = useTransform(scrollYProgress, [0, 1], [800, -800]);

    return (
        <section
            ref={containerRef}
            className="relative py-40 bg-[var(--background)] overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-700"
        >
            {/* 1. DİNAMİK ARKA PLAN METİNLERİ */}
            <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none select-none opacity-10">
                <motion.h2
                    style={{ x: xLeft, color: activeColor }}
                    className="text-[18vw] leading-none font-black whitespace-nowrap uppercase transition-colors duration-500"
                >
                    Get In Touch • Get In Touch •
                </motion.h2>
                <motion.h2
                    style={{ x: xRight, color: activeColor }}
                    className="text-[18vw] leading-none font-black whitespace-nowrap uppercase italic text-transparent stroke-current stroke-[1px] transition-colors duration-500"
                >
                    Bana Ulaşın • Bana Ulaşın •
                </motion.h2>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="flex flex-col border-t border-[var(--foreground)]/10">
                    {contactData.map((item) => (
                        <ContactRow
                            key={item.id}
                            item={item}
                            onActive={(color) => setActiveColor(color)}
                            onLeave={() => setActiveColor("var(--foreground)")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactRow({ item, onActive, onLeave }: any) {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse takip koordinatları
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Yumuşatılmış hareket (Spring)
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Fare pozisyonunu satıra göre hesapla
        mouseX.set(e.clientX - rect.left - 150);
        mouseY.set(e.clientY - rect.top - 150);
    };

    return (
        <motion.a
            href={item.href}
            target="_blank"
            onMouseEnter={() => {
                setIsHovered(true);
                onActive(item.color);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onLeave();
            }}
            onMouseMove={handleMouseMove}
            className="group relative flex items-center justify-between py-12 md:py-20 border-b border-[var(--foreground)]/10"
        >
            {/* Sol Kısım: Numara ve Başlık */}
            <div className="flex items-center gap-10 z-20">
                <span className="font-mono text-xl opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: isHovered ? item.color : "" }}>
                    {item.id}
                </span>
                <h4
                    className="text-5xl md:text-9xl font-bold tracking-tighter transition-all duration-500 group-hover:italic"
                    style={{ color: isHovered ? item.color : "var(--foreground)" }}
                >
                    {item.label}
                </h4>
            </div>

            {/* Sağ Kısım: İkon ve Link */}
            <div className="relative z-20 hidden md:flex items-center gap-6">
                <div className="text-right">
                    <p className="text-2xl font-light opacity-40 group-hover:opacity-100 transition-all">
                        {item.value}
                    </p>
                </div>
                <div
                    className="p-6 rounded-full border transition-all duration-500"
                    style={{
                        backgroundColor: isHovered ? item.color : "transparent",
                        borderColor: isHovered ? item.color : "var(--foreground)",
                        color: isHovered ? "white" : "var(--foreground)"
                    }}
                >
                    <ArrowUpRight className={`h-8 w-8 transition-transform duration-500 ${isHovered ? "rotate-45" : ""}`} />
                </div>
            </div>

            {/* ŞOV KISMI: MANYETİK ÖNİZLEME KARTI */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 5 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                        style={{
                            left: springX,
                            top: springY,
                            position: "absolute",
                            pointerEvents: "none",
                            zIndex: 15
                        }}
                        className={`w-[250px] h-[320px] ${item.bgClass} rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-8 overflow-hidden`}
                    >
                        {/* Kart İçeriği */}
                        <item.icon className="w-20 h-20 text-white mb-6 drop-shadow-2xl" />
                        <span className="text-white/20 font-black text-6xl absolute -bottom-4 -right-4 rotate-12 select-none">
                            {item.label}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Parlama Efekti */}
                        <motion.div
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Satır Arka Planı Işığı */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: item.color }}
            />
        </motion.a>
    );
}