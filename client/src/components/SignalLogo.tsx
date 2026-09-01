/**
 * Nocturne Control Room design reminder: a quiet Aurum Signal node is the mark;
 * precise geometry and restrained gold communicate a controlled, premium system.
 */
import { company } from "@/data/company";

type SignalLogoProps = {
  compact?: boolean;
};

export default function SignalLogo({ compact = false }: SignalLogoProps) {
  return (
    <a className="brand" href="/#hero" aria-label={`${company.name}: на главную`}>
      <span className="brand-mark" aria-hidden="true">
        <img src="/manus-storage/aurum-signal-logo_cddb9e3b.png" alt="" />
      </span>
      {!compact && <span className="brand-name">Цифровое рекламное<br />агентство</span>}
    </a>
  );
}
