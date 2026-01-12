"use client";

import {
    Github,
    Linkedin,
    Instagram,
    Mail,
    ArrowUpCircle,
    MessageSquare
} from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[var(--background)] pt-20 pb-10 overflow-hidden border-t border-[var(--card-border)]">

            {/* Arka Plan Dekoratif Blur */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Logo & Motto */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="text-2xl font-black tracking-tighter text-[var(--foreground)]">
                            EKREM <span className="text-blue-600">DİNÇ</span>
                        </div>

                        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-sm">
                            Dijital dünyada modern teknolojilerle iz bırakan projeler inşa ediyorum.
                            Mühendislik disiplini ve estetik tasarımın buluşma noktası.
                        </p>

                        {/* Sosyal Medya */}
                        <div className="flex gap-4">
                            {[
                                {
                                    icon: <Github className="w-5 h-5" />,
                                    link: "https://github.com/mehmetekremdincc",
                                },
                                {
                                    icon: <Linkedin className="w-5 h-5" />,
                                    link: "https://www.linkedin.com/in/ekrem-dinç-9281b2246/",
                                },
                                {
                                    icon: <Instagram className="w-5 h-5" />,
                                    link: "https://www.instagram.com/ekremdinc_/",
                                },
                                {
                                    icon: <MessageSquare className="w-5 h-5" />,
                                    link: "https://wa.me/905445924006",
                                },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center text-[var(--muted)] hover:text-blue-600 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigasyon */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--foreground)]">
                            Navigasyon
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Anasayfa", href: "/" },
                                { label: "Projeler", href: "/projeler" },
                                { label: "Hakkımda", href: "/hakkimda" },
                                { label: "İletişim", href: "/iletisim" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-[var(--muted)] hover:text-blue-600 transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-blue-600 mr-0 group-hover:mr-2 transition-all" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* İletişim & Yukarı Çık */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[var(--foreground)]">
                            Bana Ulaşın
                        </h4>

                        <div className="space-y-4">
                            <a
                                href="mailto:mehmetekremdinc@gmail.com"
                                className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium">
                                    mehmetekremdinc@gmail.com
                                </span>
                            </a>

                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-zinc-500/10 flex items-center justify-center text-zinc-500 group-hover:bg-zinc-800 dark:group-hover:bg-white dark:group-hover:text-black group-hover:text-white transition-all">
                                    <ArrowUpCircle className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-medium italic">
                                    En Tepeye Dön
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Alt Bar */}
                <div className="pt-10 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[var(--muted)] text-sm font-medium">
                        © 2026 Mehmet Ekrem Dinç. Tüm Hakları Saklıdır.
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                        <span>Built with</span>
                        <span className="font-bold text-[var(--foreground)]">Next.js 16</span>
                        <span>&</span>
                        <span className="font-bold text-blue-600">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
