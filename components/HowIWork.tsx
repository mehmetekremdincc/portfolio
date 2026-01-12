"use client";

import { Search, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
    {
        no: "01",
        title: "Analiz",
        desc: "Projenin amacını, hedef kitlesini ve ihtiyaçlarını netleştirerek sürece sağlam bir temel oluşturuyorum. Doğru kararlar için en başta doğru soruları soruyorum.",
        icon: <Search className="w-8 h-8" />,
        color: "from-blue-600 to-indigo-900",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "02",
        title: "Tasarım",
        desc: "Kullanıcı deneyimini merkeze alan, sade ve modern arayüzler tasarlıyorum. Görsel estetik ile kullanılabilirliği dengede tutuyorum.",
        icon: <PenTool className="w-8 h-8" />,
        color: "from-purple-600 to-fuchsia-900",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "03",
        title: "Geliştirme",
        desc: "Modern web teknolojileriyle hızlı, güvenilir ve ölçeklenebilir uygulamalar geliştiriyorum. Temiz kod ve sürdürülebilir yapı önceliğim.",
        icon: <Code2 className="w-8 h-8" />,
        color: "from-emerald-600 to-teal-900",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "04",
        title: "Test & Optimizasyon",
        desc: "Performans, uyumluluk ve kullanıcı deneyimi kontrolleri yaparak projeyi yayına hazır hâle getiriyorum. Detayları atlamam.",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "from-orange-600 to-red-900",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    },
    {
        no: "05",
        title: "Yayın & Destek",
        desc: "Projeyi yayına alıyor, son kontrolleri gerçekleştiriyor ve ihtiyaç duyulması hâlinde teknik destek sağlamaya devam ediyorum.",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-indigo-600 to-blue-900",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function HowIWork() {
    return (
        <section className="w-full py-32 bg-[var(--background)] transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Başlık Bölümü */}
                <div className="relative mb-24">
                    <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Süreç Mimarisi</span>
                    <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter">
                        Fikri <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ürüne</span> Dönüştür.
                    </h2>
                </div>

                {/* Akordiyon - Yüksekliği biraz artırdık */}
                <div className="flex flex-col md:flex-row h-[700px] md:h-[550px] gap-4 w-full group/container">
                    {steps.map((step) => (
                        <div
                            key={step.no}
                            className="group relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                         hover:flex-[4] flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10"
                        >
                            {/* 1. Katman: Arka Plan Resmi */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${step.image})` }}
                            />

                            {/* 2. Katman: Renkli Gradyan Overlay (Multiply modu ile resimle birleşir) */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-80 mix-blend-multiply z-[1]`} />

                            {/* 3. Katman: Ekstra Karartma (Yazı okunurluğu için) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-[2]" />

                            {/* İçerik */}
                            <div className="relative z-10 h-full p-10 flex flex-col justify-between">

                                {/* Üst Kısım */}
                                <div className="flex justify-between items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-col">
                                        <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                                            {step.no}
                                        </span>
                                    </div>

                                    {/* Parlayan İkon Kutusu */}
                                    <div className="relative">
                                        <div className={`absolute inset-0 blur-xl bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="relative w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-[360deg]">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Alt Kısım */}
                                <div className="transform transition-all duration-500">
                                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight drop-shadow-md">
                                        {step.title}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                                        <div className="overflow-hidden">
                                            <p className="text-white/80 text-lg leading-relaxed max-w-[400px] pb-4">
                                                {step.desc}
                                            </p>
                                            {/* Dekoratif Buton Görünümlü Alan */}
                                            <div className="w-12 h-1 bg-white rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Durumunda Parlayan Kenar Çizgisi */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-[2.5rem] transition-all duration-700 pointer-events-none z-30" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Arka Plan Dekoratif Blur (Dark modda çok şık durur) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none" />
        </section>
    );
}