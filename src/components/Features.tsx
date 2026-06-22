import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Lock, Infinity, CloudLightning, Eye, Fingerprint } from "lucide-react";
import { useI18n } from "../i18n/context";

const iconList = [Zap, Lock, Infinity, CloudLightning, Eye, Fingerprint];
const valueList = ["< 50ms", "SOC 2", "10x", "< 1s", "100%", "∞"];

export default function Features() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60a5fa]/4 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.features.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.features.h2Line1}
            <br />
            <span className="gradient-text">{t.features.h2Line2}</span>
          </h2>
          <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto">{t.features.sub}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.cards.map((card, index) => {
            const Icon = iconList[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-7 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/40 backdrop-blur-sm hover:border-[rgba(255,255,255,0.12)] hover:bg-[#14161e]/60 transition-all duration-500 card-glow"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.12)] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#3b82f6]" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-['Space_Grotesk'] text-[#f0f1f5]">{valueList[index]}</div>
                    <div className="text-xs text-[#5b5f73]">{card.label}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#f0f1f5] mb-2">{card.title}</h3>
                <p className="text-sm text-[#8b8fa3] leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
