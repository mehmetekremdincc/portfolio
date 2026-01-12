"use client";

import Image from "next/image";
import { User, Code2, GraduationCap, MapPin, Terminal, Globe } from "lucide-react";

export default function AboutMe() {

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/docs/Mehmet Ekrem Dinç CV.pdf';
        link.download = 'Mehmet_Ekrem_Dinc_CV.pdf';
        link.click();
    };

    return (
        <section id="about" className="relative py-32 bg-[var(--background)] transition-colors duration-500 overflow-hidden">

            {/* Arka Plan Dekoratif Kod Parçacıkları */}
            <div className="absolute top-20 left-10 text-[10px] font-mono text-blue-500/20 rotate-12 select-none pointer-events-none hidden lg:block">
                {"<Developer type='FullStack' />"} <br />
                {"const stack = ['Next.js', 'Go', 'PostgreSQL'];"}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">

                    {/* SOL TARAF: GÖRSEL ALANI */}
                    <div className="relative group shrink-0">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border-2 border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm shadow-2xl">
                            <Image
                                src="/photos/Mehmet Ekrem Dinç.jpg"
                                alt="Mehmet Ekrem Dinç"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Yüzen Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[var(--card-bg)] border border-[var(--card-border)] backdrop-blur-xl p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-[var(--muted)] font-bold uppercase">Uzmanlık</div>
                                    <div className="text-lg font-black text-[var(--foreground)]">Full Stack Dev</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SAĞ TARAF: İÇERİK ALANI */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-500 font-bold tracking-widest text-sm uppercase">
                                <div className="w-8 h-px bg-blue-500" />
                                Vizyoner Mühendislik
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter">
                                Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Ekrem Dinç</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-medium text-[var(--muted)]">
                                Geleceği Kodlayan Full Stack Developer
                            </h3>
                        </div>

                        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Karmaşık algoritmaları ve mimari yapıları, kullanıcı odaklı şık arayüzlerle harmanlıyorum.
                            <span className="text-[var(--foreground)] font-semibold"> Bilgisayar Mühendisliği</span> disipliniyle, sadece çalışan değil; ölçeklenebilir, performans canavarı ve estetik dijital ekosistemler inşa etmeye odaklanıyorum. Sınırları zorlamayı ve her satır kodda mükemmelliği arayan bir teknoloji tutkunuyum.
                        </p>

                        {/* Bilgi Kartları Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: <GraduationCap />, label: "Akademik", val: "Bilgisayar Mühendisliği" },
                                { icon: <MapPin />, label: "Konum", val: "Türkiye" },
                                { icon: <Code2 />, label: "Teknoloji", val: "Next.js, Go, Prisma, Tailwind" },
                                { icon: <User />, label: "Disiplin", val: "Çevik (Agile) Geliştirme" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] transition-all hover:border-blue-500/50 hover:translate-y-[-2px]">
                                    <div className="text-blue-500">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold text-[var(--muted)] tracking-widest">{item.label}</div>
                                        <div className="text-[var(--foreground)] font-semibold">{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sosyal İkonlar / Butonlar */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
                            <button
                                onClick={handleDownloadCV}
                                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                            >
                                Özgeçmişimi İndir
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] hover:bg-blue-600 hover:text-white transition-all cursor-pointer font-bold group">
                                    <span className="group-hover:scale-110 transition-transform">IN</span>
                                </div>
                                <div className="w-12 h-12 rounded-xl border border-[var(--card-border)] flex items-center justify-center text-[var(--foreground)] hover:bg-zinc-800 hover:text-white transition-all cursor-pointer font-bold group">
                                    <span className="group-hover:scale-110 transition-transform">GH</span>
                                </div>
                                {/* İngilizce Dil Butonu */}
                                <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/5 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all cursor-pointer font-bold gap-1 shadow-sm">
                                    <Globe className="w-3 h-3" />
                                    <span className="text-xs">EN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
}