import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function CTA() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-[rgba(59,130,246,0.15)] bg-[#0f1117]/80 backdrop-blur-xl p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 animated-grid opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-8">
              <Zap className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span className="text-sm text-[#8b8fa3]">{t.cta.badge}</span>
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-bold tracking-tight mb-5">
              {t.cta.h2Line1}
              <br />
              <span className="gradient-text">{t.cta.h2Line2}</span>
            </h2>

            <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto mb-10">{t.cta.sub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group btn-shimmer relative flex items-center gap-2 px-8 py-4 text-base font-medium bg-[#3b82f6] text-white rounded-xl hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                {t.cta.start}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 text-base font-medium border border-[rgba(255,255,255,0.12)] text-[#8b8fa3] rounded-xl hover:bg-[rgba(255,255,255,0.04)] hover:text-[#f0f1f5] transition-all duration-300"
              >
                {t.cta.demo}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
