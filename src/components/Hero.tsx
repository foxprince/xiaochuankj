import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Globe, Cpu } from "lucide-react";
import { useI18n } from "../i18n/context";

const particleCount = 40;

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let animId = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; speed: number }[] = [];

    const resize = () => {
      w = canvas!.parentElement!.clientWidth;
      h = canvas!.parentElement!.clientHeight;
      canvas!.width = w * window.devicePixelRatio;
      canvas!.height = h * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.2,
          speed: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const draw = () => {
      ctx!.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * p.speed;
        p.y += p.vy * p.speed;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx!.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`;
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();
    window.addEventListener("resize", () => { resize(); init(); });
    return () => { cancelAnimationFrame(animId); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

export default function Hero() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-grid"
    >
      <ParticleField />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6]/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#60a5fa]/5 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/3 rounded-full blur-[150px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span className="text-sm text-[#8b8fa3]">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {t.hero.h1Line1}
          <br />
          <span className="gradient-text text-glow">{t.hero.h1Line2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#8b8fa3] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group btn-shimmer relative flex items-center gap-2 px-8 py-4 text-base font-medium bg-[#3b82f6] text-white rounded-xl hover:bg-[#2563eb] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            {t.hero.explore}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#solutions"
            className="flex items-center gap-2 px-8 py-4 text-base font-medium border border-[rgba(255,255,255,0.12)] text-[#8b8fa3] rounded-xl hover:bg-[rgba(255,255,255,0.04)] hover:text-[#f0f1f5] transition-all duration-300"
          >
            {t.hero.learnMore}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f1117]/60 backdrop-blur-xl overflow-hidden gradient-border">
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/60" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]/60" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]/60" />
              <div className="flex-1 text-center text-xs text-[#5b5f73] font-mono">{t.hero.console.title}</div>
            </div>
            <div className="p-6 pt-12">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-[rgba(59,130,246,0.06)] rounded-lg p-4 border border-[rgba(59,130,246,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-[#3b82f6]" />
                    <span className="text-xs text-[#5b5f73]">{t.hero.console.ai}</span>
                  </div>
                  <div className="text-xl font-semibold text-[#f0f1f5]">2.4M</div>
                  <div className="text-xs text-[#8b8fa3]">{t.hero.console.rps}</div>
                </div>
                <div className="bg-[rgba(34,197,94,0.06)] rounded-lg p-4 border border-[rgba(34,197,94,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-[#22c55e]" />
                    <span className="text-xs text-[#5b5f73]">{t.hero.console.nodes}</span>
                  </div>
                  <div className="text-xl font-semibold text-[#f0f1f5]">47</div>
                  <div className="text-xs text-[#8b8fa3]">{t.hero.console.datacenters}</div>
                </div>
                <div className="bg-[rgba(245,158,11,0.06)] rounded-lg p-4 border border-[rgba(245,158,11,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-xs text-[#5b5f73]">{t.hero.console.security}</span>
                  </div>
                  <div className="text-xl font-semibold text-[#f0f1f5]">99.99%</div>
                  <div className="text-xs text-[#8b8fa3]">{t.hero.console.uptime}</div>
                </div>
              </div>
              <div className="bg-[#0a0b0f] rounded-lg p-4 border border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-sm text-[#8b8fa3] font-mono">{t.hero.console.analyzing}</span>
                </div>
                <div className="space-y-2">
                  {[
                    { color: "#3b82f6", pct: "78%" },
                    { color: "#22c55e", pct: "92%" },
                    { color: "#f59e0b", pct: "65%" },
                  ].map(({ color, pct }) => (
                    <div key={pct} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: color }} />
                      <div className="h-1.5 rounded-full flex-1 overflow-hidden" style={{ background: `${color}30` }}>
                        <div className="h-full rounded-full animate-pulse" style={{ width: pct, background: color }} />
                      </div>
                      <span className="text-xs text-[#8b8fa3] font-mono w-8">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
