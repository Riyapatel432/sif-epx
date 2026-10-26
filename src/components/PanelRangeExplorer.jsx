import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react'

const panelRanges = [
  {
    id: 'pcc',
    tab: 'PCC',
    name: 'Power Control Center (PCC)',
    rating: 'Up to 6300A, 415V, 50/65kA',
    segregation: 'Form 4b Type-7 Type Tested',
    standards: 'IEC 61439-1 & 2 / IS 8623',
    features: [
      'Draw-out air circuit breakers (ACB) with motorized racking',
      'Microprocessor based trip units with Ethernet communication',
      'High-grade electrolytic copper busbars (99.9% IACS)',
      'Arc-quenching chimneys and insulated busbar compartments'
    ],
    applications: 'Main plant receiving substations, captive power distribution, heavy industrial incoming switchboards.'
  },
  {
    id: 'mcc',
    tab: 'MCC',
    name: 'Motor Control Center (MCC)',
    rating: 'Up to 3200A, Fully Draw-Out / Fixed',
    segregation: 'Form 3b / Form 4b',
    standards: 'IEC 61439-1 & 2',
    features: [
      'Draw-out functional modules with test/disconnected positions',
      'DOL, Star-Delta, Soft Starter and VFD feeder combinations',
      'Padlockable rotary operating handles with door interlocks',
      'Dedicated vertical cable alleys with wide termination access'
    ],
    applications: 'Continuous chemical plant pump bays, agitators, blower fans, cooling water circulation systems.'
  },
  {
    id: 'imcc',
    tab: 'IMCC',
    name: 'Intelligent Motor Control Center (iMCC)',
    rating: 'Networked Feeders with Ethernet / Profinet',
    segregation: 'Form 4b Type-7 with E300 / TeSys T Relays',
    standards: 'IEC 61439 / IEEE 802.3',
    features: [
      'Smart electronic overload relays measuring kW, PF, I, V and thermal load',
      'Direct EtherNet/IP or Profinet connectivity into plant DCS/PLC',
      'Predictive motor maintenance and jamming/under-current alerts',
      'Real-time diagnostic web pages embedded inside each starter'
    ],
    applications: 'Critical process drives where motor downtime directly halts chemical reaction synthesis.'
  },
  {
    id: 'amf',
    tab: 'AMF & Sync',
    name: 'Auto Mains Failure & Synchronizing Panels',
    rating: 'Up to 4 x 2500 kVA DG Sets',
    segregation: 'Form 3b / 4b with Deep Sea / Woodward Controllers',
    standards: 'IEC 61439 / ISO 8528',
    features: [
      'Bumpless grid-to-generator auto-synchronization and load sharing',
      'Reverse power, under/over frequency and vector surge protections',
      'Motorized motorized ACBs with interlocked tie breakers',
      'Emergency black-start sequencing under 10 seconds'
    ],
    applications: 'Continuous processing plants, cleanroom HVAC backups, zero-power-loss facilities.'
  },
  {
    id: 'apfc',
    tab: 'APFC & AHF',
    name: 'Active Harmonic & APFC Panels',
    rating: 'Up to 1500 kVAr / Active Filters up to 600A',
    segregation: 'Form 2b / 3b with Detuned Reactors',
    standards: 'IEEE 519 / IEC 61921',
    features: [
      'Microprocessor relay targeting 0.99 lag power factor maintain',
      '7% and 14% heavy-duty detuned iron-core filtering reactors',
      'Thyristor-switched rapid capacitor steps (< 20ms response)',
      'Active harmonic filters mitigating up to 50th harmonic order'
    ],
    applications: 'Plants with heavy non-linear loads, VFDs, induction heaters, eliminating utility penalties.'
  },
  {
    id: 'vcb',
    tab: '11/33kV VCB',
    name: 'Medium Voltage Vacuum Circuit Breaker Switchgear',
    rating: '11 kV / 33 kV up to 36/40 kA',
    segregation: 'Metal-Clad LSC2B-PM Partition',
    standards: 'IEC 62271-200 / IS 3427',
    features: [
      'Vacuum interrupter bottles with 30,000 mechanical operations',
      'Internal arc classified (IAC AFLR) for total operator protection',
      'Numerical feeder protection relays with IEC 61850 substation bus',
      'Motorized truck racking and integral earthing switch'
    ],
    applications: 'Grid intake substations, step-down primary distribution, high-voltage drives.'
  }
]

export default function PanelRangeExplorer() {
  const [activeTabId, setActiveTabId] = useState('pcc')
  const panel = panelRanges.find((p) => p.id === activeTabId) || panelRanges[0]

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-10 shadow-xl shadow-sky-100/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-sky-100">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            MURAD NAGAR WORKS FABRICATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">
            Custom Switchboard &amp; Panel Range Explorer
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Form 4b type-tested switchboards and medium voltage switchgear manufactured at our 25,000 sq ft facility in Murad Nagar, Ghaziabad.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-slate-50 border border-sky-200">
        {panelRanges.map((p) => {
          const isAct = p.id === activeTabId
          return (
            <button
              key={p.id}
              onClick={() => setActiveTabId(p.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                isAct
                  ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {p.tab}
            </button>
          )
        })}
      </div>

      {/* Active Panel Inspection */}
      <AnimatePresence mode="wait">
        <motion.div
          key={panel.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Schematic Drawn Cubicle Front SVG */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#032B70] rounded-2xl p-6 text-white border border-sky-400/40 relative shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-mono text-sky-200 mb-4 pb-2 border-b border-sky-500/30">
              <span>SCHEMATIC CUBICLE VIEW</span>
              <span className="text-[#38BDF8] font-bold">{panel.segregation.split(' ')[0]}</span>
            </div>

            {/* SVG Cubicle Front */}
            <svg viewBox="0 0 280 340" className="w-full h-64 mx-auto" fill="none">
              {/* Outer frame */}
              <rect x="20" y="10" width="240" height="320" rx="4" stroke="#38BDF8" strokeWidth="2" fill="#0A1D44" />
              {/* Plinth */}
              <rect x="20" y="310" width="240" height="20" fill="#030C20" stroke="#38BDF8" strokeWidth="1" />
              {/* Top busbar chamber */}
              <rect x="30" y="20" width="220" height="40" rx="2" stroke="#60A5FA" strokeWidth="1" fill="#0F2C69" strokeDasharray="4 2" />
              <text x="140" y="44" fill="#93C5FD" fontSize="9" fontFamily="monospace" textAnchor="middle">MAIN BUSBAR 415V/11kV</text>
              
              {/* Middle Breaker / Feeder Compartments */}
              <rect x="30" y="70" width="220" height="110" rx="2" stroke="#38BDF8" strokeWidth="1.5" fill="#13367C" />
              <circle cx="50" cy="90" r="4" fill="#10B981" />
              <circle cx="65" cy="90" r="4" fill="#EF4444" />
              <circle cx="80" cy="90" r="4" fill="#F59E0B" />
              <rect x="180" y="80" width="55" height="35" rx="2" stroke="#93C5FD" strokeWidth="0.8" fill="#0A1E45" />
              <text x="207" y="102" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">METER</text>
              <rect x="50" y="120" width="180" height="45" rx="2" stroke="#38BDF8" strokeWidth="1" fill="#08183A" />
              <text x="140" y="146" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">{panel.tab} BREAKER / STARTER</text>

              {/* Lower Cable Alley / Termination */}
              <rect x="30" y="190" width="220" height="110" rx="2" stroke="#60A5FA" strokeWidth="1" fill="#0F2C69" />
              <line x1="60" y1="210" x2="60" y2="280" stroke="#F59E0B" strokeWidth="3" />
              <line x1="80" y1="210" x2="80" y2="280" stroke="#10B981" strokeWidth="3" />
              <line x1="100" y1="210" x2="100" y2="280" stroke="#EF4444" strokeWidth="3" />
              <line x1="120" y1="210" x2="120" y2="280" stroke="#0284C7" strokeWidth="3" />
              <text x="190" y="250" fill="#93C5FD" fontSize="8" fontFamily="monospace" textAnchor="middle">CABLE ALLEY</text>
            </svg>

            <div className="mt-3 text-center text-[11px] font-mono text-sky-200">
              Type-Tested Design • 9-Tank Pretreatment
            </div>
          </div>

          {/* Right: Technical Specs & Applications */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#0284C7] uppercase">
                {panel.standards}
              </span>
              <h4 className="text-2xl font-black text-[#001B79] mt-0.5">
                {panel.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs font-mono">
                <span className="text-slate-500 block">RATING CAPACITY</span>
                <span className="text-[#001B79] font-black text-sm">{panel.rating}</span>
              </div>
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs font-mono">
                <span className="text-slate-500 block">SEGREGATION</span>
                <span className="text-[#001B79] font-black text-sm">{panel.segregation}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                Core Engineering Deliverables:
              </span>
              <div className="space-y-1.5">
                {panel.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-sky-100 text-xs text-slate-600">
              <span className="font-bold text-slate-800 font-mono block mb-1">TARGET INDUSTRIAL APPLICATIONS:</span>
              {panel.applications}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
