import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Cog, Rocket, BarChart3 } from "lucide-react";
import { useI18n } from "../i18n/context";

const iconList = [Upload, Cog, Rocket, BarChart3];
const colorList = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

export default function HowItWorks() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3b82f6]/4 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.howItWorks.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.howItWorks.h2Line1}
            <br />
            <span className="gradient-text">{t.howItWorks.h2Line2}</span>
          </h2>
          <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto">{t.howItWorks.sub}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)] hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = iconList[index];
              const color = colorList[index];
              const stepNum = String(index + 1).padStart(2, "0");
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${index !== 0 ? "lg:mt-12" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/60 backdrop-blur-sm hover:border-[rgba(255,255,255,0.12)] transition-all duration-500 card-glow">
                      <div className="flex items-start gap-5">
                        <div className="shrink-0">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${color}20` }}
                          >
                            <Icon className="w-6 h-6" style={{ color }} />
                          </div>
                          <div className="font-['Space_Grotesk'] text-3xl font-bold text-[rgba(255,255,255,0.08)]">
                            {stepNum}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[#f0f1f5] mb-3">{step.title}</h3>
                          <p className="text-[#8b8fa3] leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-[rgba(255,255,255,0.2)] bg-[#0a0b0f] relative z-10">
                      <div className="absolute inset-0.5 rounded-full" style={{ background: color }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
