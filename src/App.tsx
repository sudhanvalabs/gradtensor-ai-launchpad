import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import TeenAIBuildersLanding from "./pages/TeenAIBuildersLanding";
import Corporate from "./pages/Corporate";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/trainers" element={<Navigate to="/about" replace />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/teen-ai-builders" element={<TeenAIBuildersLanding />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
