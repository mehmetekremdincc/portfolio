"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [dark, setDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        dark ? html.classList.add("dark") : html.classList.remove("dark");
    }, [dark]);

    const menuItems = [
        { label: "Anasayfa", href: "/" },
        { label: "Projeler", href: "/projeler" },
        { label: "Hakkımda", href: "/hakkimda" },
        { label: "İletişim", href: "/iletisim" },
    ];

    return (
        <header
            className="
                fixed top-0 left-0 w-full z-50
                backdrop-blur-xl
                bg-white/70 dark:bg-black/60
                border-b border-black/5 dark:border-white/10
                transition-colors
            "
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <a
                    href="/"
                    className="
                        text-sm font-bold tracking-[0.35em]
                        bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500
                        bg-clip-text text-transparent
                        hover:opacity-80 transition
                    "
                >
                    EKREM DİNÇ
                </a>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="
                                relative text-sm uppercase tracking-wider
                                font-semibold
                                text-black/80 dark:text-white/80
                                transition-all duration-300

                                hover:text-black dark:hover:text-white
                                after:absolute after:left-0 after:-bottom-2
                                after:h-[2px] after:w-0
                                after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
                                after:transition-all after:duration-300
                                hover:after:w-full
                            "
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* RIGHT ACTIONS */}
                <div className="flex items-center gap-4">

                    {/* DARK MODE */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="
                            w-10 h-10 rounded-full
                            flex items-center justify-center
                            border border-black/10 dark:border-white/20
                            hover:scale-110 transition-all duration-300
                            hover:shadow-lg hover:shadow-purple-500/30
                        "
                        aria-label="Toggle dark mode"
                    >
                        {dark ? "☀️" : "🌙"}
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`
                    md:hidden absolute top-20 left-0 w-full
                    bg-white dark:bg-black
                    transition-all duration-500 overflow-hidden
                    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <nav className="flex flex-col px-6 py-6 gap-6">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="
                                text-lg font-semibold
                                text-black dark:text-white
                                hover:text-purple-500 transition
                            "
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
