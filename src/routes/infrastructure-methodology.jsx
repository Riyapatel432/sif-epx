import { useState, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Factory,
  Shield,
  Sparkles,
  CheckCircle2,
  Cpu,
  Clock,
  Calendar,
  CheckSquare,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Award,
  Layers,
  FileCheck,
  Truck,
  Zap,
  Activity,
  Gauge,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Compass
} from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import TechnicalBlueprintGridSVG from '../components/visuals/TechnicalBlueprintGridSVG'
import { companyInfo } from '../data/companyData'
import { softwareTools } from '../data/standardsData'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'
import HeroAnchorNav from '../components/HeroAnchorNav'
import LordIcon from '../components/LordIcon'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import TiltedCard from '../components/reactbits/TiltedCard'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/infrastructure-methodology')({
  head: () => ({
    meta: [
      {
        title: 'Infrastructure & Engineering Methodology | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'Explore our 25,000 sq ft Murad Nagar works, 9-tank chemical pre-treatment, CPRI type-tested designs, and Stage-Gate project execution methodology.',
      },
      {
        property: 'og:title',
        content: 'Infrastructure & Engineering Methodology | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'Explore our 25,000 sq ft Murad Nagar works, 9-tank chemical pre-treatment, CPRI type-tested designs, and Stage-Gate project execution methodology.',
      },
    ],
  }),
  component: InfrastructureMethodologyPage,
})

// Data for Gantt Roadmap
const tracks = [
  {
    id: 'control',
    name: 'Process Control & DCS/SCADA Systems',
    durationMonths: '4 - 6 Months',
    shortMo: '4 MO',
    startMonth: 1,
    endMonth: 6,
    activeSpanMonths: 6,
    progressPct: 85,
    color: 'from-[#001B79] via-[#0284C7] to-[#38BDF8]',
    badgeBg: 'bg-blue-50 text-[#001B79] border-blue-200',
    worklist: [
      { month: 'Month 1', task: 'Month 1: P&ID review, control philosophy, and I/O database freeze' },
      { month: 'Month 2', task: 'Month 2: Hardware chassis procurement and PLC software architecture' },
      { month: 'Month 3', task: 'Month 3: SCADA graphic screens, alarm matrix, and batch recipe coding' },
      { month: 'Month 4', task: 'Month 4: Staged internal dry testing and client Factory Acceptance Test (FAT)' },
      { month: 'Month 5-6', task: 'Month 5-6: Site installation, cable meggering, hot/cold loop checks, and commissioning' }
    ]
  },
  {
    id: 'inst',
    name: 'Field Instrumentation & Hazardous Area Transmitters',
    durationMonths: '5 Months',
    shortMo: '5 MO',
    startMonth: 1,
    endMonth: 5,
    activeSpanMonths: 5,
    progressPct: 75,
    color: 'from-[#0284C7] to-[#38BDF8]',
    badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
    worklist: [
      { month: 'Month 1', task: 'Month 1: Instrument process datasheets, sizing calculations (orifice/control valve)' },
      { month: 'Month 2', task: 'Month 2: Sourcing of Ex d / Ex ia transmitters (Yokogawa / Rosemount / Endress+Hauser)' },
      { month: 'Month 3', task: 'Month 3: Hook-up drawings, JB schedule, and cable tray layout routing' },
      { month: 'Month 4', task: 'Month 4: Receipt inspection, calibration bench verification, and mounting' },
      { month: 'Month 5', task: 'Month 5: Hydro-testing impulse lines, signal loop continuity, and zero/span trim' }
    ]
  },
  {
    id: 'elec',
    name: 'Electrical Panels (PCC, MCC, iMCC, 11kV VCB)',
    durationMonths: '4 Months',
    shortMo: '4 MO',
    startMonth: 1,
    endMonth: 4,
    activeSpanMonths: 4,
    progressPct: 65,
    color: 'from-[#001B79] to-[#00229C]',
    badgeBg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    worklist: [
      { month: 'Month 1', task: 'Month 1: GA drawing finalization, single line diagram approvals, and busbar calculations' },
      { month: 'Month 2', task: 'Month 2: CNC sheet shearing, punching, bending, and 9-tank pre-treatment & powder coating' },
      { month: 'Month 3', task: 'Month 3: Copper busbar fabrication, switchgear component assembly, and secondary wiring' },
      { month: 'Month 4', task: 'Month 4: Routine HV / Megger testing, client FAT inspection sign-off, and site dispatch' }
    ]
  },
  {
    id: 'serv',
    name: 'Statutory Clearances & Trial Run Services',
    durationMonths: '2 Months',
    shortMo: '2 MO',
    startMonth: 1,
    endMonth: 2,
    activeSpanMonths: 2,
    progressPct: 40,
    color: 'from-emerald-600 to-teal-500',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    worklist: [
      { month: 'Month 1', task: 'Month 1: CEIG drawing submittal, electrical inspector site verification, SPCB CEMS filings' },
      { month: 'Month 2', task: 'Month 2: Water trial runs, raw material solvent charging, 72-hour continuous test, commercial handover' }
    ]
  }
]

// Data for 7-Stage Manufacturing Flow
const flowSteps = [
  {
    num: '01',
    title: 'Design & GA Approval',
    facility: 'Engineering Office (Noida HQ)',
    icon: FileCheck,
    desc: 'Preparation of General Arrangement (GA) drawings, Single Line Diagrams (SLD), busbar calculations, and heat dissipation analysis for client sign-off.',
    checklist: ['SLD & Schematic Verification', 'Busbar Thermal Calculations', 'Client Drawing Approval']
  },
  {
    num: '02',
    title: 'Sheet Metal CNC Fabrication',
    facility: 'Murad Nagar Works',
    icon: Factory,
    desc: 'Precision shearing, CNC punching, and hydraulic press brake bending using 2.0mm CRCA sheet steel for load-bearing frames and doors.',
    checklist: ['2.0mm CRCA Steel Inspection', 'CNC Dimensional Tolerances', 'Door Interlock Alignment']
  },
  {
    num: '03',
    title: '9-Tank Chemical Cleaning',
    facility: 'Murad Nagar Pre-Treatment Bay',
    icon: Sparkles,
    desc: 'Immersion phosphating line: degreasing, water rinse, derusting, water rinse, activation, zinc phosphating, water rinse, and passivation sealing.',
    checklist: ['Zinc Phosphate Layer Weight Check', 'Surface Cleanliness Verification', 'Passivation Immersion Time']
  },
  {
    num: '04',
    title: 'Pure Polyester Powder Coat',
    facility: 'Conveyorized Powder Booth & Oven',
    icon: Shield,
    desc: 'Electrostatic powder application cured at 200°C for 20 minutes to deliver minimum 70-80 microns DFT in RAL 7035 / client color spec with 1000h salt spray resistance.',
    checklist: ['DFT Thickness 70-80 Microns', 'Cross-Hatch Adhesion Test', '1000h Salt Spray Verified']
  },
  {
    num: '05',
    title: 'Busbar & Component Assembly',
    facility: 'Assembly Line 1 & 2',
    icon: Zap,
    desc: 'Installation of E91E electrolytic copper busbars (heat shrink sleeved with phase color coding), switchgear mounting, and flame-retardant wiring.',
    checklist: ['Torque Wrench Busbar Tightening', 'Color Coded Heat Shrink Sleeves', 'Ferruling & Wire Dressing']
  },
  {
    num: '06',
    title: 'Routine Factory Acceptance (FAT)',
    facility: 'In-House Testing Bay',
    icon: CheckCircle2,
    desc: 'Strict routine testing as per IEC 61439: High Voltage test (2.5 kV for 1 min), insulation resistance test (500V Megger), primary/secondary injection, and interlock trials.',
    checklist: ['2.5 kV HV Dielectric Test', 'Insulation Resistance > 100 MΩ', 'Relay Secondary Injection']
  },
  {
    num: '07',
    title: 'Packing & Dispatch Handover',
    facility: 'Logistics Bay',
    icon: Truck,
    desc: 'Polythene stretch wrapping, heavy wooden crating for transport, silica gel desiccants, and dispatch along with test certificates and as-built dossiers.',
    checklist: ['Heavy Duty Wooden Crating', 'Test Certificate Dossier Included', 'Site Unloading Method Statement']
  }
]

function InfrastructureMethodologyPage() {
  const [expandedTrack, setExpandedTrack] = useState('control')
  const [activeStep, setActiveStep] = useState(2) // Default to Stage 03: 9-Tank Chemical Cleaning
  const [showAllTools, setShowAllTools] = useState(false)
  const stepperRef = useRef(null)

  const currentStep = flowSteps[activeStep]
  const CurrentStepIcon = currentStep.icon

  const handleStepChange = (newStep) => {
    setActiveStep(newStep)
    if (stepperRef.current && stepperRef.current.children[newStep]) {
      stepperRef.current.children[newStep].scrollIntoView({
        behavior: 'smooth',
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO — AURORAWAVES + BLURTEXT + FLOATING TELEMETRY METRIC CONSOLE     */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-10 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        <AuroraWaves speed={0.007} />

        {/* Ambient Radial Depth Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(30,64,216,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div>
            <Breadcrumbs items={[{ label: 'Infrastructure & Methodology' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            {/* Badges wrap in 2 lines max */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-sky-200 font-bold">
                  INFRASTRUCTURE &amp; WORKS
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[10px] sm:text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="Murad Nagar Works" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[10px] sm:text-[11px] font-mono font-bold border border-emerald-400/30">
                25,000 Sq Ft Footprint
              </span>
            </div>

            {/* Title with fluid clamp typography */}
            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.12] drop-shadow-sm">
              <BlurText
                text="Engineering Infrastructure & Works Methodology"
                delay={40}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Combining our 25,000 sq ft switchgear manufacturing works at Murad Nagar with enterprise software tooling, standardized EPCM execution, and predictable delivery milestones.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 sm:pt-4 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={[
                { id: 'works-spec', label: '01. Murad Nagar Works Bay' },
                { id: 'software-suite', label: '02. Engineering Software' },
                { id: 'gantt-schedule', label: '03. Delivery Lead Times' },
                { id: 'manufacturing-flow', label: '04. 7-Stage Manufacturing Flow' },
              ]}
              onSelect={(id) => {
                const el = document.getElementById(id)
                if (el) {
                  const headerOffset = 110
                  const elementPosition = el.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                  })
                }
              }}
              ariaLabel="Infrastructure & works methodology quick links"
            />
          </div>

          {/* Floating Telemetry Metric Console: 2x2 grid with compact padding on mobile, 4-col on desktop */}
          <div className="pt-6 sm:pt-8 border-t border-[#22B8F0]/25 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={200}
              className="fade-up rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5"
              data-delay="100"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center shrink-0 text-sky-300">
                <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-sky-200 block font-semibold truncate">FACILITY FOOTPRINT</span>
                <span className="text-base sm:text-xl font-black font-mono text-white">25,000 SQ FT</span>
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={200}
              className="fade-up rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5"
              data-delay="200"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center shrink-0 text-sky-300">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-sky-200 block font-semibold truncate">FABRICATION TOLERANCE</span>
                <span className="text-base sm:text-xl font-black font-mono text-white">±0.2 MM</span>
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={200}
              className="fade-up rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5"
              data-delay="300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center shrink-0 text-sky-300">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-sky-200 block font-semibold truncate">PRE-TREATMENT DFT</span>
                <span className="text-base sm:text-xl font-black font-mono text-white">70-80 MICRONS</span>
              </div>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={200}
              className="fade-up rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5"
              data-delay="400"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-400/20 border border-emerald-300/30 flex items-center justify-center shrink-0 text-emerald-300">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-emerald-200 block font-semibold truncate">ROUTINE FAT PASS</span>
                <span className="text-base sm:text-xl font-black font-mono text-emerald-300">100% FAT VERIFIED</span>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WORKS CAPABILITIES — SPEC-SHEET TILES WITH CORNER TICKS & MONO GAUGES */}
      {/* ========================================================================= */}
      <section id="works-spec" className="reveal-fade-in py-12 sm:py-20 relative section-sky-a overflow-hidden scroll-mt-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="eyebrow-pill">WORKS CAPABILITIES</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
              In-House Switchgear Works (Murad Nagar)
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Equipped with precision CNC metal shaping, in-house chemical pre-treatment, and high-voltage dielectric testing bays.
            </p>
          </div>

          <MobileSnapSlider
            ariaLabel="Works Capabilities Slider"
            itemWidth="w-[85vw] max-w-[340px]"
            desktopClassName="lg:grid lg:grid-cols-3 lg:gap-8"
            showDots={true}
          >
            {/* Spec Tile 1: CNC Sheet Metal Fabrication */}
            <div className="relative group rounded-3xl bg-white border border-sky-200 p-6 sm:p-9 shadow-xl shadow-sky-100/60 hover:border-[#0284C7] hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">  
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <LordIcon
                      src="https://cdn.lordicon.com/etwtznjn.json"
                      trigger="hover"
                      primaryColor="#ffffff"
                      secondaryColor="#22B8F0"
                      size={30}
                      stroke={60}
                      fallback={<Factory className="h-6 w-6 sm:h-7 sm:w-7 text-white" />}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    SPEC // BAY 01
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#001B79] mb-2 sm:mb-3 leading-snug">
                  CNC Sheet Metal Fabrication
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 sm:mb-6">
                  High-precision shearing, punching, and hydraulic press bending using 2.0mm CRCA sheet steel for load-bearing frames, modular cubicles, and Form 4b barriers.
                </p>
              </div>

              {/* Monospace Specification Gauge Element */}
              <div className="pt-4 sm:pt-6 border-t border-sky-100">
                <div className="rounded-2xl bg-gradient-to-br from-sky-50/80 to-white border border-sky-200/80 p-3 sm:p-4 flex items-center justify-between gap-2 group-hover:border-[#0284C7] transition-colors">
                  <div className="flex items-center space-x-2 shrink-0">
                    <Gauge className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-500 font-semibold truncate">TOLERANCE</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-black text-[#0369A1] tracking-tight bg-white px-2.5 sm:px-3 py-1 rounded-lg border border-sky-200 shadow-2xs shrink-0 whitespace-nowrap">
                    ±0.2 MM
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Tile 2: 9-Tank Surface Pretreatment */}
            <div className="relative group rounded-3xl bg-white border border-sky-200 p-6 sm:p-9 shadow-xl shadow-sky-100/60 hover:border-[#0284C7] hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B1F6B] to-[#0284C7] text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <LordIcon
                      src="https://cdn.lordicon.com/qhgmphtg.json"
                      trigger="hover"
                      primaryColor="#ffffff"
                      secondaryColor="#22B8F0"
                      size={30}
                      stroke={60}
                      fallback={<Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white" />}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    SPEC // BAY 02
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#001B79] mb-2 sm:mb-3 leading-snug">
                  9-Tank Surface Pretreatment
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 sm:mb-6">
                  Full chemical immersion phosphating line ensuring optimum corrosion protection, followed by pure polyester powder coating cured at 200°C for 1000h salt spray resistance.
                </p>
              </div>

              {/* Monospace Specification Gauge Element */}
              <div className="pt-4 sm:pt-6 border-t border-sky-100">
                <div className="rounded-2xl bg-gradient-to-br from-sky-50/80 to-white border border-sky-200/80 p-3 sm:p-4 flex items-center justify-between gap-2 group-hover:border-[#0284C7] transition-colors">
                  <div className="flex items-center space-x-2 shrink-0">
                    <Sliders className="w-4 h-4 text-[#0284C7]" />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-500 font-semibold truncate">COATING</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-black text-[#0369A1] tracking-tight bg-white px-2.5 sm:px-3 py-1 rounded-lg border border-sky-200 shadow-2xs shrink-0 whitespace-nowrap">
                    70-80 MICRONS DFT
                  </div>
                </div>
              </div>
            </div>

            {/* Spec Tile 3: Routine FAT Testing Bay */}
            <div className="relative group rounded-3xl bg-white border border-sky-200 p-6 sm:p-9 shadow-xl shadow-sky-100/60 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#065F46] to-[#059669] text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <LordIcon
                      src="https://cdn.lordicon.com/egiwmiit.json"
                      trigger="hover"
                      primaryColor="#ffffff"
                      secondaryColor="#34D399"
                      size={30}
                      stroke={60}
                      fallback={<Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    TEST BAY // VERIFIED
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#001B79] mb-2 sm:mb-3 leading-snug">
                  Routine FAT Testing Bay
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 sm:mb-6">
                  In-house testing facility equipped with 5 kV High Voltage test sets, secondary current injection rigs, 1000V Megger insulation testers, and functional interlock simulators.
                </p>
              </div>

              {/* Monospace Specification Gauge Element */}
              <div className="pt-4 sm:pt-6 border-t border-sky-100">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-200/80 p-3 sm:p-4 flex items-center justify-between gap-2 group-hover:border-emerald-500 transition-colors">
                  <div className="flex items-center space-x-2 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-emerald-800 font-semibold truncate">DIELECTRIC &amp; FAT</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono font-black text-emerald-700 tracking-tight bg-white px-2.5 sm:px-3 py-1 rounded-lg border border-emerald-200 shadow-2xs shrink-0 whitespace-nowrap">
                    100% FAT VERIFIED
                  </div>
                </div>
              </div>
            </div>
          </MobileSnapSlider>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DIGITAL TOOLING — CHIP-RACK MODULAR DOCK                                */}
      {/* ========================================================================= */}
      <section id="software-suite" className="py-10 sm:py-20 relative section-sky-b overflow-hidden border-t border-sky-200 scroll-mt-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="eyebrow-pill">DIGITAL TOOLING</span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
              Enterprise Design &amp; Engineering Tooling
            </h3>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Platform-standard engineering applications utilized across process simulations, piping stress, structural analysis, and 3D BIM clash detection.
            </p>
          </div>

          {/* Modular Chip-Rack Equipment Chassis Container */}
          <div className="rounded-3xl bg-white border border-sky-300/80 p-4 sm:p-6 lg:p-10 shadow-2xl shadow-sky-100/70 relative overflow-hidden">
            {/* Top Chassis Server Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-sky-100">
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <div className="flex space-x-1.5 shrink-0">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-sky-400" />
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#001B79]" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] truncate">
                  ENGINEERING SUITE // 8 COGNITIVE NODES
                </span>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 font-medium">
                ACTIVE CAD / CAE / BIM WORKSTATION CLUSTERS
              </span>
            </div>

            {/* 8 Modular Chip Slots: 2-column compact grid on mobile (< lg), 4-column on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
              {softwareTools.map((tool, idx) => {
                const isHiddenOnMobile = !showAllTools && idx >= 4

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: (idx % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`${
                      isHiddenOnMobile ? 'hidden lg:flex' : 'flex'
                    } group relative rounded-2xl bg-gradient-to-br from-white via-sky-50/40 to-white border border-sky-200 p-3 sm:p-5 shadow-sm hover:border-[#0284C7] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 flex-col justify-between`}
                  >
                    {/* Subtle Slot Number Pin */}
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                        SLOT [0{idx + 1}]
                      </span>
                   
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:space-x-3.5 mb-2 sm:mb-3">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-sky-100 text-[#001B79] group-hover:bg-[#001B79] group-hover:text-white transition-colors duration-300 shrink-0 mb-2 sm:mb-0">
                        <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-black text-xs sm:text-base text-[#001B79] leading-tight mb-0.5 sm:mb-1 group-hover:text-[#0284C7] transition-colors line-clamp-1">
                          {tool.name}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 leading-snug block line-clamp-1">
                          {tool.purpose || tool.category}
                        </span>
                      </div>
                    </div>

                    {/* Hardware Connection Pins visual at bottom: Simplified single dot on mobile */}
                    <div className="pt-2 sm:pt-3 mt-1 border-t border-dashed border-sky-100 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-400">
                      <span className="hidden sm:inline">BUS LINK 64-BIT</span>
                      <span className="text-emerald-700 font-bold flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>STANDARDIZED</span>
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Mobile "Show all 8 tools" Expander */}
            <div className="mt-4 pt-3 border-t border-sky-100 lg:hidden text-center">
              <button
                type="button"
                onClick={() => setShowAllTools(!showAllTools)}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#001B79] font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>{showAllTools ? 'Collapse to 4 Tools' : 'Show All 8 Engineering Tools'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAllTools ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROJECT DELIVERY ROADMAP — TRUE HORIZONTAL GANTT AXIS & STEPPER        */}
      {/* ========================================================================= */}
      <section id="gantt-schedule" className="py-10 sm:py-20 relative section-sky-a overflow-hidden border-t border-sky-200 scroll-mt-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="rounded-3xl bg-white border border-sky-200 p-4 sm:p-10 lg:p-12 shadow-2xl shadow-sky-100/70">
            {/* Header: Title & Description */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-6 sm:pb-8 border-b border-sky-100">
              <div>
                <span className="eyebrow-pill mb-2">
                  PROJECT DELIVERY ROADMAP
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001B79] tracking-tight">
                  Standard Engineering Lead-Time Gantt
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
                Predictable engineering lead-times backed by disciplined milestone scheduling (Primavera P6) and dedicated expediting teams.
              </p>
            </div>

            {/* Desktop True Gantt Chart (Month Axis Header M1 through M6) */}
            <div className="hidden lg:block mb-8">
              <div className="grid grid-cols-12 gap-4 pb-3 border-b-2 border-sky-200 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                <div className="col-span-4 pl-2">Track &amp; Scope Specification</div>
                <div className="col-span-8 grid grid-cols-6 text-center">
                  <div className="border-l border-sky-100">M1 (30D)</div>
                  <div className="border-l border-sky-100">M2 (60D)</div>
                  <div className="border-l border-sky-100">M3 (90D)</div>
                  <div className="border-l border-sky-100">M4 (120D)</div>
                  <div className="border-l border-sky-100">M5 (150D)</div>
                  <div className="border-l border-sky-100">M6 (180D)</div>
                </div>
              </div>
            </div>

            {/* Gantt Interactive Rows (Mobile Accordion / Desktop Timeline) */}
            <div className="space-y-3 sm:space-y-5">
              {tracks.map((track) => {
                const isExp = expandedTrack === track.id

                return (
                  <div
                    key={track.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExp
                        ? 'border-sky-400 bg-gradient-to-br from-white via-sky-50/50 to-white shadow-lg shadow-sky-100'
                        : 'border-sky-200 bg-white hover:border-sky-300 hover:bg-sky-50/30'
                    }`}
                  >
                    {/* Gantt Row Bar Header */}
                    <button
                      type="button"
                      onClick={() => setExpandedTrack(isExp ? null : track.id)}
                      className="w-full p-4 sm:p-6 text-left cursor-pointer flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 items-stretch lg:items-center focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] rounded-2xl min-h-[48px]"
                      aria-expanded={isExp}
                    >
                      {/* Left: Track Name & Meta */}
                      <div className="w-full lg:col-span-4 space-y-1.5 lg:pr-4">
                        <div className="flex items-center justify-between lg:justify-start space-x-2">
                          <div className="flex items-center space-x-2 min-w-0">
                            <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
                            <h4 className="font-black text-sm sm:text-base text-[#001B79] leading-snug truncate">
                              {track.name}
                            </h4>
                          </div>
                          {/* Chevron Trigger on Mobile */}
                          <div className="lg:hidden p-1.5 rounded-lg bg-sky-100 text-[#001B79] shrink-0">
                            {isExp ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-500" />
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs font-mono font-bold text-sky-700 pl-6">
                          <span>Estimated: {track.durationMonths}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${track.badgeBg}`}>
                            {track.shortMo}
                          </span>
                        </div>
                      </div>

                      {/* Right: True Horizontal Timeline Grid on Desktop, Clean Thin Progress Bar on Mobile */}
                      <div className="w-full lg:col-span-8 flex items-center space-x-4 pt-1 lg:pt-0">
                        {/* Horizontal Timeline Track Bar with grid markers */}
                        <div className="flex-1 relative bg-slate-100 rounded-xl h-4 sm:h-8 overflow-hidden p-0.5 sm:p-1 border border-slate-200">
                          {/* Background Axis Division Lines (Desktop only) */}
                          <div className="hidden lg:grid absolute inset-0 grid-cols-6 pointer-events-none opacity-40">
                            <div className="border-r border-slate-300" />
                            <div className="border-r border-slate-300" />
                            <div className="border-r border-slate-300" />
                            <div className="border-r border-slate-300" />
                            <div className="border-r border-slate-300" />
                            <div />
                          </div>

                          {/* Animated Gantt Fill Bar */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(track.activeSpanMonths / 6) * 100}%`
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className={`h-full rounded-md sm:rounded-lg bg-gradient-to-r ${track.color} relative z-10 shadow-sm flex items-center justify-end pr-1.5 sm:pr-2`}
                          >
                            <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-slate-900 text-white text-[9px] sm:text-[10px] font-mono font-bold shadow-xs">
                              {track.durationMonths.split(' ')[0]} MO
                            </span>
                          </motion.div>
                        </div>

                        {/* Chevron Trigger on Desktop */}
                        <div className="hidden lg:flex p-2 rounded-xl bg-sky-100 text-[#001B79] shrink-0">
                          {isExp ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Milestone Stepper */}
                    <AnimatePresence>
                      {isExp && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-sky-200/80 bg-white p-4 sm:p-8"
                        >
                          <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span className="text-xs font-mono font-bold text-[#001B79] uppercase tracking-wider flex items-center space-x-2">
                              <CheckSquare className="w-4 h-4 text-[#0284C7] shrink-0" />
                              <span>Sequential Execution Milestones:</span>
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400">
                              PRIMAVERA P6 LEVEL-4 VERIFIED
                            </span>
                          </div>

                          {/* Vertical Stepper with Interconnected Nodes */}
                          <div className="relative pl-5 sm:pl-8 space-y-4 sm:space-y-6 before:absolute before:left-2 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#001B79] before:via-[#0284C7] before:to-sky-300">
                            {track.worklist.map((item, idx) => (
                              <div key={idx} className="relative flex items-start space-x-3 sm:space-x-4 group">
                                {/* Milestone Node Circle */}
                                <div className="absolute -left-5 sm:-left-8 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-[#0284C7] flex items-center justify-center shadow-xs">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#001B79]" />
                                </div>

                                <div className="rounded-xl bg-sky-50/70 border border-sky-200/80 p-3 sm:p-3.5 flex-1 group-hover:border-[#0284C7] group-hover:bg-white transition-colors">
                                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium break-words">
                                    {item.task}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 7-STAGE MANUFACTURING FLOW — PIPELINE CONVEYOR & INTERACTIVE CONSOLE   */}
      {/* ========================================================================= */}
      <section id="manufacturing-flow" className="py-10 sm:py-20 relative section-sky-b overflow-hidden border-t border-sky-200 scroll-mt-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="rounded-3xl bg-white border border-sky-200 p-4 sm:p-10 lg:p-12 shadow-2xl shadow-sky-100/70">
            {/* Header: Title & Description */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-6 sm:pb-8 border-b border-sky-100">
              <div>
                <span className="eyebrow-pill mb-2">
                  IN-HOUSE MANUFACTURING QUALITY
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001B79] tracking-tight">
                  7-Stage Switchgear Manufacturing Flow
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
                From CNC metal fabrication to our 9-tank chemical pre-treatment and routine dielectric testing, every panel is built to IEC 61439 benchmarks.
              </p>
            </div>

            {/* Horizontal Pipeline Stepper (Snap, Step numbers 01-07, Auto-scroll, Progress Bar) */}
            <div className="relative mb-6 sm:mb-10">
              {/* Stepper Progress Bar on Mobile */}
              <div className="lg:hidden mb-3">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#0369A1] mb-1.5">
                  <span>STAGE {activeStep + 1} OF {flowSteps.length}</span>
                  <span className="text-slate-600 font-medium">{Math.round(((activeStep + 1) / flowSteps.length) * 100)}% COMPLETE</span>
                </div>
                <div className="h-1.5 w-full bg-sky-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#001B79] to-[#0284C7] transition-all duration-300 rounded-full"
                    style={{ width: `${((activeStep + 1) / flowSteps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Desktop Interconnecting Conveyor Line */}
              <div className="hidden lg:block absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-sky-200 via-[#0284C7] to-sky-200 -z-0" />

              <div
                ref={stepperRef}
                role="tablist"
                aria-label="Manufacturing Stages"
                className="flex lg:grid lg:grid-cols-7 gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-3 snap-x relative z-10 -mx-4 px-4 sm:mx-0 sm:px-0"
              >
                {flowSteps.map((s, idx) => {
                  const isAct = idx === activeStep
                  const StepIcon = s.icon

                  return (
                    <button
                      key={s.num}
                      role="tab"
                      aria-selected={isAct}
                      onClick={() => handleStepChange(idx)}
                      className={`min-w-[130px] sm:min-w-[170px] lg:min-w-0 p-3 sm:p-4 rounded-2xl text-left transition-all duration-300 border snap-start cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] flex flex-col justify-between shrink-0 ${
                        isAct
                          ? 'bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white border-[#001B79] shadow-lg shadow-sky-900/20 scale-[1.02]'
                          : 'bg-white hover:bg-sky-50/80 border-sky-200 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className={`text-[10px] sm:text-[11px] font-mono font-black ${isAct ? 'text-sky-200' : 'text-[#0369A1]'}`}>
                          STAGE {s.num}
                        </span>
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center ${isAct ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'}`}>
                          <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                      </div>

                      <span className="font-black text-xs sm:text-sm leading-snug line-clamp-1 sm:line-clamp-2">
                        {s.title}
                      </span>

                      {/* Active glowing indicator pill */}
                      {isAct && (
                        <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-white/20 flex items-center space-x-1.5 text-[9px] sm:text-[10px] font-mono text-emerald-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>ACTIVE</span>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active Stage Inspection Console Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.num}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-3xl bg-gradient-to-br from-white via-sky-50/60 to-white border-2 border-sky-300 p-4 sm:p-8 lg:p-10 shadow-xl shadow-sky-100/80 space-y-5 sm:space-y-8 overflow-hidden"
              >
                {/* Decorative Blueprint Reticle Graphic in Background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-2xl pointer-events-none" />

                {/* Top Row: Facility Badge, Stage Number & ISO Badge */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-sky-200/80 pb-4 sm:pb-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white shadow-md shadow-sky-200 shrink-0">
                      <CurrentStepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#0284C7] uppercase block tracking-wider mb-0.5">
                        STAGE {currentStep.num} // {currentStep.facility}
                      </span>
                      <h4 className="text-xl sm:text-3xl font-black text-[#001B79] tracking-tight">
                        {currentStep.title}
                      </h4>
                    </div>
                  </div>

                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] sm:text-xs font-mono font-bold w-max shadow-2xs flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>ISO 9001:2015 AUDITED</span>
                  </span>
                </div>

                {/* Detailed Description */}
                <div className="relative z-10">
                  <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Mandatory Quality Assurance Checklist: Vertically stacked on mobile (one per row) */}
                <div className="relative z-10 space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                  <span className="text-xs font-mono font-bold text-[#001B79] uppercase tracking-wider block">
                    Mandatory Quality Assurance Checklist:
                  </span>
                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                    {currentStep.checklist.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center space-x-3 hover:border-[#0284C7] transition-all"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                        </div>
                        <span className="text-xs sm:text-sm font-mono font-bold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev / Next Stage Controls */}
                <div className="relative z-10 pt-4 border-t border-sky-200 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 text-[#001B79] font-mono text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all min-h-[44px]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Stage</span>
                  </button>

                  <span className="text-xs font-mono font-bold text-slate-500">
                    {activeStep + 1} / {flowSteps.length}
                  </span>

                  <button
                    type="button"
                    disabled={activeStep === flowSteps.length - 1}
                    onClick={() => handleStepChange(Math.min(flowSteps.length - 1, activeStep + 1))}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-sky-300 bg-gradient-to-r from-[#001B79] to-[#0284C7] hover:opacity-95 text-white font-mono text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all min-h-[44px] shadow-sm"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CTA BANNER — SPLIT DIAGONAL GRADIENT & FAINT CIRCUIT PATTERN          */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-10 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] border-t border-sky-200">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          
          {/* Main Diagonal Split Card */}
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] p-5 sm:p-14 lg:p-16 text-white shadow-2xl border border-sky-400/40">
            {/* Faint Circuit Line & Blueprint SVG Overlay */}
            <TechnicalBlueprintGridSVG className="opacity-25" isLightMode={false} />

            {/* Glowing Ambient Radial Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading, Subtext, Trust Points */}
              <div className="space-y-3.5 sm:space-y-4 lg:col-span-8 text-left">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/15 px-3 py-1 text-xs font-mono font-bold text-sky-200 border border-sky-300/40 backdrop-blur-md">
                  <Award className="h-3.5 w-3.5 text-sky-300" />
                  <span>{companyInfo.certification}</span>
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.18] text-left">
                  Partner with SIF-EPX Group for Your Next Industrial Project
                </h2>

                <p className="text-xs sm:text-base text-sky-100 leading-relaxed max-w-2xl font-normal text-left">
                  Leverage our comprehensive EPCC, Process Automation, Electrical Switchgear, and Project Management capabilities to accelerate plant execution with zero compromise on safety.
                </p>

                {/* 3 Trust Points: Single horizontal scroll row on mobile */}
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Key Execution Strengths"
                  className="flex flex-nowrap sm:flex-wrap items-center gap-3 sm:gap-6 pt-1 sm:pt-2 text-xs sm:text-sm text-sky-100 font-medium overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0 focus:outline-none focus:ring-1 focus:ring-sky-400 rounded"
                >
                  <div className="flex items-center space-x-1.5 shrink-0 whitespace-nowrap bg-white/10 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                    <span>Turnkey EPCC Execution</span>
                  </div>
                  <div className="flex items-center space-x-1.5 shrink-0 whitespace-nowrap bg-white/10 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                    <span>Pan-India Engineering</span>
                  </div>
                  <div className="flex items-center space-x-1.5 shrink-0 whitespace-nowrap bg-white/10 sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300 shrink-0" />
                    <span>Single-Point Accountability</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 2 CTA Action Buttons (Full width and stacked on mobile) */}
              <div className="flex flex-col space-y-2.5 sm:space-y-0 sm:flex-row sm:space-x-3 lg:col-span-4 lg:flex-col lg:space-x-0 lg:space-y-3 pt-2 sm:pt-0">
                <Link
                  to="/contact"
                  className="btn-pill-secondary text-center shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 rounded-xl sm:rounded-full bg-white text-[#001B79] font-bold py-3.5 px-6 sm:py-4 sm:px-8 text-xs uppercase tracking-wider hover:bg-sky-50 transition-all cursor-pointer w-full min-h-[44px]"
                >
                  <span>Request Project Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={`tel:${companyInfo.contact.phones[0]}`}
                  className="inline-flex items-center justify-center space-x-2 rounded-xl sm:rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3 text-center font-bold text-white transition-all text-xs uppercase tracking-wider backdrop-blur-md min-h-[44px] w-full"
                >
                  <Phone className="h-4 w-4 text-sky-200" />
                  <span>Direct: {companyInfo.contact.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

