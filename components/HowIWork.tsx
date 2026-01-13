"use client";

import { useState } from "react"; // 1. State ekledik
import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
    {
        no: "01",
        title: "Analiz",
        desc: "Projenin amacını, hedef kitlesini ve ihtiyaçlarını netleştirerek sürece sağlam bir temel oluşturuyorum.",
        icon: <Search className="w-8 h-8" />,
        color: "from-blue-600 to-indigo-900",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    // ... diğer veriler aynı
    {
        no: "02",
        title: "Tasarım",
        desc: "Kullanıcı deneyimini merkeze alan, sade ve modern arayüzler tasarlıyorum.",
        icon: <PenTool className="w-8 h-8" />,
        color: "from-purple-600 to-fuchsia-900",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "03",
        title: "Geliştirme",
        desc: "Modern web teknolojileriyle hızlı, güvenilir ve ölçeklenebilir uygulamalar geliştiriyorum.",
        icon: <Code2 className="w-8 h-8" />,
        color: "from-emerald-600 to-teal-900",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "04",
        title: "Test & Optimizasyon",
        desc: "Performans, uyumluluk ve kullanıcı deneyimi kontrolleri yaparak projeyi yayına hazır hâle getiriyorum.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "from-orange-600 to-red-900",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "05",
        title: "Yayın & Destek",
        desc: "Projeyi yayına alıyor, son kontrolleri gerçekleştiriyor ve teknik destek sağlıyorum.",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-indigo-600 to-blue-900",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function HowIWork() {
    // Mobilde hangi kartın açık olduğunu tutan state (Varsayılan 01 numaralı kart)
    const [activeIndex, setActiveIndex] = useState("01");

    return (
        <section className="w-full py-20 md:py-32 bg-[var(--background)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Başlık Bölümü */}
                <div className="relative mb-16 md:mb-24">
                    <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Süreç Mimarisi</span>
                    <h2 className="text-4xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter">
                        Fikri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ürüne</span> Dönüştür.
                    </h2>
                </div>

                {/* Akordiyon Konteynırı */}
                <div className="flex flex-col md:flex-row h-[800px] md:h-[550px] gap-3 md:gap-4 w-full group/container">
                    {steps.map((step) => {
                        const isActive = activeIndex === step.no;

                        return (
                            <div
                                key={step.no}
                                onClick={() => setActiveIndex(step.no)} // Mobil için tıklama olayı
                                onMouseEnter={() => setActiveIndex(step.no)} // Desktop için hover desteği
                                className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                                ${isActive ? "flex-[5] md:flex-[4]" : "flex-1 md:flex-1"}`}
                            >
                                {/* Arka Plan Resmi */}
                                <div
                                    className={`absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ${isActive ? "scale-110" : "scale-100"}`}
                                    style={{ backgroundImage: `url(${step.image})` }}
                                />

                                {/* Renkli Gradyan Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${step.color} ${isActive ? "opacity-70" : "opacity-90"} mix-blend-multiply z-[1] transition-opacity duration-500`} />

                                {/* Karartma */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-[2]" />

                                {/* İçerik */}
                                <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className={`text-5xl md:text-6xl font-black transition-colors ${isActive ? "text-white/30" : "text-white/10"}`}>
                                            {step.no}
                                        </span>
                                        <div className="relative">
                                            <div className={`absolute inset-0 blur-xl bg-white/30 rounded-full transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />
                                            <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 border border-white/20 
                                                ${isActive ? "bg-white text-black rotate-[360deg]" : "bg-white/10 text-white"}`}>
                                                {step.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="transform transition-all duration-500">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4 tracking-tight">
                                            {step.title}
                                        </h3>
                                        {/* Mobilde yazıların görünmesi için grid-rows kontrolü */}
                                        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                            <div className="overflow-hidden">
                                                <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-[400px] pb-4">
                                                    {step.desc}
                                                </p>
                                                <div className="w-12 h-1 bg-white rounded-full mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}