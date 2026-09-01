/**
 * Nocturne Control Room design reminder: header interactions are minimal, tactile
 * and compact; navigation should feel like a calm control surface, never a banner.
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SignalLogo from "@/components/SignalLogo";

const navigation = [
  ["О компании", "#about"],
  ["Услуги", "#services"],
  ["Подход", "#approach"],
  ["Процесс", "#process"],
  ["Контакты", "#contacts"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-shell">
        <SignalLogo />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contacts">
          <span>Обсудить задачу</span>
          <span className="cta-pip" aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Мобильная навигация">
          {navigation.map(([label, href], index) => (
            <a href={href} key={href} onClick={closeMenu} style={{ transitionDelay: `${50 + index * 45}ms` }}>
              <span>{label}</span><span className="mobile-menu-index">0{index + 1}</span>
            </a>
          ))}
          <a className="mobile-menu-cta" href="#contacts" onClick={closeMenu}>Обсудить задачу</a>
        </nav>
      </div>
    </header>
  );
}
