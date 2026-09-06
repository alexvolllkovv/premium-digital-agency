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
                <dd>{label === "Телефон" ? <a className="contact-detail-link" href={`tel:${String(value).replace(/\\s/g, "")}`}>{value}</a> : label === "Email" ? <a className="contact-detail-link" href={`mailto:${value}`}>{value}</a> : value}</dd>
              </div>
            )) : <div className="contacts-empty"><dt>ФОРМАТ СВЯЗИ</dt><dd>Оставьте задачу через форму на главной странице — это позволит начать диалог в подходящем контексте.</dd></div>}
          </dl>
        </section>
        <section className="map-placeholder live-map-panel" aria-label="Интерактивная карта юридического адреса">
          <div className="map-noise" aria-hidden="true" />
          <div className="map-copy"><MapPin size={22} /><span className="section-number">АДРЕС</span><h2>Йошкар-Ола</h2><p>{company.legalAddress}</p><a className="map-external-link" href="https://yandex.ru/maps/?ll=47.8956%2C56.6327&z=16&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0%20%D0%A0%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0%2C%2084%D0%90%2C%20%D0%99%D0%BE%D1%88%D0%BA%D0%B0%D1%80-%D0%9E%D0%BB%D0%B0" target="_blank" rel="noreferrer">Открыть в Яндекс Картах <ArrowUpRight size={14} /></a></div>
          <div className="map-coordinate map-coordinate-one" aria-hidden="true">РЕСПУБЛИКА МАРИЙ ЭЛ / 424006</div>
          <div className="map-coordinate map-coordinate-two" aria-hidden="true">УЛИЦА СТЕПАНА РАЗИНА / 84А</div>
          <iframe className="contacts-map-live" title="Яндекс Карты — юридический адрес ИП Лобанова Валерия Алексеевича" src="https://yandex.ru/map-widget/v1/?ll=47.8956%2C56.6327&z=16&pt=47.8956%2C56.6327%2Cpm2rdm&mode=search&text=%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0%20%D0%A0%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0%2C%2084%D0%90%2C%20%D0%99%D0%BE%D1%88%D0%BA%D0%B0%D1%80-%D0%9E%D0%BB%D0%B0" loading="eager" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </section>
        <Link className="legal-contact-link" href="/#contacts">Вернуться к форме обращения <ArrowUpRight size={17} /></Link>
      </main>
      <SiteFooter />
    </div>
  );
}
