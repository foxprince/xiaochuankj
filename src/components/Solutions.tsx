import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, MessageSquare, BarChart3, Workflow, Layers, Code } from "lucide-react";
import { useI18n } from "../i18n/context";

const iconList = [Brain, MessageSquare, BarChart3, Workflow, Layers, Code];
const colorList = [
  { color: "#3b82f6", bgColor: "rgba(59,130,246,0.06)", borderColor: "rgba(59,130,246,0.1)" },
  { color: "#22c55e", bgColor: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.1)" },
  { color: "#f59e0b", bgColor: "rgba(245,158,11,0.06)", borderColor: "rgba(245,158,11,0.1)" },
  { color: "#ef4444", bgColor: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.1)" },
  { color: "#a855f7", bgColor: "rgba(168,85,247,0.06)", borderColor: "rgba(168,85,247,0.1)" },
  { color: "#06b6d4", bgColor: "rgba(6,182,212,0.06)", borderColor: "rgba(6,182,212,0.1)" },
];

export default function Solutions() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3b82f6]/4 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.solutions.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.solutions.h2Line1}
            <br />
            <span className="gradient-text">{t.solutions.h2Line2}</span>
          </h2>
          <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto">{t.solutions.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.cards.map((card, index) => {
            const Icon = iconList[index];
            const { color, bgColor, borderColor } = colorList[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-7 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/60 backdrop-blur-sm transition-all duration-500 hover:border-[rgba(255,255,255,0.12)] hover:bg-[#14161e]/80 card-glow"
              >
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: bgColor, border: `1px solid ${borderColor}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#f0f1f5] mb-3">{card.title}</h3>
                  <p className="text-sm text-[#8b8fa3] leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
