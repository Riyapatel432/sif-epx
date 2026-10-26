export const qualityStandards = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System Certification",
    description: "Certified for standardized engineering design, procurement support, electrical panel manufacturing, construction supervision, and quality assurance processes.",
    icon: "Award",
  },
  {
    code: "IS / BIS Standards",
    title: "Bureau of Indian Standards Compliance",
    description: "IS 456 (RCC), IS 800 (Structural Steel), IS 1893 (Seismic Criteria), IS 875 (Wind Loads), IS 732 (Electrical Wiring), IS 8623 (Factory Built Assemblies of Switchgear).",
    icon: "ShieldCheck",
  },
  {
    code: "IEC Standards",
    title: "International Electrotechnical Commission",
    description: "IEC 61439 (Low-voltage switchgear and controlgear assemblies), IEC 60076 (Transformers), IEC 61508/61511 (Functional Safety & SIL).",
    icon: "Zap",
  },
  {
    code: "API & ASME Standards",
    title: "American Petroleum Institute & ASME Codes",
    description: "ASME Section VIII (Pressure Vessels), ASME B31.3 (Process Piping), ASME B31.1 (Power Piping), API 650 (Storage Tanks).",
    icon: "CheckCircle2",
  },
]

export const safetyFramework = {
  title: "Health, Safety & Environment (HSE) Policy & Risk Management",
  subtitle: "Zero-Compromise Safety Governance Across Sites, Panel Works, and Engineering Offices",
  certifications: ["NEBOSH Certified Safety Officers", "IOSH Certified Supervisors", "IS/OHSAS Compliant Protocols"],
  
  // Risk Assessment Formula & Strategy (Source: SIF-EPX Profile Page 18)
  riskAssessmentPlan: {
    formula: "R = F x D",
    definitions: [
      { variable: "R", name: "Risk Level", meaning: "Individual or Societal Risk factor quantified for plant activities." },
      { variable: "F", name: "Frequency", meaning: "Frequency of Occurrence of an unfortunate hazardous event." },
      { variable: "D", name: "Damage Distance", meaning: "Expected damage distance or blast radius due to likely occurrence of that unfortunate event." },
    ],
    summary: "Quantitative risk assessment strategy designed to identify high-consequence failure modes, define safe exclusion zones, and engineer active/passive protective barriers.",
  },

  statutoryCompliance: {
    title: "Employee, Contractor & Worker Protection Policy",
    points: [
      "Mandatory ESIC / EPF coverage for every employee, technician, and contractual site worker.",
      "Appropriate Personal Protective Equipment (PPE), safety appliances, and flame-retardant clothing matched to specific chemical and electrical working environments.",
      "Comprehensive Safety Plan enforced across both Construction and Operational commissioning phases.",
      "Process description & hazardous material inventory tracking at project sites.",
      "Systematic Hazard Identification & Preliminary Hazard Analysis (PHA / HAZID / HAZOP).",
      "Marine-cum-Erection (MCE) insurance policy covering transit, storage, and site installation.",
      "Comprehensive Insurance of Instrumentation & Control (I&C) items throughout project execution plus 1 month testing & trial run period.",
    ],
  },

  pillars: [
    {
      title: "HSE Plan & Hazard Management",
      description: "Pre-construction Hazard Identification (HAZID), Hazard and Operability (HAZOP) studies, and project-specific HSE manuals.",
    },
    {
      title: "Daily Toolbox Meetings (TBM)",
      description: "Mandatory morning safety briefings for site supervisors and contract labor before starting critical activities.",
    },
    {
      title: "Safety Audits & Incident Prevention",
      description: "Regular third-party safety audits, PPE compliance verification, permit-to-work (PTW) audits, and zero-accident target execution.",
    },
    {
      title: "Statutory & Environmental Clearances",
      description: "Rigorous alignment with State Pollution Control Board (SPCB), Central Electricity Authority (CEA), and Fire NOC requirements.",
    },
  ],
}

// Panel Manufacturing Routine Test Checklist (Source: SIF-EPX Profile Page 28)
export const panelRoutineTests = [
  { id: 1, test: "Visual Checks", description: "Verification of components, layout, labels, ferrules, and finish against approved GA drawings." },
  { id: 2, test: "Enclosure Dimensions", description: "Verification of panel height, width, depth, cutouts, plinth height, and door alignment." },
  { id: 3, test: "Sheet Thickness", description: "Measurement of CRCA load-bearing structure and door sheet gauge thickness." },
  { id: 4, test: "Paint Thickness", description: "Dry Film Thickness (DFT) testing verifying 70-80+ microns uniform powder coating." },
  { id: 5, test: "Insulation Resistance (IR Value)", description: "Megger insulation resistance test between phases, neutral, and earth." },
  { id: 6, test: "Continuity Checks", description: "100% point-to-point electrical continuity of power, control, metering, and earthing paths." },
  { id: 7, test: "High Voltage (HV) Test", description: "High voltage dielectric withstand testing (2.5 kV for 1 min) with zero breakdown." },
]

// Project Delivery Matrix: Scope Summary vs Lead Time (Source: SIF-EPX Profile Page 19)
export const projectDeliveryMatrix = [
  {
    area: "Control Systems",
    leadTime: "4 - 6 Months",
    items: [
      "Designing of Process Control logic (ESD, OLCS and CLCS)",
      "Preparation of P&IDs and Functional Design Specification (FDS)",
      "Control system Panel GA/IA Drawings",
      "Control interface Drawings with Switchgear/MCC Panel (Drive Control Philosophy)",
      "Preparation of system IO list",
      "Complete system / panel FAT, SAT and Quality Assurance Plan (QAP)",
      "Application Software Development, Programming, HMI/SCADA, Batch Reporting & Server",
      "Procurement & Witness/supervision of erection, Pre-Commissioning and commissioning activities",
    ],
  },
  {
    area: "Instrumentations",
    leadTime: "5 Months",
    items: [
      "Design Engineering & Procurement of Process Instruments like Flowmeter, TT, PT, Level Transmitter, Radar, DPT etc.",
      "Design Engineering & Procurement of Auto Actuated Valves like On/Off Valves, Butterfly Valves, Control Valves, Batching valves, 3-way Valves etc.",
      "Process Piping Auxiliary like PG, TG, PRV, Sight Glass, strainers etc.",
      "Engineering & Preparation of Technical Data Sheet of all Field Instruments & QAP Plan",
      "Preparation of Instrument hook-up diagram, cable interconnection schedule, JB/TTJB schedule etc.",
      "Preparation of Instrument list / MPL (Measuring Point List)",
      "Procurement & Witness/supervision of erection, Pre-Commissioning and commissioning activities",
    ],
  },
  {
    area: "Electricals",
    leadTime: "4 Months",
    items: [
      "Design and procurement of Power Control Panel & QAP Plan",
      "Design and procurement of LT MCC, Utility MCC, Panel, Pendant Box, Junction Box etc. & QAP Plan",
      "Scheduling of Control Cables and Electrical Cables",
      "Procurement of all instruments, control and Electrical Cables Accessories",
      "Design and procurement of all type of Cable Tray & its Support etc.",
      "Procurement of all Electrical switchgear & Witness Pre-Commissioning",
      "PCC Panel, LT & MCC Panel, Utility panel Installation",
    ],
  },
  {
    area: "Services",
    leadTime: "2 Months",
    items: [
      "Process Field Instruments operation & Testing",
      "Process C&I Cabling, Loop testing (Hot & Cold) & Terminations with Accessories",
      "Electrical Cabling, Loop testing (Hot & Cold) & Terminations with Accessories",
      "Process Logic & Interlock of ESD Systems Testing",
      "All Process Instruments, Control Panel, Electrical & Power Panel Earthing",
      "Design Engineering DG Set Procurement, I&C, Synchronization, AMF & LMS functioning etc.",
      "Testing, Pre-Commissioning, Commissioning & Trial Run of Complete Electrical, Control & Instruments",
    ],
  },
]

export const statutoryApprovals = [
  {
    authority: "CEIG (Chief Electrical Inspector to Government)",
    purpose: "Drawing approvals and final charging statutory safety clearance for HT/LT substations, transformers, and DG installations.",
  },
  {
    authority: "DISCOM (Distribution Companies)",
    purpose: "Grid connectivity, power evacuation sanction, load approvals, and net-metering synchronization for solar/captive power.",
  },
  {
    authority: "Fire Department / Local Municipal Bodies",
    purpose: "Industrial layout Fire NOC, hydrant network approval, emergency egress validation, and life safety compliance.",
  },
  {
    authority: "Pollution Control Board (SPCB / CPCB)",
    purpose: "Consent to Establish (CTE) & Consent to Operate (CTO) environmental engineering documentation for air, water, and hazardous waste.",
  },
]

export const statutoryClearances = statutoryApprovals

export const softwareTools = [
  { name: "Primavera P6", category: "Project Planning & Scheduling" },
  { name: "Microsoft Project (MSP)", category: "Project Monitoring & Milestones" },
  { name: "STAAD.Pro / ETABS", category: "Civil & Structural Analysis" },
  { name: "AutoCAD 2D / 3D", category: "Engineering Drafting & Layouts" },
  { name: "Autodesk Revit & Navisworks", category: "BIM 3D & 4D Clash Detection" },
  { name: "Autodesk Inventor / PDMS / E3D", category: "Equipment & Plant 3D Modelling" },
  { name: "CAESAR II / AutoPIPE", category: "Piping Stress & Flexibility Analysis" },
  { name: "PLC / DCS Engineering Suites", category: "Process Automation & SCADA" },
]
