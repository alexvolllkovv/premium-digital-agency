/**
 * Nocturne Control Room design reminder: the cursor is a quiet aurum signal,
 * never a replacement for native focus or pointer feedback.
 */
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;
    let frame = 0;
    let x = -40;
    let y = -40;
    let targetX = x;
    let targetY = y;

    const render = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.body.classList.add("cursor-visible");
      const target = event.target as HTMLElement | null;
      document.body.dataset.cursorState = target?.closest("a, button, input, textarea, .service-card") ? "active" : "idle";
    };
    const leave = () => document.body.classList.remove("cursor-visible");

    document.body.classList.add("cursor-enhanced");
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("cursor-enhanced", "cursor-visible");
      delete document.body.dataset.cursorState;
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true"><span /></div>;
}
