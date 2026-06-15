import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "15+ Years Multi-Generational Expertise: Deep knowledge spanning from 2G GSM to modern 5G SA/NSA architectures.",
  "Tier-1 Operator Proven: Currently driving 5G modernization for AT&T's highly critical North Texas market.",
  "Global Deployment Experience: Track record of successful project execution across the USA, Iraq, Iran, Yemen, Bangladesh, and Indonesia.",
  "Multi-Vendor Mastery: Hands-on expertise with Ericsson, Nokia, and Huawei RAN, enabling seamless network swap projects.",
  "End-to-End Optimization: From high-level cluster KPI analysis down to granular Layer 3 troubleshooting and parameter tuning.",
  "Results-Oriented Focus: Consistent delivery of dominance improvement, call muting resolution, and SINR enhancement."
];

export default function WhyHireMe() {
  return (
    <section className="py-24 bg-background">
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
            A unique blend of deep technical RF engineering and strategic network leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {POINTS.map((point, idx) => {
            const [boldPart, restPart] = point.split(": ");
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
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
