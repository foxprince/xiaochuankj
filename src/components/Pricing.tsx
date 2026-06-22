import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Pricing() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#3b82f6]/4 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.pricing.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.pricing.h2Line1}
            <br />
            <span className="gradient-text">{t.pricing.h2Line2}</span>
          </h2>
          <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto mb-10">{t.pricing.sub}</p>

          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-[#0f1117] border border-[rgba(255,255,255,0.06)]">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-[#3b82f6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "text-[#8b8fa3] hover:text-[#f0f1f5]"
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                billing === "yearly"
                  ? "bg-[#3b82f6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "text-[#8b8fa3] hover:text-[#f0f1f5]"
              }`}
            >
              {t.pricing.yearly}
              <span className="text-xs px-1.5 py-0.5 rounded bg-[#22c55e]/15 text-[#22c55e]">
                {t.pricing.save}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-500 card-glow ${
                plan.popular
                  ? "border-[rgba(59,130,246,0.3)] bg-[#0f1117]/80"
                  : "border-[rgba(255,255,255,0.06)] bg-[#0f1117]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#3b82f6] text-white text-xs font-medium flex items-center gap-1 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Sparkles className="w-3 h-3" />
                  {t.pricing.popular}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#f0f1f5] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#8b8fa3]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="font-['Space_Grotesk'] text-4xl font-bold text-[#f0f1f5]">
                      {plan.price[billing]}
                    </span>
                    <span className="text-[#8b8fa3]">{plan.unit}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                    <span className="text-[#8b8fa3]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                    : "border border-[rgba(255,255,255,0.12)] text-[#8b8fa3] hover:bg-[rgba(255,255,255,0.04)] hover:text-[#f0f1f5]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
