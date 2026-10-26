import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Layers, 
  Box, 
  Workflow, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Sparkles
} from 'lucide-react'
import ShinyText from './reactbits/ShinyText'
import SpotlightCard from './reactbits/SpotlightCard'

const bimPillars = [
  {
    id: 'bim-3d',
    title: '3D Federated Modeling & Clash Detection',
    subtitle: 'Revit, Navisworks, PDMS & Plant 3D',
    icon: Box,
    badge: 'Zero On-Site Rework',
    summary: 'Creation of comprehensive 3D intelligent multidisciplinary models merging civil structures, mechanical equipment, chemical piping, and cable trays into a single clash-free digital twin.',
    deliverables: [
      'Automated Hard & Soft Clash Audits across all disciplines',
      '4D Construction Phasing & Schedule Simulation',
      'Virtual Reality (VR) Plant Walkthroughs for Client Design Reviews',
      'Point Cloud Laser Scanning & As-Built Brownfield Capture'
    ],
    metric: '100% Clash-Free Construction Release'
  },
  {
    id: 'value-eng',
    title: 'Value Engineering & Material Optimization',
    subtitle: 'Weight Reduction & Sizing Rationalization',
    icon: TrendingUp,
    badge: '12-18% Capex Savings',
    summary: 'Systematic analysis of structural steel profiles, piping runs, transformer loading, and cable sizing to eliminate redundant design margins while preserving full safety factors.',
    deliverables: [
      'Structural Steel Sizing Optimization via STAAD.Pro / ETABS',
      'Piping Loop Routing & Pressure Drop Minimization',
      'Cable Sizing & Harmonic Mitigated APFC System Rightsizing',
      'Alternative Material of Construction (MOC) Assessment'
    ],
    metric: 'Guaranteed Capex Payback'
  },
  {
    id: 'statutory',
    title: 'Statutory Liaison & Compliance Engineering',
    subtitle: 'CEIG, DISCOM, Fire NOC & PCB Clearances',
    icon: ShieldCheck,
    badge: '100% Approval Success',
    summary: 'Dedicated regulatory liaison and technical clearance documentation ensuring all industrial installations comply fully with statutory inspectorates and government norms.',
    deliverables: [
      'Chief Electrical Inspector to Government (CEIG) Submissions',
      'State Pollution Control Board (SPCB) Consent to Establish (CTE/CTO)',
      'Fire Safety NOC Engineering & Hydrant Grid Hydraulic Approvals',
      'Factory Directorate & Industrial Building Plan Clearances'
    ],
    metric: 'Expedited Time-to-Energization'
  }
]

export default function MultidisciplineBimExplorer() {
  const [activePillarId, setActivePillarId] = useState('bim-3d')
  const activePillar = bimPillars.find((p) => p.id === activePillarId) || bimPillars[0]
  const ActiveIcon = activePillar.icon

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#001B79]">
            <ShinyText text="BIM &amp; VALUE ENGINEERING SIMULATOR" speed={3} />
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#001B79] tracking-tight">
          Multidisciplinary Synergy &amp; BIM Delivery
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          How our integrated engineering teams bridge digital 3D clash-free modeling, value engineering, and regulatory approvals.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {bimPillars.map((pillar) => {
          const Icon = pillar.icon
          const isActive = pillar.id === activePillarId
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden group ${
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
                  {pillar.badge}
                </span>
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive ? 'bg-[#38BDF8] text-[#001B79]' : 'bg-sky-50 text-[#0284C7]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <h4 className="font-bold text-sm sm:text-base leading-snug">{pillar.title}</h4>
              <p
                className={`text-xs mt-1 font-mono ${
                  isActive ? 'text-sky-200' : 'text-slate-500'
                }`}
              >
                {pillar.subtitle}
              </p>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#38BDF8]" />
              )}
            </button>
          )
        })}
      </div>

      {/* Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-sky-300 bg-white/95 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#001B79] text-white">
                    {activePillar.badge}
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] border border-sky-200">
                    BIM &amp; Multidisciplinary Standard
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">{activePillar.title}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#0284C7] mt-0.5">{activePillar.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 font-normal">
                    {activePillar.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B79] block">
                    Key Execution Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activePillar.deliverables.map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-2.5 rounded-xl bg-sky-50/70 border border-sky-100/80 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-200">
                      DELIVERY BENCHMARK
                    </span>
                    <ActiveIcon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[#38BDF8] block">
                      {activePillar.metric}
                    </span>
                    <p className="text-xs text-sky-100 mt-1">Multi-Disciplinary Design Governance</p>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="font-mono text-[10px] uppercase text-sky-300 block mb-1">
                      Platform Tools &amp; Engines:
                    </span>
                    <span className="font-mono text-xs text-white font-bold">Autodesk Revit, Navisworks Manage, STAAD.Pro, AutoCAD Plant 3D</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-[#001B79]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-xs font-bold uppercase">Zero-Clash Field Commitment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Every piping run, cable tray, and structural member is virtually coordinated prior to site mobilization, eliminating site hot work and delays.
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
