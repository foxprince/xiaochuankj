import { createContext, useContext, useState, type ReactNode } from "react";
import zh, { type Locale } from "../locales/zh";
import en from "../locales/en";

type Lang = "zh" | "en";

interface I18nContextValue {
  lang: Lang;
  t: Locale;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const locales: Record<Lang, Locale> = { zh, en };

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "en" || stored === "zh" ? stored : "zh";
  });

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, t: locales[lang], setLang: handleSetLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
