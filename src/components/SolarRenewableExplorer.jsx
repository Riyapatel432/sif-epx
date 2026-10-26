import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  Sun, 
  BatteryCharging, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Globe2,
  ShieldCheck,
  Award
} from 'lucide-react'
import ShinyText from './reactbits/ShinyText'
import SpotlightCard from './reactbits/SpotlightCard'

const solarSegments = [
  {
    id: 'mw-parks',
    title: 'Utility MW Solar Parks',
    tag: 'SCALE: 1MW - 100MW+',
    icon: Sun,
    summary: 'Turnkey development of utility-scale ground mounted solar parks, land surveys, civil piling, tracker structures, and high-voltage substation evacuation.',
    stats: '2MW+ Modules Deployed',
    deliverables: [
      'Topographical, Soil Resistivity & Geotechnical Surveys',
      'High-Yield Monocrystalline PERC & TOPCon Module Configurations',
      'Central & String Inverters with SCADA Weather Stations',
      '11kV / 33kV / 66kV Grid Pooling Substation Engineering',
      'CEIG Statutory Approval & DISCOM Power Evacuation'
    ]
  },
  {
    id: 'rooftop',
    title: 'Industrial Captive Rooftop',
    tag: 'SCALE: 100kW - 5MW',
    icon: Zap,
    summary: 'Custom industrial rooftop solar systems engineered for chemical plants, engineering workshops, and commercial complexes with zero structural penetrations.',
    stats: 'Up to 45% Energy Cost Cut',
    deliverables: [
      'Structural Load Bearing Analysis & STAAD.Pro Modeling',
      'Non-Penetrative Aluminum Clamping & Ballasted Fixtures',
      'Zero-Export Relays & Bi-Directional Net-Metering Systems',
      'Automatic Cloud Telemetry & String-Level Performance Ratios',
      'Preventive Thermographic Drone Audits & Scheduled Cleaning'
    ]
  },
  {
    id: 'evcs',
    title: 'EV Charging Hubs & BESS',
    tag: 'SCALE: 60kW - 360kW DC',
    icon: BatteryCharging,
    summary: 'Ultra-fast DC charging infrastructure for commercial fleets, buses, and private vehicles, coupled with Battery Energy Storage Systems (BESS).',
    stats: 'CCS-2 Dual Gun Fast Charge',
    deliverables: [
      'DC Fast Chargers (60kW / 120kW / 240kW / 360kW)',
      'Solar-Coupled Microgrid with Smart Battery Peak Shaving',
      'Dynamic Load Balancing & OCPP 1.6J/2.0.1 Cloud Protocol',
      'Integrated RFID, UPI & QR Payment Terminal Hardware',
      'Dedicated HT Transformer Substations & Compact Substations (CSS)'
    ]
  }
]

export default function SolarRenewableExplorer() {
  const [activeSegmentId, setActiveSegmentId] = useState('mw-parks')
  const activeSegment = solarSegments.find((s) => s.id === activeSegmentId) || solarSegments[0]
  const ActiveIcon = activeSegment.icon

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#001B79]">
            <ShinyText text="CLEANTECH EPC SIMULATOR" speed={3} />
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#001B79] tracking-tight">
          Turnkey Solar &amp; Clean Energy Solutions
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          From utility ground-mounted parks and industrial captive rooftop generation to high-speed EV charging infrastructure.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {solarSegments.map((seg) => {
          const Icon = seg.icon
          const isActive = seg.id === activeSegmentId
          return (
            <button
              key={seg.id}
              onClick={() => setActiveSegmentId(seg.id)}
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
                  {seg.tag}
                </span>
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive ? 'bg-[#38BDF8] text-[#001B79]' : 'bg-sky-50 text-[#0284C7]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <h4 className="font-bold text-sm sm:text-base leading-snug">{seg.title}</h4>
              <p
                className={`text-xs mt-1 font-semibold ${
                  isActive ? 'text-[#38BDF8]' : 'text-[#0284C7]'
                }`}
              >
                {seg.stats}
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
          key={activeSegment.id}
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
                    {activeSegment.tag}
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Renewable EPC Standard
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">{activeSegment.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 font-normal">
                    {activeSegment.summary}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B79] block">
                    Engineering Scope &amp; Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeSegment.deliverables.map((d, idx) => (
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
                      TRACK RECORD
                    </span>
                    <ActiveIcon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-[#38BDF8] block">
                      {activeSegment.stats}
                    </span>
                    <p className="text-xs text-sky-100 mt-1">High-Efficiency Solar Modules &amp; Grid EPC</p>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="font-mono text-[10px] uppercase text-sky-300 block mb-1">
                      Statutory Approvals &amp; Compliance:
                    </span>
                    <span className="font-mono text-xs text-white font-bold">MNRE, CEIG, DISCOM Net-Metering &amp; Wheeling</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-[#001B79]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-xs font-bold uppercase">25-Year Performance Assurance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Tier-1 PV modules paired with high-efficiency inverters and cloud SCADA monitoring, ensuring guaranteed generation and rapid capex payback.
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
