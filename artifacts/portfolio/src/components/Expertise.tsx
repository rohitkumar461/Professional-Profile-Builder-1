import { motion } from "framer-motion";
import { Activity, Network, Layers, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-background border-y border-border/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">5G & LTE Deep Expertise</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At the cutting edge of telecom infrastructure, specializing in the complex transition from legacy networks to 5G Standalone (SA) and Non-Standalone (NSA) architectures. Proven success in modernizing large-scale markets for Tier-1 operators like AT&T.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">5G SA/NSA Modernization</h4>
                  <p className="text-muted-foreground">Expert in post-launch KPI optimization for newly modernized 5G sites, ensuring seamless transitions and maximum network uptime during the critical deployment phase.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Layer 3 Analysis</h4>
                  <p className="text-muted-foreground">Deep dive L3 analysis targeting 'Time on SA' improvements. Strategic recommendations for SA to NSA exit delays to optimize resource allocation and user experience.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6"
          >
            <Card className="bg-card border-border/50 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold font-display">KPI Methodology</h3>
                </div>
                <p className="text-muted-foreground mb-6">Rigorous approach to network health spanning site-level and cluster-level optimization.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Worst Cell Analysis & Resolution
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Call Muting Troubleshooting
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" /> SINR Degradation Improvement
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary" /> Multi-vendor Dominance Strategy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-secondary text-secondary-foreground rounded-xl p-8 relative overflow-hidden">
              <BarChart className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
              <h4 className="text-lg font-semibold mb-2">Measurable Impact</h4>
              <p className="text-secondary-foreground/80">
                Network optimization is not just about clearing alarms—it's about protecting operator revenue, reducing customer churn, and maximizing spectral efficiency in multi-million dollar markets.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
