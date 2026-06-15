import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";

const queryClient = new QueryClient();

function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background font-sans text-foreground selection:bg-primary/30 relative">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Expertise />
        <Certifications />
        <WhyHireMe />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50 bg-card">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rohit Kumar. Senior RF/RAN Network Specialist.
        </p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
