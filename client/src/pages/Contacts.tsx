/**
 * Nocturne Control Room design reminder: contact information is presented as a
 * transparent control panel; unknown facts remain deliberately unfilled.
 */
import { useEffect } from "react";
import { ArrowUpRight, ChevronLeft, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { company } from "@/data/company";

const details = [
  ["ИП", company.legalName],
  ["Телефон", company.phone],
  ["Email", company.email],
  ["Юридический адрес", company.legalAddress],
  ["ИНН", company.inn],
  ["ОГРНИП", company.ogrnip],
].filter(([, value]) => Boolean(value));

export default function Contacts() {
  useEffect(() => {
    document.title = `Контакты — ${company.name}`;
  }, []);

  return (
    <div className="site-shell contacts-page">
      <SiteHeader />
      <main className="contacts-main">
        <div className="contacts-topline">
          <Link className="back-link" href="/"><ChevronLeft size={16} />На главную</Link>
          <p className="eyebrow">КОНТАКТНАЯ ИНФОРМАЦИЯ <span className="eyebrow-dot" /></p>
        </div>
        <section className="contacts-heading">
          <h1>Открыты<br />к <em>диалогу.</em></h1>
          <p>Начните с короткого описания задачи — это поможет сразу перейти к предметному разговору о каналах, данных и формате работы.</p>
        </section>
        <section className="contacts-panel">
          <div className="contacts-panel-intro">
            <p className="section-number">КОНТАКТЫ</p>
            <h2>{company.name}</h2>
            <p className="contacts-legal-name">{company.legalName}</p>
            <span className="panel-pulse"><i /> Понятный следующий шаг — обсудить задачу</span>
          </div>
          <dl>
            {details.length > 0 ? details.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            )) : <div className="contacts-empty"><dt>ФОРМАТ СВЯЗИ</dt><dd>Оставьте задачу через форму на главной странице — это позволит начать диалог в подходящем контексте.</dd></div>}
          </dl>
        </section>
        <section className="map-placeholder" aria-label="Юридический адрес">
          <div className="map-noise" aria-hidden="true" />
          <div className="map-copy"><MapPin size={22} /><span className="section-number">АДРЕС</span><h2>Йошкар-Ола</h2><p>{company.legalAddress}</p></div>
          <div className="map-coordinate map-coordinate-one" aria-hidden="true">РЕСПУБЛИКА МАРИЙ ЭЛ / 424006</div>
          <div className="map-coordinate map-coordinate-two" aria-hidden="true">УЛИЦА СТЕПАНА РАЗИНА / 84А</div>
          <div className="map-grid" aria-hidden="true" />
        </section>
        <Link className="legal-contact-link" href="/#contacts">Вернуться к форме обращения <ArrowUpRight size={17} /></Link>
      </main>
      <SiteFooter />
    </div>
  );
}
