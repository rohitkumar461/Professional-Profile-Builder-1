import { motion } from "framer-motion";
import { SiEricsson, SiNokia, SiHuawei } from "react-icons/si";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const EXPERIENCES = [
  {
    id: 1,
    company: "Ericsson India Global Services",
    role: "5G SA/NSA Optimization Specialist",
    duration: "Apr 2024 – Present",
    location: "AT&T, North Texas",
    vendor: "Ericsson",
    details: [
      "5G SA/NSA Modernization for AT&T (North Texas Market)",
      "Post-launch KPI optimization for newly modernized 5G sites",
      "Site-level & cluster-level KPI analysis",
      "Layer 3 analysis for Time on SA improvement, SA to NSA exit delay recommendations",
      "Worst cell analysis, Call muting, SINR improvement"
    ]
  },
  {
    id: 2,
    company: "Ericsson India Global Services",
    role: "MS 4G Optimization Specialist",
    duration: "Mar 2021 – Mar 2024",
    location: "Zain Iraq",
    vendor: "Ericsson",
    details: [
      "OSS KPI, Biweekly/Monthly reporting",
      "Dominance improvement, customer complaint handling",
      "Event monitoring/capacity study, 24×7 monitoring"
    ]
  },
  {
    id: 3,
    company: "NDO (Nokia)",
    role: "2G/4G Optimization",
    duration: "Feb 2019 – Mar 2021",
    location: "Zain Iraq",
    vendor: "Nokia",
    details: [
      "Capacity planning, PCI planning",
      "LTE pre-launch, daily KPI tracking",
      "Event capacity planning"
    ]
  },
  {
    id: 4,
    company: "Huawei Iranian Co. Ltd",
    role: "Planning & Optimization SME",
    duration: "Feb 2016 – Dec 2018",
    location: "Tehran, Iran",
    vendor: "Huawei",
    details: [
      "Multi-technology (GUL) optimization",
      "Re-farming for U900/LTE/NBIOT, VoLTE deployment",
      "Province contractual KPI management, parameter trials"
    ]
  },
  {
    id: 5,
    company: "Optimi Kish/GJSK",
    role: "3G Optimization Consultant",
    duration: "Sep 2015 – Jan 2016",
    location: "RighTel, Iran",
    vendor: "Other",
    details: [
      "WCDMA optimization, neighbour audits, drive test analysis"
    ]
  },
  {
    id: 6,
    company: "Ericsson Systems & Services",
    role: "RF Optimization Consultant",
    duration: "May 2011 – Sep 2015",
    location: "MTN Irancell, Iran",
    vendor: "Ericsson",
    details: [
      "Nokia & Ericsson BSS",
      "2G/3G IRAT, frequency planning, drive test reporting"
    ]
  },
  {
    id: 7,
    company: "Nokia Siemens Network",
    role: "RF Optimization SME",
    duration: "Feb 2011 – Apr 2011",
    location: "MTN Yemen",
    vendor: "Nokia",
    details: [
      "Network swap Alcatel to NSN",
      "Parameter mapping, 2G/GPRS/EDGE"
    ]
  },
  {
    id: 8,
    company: "Metro Wireless Pvt Ltd",
    role: "Sr. RF Optimization Engineer",
    duration: "Jun 2009 – Jan 2011",
    location: "Bangladesh / Indonesia",
    vendor: "Other",
    details: [
      "Multi-RNC/BSC optimization, Nokia/Huawei RAN",
      "DT analysis, coverage/capacity design"
    ]
  },
  {
    id: 9,
    company: "Metro Wireless Pvt Ltd",
    role: "Sr. RF Planner",
    duration: "Feb 2009 – May 2009",
    location: "NSN Indonesia, Semarang",
    vendor: "Nokia",
    details: [
      "Post Launch Optimization"
    ]
  },
  {
    id: 10,
    company: "NR Services",
    role: "Sr. RF Optimization Engineer",
    duration: "Oct 2008 – Feb 2009",
    location: "NSN Indonesia",
    vendor: "Nokia",
    details: [
      "2G/3G PLO"
    ]
  },
  {
    id: 11,
    company: "Idea Telecommunication Ltd",
    role: "RF Engineer",
    duration: "Nov 2007 – Sep 2008",
    location: "NSN India, UP East",
    vendor: "Nokia",
    details: [
      "Siemens to Nokia swap, cluster optimization"
    ]
  },
  {
    id: 12,
    company: "Aircom International",
    role: "RF Engineer",
    duration: "Jul 2007 – Nov 2007",
    location: "Hutch/IDEA, NCR",
    vendor: "Other",
    details: [
      "Benchmark drive tests"
    ]
  },
  {
    id: 13,
    company: "Professional Comtech Ltd",
    role: "RF Engineer",
    duration: "Jul 2004 – Jun 2007",
    location: "Multiple clients",
    vendor: "Other",
    details: [
      "Coverage/capacity planning, frequency planning"
    ]
  }
];

function VendorIcon({ vendor, className }: { vendor: string, className?: string }) {
  if (vendor === "Ericsson") return <SiEricsson className={className} />;
  if (vendor === "Nokia") return <SiNokia className={className} />;
  if (vendor === "Huawei") return <SiHuawei className={className} />;
  return <Briefcase className={className} />;
}

export default function ExperienceTimeline() {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">A track record of delivering network performance across global markets.</p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-6 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-6 md:-left-8 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center shadow-sm text-foreground">
                <VendorIcon vendor={exp.vendor} className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              <Collapsible
                open={openItems.includes(exp.id)}
                onOpenChange={() => toggleItem(exp.id)}
                className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden"
              >
                <CollapsibleTrigger className="w-full text-left p-5 md:p-6 hover:bg-muted/50 transition-colors flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 mt-1 flex-shrink-0 ${openItems.includes(exp.id) ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                    <div className="w-full h-px bg-border/50 mb-4" />
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
