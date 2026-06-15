import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
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
