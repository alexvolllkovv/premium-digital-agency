/**
 * Nocturne Control Room design reminder: all editable business data stays centralized;
 * the interface remains precise, calm and free of invented facts.
 */
export const company = {
  name: "Цифровое рекламное агентство",
  legalName: "ИП Лобанов Валерий Алексеевич",
  shortName: "Цифровое рекламное\nагентство",
  description:
    "Контекстная и таргетированная реклама, SMM, ведение рекламных кабинетов и аналитика рекламных кампаний.",
  phone: "+79877332525",
  email: "eridpro@yandex.ru",
  legalAddress: "улица Димитрова, 58, Йошкар-Ола, Республика Марий Эл, 424019",
  inn: "121529808124",
  ogrnip: "",
  siteUrl: "https://eridpro.ru",
} as const;

export const contactLabels = {
  phone: company.phone,
  email: company.email,
  legalAddress: company.legalAddress,
  inn: company.inn,
  ogrnip: company.ogrnip,
} as const;
