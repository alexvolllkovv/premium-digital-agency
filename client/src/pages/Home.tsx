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
import { trpc } from "@/lib/trpc";

const services = [
  { number: "01", title: "Контекстная\nреклама", text: "Работа с поисковым спросом, структурой кампаний, объявлениями, семантикой и аналитикой.", icon: Crosshair, detail: "ПОИСКОВЫЙ СПРОС" },
  { number: "02", title: "Таргетированная\nреклама", text: "Работа с аудиториями, креативами, гипотезами и системным тестированием.", icon: Target, detail: "АУДИТОРИИ И ГИПОТЕЗЫ" },
  { number: "03", title: "Ведение рекламных\nкабинетов", text: "Регулярный контроль, анализ показателей, оптимизация и развитие рекламных кампаний.", icon: PanelsTopLeft, detail: "ПОСТОЯННЫЙ КОНТРОЛЬ" },
  { number: "04", title: "SMM", text: "Системная работа с контентом и присутствием бизнеса в социальных сетях.", icon: Sparkles, detail: "КОММУНИКАЦИЯ БРЕНДА" },
  { number: "05", title: "Аналитика\nкампаний", text: "Настройка и анализ ключевых показателей для решений, основанных на данных.", icon: BarChart3, detail: "СВЯЗЬ МЕТРИК" },
  { number: "06", title: "Оптимизация\nкампаний", text: "Проверка гипотез и последовательное улучшение рекламной системы.", icon: Gauge, detail: "ПОСЛЕДОВАТЕЛНОЕ УЛУЧШЕНИЕ" },
];

const analysisAreas = [
  ["01", "Структура кампаний", "Проверяем логику групп, объявлений, целей и распределения бюджета."],
  ["02", "Путь пользователя", "Смотрим, как человек проходит путь от первого сигнала до действия."],
  ["03", "Качество сигнала", "Отделяем полезные данные от шума и находим точки потери эффективности."],
  ["04", "Стоимость обращения", "Сопоставляем вложения и обращения, чтобы видеть реальную цену контакта."],
  ["05", "Гипотезы роста", "Формируем следующие проверки и приоритеты для последовательного улучшения."],
] as const;

const faqItems = [
  ["С чего начинается работа?", "С короткого разбора контекста бизнеса, текущей рекламы, целей и доступных данных. После этого определяем ближайший предметный шаг."],
  ["Можно ли начать, если реклама уже запущена?", "Да. Сначала изучаем структуру кампаний, аналитику и точки потери эффективности, а затем предлагаем порядок улучшений."],
  ["Какие рекламные каналы вы используете?", "Каналы выбираются под задачу, аудиторию, данные и ограничения проекта — без универсального набора инструментов."],
  ["Что нужно подготовить до старта?", "Описание задачи, доступные материалы, текущие данные и желаемый формат связи. Если чего-то не хватает, это уточняется на первом разговоре."],
  ["Как вы понимаете, что рекламу нужно оптимизировать?", "По качеству сигналов на разных этапах пользовательского пути, а не только по количеству кликов."],
  ["Можно ли подключить только аналитику или ведение кабинета?", "Формат работы определяется после первичного разбора: можно обсудить отдельное направление или системное сопровождение."],
  ["Как выглядит первый контакт?", "Это короткий предметный разговор о задаче, контексте и возможном следующем шаге — без лишних презентаций и обещаний."],
  ["Работаете ли вы с предпринимателями и небольшими командами?", "Да, если есть понятная задача и готовность принимать решения на основе данных."],
] as const;

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
  const controlNodes = ["ДАННЫЕ", "ТРАФИК", "КОНВЕРСИЯ", "АНАЛИЗ", "ОПТИМИЗАЦИЯ"];
  return (
    <div className="hero-console control-console" data-reveal="hero" aria-label="Схема управления рекламной системой">
      <img className="console-art" src="/manus-storage/hero-analytical-cockpit-ab_55c098ab.png" alt="Скульптурная аналитическая система с орбитами и панелями" />
      <div className="console-overlay" />
      <div className="control-console-header"><span>СИСТЕМА КОНТРОЛЯ</span><i /><b>LIVE / 01</b></div>
      <div className="control-rail control-rail-left" aria-hidden="true" />
      <div className="control-rail control-rail-right" aria-hidden="true" />
      <div className="control-core"><div className="control-core-ring" /><div className="control-core-dot" /><span>РЕШЕНИЕ</span></div>
      {controlNodes.map((label, index) => <div className={`control-node control-node-${index + 1}`} key={label}><span>0{index + 1}</span><strong>{label}</strong><i /></div>)}
      <div className="control-metric control-metric-top"><span>КАЧЕСТВО СИГНАЛА</span><strong>СТАБИЛЬНО</strong><i><b /><b /><b /><b /><b /></i></div>
      <div className="control-metric control-metric-bottom"><span>СЛЕДУЮЩИЙ ШАГ</span><strong>ОПТИМИЗАЦИЯ</strong><ArrowUpRight size={14} /></div>
      <div className="control-legend"><span>СИГНАЛ</span><i /><span>ДЕЙСТВИЕ</span><i /><span>ВЫВОД</span></div>
    </div>
  );
}

function SectionTag({ children }: { children: string }) {
  return <p className="section-tag"><span className="section-tag-line" />{children}</p>;
}

export default function Home() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formNotice, setFormNotice] = useState("");
  const contactSubmit = trpc.contact.submit.useMutation();

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

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8%" });
      revealItems.forEach((item) => observer.observe(item));
      return () => { observer.disconnect(); schema.remove(); };
    }
    return () => schema.remove();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = String(values.get("name") ?? "").trim();
    const companyName = String(values.get("company") ?? "").trim();
    const phone = String(values.get("phone") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const comment = String(values.get("comment") ?? "").trim();
    const consent = values.get("consent") === "on";
    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Укажите имя — минимум 2 символа.";
    if (!/^[+]?([0-9()\\s-]){10,}$/.test(phone)) nextErrors.phone = "Проверьте номер телефона.";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) nextErrors.email = "Введите корректный email.";
    if (!consent) nextErrors.consent = "Нужно согласие на обработку данных.";
    setFormErrors(nextErrors);
    setFormNotice("");
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }
    try {
      const result = await contactSubmit.mutateAsync({ name, company: companyName || undefined, phone, email, comment: comment || undefined, consent: true });
      setSent(true);
      setFormNotice(result.message);
      form.reset();
    } catch {
      setSent(false);
      setFormNotice("Не удалось подготовить заявку. Проверьте соединение и попробуйте ещё раз.");
    }
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
            <div className="hero-copy" data-reveal="hero">
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

        <section className="about section-frame" id="about" data-reveal="section">
          <div className="about-header"><SectionTag>01 / О КОМПАНИИ</SectionTag><p className="micro-copy">БЕЗ ЛИШНЕГО ШУМА</p></div>
          <div className="about-layout">
            <div className="about-copy">
              <h2>Digital без<br /><em>лишнего шума.</em></h2>
              <p className="lead-copy">Мы работаем с интернет-рекламой как с системой: анализируем задачу, определяем подходящие каналы, запускаем кампании, отслеживаем показатели и последовательно оптимизируем результат.</p>
              <p>Наша задача — не просто привести трафик. Важно понимать, откуда он приходит, как ведёт себя пользователь и на каком этапе возникает потеря эффективности.</p>
              <a href="#approach" className="text-link">Как устроен подход <ArrowUpRight size={16} /></a>
            </div>
            <div className="signal-map" data-reveal="card" aria-label="Сигнальная карта рекламной системы">
              <div className="signal-map-top"><span>СИГНАЛЬНАЯ КАРТА</span><i /><b>05 ШАГОВ</b></div>
              <div className="signal-map-route" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="signal-map-list">{["ДАННЫЕ", "ТРАФИК", "КОНВЕРСИЯ", "АНАЛИЗ", "ОПТИМИЗАЦИЯ"].map((label, index) => <div className="signal-map-step" key={label}><span>0{index + 1}</span><strong>{label}</strong><small>{["Контекст", "Внимание", "Действие", "Вывод", "Улучшение"][index]}</small><b /></div>)}</div>
              <div className="signal-map-foot"><span>КАЖДЫЙ ЭТАП ОСТАВЛЯЕТ ПРОВЕРЯЕМЫЙ СИГНАЛ</span><ArrowUpRight size={14} /></div>
            </div>
          </div>
        </section>

        <section className="services section-frame" id="services" data-reveal="section">
          <div className="section-head split-head"><div><SectionTag>02 / УСЛУГИ</SectionTag><h2>Шесть направлений.<br /><em>Одна система контроля.</em></h2></div><p>Выбираем не модные инструменты, а то, что соответствует задаче, данным и логике рекламной кампании.</p></div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <article className="service-card" data-service={service.number} data-reveal="card" key={service.number}>
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

        <section className="analysis-section section-frame" id="analysis" data-reveal="section">
          <div className="analysis-heading"><SectionTag>03 / ЧТО АНАЛИЗИРУЕМ</SectionTag><h2>Смотрим глубже,<br /><em>чем просто клики.</em></h2><p>До запуска и в процессе работы раскладываем рекламную систему на понятные точки контроля — без неподтверждённых обещаний и декоративных цифр.</p></div>
          <div className="analysis-grid">{analysisAreas.map(([number, title, text]) => <article className="analysis-card" data-reveal="card" key={number}><span>{number}</span><div className="analysis-orbit" aria-hidden="true"><i /><i /><b /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight size={17} /></article>)}</div>
        </section>

        <section className="approach section-frame" id="approach" data-reveal="section">
          <div className="approach-top"><SectionTag>04 / НАШ ПОДХОД</SectionTag><div><h2>Не просто запускаем рекламу.<br /><em>Строим систему.</em></h2><p>Прозрачная последовательность помогает связать решение с задачей, а действие — с наблюдаемым сигналом.</p></div></div>
          <div className="approach-timeline">
            <div className="timeline-track" aria-hidden="true"><i /><i /><i /><i /></div>
            {approach.map(([number, title, text], index) => <article className="approach-step" key={number}><div className="step-node"><span>{number}</span><b /></div><h3>{title}</h3><p>{text}</p><span className="step-meta">CONTROL / 0{index + 1}</span></article>)}
          </div>
        </section>

        <section className="signal-flow section-frame" data-reveal="section">
          <div className="signal-art"><img src="/manus-storage/funnel-signal-flow_1efa831a.png" alt="Схема движения сигнала в рекламной системе" loading="lazy" /></div>
          <div className="signal-content"><SectionTag>05 / СИСТЕМНОЕ МЫШЛЕНИЕ</SectionTag><h2>Клик — это<br />только <em>начало.</em></h2><p>Оценивать рекламу только по количеству кликов недостаточно. Важно видеть всю цепочку взаимодействия пользователя с бизнесом.</p><a className="text-link" href="#process">Смотреть процесс работы <ArrowUpRight size={16} /></a></div>
          <div className="funnel-chain" aria-label="Цепочка взаимодействия пользователя"><div><span>01</span>Показы</div><i /><div><span>02</span>Клик</div><i /><div><span>03</span>Посещение</div><i /><div><span>04</span>Действие</div><i /><div><span>05</span>Заявка</div><i /><div><span>06</span>Клиент</div></div>
        </section>

        <section className="process section-frame" id="process" data-reveal="section">
          <div className="section-head process-head"><div><SectionTag>06 / ПРОЦЕСС РАБОТЫ</SectionTag><h2>От первого разговора<br />до <em>следующего решения.</em></h2></div><div className="process-legend"><span><i />ТОЧКА КОНТРОЛЯ</span><span><i />СИСТЕМНЫЙ ШАГ</span></div></div>
          <div className="process-list">{process.map(([number, title, text]) => <article key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="process-plus">+</span></article>)}</div>
        </section>

        <section className="audiences section-frame" data-reveal="section">
          <div className="audiences-header"><SectionTag>07 / КОМУ ПОДХОДИТ</SectionTag><h2>Работаем с задачами,<br />где важны <em>данные и результат.</em></h2></div>
          <div className="audience-grid">{audiences.map(([number, title, text]) => <article key={number}><span>{number}</span><div className="audience-cross" aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="faq-section section-frame" id="faq" data-reveal="section">
          <div className="faq-heading"><SectionTag>08 / FAQ</SectionTag><div><h2>Вопросы перед<br /><em>первым шагом.</em></h2><p>Коротко отвечаем на то, что обычно важно понять до начала работы.</p></div></div>
          <div className="faq-list">{faqItems.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}><button type="button" className="faq-trigger" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(isOpen ? null : index)}><span className="faq-number">0{index + 1}</span><span>{question}</span><i aria-hidden="true">+</i></button><div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-hidden={!isOpen}><p>{answer}</p></div></article>; })}</div>
        </section>

        <section className="contact-section section-frame" id="contacts" data-reveal="section">
          <img className="contact-art" src="/manus-storage/closing-orbit_abe4c2dc.png" alt="Абстрактная тёмная композиция с золотой орбитой" loading="lazy" />
          <div className="contact-inner">
            <div className="contact-copy"><SectionTag>09 / КОНТАКТЫ</SectionTag><h2>Обсудим<br /><em>задачу?</em></h2><p>Расскажите, что хотите получить от digital-рекламы. Чем точнее исходный контекст, тем предметнее будет первый разговор.</p><Link className="text-link" href="/contacts">Контактная информация <ArrowUpRight size={16} /></Link></div>
            <form className={`contact-form ${sent ? "is-sent" : ""}`} onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <label className={formErrors.name ? "has-error" : ""}><span>Имя</span><input name="name" type="text" autoComplete="name" aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "form-error-name" : undefined} placeholder="Как к вам обращаться" />{formErrors.name && <small id="form-error-name" className="field-error">{formErrors.name}</small>}</label>
                <label><span>Компания</span><input name="company" type="text" autoComplete="organization" placeholder="Название компании" /></label>
                <label className={formErrors.phone ? "has-error" : ""}><span>Телефон</span><input name="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(formErrors.phone)} aria-describedby={formErrors.phone ? "form-error-phone" : undefined} placeholder="+7" />{formErrors.phone && <small id="form-error-phone" className="field-error">{formErrors.phone}</small>}</label>
                <label className={formErrors.email ? "has-error" : ""}><span>Email</span><input name="email" type="email" autoComplete="email" aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "form-error-email" : undefined} placeholder="name@company.ru" />{formErrors.email && <small id="form-error-email" className="field-error">{formErrors.email}</small>}</label>
              </div>
              <label className="full-field"><span>Комментарий</span><textarea name="comment" rows={3} placeholder="Кратко опишите задачу" /></label>
              <label className={`consent ${formErrors.consent ? "has-error" : ""}`}><input name="consent" type="checkbox" aria-invalid={Boolean(formErrors.consent)} /><span>Я согласен(на) на обработку персональных данных в соответствии с <Link href="/privacy-policy">политикой конфиденциальности</Link>.</span>{formErrors.consent && <small className="field-error">{formErrors.consent}</small>}</label>
              <button className="button button-primary form-submit" type="submit" disabled={contactSubmit.isPending}><span>{contactSubmit.isPending ? "Проверяем заявку…" : sent ? "Обращение подготовлено" : "Отправить обращение"}</span>{sent ? <Sparkles size={17} /> : <Send size={17} />}</button>
              {sent && <div className="form-success-state" role="status" aria-live="polite"><span className="success-mark"><Sparkles size={17} /></span><div><strong>Заявка прошла проверку</strong><p>{formNotice}</p></div></div>}
              {!sent && formNotice && <div className="form-submit-error" role="alert">{formNotice}</div>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
