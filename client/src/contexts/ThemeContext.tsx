/**
 * Nocturne Control Room design reminder: theme switching preserves the same
 * analytical hierarchy while shifting the material from obsidian to warm paper.
 */
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

function getInitialTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : defaultTheme;
}

export function ThemeProvider({ children, defaultTheme = "light", switchable = false }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (switchable ? getInitialTheme(defaultTheme) : defaultTheme));

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    if (switchable) window.localStorage.setItem("theme", theme);
  }, [theme, switchable]);

  useEffect(() => {
    if (!switchable) return;
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;
    const stored = window.localStorage.getItem("theme");
    if (stored) return;
    const sync = (event: MediaQueryListEvent) => setTheme(event.matches ? "dark" : "light");
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, [switchable]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
