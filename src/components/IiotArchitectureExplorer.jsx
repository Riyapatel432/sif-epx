import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  LineChart, 
  Server, 
  Cpu, 
  Network, 
  Layers, 
  ShieldCheck, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react'
import ShinyText from './reactbits/ShinyText'
import SpotlightCard from './reactbits/SpotlightCard'

const iiotLayers = [
  {
    id: 'l4',
    level: 'LEVEL 4: ENTERPRISE & ERP',
    title: 'Enterprise Planning & SAP/Oracle Integration',
    protocol: 'RFC / BAPI / REST API / Enterprise Service Bus (ESB)',
    icon: Database,
    accent: '#6366F1',
    desc: 'Bi-directional transaction interface synchronizing shop-floor production counts, raw material inventory consumption, batch genealogy, and automated quality release with central SAP / Oracle ERP.',
    specs: ['Automated Goods Receipt & Issue (GR/GI)', '21 CFR Part 11 Electronic Batch Records', 'Production Variance & Yield Tracking'],
    stack: 'SAP S/4HANA, Oracle ERP Cloud, Wonderware Enterprise Integrator'
  },
  {
    id: 'l3',
    level: 'LEVEL 3: OPERATIONS & MES',
    title: 'Manufacturing Execution & Enterprise Historian',
    protocol: 'OPC UA / Wonderware System Platform / SQL Historian',
    icon: LineChart,
    accent: '#0284C7',
    desc: 'Real-time time-series historian capturing millions of industrial tags at sub-second frequency. Automated shift reports, OEE calculations, and Power & Energy Management Solutions (PEMS).',
    specs: ['High-Compression Time-Series Storage', 'Real-Time Overall Equipment Effectiveness (OEE)', 'Specific Energy Consumption per Ton finished goods'],
    stack: 'Wonderware Historian, FactoryTalk VantagePoint, OSI PI Soft'
  },
  {
    id: 'l2',
    level: 'LEVEL 2: DMZ & TELEMETRY',
    title: 'Geo SCADA & Industrial DMZ Security Perimeter',
    protocol: 'Cellular 4G/5G / DNP3 / MQTT Sparkplug B / Dual-Homed Firewalls',
    icon: Network,
    accent: '#0EA5E9',
    desc: 'Cybersecure isolation boundary separating critical Operational Technology (OT) networks from corporate Information Technology (IT). Remote Geo SCADA telemetry for dispersed solar, water, and pipeline assets.',
    specs: ['ISA/IEC 62443 Industrial Cybersecurity Compliant', 'Store-and-Forward Telemetry during link loss', 'Instantaneous SMS/Push Incident Dispatch'],
    stack: 'ClearSCADA / Geo SCADA Expert, Stratix Industrial Firewalls, Moxa RTUs'
  },
  {
    id: 'l1',
    level: 'LEVEL 1: AGGREGATION & CONTROL',
    title: 'OPC Servers & Multi-Vendor DCS/PLC Connectivity',
    protocol: 'EtherNet/IP / Profinet / Modbus TCP / OPC Unified Architecture (UA)',
    icon: Cpu,
    accent: '#10B981',
    desc: 'High-throughput protocol conversion bridging proprietary PLC & DCS vendor architectures into standard OPC UA namespaces for enterprise visibility without disrupting deterministic plant logic.',
    specs: ['Platform-Neutral Multi-Vendor Ingestion', '50,000+ Tags/Sec Throughput Capacity', 'Redundant Standby OPC DA/UA Brokers'],
    stack: 'Kepware KEPServerEX, Matrikon OPC, FactoryTalk Gateway'
  }
]

export default function IiotArchitectureExplorer() {
  const [activeLayerId, setActiveLayerId] = useState('l3')
  const activeLayer = iiotLayers.find((l) => l.id === activeLayerId) || iiotLayers[1]
  const ActiveIcon = activeLayer.icon

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sky-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#001B79]">
            <ShinyText text="IT/OT ARCHITECTURE SIMULATOR" speed={3} />
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#001B79] tracking-tight">
          Enterprise IIoT &amp; MES Data Pipeline
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Explore how SIF-EPX Group integrates shop floor controllers, Geo SCADA telemetry, and enterprise ERP systems into a seamless digital nerve center.
        </p>
      </div>

      {/* Layer Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {iiotLayers.map((layer) => {
          const Icon = layer.icon
          const isActive = layer.id === activeLayerId
          return (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                isActive
                  ? 'bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white border-[#38BDF8] shadow-lg shadow-sky-900/20 ring-2 ring-[#38BDF8]/40'
                  : 'bg-white/90 hover:bg-white text-slate-800 border-sky-200/80 hover:border-sky-400 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-sky-200' : 'bg-sky-100 text-[#001B79]'
                  }`}
                >
                  {layer.level.split(':')[0]}
                </span>
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isActive ? 'bg-[#38BDF8] text-[#001B79]' : 'bg-sky-50 text-[#0284C7]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm leading-snug line-clamp-1">{layer.title}</h4>
              <p
                className={`text-[10px] sm:text-[11px] mt-1 line-clamp-1 font-mono ${
                  isActive ? 'text-sky-200' : 'text-slate-500'
                }`}
              >
                {layer.protocol}
              </p>
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#38BDF8]" />
              )}
            </button>
          )
        })}
      </div>

      {/* Layer Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLayer.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-sky-300 bg-white/95 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Functionality */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#001B79] text-white">
                    {activeLayer.level}
                  </span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] border border-sky-200">
                    Industrial IT/OT Architecture
                  </span>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001B79]">{activeLayer.title}</h4>
                  <p className="text-xs sm:text-sm font-mono text-[#0284C7] mt-1 font-semibold">{activeLayer.protocol}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3">
                    {activeLayer.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#001B79] block">
                    Core Technical Capabilities:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeLayer.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-2.5 rounded-xl bg-sky-50/70 border border-sky-100/80 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tech Stack & Security */}
              <div className="lg:col-span-5 space-y-5">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-200">
                      DEPLOYED PLATFORMS &amp; STACK
                    </span>
                    <ActiveIcon className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-mono font-bold text-[#38BDF8] block">
                      {activeLayer.stack}
                    </span>
                    <p className="text-xs text-sky-100 mt-1">Enterprise-Grade Industrial Middleware</p>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="font-mono text-[10px] uppercase text-sky-300 block mb-1">
                      Cybersecurity &amp; Compliance:
                    </span>
                    <span className="font-mono text-xs text-white font-bold">ISA/IEC 62443, 21 CFR Part 11, NIS2</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-[#001B79]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-xs font-bold uppercase">SIF Interoperability Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Certified vendor-neutral connectivity enabling seamless communication across legacy PLCs, modern DCS clusters, and multi-tenant cloud data lakes with zero data loss.
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
