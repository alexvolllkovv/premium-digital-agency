/**
 * Nocturne Control Room design reminder: the footer resolves the page with quiet
 * hierarchy, precise legal placeholders and a single warm decision signal.
 */
import { Link } from "wouter";
import SignalLogo from "@/components/SignalLogo";
import { company, contactLabels } from "@/data/company";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-signal-line" aria-hidden="true"><span /></div>
      <div className="footer-grid">
        <div className="footer-brand-column">
          <SignalLogo />
          <p>Реклама должна быть управляемой: от первого клика до целевого действия.</p>
        </div>
        <div className="footer-nav-column">
          <p className="footer-label">Направления</p>
          <a href="/#services">Контекстная реклама</a>
          <a href="/#services">Таргетированная реклама</a>
          <a href="/#services">SMM</a>
          <a href="/#services">Ведение кабинетов</a>
          <a href="/#services">Аналитика</a>
        </div>
        <div className="footer-nav-column footer-details-column">
          <p className="footer-label">Реквизиты и контакты</p>
          <strong className="footer-legal-name">{company.legalName}</strong>
          <a href={`tel:${company.phone.replace(/\\s/g, "")}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span className="footer-muted">ИНН: {contactLabels.inn}</span>
          <span className="footer-muted">Йошкар-Ола</span>
          <Link href="/contacts">Полные контакты и карта</Link>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
          <a href="/privacy-policy#consent">Согласие на обработку данных</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Цифровое рекламное агентство</span>
        <span>Сделано с вниманием к данным</span>
      </div>
    </footer>
  );
}
