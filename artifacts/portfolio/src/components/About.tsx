import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Professional Overview</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a results-driven RF/5G Optimization Specialist with over 15 years of comprehensive experience in the telecommunications industry. My career spans across planning, optimization, and modernization of diverse networks including 5G SA/NSA, 4G LTE, WCDMA, and GSM.
            </p>
            <p>
              Currently operating at the intersection of deep technical RF engineering and project leadership, I am driving 5G SA/NSA modernization efforts for AT&T's North Texas Market with Ericsson. I specialize in delivering measurable KPI improvements, executing complex multi-vendor swap projects, and translating raw network data into actionable operational excellence.
            </p>
            <p>
              My global footprint includes critical deployments and optimization projects across Iraq, Iran, Yemen, Bangladesh, Indonesia, and the USA, working intimately with Ericsson, Nokia, and Huawei infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-card border-border/50 shadow-sm h-full">
              <CardContent className="p-6 flex flex-col justify-center h-full space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Role</p>
                    <p className="font-semibold text-foreground">5G Optimization Specialist</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Company</p>
                    <p className="font-semibold text-foreground">Ericsson India Global Services</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary-foreground dark:bg-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Project</p>
                    <p className="font-semibold text-foreground">AT&T North Texas Market</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
