/**
 * Nocturne Control Room design reminder: the footer resolves the page with quiet
 * hierarchy, precise legal placeholders and a single warm decision signal.
 */
import { Link } from "wouter";
import SignalLogo from "@/components/SignalLogo";
import { contactLabels } from "@/data/company";

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
        <div className="footer-nav-column">
          <p className="footer-label">Информация</p>
          <Link href="/contacts">Контакты</Link>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
          <a href="/privacy-policy#consent">Согласие на обработку данных</a>
          {contactLabels.inn && <span className="footer-muted">ИНН: {contactLabels.inn}</span>}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Цифровое рекламное агентство</span>
        <span>Сделано с вниманием к данным</span>
      </div>
    </footer>
  );
}
