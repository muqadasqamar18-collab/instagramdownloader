import React from "react";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("layouts.home.footer");

  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-[color:var(--ig-dark)] py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-6">
        <p className="text-sm text-white/70">
          {t("copyright", { year })}
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white"
          >
            {t("links.terms")}
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white"
          >
            {t("links.privacy")}
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white"
          >
            {t("links.contact")}
          </a>
          <a
            href="#"
            className="text-sm text-white/70 hover:text-white"
          >
            {t("links.reportAbuse")}
          </a>
        </div>
      </div>
    </footer>
  );
}
