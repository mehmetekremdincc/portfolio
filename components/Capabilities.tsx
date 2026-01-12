"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, ArrowUpRight, Zap, Sparkles, Terminal } from "lucide-react";

const WORK_MODULES = [
  {
    title: "Frontend Geliştirme",
    desc: "Modern ve responsive arayüzler geliştiriyorum. HTML, CSS ve JavaScript temellerini; TypeScript ve Next.js ile daha performanslı ve sürdürülebilir yapılara dönüştürüyorum.",
    icon: <Sparkles className="w-8 h-8" />,
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap"],
    size: "lg:col-span-2",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Backend & API Geliştirme",
    desc: "Uygulamaların arka planında çalışan sistemleri geliştiriyorum. Frontend ile uyumlu, güvenilir ve sürdürülebilir API yapıları oluşturmaya odaklanıyorum.",
    icon: <Zap className="w-8 h-8" />,
    tech: [".NET", "Node.js"],
    size: "lg:col-span-1",
    gradient: "from-indigo-500/10 to-transparent"
  },
  {
    title: "Programlama Dilleri",
    desc: "Farklı programlama dilleriyle çalışma tecrübem sayesinde problemlere mühendislik bakış açısıyla yaklaşıyor, daha sağlam ve anlaşılır çözümler üretiyorum.",
    icon: <Cpu className="w-8 h-8" />,
    tech: ["C#", "Java", "JavaScript", "TypeScript"],
    size: "lg:col-span-1",
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    title: "Kod Kalitesi & Geliştirme Süreci",
    desc: "Temiz kod, performans ve ölçeklenebilirlik odaklı çalışıyorum. Yalnızca çalışan değil, uzun vadede geliştirilebilir projeler üretmeyi önceliklendiriyorum.",
    icon: <Code2 className="w-8 h-8" />,
    tech: ["Clean Code", "Performans", "Ölçeklenebilir Yapı"],
    size: "lg:col-span-2",
    gradient: "from-emerald-500/10 to-transparent"
  }

];

export default function Capabilities() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Akıllı Grid Arka Planı */}
      <div className="absolute inset-0 smart-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER AREA */}
        <div className="flex flex-col mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-sm tracking-[0.3em] font-bold"
          >
            <Terminal className="w-4 h-4" />
            ENGINEERING CAPABILITIES
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
            Dijital Mimari <br />
            <span className="text-slate-400 dark:text-slate-500">Ve Çözümler</span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {WORK_MODULES.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md p-10 min-h-[340px] flex flex-col justify-between hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl dark:hover:shadow-blue-500/5 ${module.size}`}
            >
              {/* Kutunun İçindeki Renkli Işık (Hover'da canlanır) */}
              <div className={`absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br ${module.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-5 rounded-2xl bg-white dark:bg-white/5 shadow-xl shadow-black/5 dark:shadow-none text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    {module.icon}
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45, scale: 1.2 }}
                    className="p-2 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>

                <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900 dark:text-white">
                  {module.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium max-w-sm leading-relaxed text-lg">
                  {module.desc}
                </p>
              </div>

              {/* Alt Bilgi & Tech Stack */}
              <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                {module.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl shadow-lg shadow-black/10 dark:shadow-none transition-transform hover:-translate-y-1">
                    {t}
                  </span>
                ))}
              </div>

              {/* Köşedeki Dev Numara */}
              <div className="absolute bottom-4 right-8 font-mono text-[100px] font-black opacity-[0.03] dark:opacity-[0.07] text-slate-900 dark:text-white select-none pointer-events-none group-hover:opacity-10 transition-opacity italic">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 rounded-[3.5rem] bg-blue-600 dark:bg-blue-700 text-white overflow-hidden relative shadow-2xl shadow-blue-500/20"
        >
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-black mb-3 tracking-tighter">Sıradaki büyük fikri beraber inşa edelim.</h4>
            <p className="opacity-80 text-lg font-medium">Karmaşık problemleri basit çözümlere indirgemeyi seviyorum.</p>
          </div>
          <Link href="/iletisim">
            <button className="relative z-10 mt-8 md:mt-0 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
              İletişime Geç
            </button>
          </Link>
          {/* Dekoratif Işık */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] -translate-y-1/2 translate-x-1/4" />
        </motion.div>
      </div>
    </section>
  );
}