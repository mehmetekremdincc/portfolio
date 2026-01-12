"use client";

import {
  Mail,
  MessageSquare,
  ArrowRight,
  Linkedin,
  Zap,
} from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

export default function UltimateCTA() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative py-32 bg-[var(--background)] overflow-hidden flex items-center justify-center transition-colors duration-500"
    >
      {/* Manyetik arka plan ışığı */}
      <div
        className="absolute pointer-events-none blur-[120px] rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(147,51,234,0.3) 50%, transparent 100%)",
          left: mousePos.x - 300,
          top: mousePos.y - 300,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="relative group/main">
          {/* Border beam */}
          <div
            className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-transparent to-purple-600 rounded-[4rem] animate-spin-slow opacity-30 group-hover/main:opacity-100 transition-opacity duration-700"
            style={{ animationDuration: "4s" }}
          />

          {/* Ana kutu */}
          <div className="relative bg-[#050505] rounded-[4rem] p-12 md:p-24 border border-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl">
            {/* Grid + noise */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Badge */}
              <div className="mb-10 px-6 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-3">
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                <span className="text-xs font-black text-zinc-300 tracking-[0.2em] uppercase">
                  Müsaitlik: Sınırlı
                </span>
              </div>

              {/* Başlık */}
              <h2 className="text-6xl md:text-[9rem] font-black text-white leading-none tracking-tighter mb-12 text-center select-none">
                HADİ{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  YAPALIM
                </span>
                <br />
                <span className="text-zinc-800 hover:text-white transition-colors duration-700">
                  ŞU İŞİ.
                </span>
              </h2>

              {/* İletişim kartları */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                {[
                  {
                    icon: <Mail />,
                    label: "Email",
                    val: "mehmetekremdinc@gmail.com",
                    href: "mailto:mehmetekremdinc@gmail.com",
                    color: "hover:shadow-blue-500/40",
                  },
                  {
                    icon: <MessageSquare />,
                    label: "WhatsApp",
                    val: "+90 544 592 40 06",
                    href: "https://wa.me/905445924006",
                    color: "hover:shadow-emerald-500/40",
                  },
                  {
                    icon: <Linkedin />,
                    label: "LinkedIn",
                    val: "Ekrem Dinç",
                    href: "https://www.linkedin.com/in/ekrem-dinç-9281b2246/",
                    color: "hover:shadow-sky-500/40",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group/card relative p-8 rounded-3xl bg-zinc-900/50 border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:bg-zinc-800 shadow-xl ${item.color}`}
                  >
                    <div className="mb-4 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-[10px] uppercase font-black text-zinc-500 tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-bold">{item.val}</div>
                  </a>
                ))}
              </div>

              {/* Projeyi başlat butonu */}
              <Link
                href="/iletisim"
                className="relative group/btn overflow-hidden px-16 py-8 rounded-full transition-all duration-300 active:scale-90"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x" />
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity blur-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
                <div className="relative flex items-center gap-4 text-white text-2xl font-black italic tracking-tighter">
                  PROJEYİ BAŞLAT
                  <ArrowRight className="w-8 h-8 group-hover/btn:translate-x-3 transition-transform duration-500" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arka plan glowlar */}
      <div className="absolute top-20 right-[15%] w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-bounce" />
      <div className="absolute bottom-20 left-[15%] w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-bounce" />
    </section>
  );
}
