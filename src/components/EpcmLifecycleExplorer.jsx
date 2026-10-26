import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Building2, 
  FileCheck2, 
  Compass, 
  Truck, 
  HardHat, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  Layers, 
  FileSpreadsheet,
  Award
} from 'lucide-react'
import ShinyText from './reactbits/ShinyText'
import SpotlightCard from './reactbits/SpotlightCard'

const epcmPhases = [
  {
    id: 'engineering',
    phase: 'STAGE 01',
    title: 'Front-End & Detailed Engineering',
    lead: 'FEED, Design Basis & Multi-Disciplinary CAD/BIM',
    icon: Compass,
    color: '#0284C7',
    badge: 'ISO 9001:2015 QA',
    summary: 'Comprehensive basic and detailed design coordination across Civil, Structural, Mechanical, Piping, Electrical, and Instrumentation disciplines.',
    deliverables: [
      'Design Basis Reports (DBR) & Engineering Philosophy',
      'Process Flow Diagrams (PFD) & P&IDs with Hookups',
      '3D Plant BIM Model, Clash Audits & Equipment GAs',
      'STAAD.Pro Structural Steel & Concrete Foundation Design',
      'Electrical Single Line Diagrams (SLD) & Protection Coordination'
    ],
    kpi: '0% Site Clash Rate',
    standards: 'IS / BIS, ASME B31.3, API 650, IEC 61439'
  },
  {
    id: 'procurement',
    phase: 'STAGE 02',
    title: 'Strategic Procurement & Sourcing',
    lead: 'TBA, Vendor Audits, Shop Inspection & Expediting',
    icon: FileSpreadsheet,
    color: '#0EA5E9',
    badge: '100% Audit Trail',
    summary: 'Technical evaluation of major long-lead process equipment, precision switchgear, instruments, and bulk piping packages with zero cost overrun.',
    deliverables: [
      'Comprehensive RFQ Packages & Technical Bid Analysis (TBA)',
      'Multi-Vendor Commercial Comparison Sheets',
      'Factory Acceptance Testing (FAT) & Shop Expediting',
      'Third-Party Inspection Coordination (TPI / Bureau Veritas / TUV)',
      'Material Test Certificates (MTC) & Dispatch Clearances'
    ],
    kpi: '15-20% Capex Savings',
    standards: 'ISO 9001 Vendor Qualification, ASME Sec VIII'
  },
  {
    id: 'construction',
    phase: 'STAGE 03',
    title: 'Construction Management & HSE',
    lead: 'Site Supervision, QA/QC Verification & Schedule Tracking',
    icon: HardHat,
    color: '#10B981',
    badge: 'Zero LTI Standard',
    summary: 'Hands-on site engineering management adhering strictly to Primavera P6 / MSP schedules, HSE protocols, and rigorous Inspection & Test Plans (ITPs).',
    deliverables: [
      'Construction Method Statements (CMS) & ITP Approvals',
      'Daily Progress Reports (DPR) & Weekly Variance Reviews',
      'Structural Erection, Equipment Alignment & Piping Radiography',
      'Hazard Identification & Risk Assessment (HIRA) Audits',
      'Contractor Bill Certification & Measurement Verification'
    ],
    kpi: '100% On-Time Milestones',
    standards: 'OSHA / NEBOSH HSE, IS 456, AWS D1.1 Welding'
  },
  {
    id: 'commissioning',
    phase: 'STAGE 04',
    title: 'Pre-Commissioning & Handover',
    lead: 'Cold/Hot Loops, SAT, As-Built Dossiers & Plant Startup',
    icon: ShieldCheck,
    color: '#6366F1',
    badge: 'Turnkey Handover',
    summary: 'Systematic cold testing, electrical energization, hydro-testing, DCS hot simulation, punch-list closeout, and formal handover to operations.',
    deliverables: [
      'Pre-Commissioning Checklists & System Energization',
      'Hydrostatic & Pneumatic Pipe Pressure Testing Dossiers',
      'Instrument Cold Loop Checks & Hot Control Loop Simulation',
      'Comprehensive As-Built CAD/BIM Documentation Dossier',
      'Operations & Maintenance (O&M) Training & Formal Signoff'
    ],
    kpi: 'Complete Punch-List Resolution',
    standards: 'IEC 60079 Hazardous Area, CEIG Approvals'
  }
]

export default function EpcmLifecycleExplorer() {
  const [activeStageId, setActiveStageId] = useState('engineering')
  const activeStage = epcmPhases.find((p) => p.id === activeStageId) || epcmPhases[0]
  const ActiveIcon = activeStage.icon

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#001B79]">
            <ShinyText text="INTERACTIVE LIFECYCLE SIMULATOR" speed={3} />
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#001B79] tracking-tight">
          EPCM Four-Stage Execution Matrix
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Explore SIF-EPX Group's structured delivery framework ensuring zero scope creep, rigorous vendor coordination, and strict milestone adherence.
        </p>
      </div>

      {/* Stage Tab Rail */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {epcmPhases.map((stage, idx) => {
          const Icon = stage.icon
          const isActive = stage.id === activeStageId
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                isActive
                  ? 'bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white border-[#38BDF8] shadow-lg shadow-sky-900/20 ring-2 ring-[#38BDF8]/40'
                  : 'bg-white/90 hover:bg-white text-slate-800 border-sky-200/80 hover:border-sky-400 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-sky-200' : 'bg-sky-100 text-[#001B79]'
                  }`}
                >
                  {stage.phase}
                </span>
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive ? 'bg-[#38BDF8] text-[#001B79]' : 'bg-sky-50 text-[#0284C7]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm leading-snug line-clamp-1">{stage.title}</h4>
              <p
                className={`text-[11px] mt-1 line-clamp-1 ${
                  isActive ? 'text-sky-200' : 'text-slate-500'
                }`}
              >
                {stage.lead}
              </p>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#38BDF8]" />
              )}
            </button>
          )
        })}
      </div>

      {/* Stage Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-sky-300 bg-white/95 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Scope Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#001B79] text-white">
                    {activeStage.phase}
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] border border-sky-200">
                    {activeStage.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">{activeStage.title}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#0284C7] mt-0.5">{activeStage.lead}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3">
                    {activeStage.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B79] block">
                    Execution Deliverables &amp; Controls:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeStage.deliverables.map((d, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start space-x-3 p-2.5 rounded-xl bg-sky-50/70 border border-sky-100/80 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Spec Rail & Standards */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-200">
                      STAGE BENCHMARK
                    </span>
                    <ActiveIcon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-[#38BDF8]">{activeStage.kpi}</span>
                    <p className="text-xs text-sky-100 mt-1">SIF Benchmark Performance Standard</p>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="font-mono text-[10px] uppercase text-sky-300 block mb-1">
                      Governing Codes &amp; Protocols:
                    </span>
                    <span className="font-mono text-xs text-white font-bold">{activeStage.standards}</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-[#001B79]">
                    <Award className="w-4 h-4 text-[#0284C7]" />
                    <span className="font-mono text-xs font-bold uppercase">SIF Governance Commitment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Every deliverable in this phase undergoes dual-tier peer review by senior discipline leads and chartered engineering consultants before client submission.
                  </p>
                </div>
              </div>

            </div>
          </SpotlightCard>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
