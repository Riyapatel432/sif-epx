import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CheckCircle2, Factory, Shield, Sparkles, FileCheck, Truck, Zap } from 'lucide-react'

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

export default function ManufacturingFlow() {
  const [activeStep, setActiveStep] = useState(2)
  const current = flowSteps[activeStep]
  const Icon = current.icon

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-xl shadow-sky-100/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-sky-100">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            IN-HOUSE MANUFACTURING QUALITY
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">
            7-Stage Switchgear Manufacturing Flow
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          From CNC metal fabrication to our 9-tank chemical pre-treatment and routine dielectric testing, every panel is built to IEC 61439 benchmarks.
        </p>
      </div>

      {/* 7-Stage Horizontal Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
        {flowSteps.map((s, idx) => {
          const isAct = idx === activeStep
          return (
            <button
              key={s.num}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl text-left transition-all border ${
                isAct
                  ? 'bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white border-sky-400 shadow-md ring-2 ring-sky-300'
                  : 'bg-slate-50/70 border-sky-200 hover:bg-sky-50 text-slate-700'
              }`}
            >
              <span className={`text-[10px] font-mono font-bold block mb-1 ${isAct ? 'text-sky-200' : 'text-[#0284C7]'}`}>
                STAGE {s.num}
              </span>
              <span className="font-bold text-xs leading-snug block line-clamp-2">
                {s.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Stage Inspection Console */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.num}
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
                  MANUFACTURING STAGE {current.num} // {current.facility}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">
                  {current.title}
                </h4>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-mono font-bold w-max">
              ISO 9001:2015 AUDITED
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {current.desc}
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase">
              Mandatory Quality Assurance Checklist:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {current.checklist.map((item, iIdx) => (
                <div key={iIdx} className="p-3 rounded-xl bg-white border border-sky-200 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-mono font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
