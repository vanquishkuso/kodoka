"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Cookies from "js-cookie";

interface LanguageSwitcherProps {
  currentLocale: string;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: string) => {
    // Set cookie for preference
    Cookies.set("locale", newLocale, { expires: 365 });

    // Get the pathname without the current locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{currentLocale}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background  border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          <button
            onClick={() => switchLanguage("sv")}
            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              currentLocale === "sv" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
          >
            Svenska
          </button>
          <button
            onClick={() => switchLanguage("en")}
            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              currentLocale === "en" ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
