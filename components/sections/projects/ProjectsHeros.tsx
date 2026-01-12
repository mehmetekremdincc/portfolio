"use client";

export default function ProjectsHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background transition-colors duration-500">

            {/* 1. Katman: Modern Grid Pattern */}
            <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* 2. Katman: Dinamik Işık Süzmeleri (Glows) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">

                {/* Metin İçeriği */}
                <div className="flex-1">
                    <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-primary">
                            Portfolyo 2026
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-foreground">
                        Kodla Değil, <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600">
                            Çözümle
                        </span> Proje Üretiyorum.
                    </h1>

                    <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Frontend mimarisi, yüksek performans ve kullanıcı odaklı deneyimler.
                        Sadece arayüz değil, yaşayan sistemler tasarlıyorum.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button
                            type="button"
                            onClick={() =>
                                document.getElementById("projeler")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            }
                            className="group relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-105 transition-all"
                        >
                            Projeleri İncele
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                document.getElementById("case-study")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            }
                            className="px-8 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur-sm font-semibold hover:bg-accent transition-all"
                        >
                            Case Study’ler
                        </button>



                    </div>
                </div>

                {/* Sağ Taraf: Dekoratif Eleman (Veya bir görsel/mockup) */}
                <div className="hidden lg:block flex-1 relative">
                    <div className="relative w-full h-[400px] flex items-center justify-center">
                        {/* Buraya bir Tech-Stack illüstrasyonu veya cam efektiyle proje kartları gelebilir */}
                        <div className="absolute w-64 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl border border-white/10 rotate-12 backdrop-blur-2xl shadow-2xl transition-transform hover:rotate-6 duration-500" />
                        <div className="absolute w-64 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl border border-white/10 -rotate-12 backdrop-blur-2xl shadow-2xl transition-transform hover:-rotate-6 duration-500" />
                        <div className="z-10 bg-background/80 p-6 rounded-2xl border border-border shadow-2xl">
                            <pre className="text-xs text-blue-500">
                                <code>{`{
  "project": "Modern Portfolio",
  "status": "In Development",
  "tech": ["Next.js", "Tailwind", "Framer"]
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}