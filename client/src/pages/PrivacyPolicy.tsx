/**
 * Nocturne Control Room design reminder: legal content uses the same dark, exact
 * interface language with clear disclosure rather than decorative persuasion.
 */
import { useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { company } from "@/data/company";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Политика конфиденциальности — ${company.name}`;
  }, []);

  return (
    <div className="site-shell legal-page">
      <SiteHeader />
      <main className="legal-main">
        <div className="legal-hero">
          <Link className="back-link" href="/"><ChevronLeft size={16} />На главную</Link>
          <p className="eyebrow"><ShieldCheck size={13} /> ПРАВОВАЯ ИНФОРМАЦИЯ</p>
          <h1>Политика<br /><em>конфиденциальности.</em></h1>
          <p className="legal-intro">Здесь описаны принципы обработки данных, которые пользователь добровольно указывает в форме обращения на сайте.</p>
        </div>
        <article className="legal-document">
          <section>
            <p className="section-number">01</p>
            <h2>Общие положения</h2>
            <p>Настоящая политика описывает подход к обработке персональных данных, которые пользователь добровольно указывает в форме обратной связи на сайте «{company.name}».</p>
            <p>Оператором для целей настоящей политики является «{company.name}». Идентификационные сведения и контакт для обращений по вопросам данных публикуются в разделе «Контакты» при их наличии.</p>
          </section>
          <section>
            <p className="section-number">02</p>
            <h2>Какие данные может запросить форма</h2>
            <p>Форма обратной связи ограничена данными, необходимыми для первичного обсуждения задачи: имя, компания, номер телефона, адрес электронной почты и комментарий пользователя. Пользователь передаёт эти сведения добровольно.</p>
          </section>
          <section>
            <p className="section-number">03</p>
            <h2>Цель обработки</h2>
            <p>Данные используются исключительно для ответа на обращение, обсуждения возможного формата работы и дальнейшей коммуникации, если пользователь её продолжает. Сайт не заявляет сбор данных, не связанных с этой целью.</p>
          </section>
          <section id="consent">
            <p className="section-number">04</p>
            <h2>Согласие пользователя</h2>
            <p>Отправляя форму и отмечая чекбокс согласия, пользователь подтверждает, что ознакомился с настоящей политикой и даёт согласие на обработку переданных данных в целях, описанных выше. Пользователь вправе отозвать согласие через опубликованный канал связи с оператором.</p>
          </section>
          <section>
            <p className="section-number">05</p>
            <h2>Обновление документа</h2>
            <p>Текст может быть изменён при обновлении способов обработки данных или юридически значимых сведений. Актуальная версия публикуется по этому адресу.</p>
          </section>
        </article>
        <Link className="legal-contact-link" href="/contacts">Открыть страницу контактов <ArrowUpRight size={17} /></Link>
      </main>
      <SiteFooter />
    </div>
  );
}
