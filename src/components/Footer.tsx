import { Zap } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Footer() {
  const { t } = useI18n();
  const { categories, links } = t.footer;

  const sections = [
    { label: categories.product, items: links.product },
    { label: categories.resources, items: links.resources },
    { label: categories.company, items: links.company },
    { label: categories.legal, items: links.legal },
  ];

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-['Space_Grotesk'] text-lg font-semibold tracking-tight text-[#f0f1f5]">
                FUCONNECT
              </span>
            </a>
            <p className="text-sm text-[#8b8fa3] leading-relaxed mb-6 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#5b5f73] hover:text-[#f0f1f5] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#5b5f73] hover:text-[#f0f1f5] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#5b5f73] hover:text-[#f0f1f5] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {sections.map(({ label, items }) => (
            <div key={label}>
              <h4 className="text-sm font-medium text-[#f0f1f5] mb-4">{label}</h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8b8fa3] hover:text-[#f0f1f5] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5b5f73]">
            &copy; {new Date().getFullYear()} FUCONNECT PTE. LTD. All rights reserved.
          </p>
          <p className="text-sm text-[#5b5f73]">
            2 Venture Drive #06-09 Vision Exchange, Singapore 608526
          </p>
        </div>
      </div>
    </footer>
  );
}
