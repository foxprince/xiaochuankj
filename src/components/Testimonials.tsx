import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Testimonials() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#60a5fa]/4 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.testimonials.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.testimonials.h2Line1}
            <br />
            <span className="gradient-text">{t.testimonials.h2Line2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/40 backdrop-blur-sm hover:border-[rgba(255,255,255,0.12)] transition-all duration-500 card-glow"
            >
              <Quote className="w-8 h-8 text-[#3b82f6]/30 mb-4" />
              <p className="text-[#f0f1f5] leading-relaxed mb-6">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#3b82f6]">{item.author[0]}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#f0f1f5]">{item.author}</div>
                  <div className="text-xs text-[#5b5f73]">
                    {item.role} · {item.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
