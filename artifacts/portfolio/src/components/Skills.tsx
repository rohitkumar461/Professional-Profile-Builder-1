import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioTower, Wrench, BarChart3, Database } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Telecom Technologies",
    icon: RadioTower,
    skills: ["5G SA", "5G NSA", "LTE", "VoLTE", "WCDMA", "GSM/GPRS/EDGE", "ORAN"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900"
  },
  {
    title: "Optimization & Planning",
    icon: Wrench,
    skills: ["RAN Optimization", "KPI Analysis", "Drive Test Analysis", "PCI Planning", "Neighbour Optimization", "Layer 3 Analysis"],
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900"
  },
  {
    title: "Vendor Expertise",
    icon: Database,
    skills: ["Ericsson", "Nokia / NSN", "Huawei"],
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900"
  },
  {
    title: "Tools & Analytics",
    icon: BarChart3,
    skills: ["Power BI", "Python", "SQL", "TEMS Investigation", "Actix Analyser", "NEMO Outdoor", "NetAct Planner", "Atoll"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive suite of technologies, vendors, and tools mastered over 15+ years in the field.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color.split(' ')[0]} ${category.color.split(' ')[1]}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-display">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className={`text-sm py-1.5 px-3 font-medium bg-background ${category.color.split(' ')[3]}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
