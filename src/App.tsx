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
import Framework from "./pages/Framework";
import ForStudents from "./pages/ForStudents";
import ForFaculty from "./pages/ForFaculty";
import ForInstitutions from "./pages/ForInstitutions";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";

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
            <Route path="/framework" element={<Framework />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-faculty" element={<ForFaculty />} />
            <Route path="/for-institutions" element={<ForInstitutions />} />
            {/* Colleges repositioning: old role tracks redirect to the new campus pages.
                Pages kept in the codebase (ForEngineers/ForProfessionals/ForLeaders/Corporate). */}
            <Route path="/for-engineers" element={<Navigate to="/for-students" replace />} />
            <Route path="/for-professionals" element={<Navigate to="/for-students" replace />} />
            <Route path="/for-leaders" element={<Navigate to="/for-institutions" replace />} />
            <Route path="/corporate" element={<Navigate to="/" replace />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
