/**
 * Nocturne Control Room design reminder: asymmetric luxury-fintech panels, Aurum
 * signals and data-trace motifs make advertising feel like a controllable system.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChartNoAxesCombined,
  CircleDot,
  Crosshair,
  Gauge,
  LineChart,
  MousePointer2,
  Orbit,
  PanelsTopLeft,
  Send,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { company } from "@/data/company";

const services = [
  { number: "01", title: "Контекстная\nреклама", text: "Работа с поисковым спросом, структурой кампаний, объявлениями, семантикой и аналитикой.", icon: Crosshair, detail: "ПОИСКОВЫЙ СПРОС" },
  { number: "02", title: "Таргетированная\nреклама", text: "Работа с аудиториями, креативами, гипотезами и системным тестированием.", icon: Target, detail: "АУДИТОРИИ И ГИПОТЕЗЫ" },
  { number: "03", title: "Ведение рекламных\nкабинетов", text: "Регулярный контроль, анализ показателей, оптимизация и развитие рекламных кампаний.", icon: PanelsTopLeft, detail: "ПОСТОЯННЫЙ КОНТРОЛЬ" },
  { number: "04", title: "SMM", text: "Системная работа с контентом и присутствием бизнеса в социальных сетях.", icon: Sparkles, detail: "КОММУНИКАЦИЯ БРЕНДА" },
  { number: "05", title: "Аналитика\nкампаний", text: "Настройка и анализ ключевых показателей для решений, основанных на данных.", icon: BarChart3, detail: "СВЯЗЬ МЕТРИК" },
  { number: "06", title: "Оптимизация\nкампаний", text: "Проверка гипотез и последовательное улучшение рекламной системы.", icon: Gauge, detail: "ПОСЛЕДОВАТЕЛНОЕ УЛУЧШЕНИЕ" },
];

const approach = [
  ["01", "Анализ", "Изучаем продукт, аудиторию, текущие данные и бизнес-задачу."],
  ["02", "Стратегия", "Определяем каналы, гипотезы и точки контроля рекламной системы."],
  ["03", "Запуск", "Настраиваем кампании, аналитику и необходимые рекламные инструменты."],
  ["04", "Оптимизация", "Анализируем сигналы, тестируем гипотезы и развиваем кампании."],
] as const;

const process = [
  ["01", "Знакомство", "Сверяем задачу, контекст бизнеса и ожидаемый формат взаимодействия."],
  ["02", "Анализ задачи", "Выявляем исходные данные, ограничения и точки для дальнейшей проверки."],
  ["03", "Подготовка системы", "Собираем структуру кампаний, аналитику и контур контроля."],
  ["04", "Запуск и тестирование", "Запускаем согласованные сценарии и наблюдаем первые сигналы."],
  ["05", "Аналитика и оптимизация", "Сопоставляем данные, делаем выводы и улучшаем систему."],
] as const;

const audiences = [
  ["01", "Для бизнеса", "Когда важно выстроить понятный и контролируемый рекламный контур."],
  ["02", "Для предпринимателей", "Когда нужно держать связь между рекламным бюджетом и задачей бизнеса."],
  ["03", "Для действующей рекламы", "Когда кампании уже работают, но требуют прозрачности и развития."],
  ["04", "Для старта в digital", "Когда важно начать с продуманной структуры, а не набора случайных запусков."],
] as const;

function HeroConsole() {
  return (
    <div className="hero-console" aria-label="Демонстрационная аналитическая схема">
      <img className="console-art" src="/manus-storage/hero-analytical-console_859f088b.png" alt="Абстрактная аналитическая визуализация" />
      <div className="console-overlay" />
      <div className="console-ruler console-ruler-top"><span>СИСТЕМА КОНТРОЛЯ</span><i /></div>
      <div className="console-card console-card-primary">
        <div className="console-card-head"><span>ДИНАМИКА СИГНАЛОВ</span><TrendingUp size={14} /></div>
        <svg viewBox="0 0 260 92" role="img" aria-label="Схематичный растущий график без значений">
          <path className="grid-line" d="M0 22 H260 M0 46 H260 M0 70 H260" />
          <path className="chart-area" d="M0 83 C25 76 34 66 52 71 C71 77 74 48 98 55 C119 61 126 35 147 46 C168 57 183 31 201 36 C223 42 231 18 260 11 V92 H0Z" />
          <path className="chart-line" d="M0 83 C25 76 34 66 52 71 C71 77 74 48 98 55 C119 61 126 35 147 46 C168 57 183 31 201 36 C223 42 231 18 260 11" />
          <circle className="chart-node" cx="201" cy="36" r="4" />
        </svg>
      </div>
      <div className="console-card console-card-small"><MousePointer2 size={16} /><span>КЛИКИ</span><i /></div>
      <div className="console-card console-card-small console-card-two"><CircleDot size={16} /><span>ДЕЙСТВИЯ</span><i /></div>
      <div className="console-card console-card-pulse"><span>СТОИМОСТЬ ОБРАЩЕНИЯ</span><div className="pulse-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
      <div className="console-node console-node-a" /><div className="console-node console-node-b" /><div className="console-node console-node-c" />
    </div>
  );
}

function SectionTag({ children }: { children: string }) {
  return <p className="section-tag"><span className="section-tag-line" />{children}</p>;
}

export default function Home() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Цифровое рекламное агентство — контекстная и таргетированная реклама";
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: company.name,
      description: company.description,
      serviceType: ["Контекстная реклама", "Таргетированная реклама", "SMM", "Аналитика рекламных кампаний"],
    });
    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell home-page">
      <div className="control-thread" aria-hidden="true"><i /><b /><b /><b /><b /></div>
      <SiteHeader />
      <main>
        <section className="hero section-frame" id="hero">
          <div className="hero-grid-line hero-grid-line-one" aria-hidden="true" />
          <div className="hero-grid-line hero-grid-line-two" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> ЦИФРОВАЯ РЕКЛАМА <b /> АНАЛИТИКА <b /> ОПТИМИЗАЦИЯ</p>
              <h1>Реклама,<br />которой можно<br /><em>управлять.</em></h1>
              <p className="hero-description">Настраиваем и ведём digital-рекламу для компаний и предпринимателей — от запуска кампаний до аналитики и оптимизации результата.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contacts"><span>Обсудить задачу</span><ArrowUpRight size={18} /></a>
                <a className="button button-secondary" href="#services"><span className="button-dot" />Посмотреть услуги</a>
              </div>
            </div>
            <HeroConsole />
          </div>
          <div className="hero-floor">
            <div className="hero-scroll"><span>ЛИСТАЙТЕ, ЧТОБЫ ПРОДОЛЖИТЬ</span><ArrowDownRight size={15} /></div>
            <p>РЕКЛАМА <span>→</span> ДАННЫЕ <span>→</span> РЕШЕНИЯ <span>→</span> РЕЗУЛЬТАТ</p>
          </div>
        </section>

        <section className="about section-frame" id="about">
          <div className="about-header"><SectionTag>01 / О КОМПАНИИ</SectionTag><p className="micro-copy">БЕЗ ЛИШНЕГО ШУМА</p></div>
          <div className="about-layout">
            <div className="about-copy">
              <h2>Digital без<br /><em>лишнего шума.</em></h2>
              <p className="lead-copy">Мы работаем с интернет-рекламой как с системой: анализируем задачу, определяем подходящие каналы, запускаем кампании, отслеживаем показатели и последовательно оптимизируем результат.</p>
              <p>Наша задача — не просто привести трафик. Важно понимать, откуда он приходит, как ведёт себя пользователь и на каком этапе возникает потеря эффективности.</p>
              <a href="#approach" className="text-link">Как устроен подход <ArrowUpRight size={16} /></a>
            </div>
            <div className="data-column">
              <img src="/manus-storage/system-geometry_1a1c7b93.png" alt="Абстрактная система аналитических связей" loading="lazy" />
              <div className="data-ladder" aria-label="Этапы рекламной системы">
                {["DATA", "TRAFFIC", "CONVERSION", "ANALYSIS", "OPTIMIZATION"].map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong>{index < 4 && <i aria-hidden="true" />}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="services section-frame" id="services">
          <div className="section-head split-head"><div><SectionTag>02 / УСЛУГИ</SectionTag><h2>Шесть направлений.<br /><em>Одна система контроля.</em></h2></div><p>Выбираем не модные инструменты, а то, что соответствует задаче, данным и логике рекламной кампании.</p></div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <article className="service-card" data-service={service.number} key={service.number}>
                <div className="service-top"><span>{service.number}</span><Icon size={19} strokeWidth={1.45} /></div>
                <div className="service-graphic" aria-hidden="true"><i /><i /><i /><b /></div>
                <p className="service-detail">{service.detail}</p>
                <h3>{service.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{service.text}</p>
                <span className="service-arrow"><ArrowUpRight size={18} /></span>
              </article>;
            })}
          </div>
        </section>

        <section className="approach section-frame" id="approach">
          <div className="approach-top"><SectionTag>03 / НАШ ПОДХОД</SectionTag><div><h2>Не просто запускаем рекламу.<br /><em>Строим систему.</em></h2><p>Прозрачная последовательность помогает связать решение с задачей, а действие — с наблюдаемым сигналом.</p></div></div>
          <div className="approach-timeline">
            <div className="timeline-track" aria-hidden="true"><i /><i /><i /><i /></div>
            {approach.map(([number, title, text], index) => <article className="approach-step" key={number}><div className="step-node"><span>{number}</span><b /></div><h3>{title}</h3><p>{text}</p><span className="step-meta">CONTROL / 0{index + 1}</span></article>)}
          </div>
        </section>

        <section className="signal-flow section-frame">
          <div className="signal-art"><img src="/manus-storage/funnel-signal-flow_1efa831a.png" alt="Схема движения сигнала в рекламной системе" loading="lazy" /></div>
          <div className="signal-content"><SectionTag>04 / СИСТЕМНОЕ МЫШЛЕНИЕ</SectionTag><h2>Клик — это<br />только <em>начало.</em></h2><p>Оценивать рекламу только по количеству кликов недостаточно. Важно видеть всю цепочку взаимодействия пользователя с бизнесом.</p><a className="text-link" href="#process">Смотреть процесс работы <ArrowUpRight size={16} /></a></div>
          <div className="funnel-chain" aria-label="Цепочка взаимодействия пользователя"><div><span>01</span>Показы</div><i /><div><span>02</span>Клик</div><i /><div><span>03</span>Посещение</div><i /><div><span>04</span>Действие</div><i /><div><span>05</span>Заявка</div><i /><div><span>06</span>Клиент</div></div>
        </section>

        <section className="process section-frame" id="process">
          <div className="section-head process-head"><div><SectionTag>05 / ПРОЦЕСС РАБОТЫ</SectionTag><h2>От первого разговора<br />до <em>следующего решения.</em></h2></div><div className="process-legend"><span><i />ТОЧКА КОНТРОЛЯ</span><span><i />СИСТЕМНЫЙ ШАГ</span></div></div>
          <div className="process-list">{process.map(([number, title, text]) => <article key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="process-plus">+</span></article>)}</div>
        </section>

        <section className="audiences section-frame">
          <div className="audiences-header"><SectionTag>06 / КОМУ ПОДХОДИТ</SectionTag><h2>Работаем с задачами,<br />где важны <em>данные и результат.</em></h2></div>
          <div className="audience-grid">{audiences.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="audience-cross" aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="contact-section section-frame" id="contacts">
          <img className="contact-art" src="/manus-storage/closing-orbit_abe4c2dc.png" alt="Абстрактная тёмная композиция с золотой орбитой" loading="lazy" />
          <div className="contact-inner">
            <div className="contact-copy"><SectionTag>07 / КОНТАКТЫ</SectionTag><h2>Обсудим<br /><em>задачу?</em></h2><p>Расскажите, что хотите получить от digital-рекламы. Чем точнее исходный контекст, тем предметнее будет первый разговор.</p><Link className="text-link" href="/contacts">Контактная информация <ArrowUpRight size={16} /></Link></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid"><label><span>Имя</span><input name="name" type="text" autoComplete="name" required placeholder="Как к вам обращаться" /></label><label><span>Компания</span><input name="company" type="text" autoComplete="organization" placeholder="Название компании" /></label><label><span>Телефон</span><input name="phone" type="tel" autoComplete="tel" required placeholder="+7" /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.ru" /></label></div>
              <label className="full-field"><span>Комментарий</span><textarea name="comment" rows={3} placeholder="Кратко опишите задачу" /></label>
              <label className="consent"><input type="checkbox" required /><span>Я согласен(на) на обработку персональных данных в соответствии с <Link href="/privacy-policy">политикой конфиденциальности</Link>.</span></label>
              <button className="button button-primary form-submit" type="submit"><span>Отправить обращение</span><Send size={17} /></button>
              {sent && <p className="form-notice" aria-live="polite"><span>●</span> Форма готова к подключению корпоративного канала связи или CRM.</p>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
