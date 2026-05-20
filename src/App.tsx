import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Corporate from "./pages/Corporate";
import Framework from "./pages/Framework";
import ForEngineers from "./pages/ForEngineers";
import ForProfessionals from "./pages/ForProfessionals";
import ForLeaders from "./pages/ForLeaders";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      // Defer so the target section has mounted on route change
      setTimeout(tryScroll, 0);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Navigate to="/framework" replace />} />
            <Route path="/courses/:slug" element={<Navigate to="/framework" replace />} />
            <Route path="/teen-ai-builders" element={<Navigate to="/framework" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainers" element={<Navigate to="/about" replace />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/for-engineers" element={<ForEngineers />} />
            <Route path="/for-professionals" element={<ForProfessionals />} />
            <Route path="/for-leaders" element={<ForLeaders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
