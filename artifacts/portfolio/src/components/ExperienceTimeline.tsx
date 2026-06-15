import { motion } from "framer-motion";
import { SiEricsson, SiNokia, SiHuawei } from "react-icons/si";
import { Briefcase, MapPin, Calendar, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const EXPERIENCES = [
  {
    id: 1,
    company: "Ericsson India Global Services Pvt Ltd",
    role: "5G SA/NSA Optimization Specialist",
    duration: "Apr 2024 – Present",
    location: "AT&T, North Texas, USA",
    vendor: "Ericsson",
    details: [
      "Leading 5G Modernization Optimization for AT&T North Texas Market — Post Launch KPI & SA Optimization",
      "Site-level and cluster-level KPI optimization for newly modernized 5G sites",
      "Worst cell identification and root-cause analysis with structured improvement plans",
      "Optimization of 4G KPIs: RRC Setup Success Rate, E-RAB Setup Success Rate, Throughput, E-RAB Drop Rate, Intra/Inter eNB Handover Success Rate",
      "5G KPI management: Time on SA, Retainability, Accessibility for both SA and NSA sites",
      "Layer 3 signaling analysis (NGAP/NAS/RRC) to improve Time on SA and recommend strategies to delay exits from SA to NSA",
      "Troubleshooting for worst cells including call muting, SINR degradation, and handover failures",
      "Preparation and submission of improvement plans with post-implementation validation and benchmark reporting"
    ]
  },
  {
    id: 2,
    company: "Ericsson India Global Services Pvt Ltd (Onsite Iraq)",
    role: "LTE Optimization SME",
    duration: "Mar 2021 – Mar 2024",
    location: "Zain Iraq",
    vendor: "Ericsson",
    details: [
      "Managed Service 4G Optimization for Zain Iraq — OSS KPI improvement across all governorates",
      "Daily KPI analysis of governorates with structured degradation root-cause reporting",
      "Optimization of LTE KPIs: RRC Setup Success Rate, E-RAB Setup Success Rate, Throughput, E-RAB Drop Rate, Intra/Inter eNB Handover Success Rate",
      "Responsible for worst cell troubleshooting: call muting, SINR improvement, hardware fault identification, and team escalation follow-up",
      "Preparation of Biweekly and Monthly optimization progress reports and management presentations",
      "Special Dominance Improvement: drive test analysis, improvement plan preparation and coordination/approval with planning team",
      "Customer complaint handling with structured optimization actions and resolution tracking",
      "Monthly baseline audit with corrective actions for parameter discrepancies",
      "Event Monitoring: capacity study, capacity audit of event areas, high-capacity change proposals, layer addition/balancing, sector/COW site proposals",
      "Drive test verification across all event-area routes with coverage/quality enhancement proposals",
      "KPI target: maintained ≥1 Mbps throughput in highest-traffic cells during live events",
      "24×7 monitoring shifts with rapid corrective actions and escalation management"
    ]
  },
  {
    id: 3,
    company: "Ericsson India (Onsite Iraq)",
    role: "LTE Optimization SME",
    duration: "Feb 2019 – Mar 2021",
    location: "Zain Iraq",
    vendor: "Ericsson",
    details: [
      "Network Deployment & Optimization (NDO) — 2G and LTE Optimization for Zain Iraq",
      "Daily KPI analysis of all governorates with degradation root-cause identification",
      "Worst cell analysis on daily basis with structured improvement plans",
      "Capacity planning for monthly expansion programs",
      "Event capacity planning and implementation follow-up",
      "Monitor and detect 2G KPI degradation: CSSR, TCH Assignment Success Rate, SD Drop Rate, Call Drop Rate, TCH/SD Congestion — recommended and implemented corrective solutions",
      "Team management: daily, weekly, and monthly task management with performance tracking",
      "Responsible for contractual target delivery on monthly, quarterly, and yearly basis",
      "PCI planning for newly on-aired LTE sites — PCI conflict/confusion removal plans with ECO coordination",
      "Pre-launch optimization for LTE sites including coverage, SINR troubleshooting and improvement",
      "Daily worst-offender identification and optimization plans: minimizing overlaps, coverage gaps, PCI collisions, RSRP/RSRQ/SINR/missing-neighbour issues"
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
      "Managed Service SME for Planning & Optimization across Huawei RAN multi-technology network (2G/3G/4G)",
      "Responsible for multi-technology KPI target delivery on monthly, quarterly, and yearly basis",
      "Coordinated across swap, project, rollout, and optimization teams for province-wide execution",
      "Daily analysis and escalation of degraded performance issues with structured improvement actions",
      "Identify, analyze, and recommend coverage improvement plans for weak/problematic areas",
      "Improvement plan preparation to meet province contractual KPIs for 2G, 3G, and 4G",
      "Re-farming strategy preparation: U900 carrier addition, LTE bandwidth expansion, NBIOT deployment",
      "KPI monitoring across full technology stack: RRC/E-RAB/HO Success Rates, Throughput, PRB Utilization, RAB/HSDPA Success Rate, CS/PS Call Drop, TCH/SDCCH Assignment, SD Drop",
      "Neighbour audits and optimization for intra-frequency, inter-frequency, and IRAT handovers",
      "Network parameter audits and alignment recommendations for KPI improvement",
      "Conducting parameter trials across GUL technologies; parameter tuning and standardization for LTE",
      "Drive test low-coverage/quality patch analysis and resolution",
      "Proposal and follow-up for VoLTE deployment, Carrier Aggregation, NBIOT deployment, sector additions, height increments",
      "Managing province ticket resolution, CRM complaints, and 195 customer complaint coordination",
      "Feature testing and implementation at cluster, RNC/BSC, and region level"
    ]
  },
  {
    id: 5,
    company: "Optimi Kish / GJSK Telecommunications",
    role: "3G Optimization Consultant",
    duration: "Sep 2015 – Jan 2016",
    location: "RighTel, Iran",
    vendor: "Other",
    details: [
      "Managed Service Optimization for RighTel Iran — WCDMA network on NSN platform",
      "Identify, analyze, and recommend solutions for coverage and quality issues",
      "KPI monitoring and improvement: RRC Success Rate, RAB Success Rate, HSDPA Success Rate, CS/PS Call Drop Rate",
      "Intra-frequency and inter-frequency neighbour audits and optimization",
      "Network parameter audits and recommended settings alignment for KPI improvement",
      "Conducting parameter trials and feature tests at cluster, RNC, and region level",
      "Regular drive testing for problematic areas identified through statistical analysis and customer complaints",
      "Implementing tilt/height/azimuth changes on existing cells to optimize coverage and quality"
    ]
  },
  {
    id: 6,
    company: "Ericsson Systems & Services, Iran (Tangent International)",
    role: "RF Optimization Consultant",
    duration: "May 2011 – Sep 2015",
    location: "MTN Irancell, Tehran, Iran",
    vendor: "Ericsson",
    details: [
      "Managed Service Optimization for MTN Irancell across Nokia and Ericsson BSS clusters in Tehran",
      "Daily optimization activities for performance improvement across multiple BSCs",
      "2G-to-3G neighbour addition, audit, and correction",
      "Feature implementation for 2G-to-3G and LTE cell reselection",
      "IRAT handover analysis and action plans to recover access failure cases",
      "TCH and SDCCH reconfiguration to minimize TCH and SDCCH blocking",
      "Monitoring daily stats and optimizing to improve Call Setup Success Rate, Call Success Rate, and Handover Success Rate",
      "Analysis of sub-counters: TCH Assignment Success Rate, Immediate Assignment Success Rate, SD Drop Rate, Call Drop Rate",
      "Frequency planning, neighbour list planning, BSIC planning, location area definition",
      "Parameter fine-tuning: handover parameters, power control parameters, network quality and GoS improvement",
      "Drive test report preparation, coverage reports, and weekly network performance reports",
      "Analysis of WNCS, WMRR, FFAX, and NETACT reports"
    ]
  },
  {
    id: 7,
    company: "Nokia Siemens Networks",
    role: "RF Optimization SME",
    duration: "Feb 2011 – Apr 2011",
    location: "MTN Yemen",
    vendor: "Nokia",
    details: [
      "Alcatel-to-NSN network swap with full KPI maintenance during transition",
      "2G, GPRS, EDGE network optimization on RG10 BSS platform (S14 Flexi BSC and Flexi BTS)",
      "Parameter mapping from Alcatel dump ensuring equivalent NSN settings",
      "KPI mapping between Alcatel and Nokia platforms",
      "Monitoring daily stats to optimize Call Setup Success Rate, Call Success Rate, and Handover Success Rate",
      "Analysis of sub-counters: TCH/SD Assignment Success Rate, Immediate Assignment Success Rate, Call Drop Rate",
      "Frequency planning, neighbour list planning, BSIC planning, location area definition",
      "Parameter fine-tuning: handover and power control parameters for quality and Grade of Service improvement"
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
      "Optimization of multiple RNC/BSC networks across Nokia and Huawei RAN platforms",
      "Maintaining weekly and monthly targets for CS/PS KPIs",
      "Identifying, analyzing, and resolving coverage issues: weak coverage, cross-cell interference, pilot pollution",
      "Monitor and detect KPI degradation with structured improvement recommendations",
      "Intra-frequency, inter-frequency, and IRAT neighbour audits and optimization",
      "Network parameter audits with recommendations for KPI alignment",
      "Camping strategy recommendations for sites with dual carriers",
      "Analysis of major KPIs: DCR, CSSR, SHO, HOSR, CS/PS IRAT, Throughput, UL/DL quality, TCH/SD blocking, dual-band traffic share, HR/FR settings",
      "Regular drive testing for problematic areas with tilt/height/azimuth implementation",
      "Traffic balancing among cells through parameter audit/neighbour audit adjustments",
      "Corporate customer complaint handling and dedicated indoor micro/repeater solutions",
      "Coverage/capacity site design for business plan expansion targets",
      "Special projects: re-homing, sector addition, TMA planning, 900/1800 TRX addition, segmentation and expansion",
      "Interference analysis using RTWP/board values, alarms, M2000 Web LMT, and PRS counters",
      "Weekly neighbour analysis reports for Intra-freq, Inter-freq, and Inter-RAT using Gladiator Station and OSS Traces",
      "Resources monitoring: Iub, CE, processing sets, code tree utilizations",
      "Quarterly benchmark analysis with post-process tools to identify network pain areas"
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
      "Post Launch Optimization (PLO) for NSN Indonesia — Middle Java, Semarang project",
      "Led a team of optimizers and drive testers for cluster PLO activities",
      "Responsible for maintaining KPI thresholds per customer requirements at 3-day and 5-day acceptance milestones",
      "BTS/HOC/POC parameter changes to achieve KPI thresholds",
      "Antenna height, orientation, and tilt recommendations for coverage improvement",
      "LAC change recommendations for cell planning improvements",
      "Parameter DUMP verification/audit and Network Doctor Report analysis",
      "Maintaining Network KPIs: SD/TCH Assignment and completion, DLQ, HOSR through daily statistics analysis",
      "Rectification of inconsistencies and discrepancies found in Dump/Database analysis"
    ]
  },
  {
    id: 10,
    company: "NR Services (Calliper Teleservices Pvt. Ltd.)",
    role: "Sr. RF Optimization Engineer",
    duration: "Oct 2008 – Feb 2009",
    location: "NSN Indonesia, Semarang",
    vendor: "Nokia",
    details: [
      "Post Launch Optimization (PLO) for 2G and 3G in NSN Indonesia — Middle Java, Semarang",
      "Maintaining KPI thresholds per customer requirements at 3-day and 5-day acceptance gates",
      "BTS/HOC/POC parameter changes for threshold achievement",
      "Antenna height, orientation, and tilt recommendations for 2G and 3G sites",
      "LAC change recommendations and cluster re-planning",
      "Drive test team coordination for 2G and 3G clusters",
      "IRAT handover analysis (3G to 2G) with structured improvement action plans",
      "Neighbour optimization and physical optimization to achieve pilot coverage, Coverage Probability, Ec/No targets",
      "Weekly VIP road field test plan coordination and customer report submission",
      "Maintaining KPIs: SD/TCH Assignment, CSSR, CSR, DLQ, HOSR, RRC Success Rate, RAB Setup Success Rate, Call Drop, Congestion"
    ]
  },
  {
    id: 11,
    company: "Idea Telecommunication Ltd",
    role: "RF Engineer",
    duration: "Nov 2007 – Sep 2008",
    location: "UP East, India",
    vendor: "Nokia",
    details: [
      "Cluster KPI maintenance on NSN India platform (UP East region)",
      "Led a team of junior engineers for RF survey, customer complaints, and drive test cluster optimization",
      "Network monitoring during Siemens-to-Nokia swap with cluster stability management",
      "NPAR-based optimization to minimize CDR and HOFR and maximize CSR and HOSR",
      "Physical site changes (tilt, reorientation) for traffic distribution equalization across cluster cells",
      "Drive test analysis and resolution of identified performance problems",
      "Customer complaint handling from Sales/Marketing teams and technical team coordination",
      "RF validation of candidate sites for BTS and Repeater deployments",
      "Database management and performance presentation preparation"
    ]
  },
  {
    id: 12,
    company: "Aircom International (India) Pvt. Ltd.",
    role: "RF Engineer",
    duration: "Jul 2007 – Nov 2007",
    location: "NCR / UP East, India",
    vendor: "Other",
    details: [
      "Benchmark drive testing (Hutch/IDEA vs Airtel, Vodafone, BSNL) across 5 showcase and 10 non-showcase towns",
      "Benchmark result report preparation and submission to clients",
      "Coverage planning for rapidly growing network expansion based on DT analysis and customer complaints",
      "Drive test file analysis for internal interference: Rx quality, Rx level analysis and RF parameter re-planning",
      "Network optimization via drive tests, antenna tilt changes, and orientation adjustments"
    ]
  },
  {
    id: 13,
    company: "Professional Comtech Ltd",
    role: "RF Engineer",
    duration: "Jul 2004 – Jun 2007",
    location: "Multiple clients — BSNL, IDEA, Nokia/Siemens",
    vendor: "Other",
    details: [
      "New site planning for coverage and capacity per roll-out plan and customer requirements",
      "New site optimization against KPIs: HOFR, TCH Drop",
      "Optimization of existing sites (tilt/azimuth/height changes) for infill site integration",
      "Drive test report preparation per customer requirements",
      "Network optimization via drive tests, antenna tilt, and orientation changes",
      "Co-channel (C/I) and adjacent channel (C/A) interference analysis",
      "Frequency planning, neighbour planning, interference detection and rectification, handover analysis, sector swapping"
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
  const [openItems, setOpenItems] = useState<number[]>([1]);

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
                <CollapsibleTrigger className="w-full text-left p-5 md:p-6 hover:bg-muted/50 transition-colors flex justify-between items-start gap-4" data-testid={`trigger-exp-${exp.id}`}>
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
                    <ul className="space-y-2.5">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm md:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
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
