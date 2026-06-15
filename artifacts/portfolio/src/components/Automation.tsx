import { motion } from "framer-motion";
import { Code2, BarChart2, Database, BrainCircuit, Activity, Network, Globe, LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";

const EXPERTISE_CARDS = [
  {
    icon: Code2,
    title: "Python Automation",
    color: "from-blue-600/20 to-blue-400/5 border-blue-500/20",
    iconColor: "text-blue-500",
    bgIcon: "bg-blue-500/10",
    points: [
      "Developed automation solutions for telecom network audits and optimization",
      "Automated KPI analysis, reporting, and data validation processes",
      "Built tools for LTE, VoLTE, 5G NSA, and 5G SA network performance analysis",
      "Developed ASN.1, NGAP, F1AP, E1AP, and XnAP log parsing solutions",
      "Created automated PowerPoint and Excel reporting systems",
      "Built network engineering productivity tools reducing manual effort significantly",
      "Experience with API integration, data extraction, and workflow automation",
    ],
  },
  {
    icon: BarChart2,
    title: "Power BI & Business Intelligence",
    color: "from-teal-600/20 to-teal-400/5 border-teal-500/20",
    iconColor: "text-teal-500",
    bgIcon: "bg-teal-500/10",
    points: [
      "Developed executive dashboards for network performance monitoring",
      "Created interactive KPI visualization and performance tracking reports",
      "Built automated telecom operations dashboards",
      "Experience with DAX, Power Query, data modeling, and advanced visualizations",
      "Designed management-level reporting solutions for business decision-making",
      "Transformed complex technical data into actionable business insights",
    ],
  },
  {
    icon: Database,
    title: "SQL & Data Analytics",
    color: "from-indigo-600/20 to-indigo-400/5 border-indigo-500/20",
    iconColor: "text-indigo-500",
    bgIcon: "bg-indigo-500/10",
    points: [
      "Strong experience in SQL query development and database analysis",
      "Data extraction, cleansing, transformation, and reporting pipelines",
      "KPI trend analysis and root-cause investigation workflows",
      "Large dataset analysis for network optimization initiatives",
      "Database-driven reporting and automation solutions",
      "Experience with performance analytics and business intelligence workflows",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Generative AI & AI Solutions",
    color: "from-violet-600/20 to-violet-400/5 border-violet-500/20",
    iconColor: "text-violet-500",
    bgIcon: "bg-violet-500/10",
    points: [
      "Experience designing AI-powered automation solutions for telecom operations",
      "Developed AI-assisted telecom analysis and troubleshooting workflows",
      "Built Gen AI applications for data interpretation and report generation",
      "Created intelligent assistants for network optimization use cases",
      "Experience with Large Language Models (LLMs), prompt engineering, and AI workflows",
      "Implemented AI solutions to improve operational efficiency and decision-making",
      "Integrated AI capabilities into reporting, analytics, and automation platforms",
    ],
  },
];

const ACHIEVEMENT_STATS = [
  { value: 15, label: "Years Telecom Experience", icon: Activity, suffix: "+" },
  { value: 1000, label: "Optimization Activities", icon: Network, suffix: "+" },
  { value: 100, label: "Automation Solutions", icon: Code2, suffix: "+" },
  { value: 50, label: "BI Dashboards Created", icon: LayoutDashboard, suffix: "+" },
];

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return <div ref={ref}>{count.toLocaleString()}{suffix}</div>;
}

export default function Automation() {
  return (
    <section id="automation" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Digital Transformation &amp; Automation Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bridging Telecom Engineering, Data Analytics, Automation, and Generative AI to deliver measurable business outcomes — going far beyond traditional RF optimization.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {EXPERTISE_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-br ${card.color} border hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader className="flex flex-row items-center gap-4 pb-3">
                  <div className={`w-11 h-11 rounded-xl ${card.bgIcon} flex items-center justify-center flex-shrink-0`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg font-display leading-snug">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${card.bgIcon} mt-1.5 flex-shrink-0 ring-1 ring-current/30`} style={{ backgroundColor: "currentColor", opacity: 0.5 }} />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-background border border-primary/10 p-8 md:p-12"
        >
          <h3 className="text-xl font-bold font-display text-center mb-10 text-foreground">Key Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENT_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
                data-testid={`stat-achievement-${i}`}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Extra badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["LTE Optimization", "VoLTE", "5G NSA", "5G SA", "Gen AI Projects", "AI & Automation"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
