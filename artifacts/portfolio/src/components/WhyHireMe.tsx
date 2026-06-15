import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Telecom Domain Expertise Combined with Software Development Skills: A rare combination of deep RF engineering knowledge and hands-on Python automation and Power BI development.",
  "Strong Background in LTE, VoLTE, and 5G Network Optimization: Proven results delivering KPI improvements for Tier-1 operators including AT&T (USA) and Zain (Iraq).",
  "Proven Experience in Python-Based Automation Development: Built automation solutions for network audits, KPI analysis, ASN.1/NGAP/F1AP log parsing, and automated reporting.",
  "Power BI and SQL Expertise for Data-Driven Decision Making: Designed executive dashboards and management-level BI reports transforming complex telecom data into actionable insight.",
  "Hands-On Experience with Gen AI and Intelligent Automation: Developed AI-assisted troubleshooting workflows, Gen AI applications, and LLM-powered telecom analysis solutions.",
  "Ability to Transform Manual Processes into Scalable Automated Solutions: Track record of reducing manual effort significantly through smart tooling and workflow automation.",
  "Strong Leadership and Stakeholder Management Skills: Led multi-team coordination across swap, rollout, optimization, and planning functions across complex international projects.",
  "Track Record of Delivering Business Impact Through Technology Innovation: Consistently met contractual KPI targets on monthly, quarterly, and yearly basis across 6+ countries.",
];

export default function WhyHireMe() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">Why Partner With Me?</h2>
          <p className="text-lg text-muted-foreground">
            A unique combination of deep RF engineering, automation development, BI analytics, and AI — positioning me as a Telecom + Technology professional for 2026 and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {POINTS.map((point, idx) => {
            const colonIdx = point.indexOf(": ");
            const boldPart = colonIdx !== -1 ? point.slice(0, colonIdx) : point;
            const restPart = colonIdx !== -1 ? point.slice(colonIdx + 2) : "";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-background transition-colors border border-transparent hover:border-border/50"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold block mb-1">{boldPart}</strong>
                  {restPart}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
