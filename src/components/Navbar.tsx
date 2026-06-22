import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0b0f]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-[#f0f1f5]">
              FUCONNECT
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-[#8b8fa3] hover:text-[#f0f1f5] transition-colors duration-300 rounded-lg hover:bg-[rgba(255,255,255,0.04)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]">
              <button
                onClick={() => setLang("zh")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  lang === "zh"
                    ? "bg-[#3b82f6] text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    : "text-[#8b8fa3] hover:text-[#f0f1f5]"
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#3b82f6] text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    : "text-[#8b8fa3] hover:text-[#f0f1f5]"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="btn-shimmer relative px-5 py-2.5 text-sm font-medium bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              {t.nav.cta}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#8b8fa3] hover:text-[#f0f1f5] transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0b0f]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] md:hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-[#8b8fa3] hover:text-[#f0f1f5] hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] mt-2 flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setLang("zh")}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      lang === "zh"
                        ? "bg-[#3b82f6] text-white"
                        : "border border-[rgba(255,255,255,0.08)] text-[#8b8fa3]"
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      lang === "en"
                        ? "bg-[#3b82f6] text-white"
                        : "border border-[rgba(255,255,255,0.08)] text-[#8b8fa3]"
                    }`}
                  >
                    EN
                  </button>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-2.5 text-sm font-medium bg-[#3b82f6] text-white rounded-lg"
                >
                  {t.nav.cta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
