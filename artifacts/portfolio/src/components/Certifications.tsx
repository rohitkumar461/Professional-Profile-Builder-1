import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CREDLY_BADGES = [
  {
    name: "Practical Application of Gen AI for Project Managers",
    issuer: "Project Management Institute",
    date: "Dec 2025",
    img: "https://images.credly.com/images/0c4e1dd5-5d3c-4974-9720-e09af4302e5e/blob",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "AI",
  },
  {
    name: "Generative AI Driver's License 2025",
    issuer: "Ericsson",
    date: "Feb 2025",
    img: "https://images.credly.com/images/fba7a356-654e-4d6c-a8b0-0014be4feb31/blob",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "AI",
  },
  {
    name: "EOE Cognitive SW RF Design & Site Selection Fundamental",
    issuer: "Ericsson",
    date: "Nov 2023",
    img: "https://images.credly.com/images/e4c4b38f-7531-4587-8202-679028c70adf/image.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "RF",
  },
  {
    name: "BCSS Automation Experienced Level",
    issuer: "Ericsson",
    date: "Oct 2023",
    img: "https://images.credly.com/images/c5d180b9-4d03-43ac-9f92-46da6b134b5f/image.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "Automation",
  },
  {
    name: "SET2WIN Sales Foundation LTE RAN 2022",
    issuer: "Ericsson",
    date: "Nov 2022",
    img: "https://images.credly.com/images/5159e6c3-f11e-454e-a3cf-9051b745c7ae/SET2WIN_Sales_Foundation_LTE_RAN_badge-600-600.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "LTE",
  },
  {
    name: "5G Tuning & Optimization Fundamental Level",
    issuer: "Ericsson",
    date: "Dec 2021",
    img: "https://images.credly.com/images/8d62b9b5-7810-4de0-a2ba-9010002a8dd7/5G_Tuning___Optimization_Fundamental_badge_2021-600-600.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "5G",
  },
  {
    name: "EOE Cognitive SW Virtual Drive Test Fundamental",
    issuer: "Ericsson",
    date: "Dec 2021",
    img: "https://images.credly.com/images/8c32c8d0-2c5b-4075-ba74-bd443d1d8f70/image.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "RF",
  },
  {
    name: "SET2WIN Sales Foundation 5G RAN 2020",
    issuer: "Ericsson",
    date: "Dec 2020",
    img: "https://images.credly.com/images/7b8bd389-d9a9-4104-9d05-303eb141cee1/5GRAN-600-600.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "5G",
  },
  {
    name: "SET2WIN Sales Foundation LTE RAN 2020",
    issuer: "Ericsson",
    date: "Oct 2020",
    img: "https://images.credly.com/images/3d67ae0c-8c34-4e76-a8fd-49b1bb510d2c/LTE_RAN-600-600.png",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "LTE",
  },
  {
    name: "Automation Fundamental Level",
    issuer: "Ericsson",
    date: "Aug 2020",
    img: "https://images.credly.com/images/4aa12726-8388-4087-9fd7-1cf9fc04da77/Aut_Fund_8-600-600.PNG",
    url: "https://www.credly.com/users/rohit-kumar.f534f1dd/badges",
    category: "Automation",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-300/50 dark:border-violet-700/50",
  Automation: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-300/50 dark:border-teal-700/50",
  "5G": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-300/50 dark:border-blue-700/50",
  LTE: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-300/50 dark:border-indigo-700/50",
  RF: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-300/50 dark:border-orange-700/50",
};

export default function Certifications() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* ── Credly Digital Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-2">Digital Badges</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <a
              href="https://www.credly.com/users/rohit-kumar.f534f1dd/badges"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              data-testid="link-credly-profile"
            >
              View all on Credly <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CREDLY_BADGES.map((badge, idx) => (
              <motion.a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-pointer text-center"
                data-testid={`badge-credly-${idx}`}
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={badge.img}
                    alt={badge.name}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5 w-full">
                  <Badge variant="outline" className={`text-xs px-2 py-0.5 ${CATEGORY_COLORS[badge.category] || ""}`}>
                    {badge.category}
                  </Badge>
                  <p className="text-xs font-semibold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                    {badge.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{badge.issuer}</p>
                  <p className="text-xs text-muted-foreground/70">{badge.date}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Formal Certs + Training + Education ── */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold font-display">Certifications</h2>
            </div>

            <div className="space-y-4">
              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Huawei Certified LTE Network Professional</h3>
                  <p className="text-sm text-muted-foreground font-mono bg-muted inline-block px-2 py-1 rounded">ID: 010200201401806838931481</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Huawei Certified LTE Network Associate</h3>
                  <p className="text-sm text-muted-foreground font-mono bg-muted inline-block px-2 py-1 rounded">ID: 010100201401806462371485</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-accent" />
              <h2 className="text-2xl font-bold font-display">Professional Training</h2>
            </div>

            <Card className="bg-card border-border/50 h-[calc(100%-4rem)]">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                <ul className="space-y-6">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">LTE Network Planning & Optimization</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive architecture and tuning</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">WCDMA RF Planning and Optimization</h4>
                      <p className="text-sm text-muted-foreground">3G network design and improvement</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">BSSPAR Course on BSS Parameter Planning</h4>
                      <p className="text-sm text-muted-foreground">Base station subsystem parameters</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">EXPLAIN Training</h4>
                      <p className="text-sm text-muted-foreground">RF Planning and Optimization framework</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold font-display">Education</h2>
            </div>

            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-8">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">B.Tech</h3>
                <p className="text-lg mb-4 text-white/90">Electronics & Telecommunication</p>

                <div className="space-y-2 mt-8 pt-8 border-t border-white/20">
                  <p className="font-medium">UPTECH University</p>
                  <p className="text-white/80 text-sm">Lucknow, India</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">2004</span>
                    <span className="text-sm font-semibold tracking-wide uppercase">First Division</span>
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
