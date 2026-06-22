import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const f = t.contact.form;

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-[#3b82f6] mb-4 tracking-wider uppercase">
            {t.contact.label}
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold tracking-tight mb-5">
            {t.contact.h2Line1}
            <br />
            <span className="gradient-text">{t.contact.h2Line2}</span>
          </h2>
          <p className="text-[#8b8fa3] text-lg max-w-2xl mx-auto">{t.contact.sub}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.12)] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#f0f1f5] mb-1">{t.contact.addressLabel}</h3>
                <p className="text-sm text-[#8b8fa3] leading-relaxed">
                  2 Venture Drive #06-09 Vision Exchange
                  <br />
                  Singapore 608526
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.12)] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#f0f1f5] mb-1">{t.contact.emailLabel}</h3>
                <p className="text-sm text-[#8b8fa3]">contact@xiaochuankj.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/40 backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#8b8fa3] mb-2">{f.name}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0f] border border-[rgba(255,255,255,0.08)] text-[#f0f1f5] text-sm focus:border-[#3b82f6] focus:outline-none transition-colors placeholder:text-[#5b5f73]"
                    placeholder={f.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8b8fa3] mb-2">{f.email}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0f] border border-[rgba(255,255,255,0.08)] text-[#f0f1f5] text-sm focus:border-[#3b82f6] focus:outline-none transition-colors placeholder:text-[#5b5f73]"
                    placeholder={f.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8b8fa3] mb-2">{f.company}</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0f] border border-[rgba(255,255,255,0.08)] text-[#f0f1f5] text-sm focus:border-[#3b82f6] focus:outline-none transition-colors placeholder:text-[#5b5f73]"
                    placeholder={f.companyPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#8b8fa3] mb-2">{f.message}</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0b0f] border border-[rgba(255,255,255,0.08)] text-[#f0f1f5] text-sm focus:border-[#3b82f6] focus:outline-none transition-colors resize-none placeholder:text-[#5b5f73]"
                    placeholder={f.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    submitted
                      ? "bg-[#22c55e] text-white"
                      : "bg-[#3b82f6] text-white hover:bg-[#2563eb] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {f.submitted}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {f.submit}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
