import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, Clock, Play, FileText, AlertTriangle, Scale, Database } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Recipe Management',
    standard: 'ISA-88 General / Master Recipe',
    icon: FileText,
    action: 'Operator selects validated master product recipe with formulation parameters and material quantities.',
    validation: 'Electronic signature sign-off as per 21 CFR Part 11; recipe version freeze.',
    telemetry: 'Master Recipe ID: SIF-RX-084-V2.1 | Materials: 4 Solid, 2 Solvent'
  },
  {
    step: '02',
    title: 'Scheduling & Allocation',
    standard: 'Unit Equipment Coordination',
    icon: Clock,
    action: 'Unit supervision logic checks clean-in-place (CIP) status, reactor availability, and interlocks.',
    validation: 'Automated verification of line clearance, temperature suitability, and agitator seal health.',
    telemetry: 'Target Vessel: Reactor R-101 (SS316L) | Clean Status: Sanitized & Validated'
  },
  {
    step: '03',
    title: 'Precision Dosing & Weighing',
    standard: 'Gravimetric Dispensing Phase',
    icon: Scale,
    action: 'Automated mass flow meters and load cell hoppers feed solvents and active powders under closed nitrogen blanket.',
    validation: 'Dual-speed filling with coarse and fine dosing cutoff; ±0.1% accuracy threshold.',
    telemetry: 'Solvent Feed: 1,450.0 kg (Actual: 1,449.8 kg) | N2 Blanket: +35 mbar'
  },
  {
    step: '04',
    title: 'Reaction Coordination & PID',
    standard: 'Exothermic Ramp & Hold Loop',
    icon: Play,
    action: 'Jacket cooling/heating cascading temperature control with reflux condenser condensation and pH monitoring.',
    validation: 'Cascade PID thermal loop limits maximum temperature overshoot to < 0.5°C.',
    telemetry: 'Vessel Temp: 78.4°C | Jacket ΔT: 4.2°C | Agitator: 120 RPM (Torque 64%)'
  },
  {
    step: '05',
    title: 'Deviation & Abort Handling',
    standard: 'Exception State Transition',
    icon: AlertTriangle,
    action: 'Continuous safety envelope scanning. Automatically diverts to emergency cooling or nitrogen dump if thresholds exceeded.',
    validation: 'SIL-2 safety interlocks override software phase to bring batch into fail-safe pause.',
    telemetry: 'Interlock Status: Normal | Rupture Disc Pressure: 0.0 bar (Intact)'
  },
  {
    step: '06',
    title: 'Electronic Batch Record (EBR)',
    standard: 'Audit Trail & Archival',
    icon: Database,
    action: 'Historical time-series trend bundling, alarm timestamps, operator interventions, and analytical sign-off.',
    validation: 'Encrypted PDF dossier export to central plant ERP / MES (SAP S/4HANA ready).',
    telemetry: 'EBR Checksum: SHA-256 Validated | 2,840 Process Samples Archived'
  }
]

export default function BatchSequenceStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]
  const Icon = current.icon

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-xl shadow-sky-100/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-sky-100">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            BATCH AUTOMATION STANDARDS
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">
            ISA S-88 Batch Execution Life Cycle
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Standardized batch procedural model implemented in PLC/SCADA to govern recipe-driven pharmaceutical and specialty chemical synthesis.
        </p>
      </div>

      {/* 6-Phase Pill Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
        {steps.map((st, idx) => {
          const isAct = idx === activeStep
          const StepIcon = st.icon
          return (
            <button
              key={st.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                isAct
                  ? 'bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white border-sky-400 shadow-md ring-2 ring-sky-300'
                  : 'bg-slate-50/70 border-sky-200 hover:bg-sky-50 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold ${isAct ? 'text-sky-200' : 'text-slate-500'}`}>
                  PHASE {st.step}
                </span>
                <StepIcon className={`w-3.5 h-3.5 ${isAct ? 'text-white' : 'text-[#0284C7]'}`} />
              </div>
              <span className="font-bold text-xs leading-tight block truncate">
                {st.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Detailed Phase Inspection Console */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl bg-gradient-to-br from-[#F0F9FF] via-white to-sky-50/50 border border-sky-200 p-6 sm:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sky-200/80 pb-4">
            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-2xl bg-[#001B79] text-white shadow-sm">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase">
                  ISA S-88 PHASE {current.step} OF 06
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">
                  {current.title}
                </h4>
              </div>
            </div>
            <span className="w-max px-3 py-1 rounded-full bg-white border border-sky-200 text-[#001B79] text-xs font-mono font-bold">
              {current.standard}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-[#0284C7]" />
                Automated Phase Execution Logic:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-sky-100">
                {current.action}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Interlock &amp; Regulatory Verification:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-sky-100">
                {current.validation}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-100/60 to-blue-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
            <span className="text-slate-600 font-bold">LIVE TELEMETRY PARAMETER:</span>
            <span className="text-[#001B79] font-black">{current.telemetry}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
