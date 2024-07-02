import { useEffect, useState } from 'react';
import jsonDataen from "./traslationEn.json";
import jsonDatafr from "./translateFr.json";
import jsonDataar from "./translateAr.json";

type TranslationData = {
  [key: string]: string;
};

// Function to get the value from JSON data
export function getJsonValue(key: string): string {
  // Fallback data for server-side rendering
  let data: TranslationData = jsonDatafr; // Default to French
  if (typeof window !== "undefined") {
    // Code will run only in the browser
    const lang = localStorage.getItem('lang') || "fr";
    switch (lang) {
      case "fr":
        data = jsonDatafr;
        break;
      case "ar":
        data = jsonDataar;
        break;
      case "en":
        data = jsonDataen;
        break;
      default:
        data = jsonDatafr;
        break;
    }
  }

  // Check if the key exists in data
  if (key in data) {
    // Access the value and assert its type as string
    const value = data[key] as string;
    return value;
  } else {
    return key; // If key doesn't exist, return the key itself
  }
}

// Custom hook to handle language setting on client side
export function useLanguage() {
  const [language, setLanguage] = useState<string>("fr");

  useEffect(() => {
    const lang = localStorage.getItem('lang') || "fr";
    setLanguage(lang);
  }, []);

  return language;
}
