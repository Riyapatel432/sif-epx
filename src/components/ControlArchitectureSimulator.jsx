import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Cpu, Network, Server, ShieldAlert, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

const layers = [
  {
    id: 'l1',
    layer: 'Level 3: Supervisory & Historian',
    title: 'OWS / EWS Engineering Workstations',
    protocol: 'FactoryTalk View SE / Wonderware System Platform / OPC UA',
    icon: Server,
    desc: 'Redundant SCADA servers with dual-screen operator consoles, batch electronic records (21 CFR Part 11), SQL Historian archiving, and thin-client web dispatching.',
    hardware: 'Dell Precision Industrial Rack Workstations, Stratix Managed Industrial Switches',
    specs: ['Dual Hot-Standby Servers', 'Sub-second Screen Update', 'SQL Server / OSI PI Interface']
  },
  {
    id: 'l2',
    layer: 'Level 2: Control Network',
    title: 'Fault-Tolerant Industrial Ethernet Ring',
    protocol: 'EtherNet/IP Device Level Ring (DLR) / Profinet MRP',
    icon: Network,
    desc: 'High-speed deterministic backbone connecting main plant processors with remote chassis. Zero-millisecond recovery time upon single cable severance.',
    hardware: 'Cisco / Rockwell Stratix 5700 Managed Switches, Fiber Optic Transceivers',
    specs: ['< 3ms Recovery Time', 'Fiber & Copper Hybrids', 'VLAN Network Segregation']
  },
  {
    id: 'l3',
    layer: 'Level 1: Redundant Controllers',
    title: 'Dual Hot-Standby PAC / PLC Processors',
    protocol: 'ControlLogix 5580 / Modicon M580 Safety PAC',
    icon: Cpu,
    desc: 'Redundant CPU pair executing continuous PID regulation, safety interlocks, and ISA S-88 phase state models with bumpless transfer under hardware fault.',
    hardware: 'Allen-Bradley 1756-L83ES SIL-2 GuardLogix / Schneider Electric M580 BMEP58',
    specs: ['Bumpless Transfer (< 20ms)', 'SIL-2 / SIL-3 Certified', 'Hot-Swappable Chassis Modules']
  },
  {
    id: 'l4',
    layer: 'Level 0.5: Hazardous Barrier Interface',
    title: 'Intrinsic Safety Galvanic Barriers & Remote I/O',
    protocol: 'HART over EtherNet/IP / Point I/O / Ex d Enclosures',
    icon: ShieldAlert,
    desc: 'Zener and galvanic barriers protecting signals from explosive gas groups IIA, IIB, IIC. Field-mounted IP66 stainless junction boxes with isolated analog channels.',
    hardware: 'Pepperl+Fuchs / MTL Galvanic Isolators, 1734-POINT I/O, Turck Ex Barriers',
    specs: ['Zone 1 & Zone 0 Interface', 'HART Pass-Through Telemetry', 'Galvanic 2.5kV Isolation']
  },
  {
    id: 'l5',
    layer: 'Level 0: Field Assets & Drives',
    title: 'Intelligent MCC & Explosion-Proof Field Instruments',
    protocol: 'Modbus TCP / Profibus-DP / 4-20mA HART',
    icon: Zap,
    desc: 'Direct motor protection, variable frequency drives (PowerFlex / Altivar), smart mass flow meters, control valves with smart positioners, and temperature sensors.',
    hardware: 'Form 4b Switchboard Draw-Out Buckets, E300 Electronic Overloads, Micro Motion Coriolis',
    specs: ['Real-Time kW & Thermal Telemetry', 'Namur NE43 Fault Levels', 'ATEX/PESO Flameproof Certified']
  }
]

export default function ControlArchitectureSimulator() {
  const [activeLayerId, setActiveLayerId] = useState('l3')
  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[2]

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-xl shadow-sky-100/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-sky-100">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            INTERACTIVE SYSTEM ARCHITECTURE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">
            Process Control &amp; Automation Hierarchy
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Explore the five hierarchical automation tiers deployed by SIF Systems for chemical synthesis, sterile pharma, and utility plants. Click a tier to inspect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Stack: Interactive Hierarchy Tiers */}
        <div className="lg:col-span-5 space-y-2.5">
          {layers.map((layer) => {
            const isAct = layer.id === activeLayerId
            const Icon = layer.icon
            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                  isAct
                    ? 'bg-gradient-to-r from-[#001B79] via-[#00229C] to-[#0284C7] border-sky-400 text-white shadow-lg shadow-sky-200 ring-2 ring-sky-300'
                    : 'bg-slate-50/70 border-sky-200/80 hover:bg-sky-50/80 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className={`p-2.5 rounded-xl ${isAct ? 'bg-white/20 text-white' : 'bg-white text-[#001B79] border border-sky-200'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono block ${isAct ? 'text-sky-200' : 'text-[#0284C7] font-bold'}`}>
                      {layer.layer}
                    </span>
                    <span className="font-bold text-xs sm:text-sm leading-snug block">
                      {layer.title}
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 ${isAct ? 'text-white translate-x-1' : 'text-slate-400'} transition-transform`} />
              </button>
            )
          })}
        </div>

        {/* Right Console: Detailed Technical Inspection */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-gradient-to-br from-[#F0F9FF] via-white to-sky-50/60 border border-sky-200 p-6 sm:p-8 space-y-6 shadow-md"
            >
              <div className="flex items-start justify-between border-b border-sky-200/80 pb-4">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#0284C7] uppercase">
                    {activeLayer.layer}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-[#001B79] mt-1">
                    {activeLayer.title}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#001B79] border border-sky-300 text-[10px] font-mono font-bold">
                  ACTIVE LAYER
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  Primary Protocols &amp; Industrial Standards:
                </span>
                <div className="p-3 rounded-xl bg-white border border-sky-200 text-xs font-mono font-semibold text-[#001B79]">
                  {activeLayer.protocol}
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                {activeLayer.desc}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  Typical Hardware &amp; Module Platforms:
                </span>
                <p className="text-xs font-mono text-slate-600 bg-white/80 p-3 rounded-xl border border-sky-100">
                  {activeLayer.hardware}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {activeLayer.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-white border border-sky-200 text-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                    <span className="text-[11px] font-mono font-bold text-slate-800 leading-tight block">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
