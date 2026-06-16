import { motion } from "framer-motion";
import { Mail, Linkedin, Download, ArrowRight, Activity, Globe, Zap, Network, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import rohitPic from "@assets/RohitPic_1781539709999.jpg";

const STATS = [
  { value: 15, label: "Years Experience", icon: Activity, suffix: "+" },
  { value: 8, label: "Network Swaps", icon: Network, suffix: "+" },
  { value: 6, label: "Countries", icon: Globe, suffix: "+" },
  { value: 4, label: "Generations (2G-5G)", icon: Zap, suffix: "" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--border)/0.2) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Senior RF/RAN Network Specialist
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold font-display text-foreground leading-tight tracking-tighter mb-6"
            >
              Driving Telecom Network Excellence Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Innovation & Optimization
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Delivering real-time network excellence across 5G SA/NSA, 4G LTE, and legacy systems for global operators.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20"
                onClick={() => scrollTo("#contact")}
                data-testid="button-hero-contact"
              >
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur"
                asChild
                data-testid="button-hero-resume"
              >
                <a href="/Rohit_Kumar_CV.docx" download="Rohit_Kumar_CV.docx">
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-secondary/5 hover:bg-secondary/10" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-secondary/5 hover:bg-secondary/10" asChild>
                  <a href="https://github.com/rohitkumar461" target="_blank" rel="noreferrer" aria-label="GitHub" data-testid="link-hero-github">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-secondary/5 hover:bg-secondary/10" asChild>
                  <a href="mailto:rohit.461@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold font-display text-foreground">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center gap-4"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/40 opacity-70 blur-sm" />
              <div className="relative w-64 h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={rohitPic}
                  alt="Rohit Kumar — Senior RF/RAN Network Specialist"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile-photo"
                />
              </div>
              {/* Live badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-primary/20 shadow-lg text-sm font-medium whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Opportunities
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="font-display font-bold text-xl text-foreground">Rohit Kumar</p>
              <p className="text-muted-foreground text-sm">Ericsson India Global Services</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
