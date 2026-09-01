/**
 * Nocturne Control Room design reminder: all editable business data stays centralized;
 * the interface remains precise, calm and free of invented facts.
 */
export const company = {
  name: "Цифровое рекламное агентство",
  shortName: "Цифровое рекламное\nагентство",
  description:
    "Контекстная и таргетированная реклама, SMM, ведение рекламных кабинетов и аналитика рекламных кампаний.",
  phone: "",
  email: "",
  legalAddress: "",
  inn: "",
  ogrnip: "",
  siteUrl: "",
} as const;

export const contactLabels = {
  phone: company.phone || "Будет добавлен перед публикацией",
  email: company.email || "Будет добавлен перед публикацией",
  legalAddress: company.legalAddress || "Будет добавлен перед публикацией",
  inn: company.inn || "Будет добавлен перед публикацией",
  ogrnip: company.ogrnip || "Будет добавлен перед публикацией",
} as const;
