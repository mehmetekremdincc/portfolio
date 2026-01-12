"use client";

import Link from "next/link";
import { Cpu, Zap, Eye, Code, Layers, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const reasons = [
    {
        title: "Sağlam Yazılım Mimarisi",
        desc: "Sadece görünen arayüze değil, arka plandaki mimariye odaklanıyorum. Ölçeklenebilir, sürdürülebilir ve performanslı sistemler kurarak projelerin uzun vadede sorunsuz çalışmasını sağlıyorum. Bilgisayar Mühendisi bakış açısıyla her detayı planlıyorum.",
        icon: <Cpu className="w-6 h-6" />,
        stat: "10x",
        statDesc: "Daha Verimli",
        color: "bg-blue-600",
        gradient: "from-blue-600 to-sky-500",
    }
    ,
    {
        title: "Hız, Performans ve SEO Odaklı Geliştirme",
        desc: "Google Core Web Vitals kriterlerini merkeze alıyorum. Next.js ve modern frontend teknikleriyle hızlı açılan, SEO dostu ve kullanıcıyı sitede tutan deneyimler oluşturuyorum.",
        icon: <Zap className="w-6 h-6" />,
        stat: "<1s",
        statDesc: "Yükleme Süresi",
        color: "bg-purple-600",
        gradient: "from-purple-600 to-fuchsia-500",
    }
    ,
    {
        title: "Piksel Hassasiyetinde Arayüzler",
        desc: "Figma ve tasarım dosyalarını birebir, responsive yapıyı bozmadan koda aktarıyorum. Mikro animasyonlar, hover detayları ve kullanıcı etkileşimleriyle arayüzü yaşayan bir deneyime dönüştürüyorum.",
        icon: <Eye className="w-6 h-6" />,
        stat: "PX",
        statDesc: "Detay Odaklı UI",
        color: "bg-emerald-600",
        gradient: "from-emerald-600 to-green-500",
    }

];

export default function WhyMe() {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-32 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
        >

            {/* Arka Plan Dekoratif Elementler (Yavaş hareket eden renkli ışıklar) */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none"
                style={{
                    transform: `translate(-50%, -50%) translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px) scale(1.1)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-500/10 via-yellow-500/10 to-orange-500/10 blur-[120px] rounded-full animate-pulse-slow-reverse pointer-events-none"
                style={{
                    transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 40}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 z-10">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Sol Taraf: Metin İçeriği ve Paralaks Başlık */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-md">
                            <Sparkles className="w-4 h-4 text-blue-400 animate-spin-slow" />
                            <span className="text-sm font-bold text-blue-500 uppercase tracking-widest italic">Fark Yaratıyorum</span>
                        </div>

                        <h2
                            className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.9] drop-shadow-lg"
                            style={{
                                transform: `translateY(${mousePosition.y / 30 * -1}px) translateX(${mousePosition.x / 40 * -1}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            Kodun Ötesinde, <br />
                            <span className="text-zinc-400 dark:text-zinc-600">Dijital Miras İnşa Ediyorum.</span>
                        </h2>

                        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">
                            Bir web sitesi sadece kod yığınından ibaret değildir; markanızın dijital dünyadaki kalesi, satış temsilciniz ve vitrininizdir. Mühendislik disiplinini yaratıcı frontend dokunuşlarıyla birleştirerek sizi rakiplerinizin önüne geçiriyorum ve projelerinize kalıcı bir değer katıyorum.
                        </p>

                        {/* Yetenek Badge'leri */}
                        <div className="flex flex-wrap gap-3">
                            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Animations", "UI/UX"].map((skill) => (
                                <div
                                    key={skill}
                                    className="
        px-4 py-2 rounded-full 
        bg-zinc-100 dark:bg-zinc-900/50 
        backdrop-blur-md
        border border-zinc-200 dark:border-zinc-800 
        text-sm font-bold 
        text-zinc-900 dark:text-zinc-100 
        shadow-sm 
        hover:scale-110 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
        transition-all duration-300 cursor-default
      "
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sağ Taraf: Kartlar */}
                    <div className="grid gap-8">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20"
                            >
                                {/* Kart Arkaplan Glow (Sadece Hover'da) */}
                                <div className={`absolute inset-0 rounded-[2.5rem] ${reason.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />

                                {/* İçerik */}
                                <div className="relative z-10">
                                    {/* İkon ve Stat Grubu */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className={`relative w-14 h-14 rounded-full ${reason.color} flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg]`}>
                                            {/* İkon Arkası Parlama */}
                                            <div className={`absolute inset-0 blur-lg ${reason.color} opacity-70 animate-pulse-fast`} />
                                            {reason.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl font-black text-blue-600 dark:text-blue-400">{reason.stat}</div>
                                            <div className="text-[11px] font-bold text-[var(--muted)] uppercase tracking-tight">{reason.statDesc}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">{reason.title}</h3>
                                    <p className="text-[var(--muted)] text-base leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>

                                {/* Dekoratif Çizgi (Hover'da belirginleşir) */}
                                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Alt Kısım: CTA */}
                <div className="mt-32 p-10 rounded-[3.5rem] bg-gradient-to-r from-blue-700 to-indigo-900 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl shadow-blue-800/30">
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex w-20 h-20 rounded-full bg-white/10 backdrop-blur-md items-center justify-center border-2 border-white/30 shrink-0">
                            <Layers className="w-10 h-10 text-white/90" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-3xl font-black mb-2 leading-tight drop-shadow-md">Gelin Tanışalım!</h4>
                            <p className="text-white/80 text-lg max-w-md">Fikirlerinizi kodla hayata geçirmek için doğru adrestesiniz. Bir kahve ısmarlayın, projelerinizi konuşalım.</p>
                        </div>
                    </div>
                    <Link href="/iletisim">
                        <button className="relative z-10 mt-8 md:mt-0 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                            Hemen İletişime Geçelim
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}