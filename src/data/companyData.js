export const companyInfo = {
  name: "SIF Systems",
  groupName: "SIF-EPX Group",
  tagline: "Enlighten Process Excellence",
  badge: "Group of Technocrat",
  role: "Process Engineering EPCC & Industrial Solution Provider",
  certification: "AN ISO 9001:2015 CERTIFIED COMPANY",
  isoCode: "ISO 9001:2015",
  directorName: "Siddhartha Paul",
  
  // History & Inception
  history: {
    sifSystems: {
      name: "SIF Systems",
      established: 2017,
      certification: "ISO 9001:2015 Certified Company",
      description: "Established in 2017 as a specialized technocrat-driven process engineering and turnkey automation provider.",
    },
    epxIndia: {
      name: "EPX India",
      established: 2022,
      description: "Established in 2022 to expand turnkey EPCC, electrical switchgear manufacturing, and industrial automation capabilities under SIF-EPX Group.",
    },
  },

  // Corporate Vision, Mission & Ethics (from Business Profile)
  vision: {
    title: "Our Vision",
    statement:
      "To be premier, most cost-effective & platform-neutral Process Engineering, Information Technology & Control Solution provider from available resources from reputed equipment manufacturers by providing latest technology and solutions worldwide. Continuously enhance the customer experience by providing latest technology and solutions available worldwide in Process Engineering, information & control systems to the extent that it becomes a 'Delight'.",
  },
  mission: {
    title: "Our Mission",
    statement:
      "Our mission is to create an atmosphere of trust amongst our customer to such an extent that they don't need to look elsewhere for solution to their automation and customization needs.", // Fixed source typo "atomization" -> "automation"
  },
  ethics: {
    title: "Our Ethics",
    statement:
      "To continuously enhance stakeholder value. Grow & nurture human capital to ensure sustainable & profitable growth year on year. Our work standards meet contemporary IoT Industry 4.0 standards.",
  },

  aboutNarrative: {
    philosophy:
      "We integrate manufacturing plants and operations systems with enterprise applications to deliver maximum operational productivity and engineering precision.",
    summary:
      "SIF Systems (SIF-EPX Group) is a premier ISO 9001:2015 certified engineering and industrial solution provider offering turnkey EPCC, EPCM, PMC, Detailed Design, Electrical Panel Manufacturing, and Contract Engineering Manpower Supply.",
  },

  // Leadership Roles (published as requested: roles only, no private headcount/banking)
  leadership: [
    {
      name: "Siddhartha Paul",
      role: "Business Head (EPCC Division - Process Industries)",
      email: "siddhartha@sif-epxindia.co.in",
      phone: "+91-95601-77522",
    },
    {
      name: "Ashutosh Kshirsagar",
      role: "Partner (Process Consultant for Process Industries)",
    },
    {
      name: "Rajendra Patel",
      role: "Partner (IIoT Solutions for Process Industries)",
    },
    {
      name: "Anil Myra",
      role: "Partner (Electrical Solutions - HT & LT Segment)",
    },
  ],

  director: {
    name: "Siddhartha Paul",
    title: "Director / Business Head",
    emails: ["siddhartha@sif-epxindia.co.in"],
    phones: ["+91-95601-77522", "+91-93109-67545"],
  },

  // Multi-location Offices
  offices: {
    corporate: {
      type: "Corporate Office",
      building: "I-Thum Business Park, Office No. 607, 6th Floor, Tower-C",
      street: "Sector-62",
      city: "Noida",
      // TODO: Pincode discrepancy - SUMICHEM proposal states 201301 whereas Business Profile states 201309. Using 201309 from Profile pending client confirmation.
      pincode: "201309",
      district: "Gautam Buddha Nagar (GB Nagar)",
      state: "Uttar Pradesh",
      country: "India",
      fullAddress:
        "I-Thum Business Park, Office No. 607, 6th Floor, Tower-C, Sector-62, Noida - 201309, UP, India",
    },
    works: {
      type: "Works & Manufacturing Unit",
      building: "Plot No. 03, Sybly Industrial Area",
      street: "Pawanpuri, Murad Nagar",
      city: "Ghaziabad",
      pincode: "201026",
      state: "Uttar Pradesh",
      country: "India",
      fullAddress:
        "Plot No. 03, Sybly Industrial Area, Pawanpuri, Murad Nagar, Ghaziabad, UP - 201026, India",
    },
    branches: [
      {
        city: "Vadodara",
        state: "Gujarat",
        region: "Western Region",
        description: "Branch Office supporting Gujarat industrial corridor & process plants",
      },
      {
        city: "Ahmedabad",
        state: "Gujarat",
        region: "Western Region",
        description: "Branch Office supporting engineering & sales operations",
      },
    ],
  },

  // Legacy single corporateOffice alias for backwards compatibility
  corporateOffice: {
    building: "I-Thum Business Park, Office No. 607, 6th Floor, Tower-C",
    street: "Sector-62",
    city: "Noida",
    pincode: "201309", // TODO: Client confirmation needed for 201301 vs 201309
    district: "Gautam Buddha Nagar",
    state: "Uttar Pradesh",
    country: "India",
    fullAddress:
      "I-Thum Business Park, Office No. 607, 6th Floor, Tower-C, Sector-62, Noida - 201309, UP, India",
  },

  // Unified Contact Details
  contact: {
    // TODO: Client to confirm preferred primary domain: sales@sif-epxindia.co.in vs sales@sifsystemsindia.com
    phones: ["+91-95601-77522", "+91-93109-67545", "+91-120-4555252"],
    emails: ["sales@sif-epxindia.co.in", "siddhartha@sif-epxindia.co.in", "sales@sifsystemsindia.com"],
    websites: ["www.sif-epxindia.co.in", "www.sifsystemsindia.com"],
  },

  keyStats: [
    { value: "2017", label: "Founded (SIF Systems)", suffix: " (ISO 9001)" },
    { value: "9+", label: "Core Service Verticals", suffix: " Verticals" },
    { value: "15+", label: "Fortune & PSU Clients", suffix: " Esteemed Clients" },
    { value: "100%", label: "Multi-disciplinary In-house Engineering", suffix: "" },
    { value: "100%", label: "Statutory & HR Compliance (PF/ESI)", suffix: "" },
    { value: "Pan-India", label: "Fast Resource Mobilization", suffix: " & Global" },
  ],

  // 6 USP Points from Business Profile Page 31
  usp: [
    {
      id: 1,
      title: "Unmatched, Uncompromising Superior Quality",
      description: "ISO 9001:2015 certified quality systems with rigorous multi-stage testing, FAT/SAT protocols, and zero-defect commitment.",
    },
    {
      id: 2,
      title: "Working with Market Leaders & MNCs",
      description: "Trusted by top multinational corporations (DIC India, Toyo Ink, Navin Fluorine, KRBL) and Indian government bodies (DAE, ISRO, IOCL R&D).",
    },
    {
      id: 3,
      title: "Fully Customized Solutions for Customer Delight",
      description: "Tailor-engineered systems matching exact client process specifications, plant layouts, and operational workflows.",
    },
    {
      id: 4,
      title: "Expert Technical Team & Full-Fledged Facilities",
      description: "In-house engineering team, modern manufacturing works at Murad Nagar, state-of-the-art testing equipment, and dedicated project management.",
    },
    {
      id: 5,
      title: "Time-Bound Delivery Commitment",
      description: "Standardized project management matrix, critical path scheduling (MSP/Primavera), and streamlined supply chain ensuring on-time handover.",
    },
    {
      id: 6,
      title: "Competitive & Value-Driven Pricing",
      description: "Optimized value engineering, in-house panel fabrication, and lean execution ensuring optimal capital and operational expenditure.",
    },
  ],

  whyChooseUs: [
    {
      id: 1,
      title: "End-to-End Capabilities",
      description: "Complete engineering and project execution capability under one single roof from concept to commissioning.",
    },
    {
      id: 2,
      title: "Extensive Multi-Industry Expertise",
      description: "Specialized engineering team with deep experience across chemical, process, power, oil & gas, and infrastructure sectors.",
    },
    {
      id: 3,
      title: "Strong Track Record",
      description: "Proven proficiency across Detailed Design, PMC, EPCM, and rapid engineering manpower deployment.",
    },
    {
      id: 4,
      title: "Pan-India Rapid Mobilization",
      description: "Ability to quickly mobilize experienced engineers, site supervisors, and technical specialists across India and abroad.",
    },
    {
      id: 5,
      title: "Quality, Safety & On-Time Delivery",
      description: "Rigorous compliance with ISO 9001:2015, NEBOSH/IOSH safety norms, and strict adherence to project timelines.",
    },
    {
      id: 6,
      title: "Cost-Effective Value Engineering",
      description: "Material optimization (steel, cabling, piping) and smart engineering solutions to minimize capex and execution cycle.",
    },
    {
      id: 7,
      title: "Single-Point Accountability",
      description: "Unified responsibility and governance for engineering, procurement, construction management, and manpower.",
    },
  ],

  longTermVision: {
    heading: "Intention for Long-Term Association",
    summary: "SIF-EPX Group is committed to building a long-standing relationship with industrial clients, acting as an extended engineering arm.",
    points: [
      "Simultaneous execution and support across multiple complex projects",
      "Strategic support for future expansions and new business verticals",
      "Ongoing engineering, design review, and on-site technical support needs",
      "Long-term contractual engineering manpower deployment",
      "Repeat engagements and standardized engineering delivery across multiple locations",
    ],
  },
}

export const valuePillars = companyInfo.whyChooseUs

export const disciplinaryStrengths = [
  {
    discipline: "Process Engineering",
    skills: ["Heat & Mass Balance", "PFD & P&ID Development", "HAZOP & Safety Studies", "Hydraulic Sizing"],
  },
  {
    discipline: "Piping & Mechanical",
    skills: ["3D Piping Routing", "Stress Analysis (CAESAR II)", "Equipment Layouts", "Isometrics & MTO"],
  },
  {
    discipline: "Civil & Structural",
    skills: ["STAAD.Pro Analysis", "Equipment Foundations", "Steel Structure Framing", "BIM Coordination"],
  },
  {
    discipline: "Electrical & Switchgear",
    skills: ["HT/LT Panels & PCC/MCC", "APFC & AMF Synchronization", "Non-Segregated Bus Ducts", "CEIG Approvals"],
  },
  {
    discipline: "Instrumentation & Automation",
    skills: ["PLC / DCS / SCADA Architecture", "ISA S-88 Batch Automation", "Flameproof & IS Barrier Schemes", "MES / MIS / IIoT Integration"],
  },
]
