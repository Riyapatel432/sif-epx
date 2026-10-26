/**
 * Clients, Case Studies, and Project Track Record (SIF-EPX Group)
 * Source: SIF-EPX Business Profile Deck (Pages 8, 20-24)
 */

// Global privacy flag: Source deck lists project values as numeric 'Million' without currency symbol (INR / USD).
// Kept false until client confirms currency and public marketing approval.
export const showProjectValues = false

export const clientsList = [
  {
    id: "dic-india",
    name: "DIC India Limited",
    logo: "/images/clients/dic-india.png",
    industry: "Specialty Chemicals, Printing Inks & Coatings",
    relationshipSince: 2006,
    highlight: "Long-standing vendor & process consultant of choice for Automation, Electrical and C&I since 2006.",
    badge: "MNC Client (Since 2006)",
  },
  {
    id: "toyo-ink",
    name: "Toyo Ink India Pvt. Ltd.",
    logo: "/images/clients/toyo-ink.png",
    industry: "PU & Gravure Inks, Polymers & Coatings",
    relationshipSince: 2012,
    highlight: "Turnkey vendor of choice for PU plant Dahej & Gravure ink plant Noida across HV/LV and C&I packages.",
    badge: "MNC Client (Since 2012)",
  },
  {
    id: "navin-fluorine",
    name: "Navin Fluorine International Limited", // Fixed typo: Flourine -> Fluorine
    logo: "/images/clients/navin-fluorine.png",
    industry: "Specialty Fluorochemicals",
    highlight: "Complete solution with Instrumentation & Control Systems.",
  },
  {
    id: "krbl",
    name: "KRBL Limited",
    logo: "/images/clients/krbl.png",
    industry: "Food Processing & Captive Power",
    highlight: "Complete solution for Boiler & Turbine Automation including SCADA.",
  },
  {
    id: "domino-india",
    name: "Domino Printech India Pvt. Ltd.",
    logo: "/images/clients/domino-india.png",
    industry: "Industrial Coding & Printing Systems",
    highlight: "Turnkey solution for Instrumentation & Control Systems including SCADA.",
  },
  {
    id: "dcm-shriram",
    name: "DCM Shriram Fine Chemicals Ltd.",
    logo: "/images/clients/dcm-shriram.png",
    industry: "Fine Chemicals & Agro-Intermediates",
    highlight: "Process instrumentation, control systems, and plant-wide electrical packages.",
  },
  {
    id: "jakson-green",
    name: "Jakson Green / Jakson Distributed Energy",
    logo: "/images/clients/jakson-green.png",
    industry: "Renewable Energy & Power Infrastructure",
    highlight: "Turnkey solar EPC, power balance, and synchronization switchgear integration.",
  },
  {
    id: "shiva-engineering",
    name: "Shiva Engineering Services",
    logo: "/images/clients/shiva-engineering.png",
    industry: "EPC & Detailed Engineering Consultancy",
    highlight: "Multidisciplinary process engineering and instrumentation project collaboration.",
  },
  {
    id: "woodver-coatings",
    name: "Woodver Coatings Pvt. Ltd.",
    logo: "/images/clients/woodver-coatings.png",
    industry: "Italian Wood Finish & Specialty Coatings",
    highlight: "Supply of complete automated filling package with high-efficiency filter unit.",
  },
  {
    id: "apothecon",
    name: "Apothecon Pharmaceuticals Pvt. Ltd.",
    logo: "/images/clients/apothecon.png",
    industry: "Pharmaceuticals & Active Ingredients",
    highlight: "Process automation, batch control, and cleanroom instrumentation solutions.",
  },
  {
    id: "dae",
    name: "Department of Atomic Energy (DAE)",
    logo: "/images/clients/dae.png",
    industry: "Government of India / Nuclear Research & Power",
    highlight: "Supply of industrial automation products and turnkey instrumentation & control systems.",
    isGovernment: true,
  },
]

export const caseStudies = [
  {
    id: "dic-india-specialty-chemicals",
    client: "DIC India Limited",
    sector: "Specialty Chemicals & Printing Inks",
    location: "Sayakha, Gujarat & Pan-India Units",
    partnership: "Continuous Association Since 2006",
    title: "Integrated Process Control & Intelligent Switchgear Solution",
    overview:
      "Turnkey automation, instrumentation, and electrical project delivery for DIC India's greenfield and brownfield ink and resin facilities. SIF-EPX executed basic and detail engineering, control system panel supply, safe-area I/O interfacing, and field instrumentation.",
    solution:
      "Integrated Process Control System configured around the Allen-Bradley (Rockwell Automation) ControlLogix DCS platform with safe-area I/O architectures and full ISA S-88 compliant batch management.",
    highlights: [
      "Intrinsically Safe (IS) instrumentation integrated with safe-area control platform and Remote I/O communicated over EtherNet/IP.",
      "Integrated electrical package covering 100 HP, 50 HP, and 5 HP variable frequency drives (VFDs) and Intelligent MCCs (IMCCs).",
      "Digital load cell indicators integrated over industrial Ethernet for real-time loss-in-weight and recipe dosing control.",
      "Parameter monitoring, power analytics, and centralized plant-wide energy management over EtherNet/IP.",
      "High-integrity interlocking and safety logic designed to prevent operator override and eliminate batch errors.",
    ],
    results: [
      "Consistent repeat system orders awarded across Liquid Ink Plant, Gravure Ink Plant, and new Optima 1st facility.",
      "SIF established as the verified vendor and process consultant of choice for all DIC Process, Electrical, and C&I capital projects.",
      "Near-zero batch sequencing deviations and substantial reduction in manual control room overhead.",
    ],
  },
  {
    id: "toyo-ink-pu-gravure",
    client: "Toyo Ink India Pvt. Ltd.",
    sector: "PU & Gravure Inks (Polymers & Solvents)",
    location: "Dahej, Gujarat & Noida, Uttar Pradesh",
    partnership: "Continuous Association Since 2012",
    title: "Large-Scale Flameproof Automation & High Voltage Substation Package",
    overview:
      "Comprehensive execution spanning turnkey high-voltage electrical infrastructure (1500 kVA CSS, 1500 kVA DG auto-synchronization) and plant-wide flameproof automation for Toyo Ink's PU plant at Dahej and Gravure Ink plant at Noida.",
    solution:
      "Full automation control system operating on an intelligent network and intrinsically safe I/O system, bridging hazardous field areas with centralized safe control rooms.",
    highlights: [
      "Flameproof (Ex-proof) field instrumentation seamlessly integrated with safe-area control platform via isolating zener barriers.",
      "Automated ISA S-88 batch scheduling and formula management supporting concurrent multiple recipes on shared equipment.",
      "Manual and automatic equipment coordination enabling smooth fault bypass without stopping critical plant campaigns.",
      "Turnkey HV & LV electrical scope including 1500 kVA Compact Secondary Substation (CSS) transformer and 1500 kVA DG set with automatic synchronization.",
      "Scalable batch production reporting providing authentic, tamper-evident batch logs for QA/QC compliance.",
    ],
    results: [
      "Satisfactory execution and successful commissioning for PU Plant at Dahej and Liquid Ink / Gravure Ink Plant at Noida.",
      "SIF confirmed as preferred vendor of choice for Toyo Ink for process engineering, electrical substations, and instrumentation.",
      "Maximized uptime and stringent compliance with hazardous area solvent handling regulations.",
    ],
  },
]

export const projectsTrackRecord = [
  // DIC India Projects
  {
    id: 1,
    client: "DIC India Limited",
    projectName: "Optima 1st (At Sayakha)",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems",
    status: "executed",
    valueMillion: 65,
  },
  {
    id: 2,
    client: "DIC India Limited",
    projectName: "Mother Plant (Liquid Ink Plant)",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems",
    status: "executed",
    valueMillion: 20,
  },
  {
    id: 3,
    client: "DIC India Limited",
    projectName: "Pub-G Plant",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems",
    status: "executed",
    valueMillion: 15,
  },
  {
    id: 4,
    client: "DIC India Limited",
    projectName: "Mother Plant Upgradation",
    solutionOffered: "Complete Upgradation of Mother Plant Control Systems including SCADA",
    status: "executed",
    valueMillion: 25,
  },
  {
    id: 5,
    client: "DIC India Limited",
    projectName: "Mother Plant (Auto Valves Phase-1)",
    solutionOffered: "Replacement of Pneumatic Operated Auto Valves (Phase-1)",
    status: "executed",
    valueMillion: 5.1,
  },
  {
    id: 6,
    client: "DIC India Limited",
    projectName: "Varnish Modification Job",
    solutionOffered: "Supply of Flowmeter with Complete Automation Solution",
    status: "executed",
    valueMillion: 1,
  },
  {
    id: 7,
    client: "DIC India Limited",
    projectName: "Mother Plant (Filling Unit)",
    solutionOffered: "Complete Solution for Filling Systems with Control Systems Integration",
    status: "executed",
    valueMillion: 1.5,
  },
  {
    id: 8,
    client: "DIC India Limited",
    projectName: "E-Supervisor (New)",
    solutionOffered: "Complete Solution for Process Automation & Reporting Systems",
    status: "executed",
    valueMillion: 1.5,
  },

  // Toyo Ink Projects
  {
    id: 9,
    client: "Toyo Ink India Ltd. (Noida Plant)",
    projectName: "HV & LV Substation Package",
    solutionOffered: "Complete Solution for HV & LV Section including Supply of 1500KVA TRF (CSS)",
    status: "executed",
    valueMillion: 25,
  },
  {
    id: 10,
    client: "Toyo Ink India Ltd. (Noida Plant)",
    projectName: "DG Synchronization Package",
    solutionOffered: "Complete Solution with Supply of 1500KVA DG Set with Auto-Synchronization",
    status: "executed",
    valueMillion: 15,
  },
  {
    id: 11,
    client: "Toyo Ink India Ltd. (PU Plant, Dahej)",
    projectName: "PU Plant Dahej Turnkey C&I",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems including SCADA",
    status: "executed",
    valueMillion: 75,
  },

  // Other Esteemed Clientele Projects
  {
    id: 12,
    client: "Navin Fluorine International Limited",
    projectName: "Specialty Fluorochemicals C&I",
    solutionOffered: "Complete Solution with Instrumentation & Control Systems",
    status: "executed",
    valueMillion: 1.5,
  },
  {
    id: 13,
    client: "KRBL Ltd.",
    projectName: "Boiler & Turbine Automation",
    solutionOffered: "Complete Solution for Boiler & Turbine Automation including SCADA",
    status: "executed",
    valueMillion: 10,
  },
  {
    id: 14,
    client: "Department of Atomic Energy (DAE)",
    projectName: "Industrial Automation Products Supply",
    solutionOffered: "Supply of Industrial Automation Products including Control Systems Solution",
    status: "executed",
    valueMillion: 10,
  },
  {
    id: 15,
    client: "Department of Atomic Energy (DAE)",
    projectName: "Project Head End - C&I Package",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems — Project Head End",
    status: "proposed", // Explicitly proposed in PDF Page 23
    valueMillion: 20,
  },
  {
    id: 16,
    client: "Department of Atomic Energy (ISRO)",
    projectName: "Turnkey Instrumentation & SCADA",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems including SCADA",
    status: "executed",
    valueMillion: 5,
  },
  {
    id: 17,
    client: "Sarkun Solar Pvt. Ltd.",
    projectName: "2MW Solar Energy Generation",
    solutionOffered: "Complete E&C Solution with Supply of 2MW Solar Energy Modules",
    status: "executed",
    valueMillion: 5,
  },
  {
    id: 18,
    client: "Domino India Ltd.",
    projectName: "Industrial Instrumentation & Control",
    solutionOffered: "Turnkey Solution for Instrumentation & Control Systems including SCADA",
    status: "executed",
    valueMillion: 5,
  },
  {
    id: 19,
    client: "Woodver Coating Pvt. Ltd.",
    projectName: "Filling Package & Filtration Unit",
    solutionOffered: "Supply of Complete filling package with filter unit",
    status: "executed",
    valueMillion: 1.5,
  },
  {
    id: 20,
    client: "Nascon Pvt. Ltd.",
    projectName: "Control Systems & SCADA",
    solutionOffered: "Complete Solution for Control Systems including SCADA",
    status: "executed",
    valueMillion: 1,
  },
  {
    id: 21,
    client: "Reckers India Pvt. Ltd.",
    projectName: "Automation Systems Supply",
    solutionOffered: "Supply of Industrial Automation Products including Control Systems Solution",
    status: "executed",
    valueMillion: 5,
  },
  {
    id: 22,
    client: "IOCL R&D Center (Faridabad)",
    projectName: "DCS Migration (PLC5 & SLC to ControlLogix)",
    solutionOffered: "Control Systems Migration from legacy PLC5 & SLC Series to modern ControlLogix Platform",
    status: "proposed", // Explicitly proposed in PDF Page 24
    valueMillion: 15,
  },
]
