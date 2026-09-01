/**
 * Nocturne Control Room design reminder: the complete site stays within a single,
 * controlled dark environment across marketing, contacts and legal routes.
 */
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./contexts/ThemeContext";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  useEffect(() => {
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, []);

  return <ErrorBoundary><ThemeProvider defaultTheme="dark" switchable><TooltipProvider><Toaster /><CustomCursor /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
