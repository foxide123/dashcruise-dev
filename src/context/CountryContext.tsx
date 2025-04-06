// context/CountryContext.tsx
"use client";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type CountryContextType = {
  language: string;
  currency: string;
  setLanguage: (lang: string) => void;
  setCurrency: (cur: string) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState("🇺🇸 en");
  const [currency, setCurrency] = useState("usd");
  const pathname = usePathname();

  useEffect(() => {
    const savedLocale = getCookie("locale");
    const savedCurrency = getCookie("currency");

    // Fallback to URL-based locale
    const localeFromPath = pathname?.split("/")[1];
    const resolvedLocale = savedLocale || localeFromPath;

    if (resolvedLocale === 'de') setLanguage("🇩🇪 de");
    else setLanguage("🇺🇸 en");

    if (savedCurrency) {
      setCurrency(savedCurrency as string);
    }
  }, []);

  return (
    <CountryContext.Provider
      value={{ language, currency, setLanguage, setCurrency }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context)
    throw new Error("useCountry must be used within CountryProvider");
  return context;
};
