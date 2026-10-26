import { useState, useEffect, useMemo, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Shield,
  ShieldCheck,
  Recycle,
  Leaf,
  Factory,
  Cpu,
  Zap,
  Layers,
  FlaskConical,
  Award,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Play,
  Pause,
  Sliders,
  Sparkles,
  Workflow,
  BarChart3,
  Globe2,
  Users,
  Compass,
  FileCheck,
  HardHat,
  Droplets,
  Flame,
  Sun,
  Activity,
  Calculator,
  SlidersHorizontal,
  CheckSquare,
  Database,
  Terminal,
  Radio,
  Settings,
  X,
  Gauge,
  Thermometer,
  Wind,
  Binary,
  Layers3,
  Boxes,
  Microchip,
  Navigation2
} from 'lucide-react'
import { companyInfo, valuePillars, disciplinaryStrengths } from '../data/companyData'
import { servicesData } from '../data/servicesData'
import { productsData } from '../data/productsData'
import { industriesData } from '../data/industriesData'
import { softwareTools, statutoryClearances, qualityStandards } from '../data/standardsData'
import { clientsList } from '../data/clientsData'
import { partnersData } from '../data/partnersData'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'
import { MobileAccordionItem, MobileAccordionGroup } from '../components/ui/MobileAccordion'
import { MobileTabs, TabPanel } from '../components/ui/MobileTabs'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'SIF Systems | SIF-EPX Group - Enlighten Process Excellence | EPCM Engineering',
      },
      {
        name: 'description',
        content:
          'SIF Systems (SIF-EPX Group) - ISO 9001:2015 Certified Turnkey EPCM, Process Automation, Switchboards, and Solar EPC Provider across India.',
      },
      {
        property: 'og:title',
        content: 'SIF Systems | SIF-EPX Group - Enlighten Process Excellence | EPCM Engineering',
      },
      {
        property: 'og:description',
        content:
          'SIF Systems (SIF-EPX Group) - ISO 9001:2015 Certified Turnkey EPCM, Process Automation, Switchboards, and Solar EPC Provider across India.',
      },
    ],
  }),
  component: SifBespokeHomeThree,
})

// =========================================================================
// 1. BESPOKE SVG VECTOR SYSTEMS: TECHNICAL BLUEPRINT GRID (LIGHT BLUE GRADIENT)
// =========================================================================
function TechnicalBlueprintGridSVG({ className = '', isLightMode = false }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="sif-tech-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke={isLightMode ? "#0284C7" : "#38BDF8"} strokeWidth="0.4" strokeOpacity={isLightMode ? "0.15" : "0.12"} />
          <circle cx="24" cy="24" r="0.75" fill="#38BDF8" fillOpacity={isLightMode ? "0.35" : "0.25"} />
        </pattern>
        <linearGradient id="trace-light-blue-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#001B79" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#sif-tech-grid)" />

      {/* Animated Circuit Traces */}
      <motion.path
        d="M 60 140 L 320 140 L 400 220 L 750 220 L 840 130 L 1220 130"
        stroke="url(#trace-light-blue-glow)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <circle cx="320" cy="140" r="3.5" fill="#38BDF8" />
      <circle cx="750" cy="220" r="3.5" fill="#0284C7" />
      <circle cx="840" cy="130" r="3.5" fill="#60A5FA" />
    </svg>
  )
}

// =========================================================================
// 2. BESPOKE COMPONENT: REAL-TIME OSCILLOSCOPE MONITOR
// =========================================================================
function LiveSineWaveOscilloscope({ isHarmonicMitigated = true }) {
  return (
    <div className="relative w-full h-28 bg-gradient-to-r from-[#031538] via-[#051E4E] to-[#0A2558] rounded-2xl border border-sky-400/40 p-2.5 overflow-hidden flex flex-col justify-between shadow-inner">
      <div className="flex items-center justify-between text-[10px] font-mono text-sky-200 px-2 pt-0.5 border-b border-sky-800/40">
        <span className="flex items-center space-x-1.5">
          <Activity className="w-3 h-3 text-[#38BDF8] animate-pulse" />
          <span>IEEE 519 OSCILLOSCOPE MONITOR</span>
        </span>
        <span className={`px-2 py-0.5 rounded font-bold ${isHarmonicMitigated ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'}`}>
          {isHarmonicMitigated ? 'ACTIVE FILTER ENGAGED: THD 3.1%' : 'RAW GRID: THD 27.8% (DISTORTED)'}
        </span>
      </div>

      <svg className="w-full h-12" viewBox="0 0 400 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-grad-lightblue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="wave-grad-distorted-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <line x1="0" y1="25" x2="400" y2="25" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="4 4" />

        {isHarmonicMitigated ? (
          <motion.path
            d="M 0 25 Q 50 0, 100 25 T 200 25 T 300 25 T 400 25"
            fill="none"
            stroke="url(#wave-grad-lightblue)"
            strokeWidth="2.5"
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        ) : (
          <motion.path
            d="M 0 25 Q 25 5, 45 15 T 70 5 T 100 25 T 130 45 T 160 35 T 200 25 T 235 10 T 270 20 T 300 25 T 340 45 T 370 40 T 400 25"
            fill="none"
            stroke="url(#wave-grad-distorted-light)"
            strokeWidth="2"
            initial={{ pathOffset: 0 }}
            animate={{ pathOffset: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </svg>

      <div className="flex items-center justify-between text-[9px] font-mono text-sky-200 px-2 pb-0.5">
        <span>f = 50.00 Hz</span>
        <span>V_rms = 415.2 V</span>
        <span className="text-[#38BDF8] font-bold">PF = {isHarmonicMitigated ? '0.992 LAG' : '0.814 LAG'}</span>
      </div>
    </div>
  )
}

// =========================================================================
// 3. BESPOKE COMPONENT: INTERACTIVE PROCESS PLANT P&ID SIMULATOR (WHITE & LIGHT BLUE)
// =========================================================================
function InteractiveProcessPlantFlowSVG() {
  const [selectedUnit, setSelectedUnit] = useState('reactor')

  const unitDetails = {
    feed: {
      tag: 'T-101 // RAW REAGENTS DOSING TANK',
      title: 'Precision Feed & Chemical Dosing Station',
      specs: [
        { label: 'Operating Capacity', val: '25,000 Liters' },
        { label: 'Material of Construction', val: 'SS316L / PTFE Lined' },
        { label: 'Flow Metering', val: 'Coriolis Mass Flow (±0.1%)' },
        { label: 'Safety Interlock', val: 'Double Block & Bleed Valve' },
      ],
      desc: 'Automated gravimetric and volumetric chemical batching unit with continuous radar level telemetry and dual redundant dosing pumps.',
      code: 'ASME Section VIII Div 1 & API 650',
    },
    reactor: {
      tag: 'R-201 // HIGH-SHEAR SYNTHESIS REACTOR',
      title: 'Continuous Jacketed Chemical Reactor',
      specs: [
        { label: 'Design Temp & Pressure', val: '250°C @ 16.0 bar(g)' },
        { label: 'Agitator Drive', val: '37 kW Flameproof Ex d IIB+H2' },
        { label: 'Thermal Jacket', val: 'Limpet Coil Steam / Chilled Glycol' },
        { label: 'Relief Mechanism', val: 'Rupture Disc + SIL-3 PSV' },
      ],
      desc: 'Core reaction vessel featuring dual mechanical seal with thermosiphon barrier fluid, automated cascade temperature PID loops, and zero-clash nozzle design.',
      code: 'ASME B31.3 & PESO SMPV Rules',
    },
    column: {
      tag: 'C-301 // FRACTIONAL PACKED COLUMN',
      title: 'High-Efficiency Distillation Column',
      specs: [
        { label: 'Column Height', val: '18.5 Meters' },
        { label: 'Internal Packing', val: 'Structured SS316 Mellapak' },
        { label: 'Differential Pressure (ΔP)', val: '1.42 bar (Transmitter Linked)' },
        { label: 'Reflux Ratio Control', val: 'Modicon M580 Automated Split' },
      ],
      desc: 'Precision solvent recovery and multi-component distillation unit equipped with CAESAR II verified piping stress compliance for high thermal cycles.',
      code: 'TEMA C & IS 2825 Class 1',
    },
    exchanger: {
      tag: 'HE-401 // TEMA SHELL & TUBE EXCHANGER',
      title: 'Condenser & Chiller Heat Exchanger',
      specs: [
        { label: 'Heat Exchange Area', val: '145 m² Dual Pass' },
        { label: 'Shell / Tube Media', val: 'Steam Condensate / Chilled Water' },
        { label: 'Operating Temperatures', val: 'Shell: 120°C / Tube: 7°C' },
        { label: 'Leak Detection', val: 'Differential Conductivity Probe' },
      ],
      desc: 'Sub-cooling condenser maximizing thermal energy recovery and reducing cooling tower load by up to 34% through automated bypass valves.',
      code: 'TEMA R Standards & ASME VIII',
    },
    scrubber: {
      tag: 'SC-501 // MULTI-STAGE WET SCRUBBER',
      title: 'Venturi & Packed Acid Gas Scrubber Tower',
      specs: [
        { label: 'Acid Gas Removal', val: '99.8% HCl / SO₂ / NH₃ Absorption' },
        { label: 'Tower Material', val: 'Derakane 411 Vinyl Ester FRP' },
        { label: 'Circulation Pumps', val: '1+1 Hot Standby Magnetic Drive' },
        { label: 'CPCB Telemetry', val: 'Online Multi-Gas CEMS Linked' },
      ],
      desc: 'Zero-downtime air pollution control system equipped with automated caustic dosing, mist eliminators, and real-time CPCB telemetry upload.',
      code: 'CPCB & EPA Method 6C Standards',
    },
    scada: {
      tag: 'SCADA // DCS & AUTOMATION HUB',
      title: 'Turnkey PLC/SCADA Process Controller',
      specs: [
        { label: 'Controller Architecture', val: 'Modicon M580 Hot-Standby PAC' },
        { label: 'Safety Integrity Level', val: 'TÜV Rheinland SIL-3 ESD' },
        { label: 'OT Networking', val: 'Redundant Profinet Fiber Ring' },
        { label: 'Data Compliance', val: '21 CFR Part 11 Electronic Audit' },
      ],
      desc: 'Centralized plant brain with 100ms deterministic loop response, remote telemetry diagnostics, and real-time energy management integration.',
      code: 'IEC 61131-3 & ISA-88 Batch Standard',
    },
  }

  const current = unitDetails[selectedUnit]

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50/50 to-[#E0F2FE]/60 border border-sky-200/80 p-6 sm:p-10 shadow-xl shadow-sky-100/50 text-slate-900">
      
      {/* Interactive Top Control Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-sky-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-ping" />
            <span className="text-xs font-mono text-[#0284C7] font-bold uppercase tracking-wider">
              INTERACTIVE CHEMICAL PROCESS &amp; AUTOMATION SIMULATOR
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#001B79] mt-1">
            End-to-End P&amp;ID Process &amp; Telemetry Architecture
          </h3>
        </div>

        {/* Unit Selector Buttons (Swipeable on Mobile) */}
        <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto no-scrollbar gap-2 -mx-2 px-2 pb-1">
          {[
            { id: 'feed', label: 'T-101 Feed Tank', icon: Droplets },
            { id: 'reactor', label: 'R-201 Reactor', icon: Flame },
            { id: 'column', label: 'C-301 Column', icon: Layers3 },
            { id: 'exchanger', label: 'HE-401 Condenser', icon: Thermometer },
            { id: 'scrubber', label: 'SC-501 Scrubber', icon: Wind },
            { id: 'scada', label: 'SCADA Controller', icon: Cpu },
          ].map((item) => {
            const Icon = item.icon
            const isAct = selectedUnit === item.id
            return (
              <button
                key={item.id}
                onClick={() => setSelectedUnit(item.id)}
                className={`shrink-0 flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  isAct
                    ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md shadow-sky-300/40 ring-2 ring-sky-300'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200 shadow-xs'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isAct ? 'text-sky-200' : 'text-[#0284C7]'}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Responsive Diagram & Inspection Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-6 sm:pt-8">
        
        {/* Animated SVG P&ID Graphic */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#04122C] via-[#08204D] to-[#0C2D6B] rounded-2xl border border-sky-400/40 p-3 sm:p-6 relative overflow-hidden shadow-xl flex flex-col items-center justify-center text-white">
          
          {/* Active Unit Indicator Pill on Mobile Top-Right */}
          <div className="w-full flex items-center justify-between pb-2 text-[10px] font-mono text-sky-200 border-b border-sky-800/40 mb-2">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white tracking-wide">P&amp;ID LIVE SCHEMATIC</span>
            </span>
            <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-200 border border-sky-400/30 font-bold uppercase text-[9px]">
              Tap unit to inspect
            </span>
          </div>

          <div className="w-full overflow-hidden">
            <svg
              className="w-full h-auto max-h-[320px] aspect-[700/340]"
              viewBox="0 0 700 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting Pipes with Animated Pulses */}
              {/* Pipe 1: Feed to Reactor */}
              <motion.path
                d="M 100 170 L 200 170"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 20 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              {/* Pipe 2: Reactor to Column */}
              <motion.path
                d="M 280 170 L 370 170"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 20 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              {/* Pipe 3: Column to Exchanger Overhead */}
              <motion.path
                d="M 415 90 L 415 60 L 510 60 L 510 110"
                stroke="#BAE6FD"
                strokeWidth="3"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 20 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              {/* Pipe 4: Column to Scrubber Tail Gas */}
              <motion.path
                d="M 550 150 L 610 150 L 610 170"
                stroke="#34D399"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                initial={{ strokeDashoffset: 16 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              {/* SCADA Telemetry Bus */}
              <path d="M 60 290 L 640 290" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* 1. Feed Tank (T-101) */}
              <g
                onClick={() => setSelectedUnit('feed')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <rect
                  x="40"
                  y="110"
                  width="60"
                  height="120"
                  rx="10"
                  fill={selectedUnit === 'feed' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'feed' ? '#BAE6FD' : '#38BDF8'}
                  strokeWidth={selectedUnit === 'feed' ? '2.5' : '1.5'}
                />
                <text x="70" y="165" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">T-101</text>
                <text x="70" y="180" fill="#BAE6FD" fontSize="8" textAnchor="middle" fontFamily="monospace">FEED</text>
                <circle cx="70" cy="125" r="4" fill="#38BDF8" className="animate-ping" />
              </g>

              {/* 2. Reactor (R-201) */}
              <g
                onClick={() => setSelectedUnit('reactor')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <rect
                  x="200"
                  y="90"
                  width="80"
                  height="150"
                  rx="16"
                  fill={selectedUnit === 'reactor' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'reactor' ? '#BAE6FD' : '#38BDF8'}
                  strokeWidth={selectedUnit === 'reactor' ? '2.5' : '1.5'}
                />
                <line x1="240" y1="70" x2="240" y2="200" stroke="#E2E8F0" strokeWidth="2" />
                <line x1="220" y1="190" x2="260" y2="190" stroke="#E2E8F0" strokeWidth="2.5" />
                <text x="240" y="145" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">R-201</text>
                <text x="240" y="160" fill="#FCA5A5" fontSize="8" textAnchor="middle" fontFamily="monospace">REACTOR</text>
                <text x="240" y="225" fill="#38BDF8" fontSize="8" textAnchor="middle" fontFamily="monospace">250°C 16bar</text>
              </g>

              {/* 3. Column (C-301) */}
              <g
                onClick={() => setSelectedUnit('column')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <rect
                  x="370"
                  y="60"
                  width="70"
                  height="190"
                  rx="8"
                  fill={selectedUnit === 'column' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'column' ? '#BAE6FD' : '#38BDF8'}
                  strokeWidth={selectedUnit === 'column' ? '2.5' : '1.5'}
                />
                <line x1="375" y1="100" x2="435" y2="100" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="375" y1="130" x2="435" y2="130" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="375" y1="160" x2="435" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="375" y1="190" x2="435" y2="190" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" />
                <text x="405" y="145" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">C-301</text>
                <text x="405" y="160" fill="#BAE6FD" fontSize="8" textAnchor="middle" fontFamily="monospace">COLUMN</text>
              </g>

              {/* 4. Exchanger (HE-401) */}
              <g
                onClick={() => setSelectedUnit('exchanger')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <circle
                  cx="510"
                  cy="140"
                  r="35"
                  fill={selectedUnit === 'exchanger' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'exchanger' ? '#BAE6FD' : '#38BDF8'}
                  strokeWidth={selectedUnit === 'exchanger' ? '2.5' : '1.5'}
                />
                <text x="510" y="137" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">HE-401</text>
                <text x="510" y="150" fill="#38BDF8" fontSize="7.5" textAnchor="middle" fontFamily="monospace">CONDENSER</text>
              </g>

              {/* 5. Scrubber (SC-501) */}
              <g
                onClick={() => setSelectedUnit('scrubber')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <rect
                  x="590"
                  y="100"
                  width="60"
                  height="150"
                  rx="6"
                  fill={selectedUnit === 'scrubber' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'scrubber' ? '#BAE6FD' : '#10B981'}
                  strokeWidth={selectedUnit === 'scrubber' ? '2.5' : '1.5'}
                />
                <line x1="620" y1="100" x2="620" y2="50" stroke="#10B981" strokeWidth="4" />
                <text x="620" y="160" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SC-501</text>
                <text x="620" y="175" fill="#6EE7B7" fontSize="7.5" textAnchor="middle" fontFamily="monospace">SCRUBBER</text>
                <text x="620" y="40" fill="#34D399" fontSize="7.5" textAnchor="middle" fontFamily="monospace">CPCB CEMS</text>
              </g>

              {/* 6. SCADA Station Hub at bottom */}
              <g
                onClick={() => setSelectedUnit('scada')}
                className="cursor-pointer transition-all hover:opacity-90"
              >
                <rect
                  x="250"
                  y="275"
                  width="200"
                  height="32"
                  rx="8"
                  fill={selectedUnit === 'scada' ? '#0284C7' : '#0F2C59'}
                  stroke={selectedUnit === 'scada' ? '#BAE6FD' : '#F59E0B'}
                  strokeWidth={selectedUnit === 'scada' ? '2' : '1'}
                />
                <text x="350" y="295" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  PROFINET DCS / SIL-3 ESD LINK
                </text>
              </g>
            </svg>
          </div>

          <div className="w-full flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-sky-200 pt-2 border-t border-sky-800/40">
            <span className="flex items-center space-x-1">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>CYCLE: 12ms</span>
            </span>
            <span className="hidden sm:inline">ASPEN PLUS &amp; CAESAR II VERIFIED</span>
            <span className="text-[#38BDF8] font-bold">ACTIVE: {selectedUnit.toUpperCase()}</span>
          </div>

        </div>

        {/* Right Side / Bottom on Mobile: Unit Inspection Console */}
        <div className="lg:col-span-5 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUnit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5 bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-sky-200 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-[10px] sm:text-[11px] font-mono text-[#001B79] font-bold truncate max-w-[70%]">
                  {current.tag}
                </span>
                <span className="text-[10px] font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200 shrink-0">
                  {current.code.split('&')[0].trim()}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black text-[#001B79] leading-snug">
                {current.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Technical Specifications Grid */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                  DESIGN &amp; INSTRUMENTATION PARAMETERS
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {current.specs.map((sp, idx) => (
                    <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white border border-sky-200 shadow-xs text-xs">
                      <div className="text-[9px] text-slate-500 font-mono uppercase truncate">{sp.label}</div>
                      <div className="font-bold text-slate-900 pt-0.5 text-[11px] sm:text-xs truncate">{sp.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Code Compliance Badge */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-blue-100/60 border border-sky-200 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 font-bold text-[10px] sm:text-xs">CODE COMPLIANCE:</span>
                <span className="font-bold text-[#001B79] text-[10px] sm:text-xs">{current.code}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  )
}

// =========================================================================
// 4. BESPOKE COMPONENT: INDIA INDUSTRIAL CORRIDORS RADAR MAP (WHITE & LIGHT BLUE)
// =========================================================================
function IndiaIndustrialCorridorsRadarMap() {
  const [activeCorridor, setActiveCorridor] = useState(0)

  const corridors = [
    {
      id: 'dahej',
      name: 'Dahej PCPIR Hub',
      region: 'Gujarat Coastal Belt',
      highlight: 'Petrochemical & Chlor-Alkali Super-Hub',
      projects: '48+ Plants Commissioned',
      installed: '140 MVA Switchgear',
      clearance: '100% GPCB / PESO Cleared',
      specs: 'Corrosive marine environment IP66 switchboards, CAESAR II high-pressure steam headers, and SIL-3 safety loops for bulk chlor-alkali electrolysis.',
    },
    {
      id: 'ankleshwar',
      name: 'Ankleshwar & Panoli MIDC',
      region: 'Bharuch Industrial Cluster',
      highlight: 'Synthetic Dyes, Pigments & Active APIs',
      projects: '72+ Installations',
      installed: '95 MVA Substation Capacity',
      clearance: 'ZLD & CEMS Compliant',
      specs: 'Automated packed bed multi-gas wet scrubbers, batch reactor recipe sequencing on Modicon M580 PAC, and IEEE 519 active harmonic mitigation.',
    },
    {
      id: 'hazira',
      name: 'Hazira Heavy Manufacturing',
      region: 'Surat Industrial Corridor',
      highlight: 'Continuous Cryogenic & Heavy Process',
      projects: '34+ Large Assemblies',
      installed: '210 MVA PCC Switchboards',
      clearance: 'CEIG & ASME U-Stamp Passed',
      specs: 'Form 4b type-tested PCC panels with Masterpact MTZ breakers, 6300A copper busbar assemblies, and continuous substation thermal imaging monitoring.',
    },
    {
      id: 'vapi',
      name: 'Vapi & Sarigam CETP Hub',
      region: 'South Gujarat Industrial Zone',
      highlight: 'Common Effluent Plants & Paper Synthesis',
      projects: '56+ Process Loops',
      installed: '80 MVA Power Conditioning',
      clearance: 'CPCB Online Telemetry Stream',
      specs: 'Turnkey automation for zero liquid discharge (ZLD) multi-effect evaporators, high-COD biological clarifiers, and continuous telemetry servers.',
    },
    {
      id: 'mahad',
      name: 'Mahad & Tarapur MIDC',
      region: 'Maharashtra Chemical Corridor',
      highlight: 'Pharma Intermediates & Fine Chemicals',
      projects: '41+ Greenfield Units',
      installed: '65 MVA Enclosure Builds',
      clearance: 'MPCB & DISH Compliant',
      specs: 'Flameproof IECEx Zone 1 panel assembly, emergency runaway dump scrubbers, and automated solvent recovery distillation columns.',
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad Pharma City',
      region: 'Telangana Bio-Pharma Cluster',
      highlight: 'Sterile Formulations & Bioreactors',
      projects: '38+ Cleanrooms Automated',
      installed: '50 MVA Harmonic Mitigated',
      clearance: 'US-FDA 21 CFR Part 11 Validated',
      specs: 'ISO Class 5 / Class 100 sterile HVAC cascading, automated electronic audit trails, electronic batch records (EBR), and clean-in-place (CIP) loops.',
    },
  ]

  const current = corridors[activeCorridor]

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-[#E0F2FE]/50 border border-sky-200/80 p-8 sm:p-12 shadow-xl shadow-sky-100/50 text-slate-900">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-sky-200">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            PAN-INDIA INDUSTRIAL FOOTPRINT
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001B79]">
            Major Project Execution Corridors
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Over 25 years deploying mission-critical process equipment, type-tested switchboards, and SCADA automation across India's heaviest industrial corridors.
        </p>
      </div>

      {/* Mobile View (<lg): Horizontal snap slider of corridor cards with expandable details */}
      <div className="lg:hidden space-y-4">
        <MobileSnapSlider
          itemWidth="w-[84vw] max-w-[320px]"
          ariaLabel="Industrial Corridors Slider"
        >
          {corridors.map((corridor, idx) => {
            const isAct = activeCorridor === idx
            return (
              <div
                key={corridor.id}
                onClick={() => setActiveCorridor(idx)}
                className={`p-4 rounded-2xl text-left border cursor-pointer transition-all flex flex-col justify-between h-[150px] ${
                  isAct
                    ? 'bg-gradient-to-r from-[#001B79] via-[#00229C] to-[#0284C7] border-sky-400 shadow-md text-white ring-2 ring-sky-300'
                    : 'bg-white border-sky-200/80 text-slate-700 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center space-x-1.5 font-bold text-sm">
                      <MapPin className={`w-3.5 h-3.5 ${isAct ? 'text-sky-200' : 'text-[#0284C7]'}`} />
                      <span>{corridor.name}</span>
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${isAct ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'}`}>
                      {corridor.projects.split(' ')[0]}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono block ${isAct ? 'text-sky-200' : 'text-slate-500'}`}>
                    {corridor.region}
                  </span>
                </div>
                <div className={`text-[11px] font-mono font-semibold truncate ${isAct ? 'text-sky-100' : 'text-[#0369A1]'}`}>
                  {corridor.highlight}
                </div>
              </div>
            )
          })}
        </MobileSnapSlider>

        {/* Selected Corridor Mobile Detail Sheet */}
        <div className="bg-white rounded-2xl border border-sky-200 p-5 space-y-4 shadow-lg shadow-sky-100/50">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <div>
              <div className="text-[9px] font-mono text-[#0369A1] uppercase tracking-wider font-bold">
                ACTIVE CORRIDOR
              </div>
              <h4 className="text-xl font-black text-[#001B79]">{current.name}</h4>
              <span className="text-xs text-sky-700 font-mono font-bold">{current.highlight}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 text-[#0284C7] text-center shadow-xs">
              <Navigation2 className="w-4 h-4 mx-auto animate-pulse" />
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed font-normal">
            {current.specs}
          </p>

          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-sm font-black font-mono text-[#001B79]">{current.projects.split(' ')[0]}</div>
              <div className="text-[8px] font-mono text-slate-600 mt-0.5 uppercase">Sites</div>
            </div>
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-sm font-black font-mono text-[#0284C7]">{current.installed.split(' ')[0]}</div>
              <div className="text-[8px] font-mono text-slate-600 mt-0.5 uppercase">Rating</div>
            </div>
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-sm font-black font-mono text-emerald-700">100%</div>
              <div className="text-[8px] font-mono text-slate-600 mt-0.5 uppercase">Cleared</div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white text-center font-bold text-xs uppercase flex items-center justify-center space-x-1.5 shadow-md"
            >
              <span>Connect With Corridor Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop side-by-side grid (lg and up) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Corridor Selector Buttons */}
        <div className="lg:col-span-5 space-y-2.5">
          {corridors.map((corridor, idx) => {
            const isAct = activeCorridor === idx
            return (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridor(idx)}
                className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border ${
                  isAct
                    ? 'bg-gradient-to-r from-[#001B79] via-[#00229C] to-[#0284C7] border-sky-400 shadow-md shadow-sky-200 text-white ring-2 ring-sky-300'
                    : 'bg-white border-sky-200/80 hover:bg-sky-50/80 text-slate-700 shadow-xs'
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <MapPin className={`w-3.5 h-3.5 ${isAct ? 'text-sky-200' : 'text-[#0284C7]'}`} />
                    <span className="font-bold text-sm font-sans">{corridor.name}</span>
                  </div>
                  <span className={`text-[11px] font-mono block pl-5 ${isAct ? 'text-sky-200' : 'text-slate-500'}`}>{corridor.region}</span>
                </div>
                <div className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold ${isAct ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'}`}>
                  {corridor.projects.split(' ')[0]}
                </div>
              </button>
            )
          })}
        </div>

        {/* Right Side: Detailed Corridor Hub Visual Inspection Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-sky-200 p-6 sm:p-8 space-y-6 shadow-lg shadow-sky-100/50 relative overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-sky-100 pb-4">
            <div>
              <div className="text-[10px] font-mono text-[#0369A1] uppercase tracking-wider font-bold">
                SELECTED CORRIDOR INFRASTRUCTURE
              </div>
              <h4 className="text-2xl font-black text-[#001B79] mt-0.5">{current.name}</h4>
              <span className="text-xs text-sky-700 font-mono font-bold">{current.highlight}</span>
            </div>
            <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 border border-sky-200 text-[#0284C7] text-center shadow-xs">
              <Navigation2 className="w-5 h-5 mx-auto animate-pulse" />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {current.specs}
          </p>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-3 gap-3 text-center pt-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-base font-black font-mono text-[#001B79]">{current.projects}</div>
              <div className="text-[9px] font-mono text-slate-600 mt-0.5 uppercase">Completed Sites</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-base font-black font-mono text-[#0284C7]">{current.installed}</div>
              <div className="text-[9px] font-mono text-slate-600 mt-0.5 uppercase">Installed Rating</div>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-sky-100/60 border border-sky-200">
              <div className="text-base font-black font-mono text-emerald-700">{current.clearance.split(' ')[0]}</div>
              <div className="text-[9px] font-mono text-slate-600 mt-0.5 uppercase">Statutory Dossier</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-700 font-bold">NEED AN ON-SITE CORRIDOR CONSULTANT?</span>
            <Link
              to="/contact"
              className="text-[#001B79] hover:text-[#0284C7] font-black uppercase flex items-center space-x-1"
            >
              <span>CONNECT NOW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

// =========================================================================
// 5. BESPOKE COMPONENT: HAZARDOUS AREA & CLEANROOM CLASSIFICATION MATRIX (WHITE & LIGHT BLUE)
// =========================================================================
function HazardousAreaAndCleanroomMatrix() {
  const [activeTab, setActiveTab] = useState('atex')

  const atexZones = [
    {
      zone: 'Zone 0 / Zone 20',
      hazard: 'Continuous Hazard (>1000 hrs/yr)',
      enclosure: 'Ex ia Intrinsic Safety Barriers (Galvanic Isolation)',
      gasGroups: 'IIA, IIB, IIC (Hydrogen & Acetylene)',
      standard: 'IEC 60079-11 & ATEX 2014/34/EU',
    },
    {
      zone: 'Zone 1 / Zone 21',
      hazard: 'Intermittent Hazard (10 - 1000 hrs/yr)',
      enclosure: 'Ex d Flameproof Cast Enclosure / Ex e Increased Safety',
      gasGroups: 'IIA Propane, IIB Ethylene, IIC + H₂',
      standard: 'IS/IEC 60079-1 & PESO Certified',
    },
    {
      zone: 'Zone 2 / Zone 22',
      hazard: 'Abnormal Hazard (<10 hrs/yr)',
      enclosure: 'Ex nA Non-Sparking & Ex p Pressurized Purged Panels',
      gasGroups: 'All Industrial Hydrocarbons & Dust',
      standard: 'IEC 60079-15 & CEIG Clearance',
    },
  ]

  const cleanroomClasses = [
    {
      grade: 'Grade A / ISO Class 5',
      env: 'Sterile Aseptic Core & Filling Line',
      velocity: 'Laminar Airflow 0.45 m/s ± 20%',
      pressure: 'Positive ΔP ≥ +15 Pa vs Ambient',
      scada: '21 CFR Part 11 Electronic Audit Trail',
    },
    {
      grade: 'Grade B / ISO Class 6',
      env: 'Aseptic Preparation & Bioreactor Suite',
      velocity: 'Mixed Flow HEPA H14 (99.995% Efficiency)',
      pressure: 'Cascade Differential ΔP ≥ +10 Pa',
      scada: 'Automated Recipe Batching ISA-88',
    },
    {
      grade: 'Grade C & D / ISO Class 7-8',
      env: 'Solid Dosage & Secondary Packaging',
      velocity: '20-40 Air Changes Per Hour (ACPH)',
      pressure: 'Controlled Interlock Airlock (MAM/PAL)',
      scada: 'HVAC PLC VAV Modulating Damper Control',
    },
  ]

  return (
    <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-[#E0F2FE]/50 border border-sky-200/80 p-8 sm:p-12 shadow-xl shadow-sky-100/50">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-sky-200">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2 border border-sky-200">
            REGULATORY COMPLIANCE BENCHMARK
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#001B79]">
            Hazardous Zone &amp; Pharma Cleanroom Matrix
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-2xl bg-white p-1.5 border border-sky-200 shadow-xs">
          <button
            onClick={() => setActiveTab('atex')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'atex'
                ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ATEX / IECEx Explosion-Proof
          </button>
          <button
            onClick={() => setActiveTab('cleanroom')}
            className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              activeTab === 'cleanroom'
                ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pharma Cleanroom ISO 14644
          </button>
        </div>
      </div>

      {activeTab === 'atex' ? (
        <>
          {/* Mobile View: Segmented MobileTabs (1 card at a time) */}
          <div className="md:hidden">
            <MobileTabs
              tabs={atexZones.map((z, idx) => ({
                id: `atex-${idx}`,
                label: z.zone.split('/')[0].trim(),
              }))}
            >
              {atexZones.map((z, idx) => (
                <TabPanel key={idx}>
                  <div className="p-5 rounded-2xl bg-white border border-sky-200/90 space-y-4 shadow-lg shadow-sky-100/60">
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold border border-amber-300">
                        {z.zone}
                      </span>
                      <h4 className="text-base font-bold text-[#001B79] pt-1">{z.hazard}</h4>
                      <div className="space-y-2 pt-2 text-xs font-mono text-slate-700">
                        <div>
                          <span className="text-slate-600 uppercase text-[10px] block font-medium">PROTECTION METHOD</span>
                          <span className="font-bold text-[#0369A1]">{z.enclosure}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase text-[10px] block">GAS / DUST GROUPS</span>
                          <span className="text-slate-900 font-semibold">{z.gasGroups}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-sky-100 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                      <span>CERTIFICATION:</span>
                      <span className="text-[#001B79] font-bold">{z.standard}</span>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </MobileTabs>
          </div>

          {/* Desktop/Tablet View: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {atexZones.map((z, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-sky-200/90 space-y-4 shadow-lg shadow-sky-100/60 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold border border-amber-300">
                    {z.zone}
                  </span>
                  <h4 className="text-lg font-bold text-[#001B79] pt-1">{z.hazard}</h4>
                  <div className="space-y-1.5 pt-2 text-xs font-mono text-slate-700">
                    <div>
                      <span className="text-slate-600 uppercase text-[10px] block font-medium">PROTECTION METHOD</span>
                      <span className="font-bold text-[#0369A1]">{z.enclosure}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-slate-500 uppercase text-[10px] block">GAS / DUST GROUPS</span>
                      <span className="text-slate-900 font-semibold">{z.gasGroups}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sky-100 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                  <span>CERTIFICATION:</span>
                  <span className="text-[#001B79] font-bold">{z.standard}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Mobile View: Segmented MobileTabs (1 card at a time) */}
          <div className="md:hidden">
            <MobileTabs
              tabs={cleanroomClasses.map((c, idx) => ({
                id: `clean-${idx}`,
                label: c.grade.split('/')[0].trim(),
              }))}
            >
              {cleanroomClasses.map((c, idx) => (
                <TabPanel key={idx}>
                  <div className="p-5 rounded-2xl bg-white border border-sky-200/90 space-y-4 shadow-lg shadow-sky-100/60">
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-sky-100 text-[#001B79] font-mono text-[10px] font-bold border border-sky-300">
                        {c.grade}
                      </span>
                      <h4 className="text-base font-bold text-[#001B79] pt-1">{c.env}</h4>
                      <div className="space-y-2 pt-2 text-xs font-mono text-slate-700">
                        <div>
                          <span className="text-slate-500 uppercase text-[10px] block">AIRFLOW &amp; VELOCITY</span>
                          <span className="font-bold text-[#0284C7]">{c.velocity}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase text-[10px] block">DIFFERENTIAL PRESSURE (ΔP)</span>
                          <span className="text-emerald-700 font-bold">{c.pressure}</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-sky-100 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                      <span>DATA INTEGRITY:</span>
                      <span className="text-[#001B79] font-bold">{c.scada}</span>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </MobileTabs>
          </div>

          {/* Desktop/Tablet View: 3-column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {cleanroomClasses.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-sky-200/90 space-y-4 shadow-lg shadow-sky-100/60 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-[#001B79] font-mono text-[10px] font-bold border border-sky-300">
                    {c.grade}
                  </span>
                  <h4 className="text-lg font-bold text-[#001B79] pt-1">{c.env}</h4>
                  <div className="space-y-1.5 pt-2 text-xs font-mono text-slate-700">
                    <div>
                      <span className="text-slate-500 uppercase text-[10px] block">AIRFLOW &amp; VELOCITY</span>
                      <span className="font-bold text-[#0284C7]">{c.velocity}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-slate-500 uppercase text-[10px] block">DIFFERENTIAL PRESSURE (ΔP)</span>
                      <span className="text-emerald-700 font-bold">{c.pressure}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-sky-100 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                  <span>DATA INTEGRITY:</span>
                  <span className="text-[#001B79] font-bold">{c.scada}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  )
}

// =========================================================================
function SifBespokeHomeThree() {
  // Active Orbital Industry Node
  const [activeOrbitalIdx, setActiveOrbitalIdx] = useState(0)
  const [isOrbitalPaused, setIsOrbitalPaused] = useState(false)

  // 5-Stage EPCM Pipeline Active Tab & Mobile Dropdown
  const [activePipelineStep, setActivePipelineStep] = useState(0)
  const [isPipelineDropdownOpen, setIsPipelineDropdownOpen] = useState(false)

  // Energy & Harmonic ROI Calculator State
  const [calcLoadKVA, setCalcLoadKVA] = useState(1200)
  const [calcCurrentPF, setCalcCurrentPF] = useState(0.82)
  const [calcTargetPF, setCalcTargetPF] = useState(0.99)
  const [calcTariffPerKWh, setCalcTariffPerKWh] = useState(8.5)
  const [calcRunningHours, setCalcRunningHours] = useState(7200)
  const [isHarmonicFilterActive, setIsHarmonicFilterActive] = useState(true)

  // Switchgear Configurator State
  const [configEnclosure, setConfigEnclosure] = useState('VX25 Baying')
  const [configBreaker, setConfigBreaker] = useState('Masterpact MTZ')
  const [configForm, setConfigForm] = useState('Form 4b')
  const [configBusbar, setConfigBusbar] = useState('3200A Cu')
  const [configIngress, setConfigIngress] = useState('IP66')
  const [configStep, setConfigStep] = useState(0)
  const [showFullWhatWeDo, setShowFullWhatWeDo] = useState(false)

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    serviceInterest: 'Turnkey Process Automation & SCADA',
    projectScope: 'New Greenfield Installation',
    message: '',
  })

  // 5-Stage EPCM Pipeline Data
  const pipelineSteps = [
    {
      step: '01',
      phase: 'Phase 01',
      title: 'Concept & Feasibility',
      subtitle: 'DBR & Process Screening',
      icon: FlaskConical,
      desc: 'Formulation of the Design Basis Report (DBR), mass-energy balance modeling, site geotechnical evaluations, and techno-economic feasibility studies.',
      deliverables: ['DBR Formulation', 'FEED Basis & Mass Balance', 'Site Geotech Screening', 'Capex/Opex Feasibility'],
      tools: ['Aspen Plus / ChemCAD', 'DBR Protocol', 'Site Feasibility Matrix'],
      kpi: '100% Process Viability Sign-off',
    },
    {
      step: '02',
      phase: 'Phase 02',
      title: 'Basic & Detail Engineering',
      subtitle: 'Multidisciplinary 3D CAD',
      icon: Layers,
      desc: 'End-to-end P&ID development, CAESAR II piping stress analysis, STAAD.Pro structural design, electrical SLD / MCC panels, and Navisworks 3D BIM clash resolution.',
      deliverables: ['P&ID & Heat Balance', '3D Piping Isometrics', 'STAAD Structural GAs', 'Electrical SLD & Instrumentation'],
      tools: ['AutoCAD Plant 3D', 'CAESAR II Stress', 'STAAD.Pro V8i', 'Navisworks 3D BIM'],
      kpi: 'Zero-Clash 3D Model Approval',
    },
    {
      step: '03',
      phase: 'Phase 03',
      title: 'Procurement & Sourcing',
      subtitle: 'Vendor TBA & QA/QC',
      icon: Settings,
      desc: 'Technical Bid Analysis (TBA), vendor engineering document scrutiny, shop floor Inspection Test Plans (ITPs), and third-party material verification.',
      deliverables: ['Technical Bid Analysis (TBA)', 'Vendor QAP & Drawing Approval', 'Shop Floor Stage ITPs', 'Material Test Certification (MTR)'],
      tools: ['Vendor Matrix Audit', 'ASME Section VIII Div 1', 'API 650 Standards'],
      kpi: '100% Certified Material Traceability',
    },
    {
      step: '04',
      phase: 'Phase 04',
      title: 'Construction & Installation',
      subtitle: 'Site Supervision & CMS',
      icon: Factory,
      desc: 'Dedicated on-site project management, Construction Method Statements (CMS), HSE zero-incident supervision, heavy equipment rigging, and piping spool erection.',
      deliverables: ['Construction Method Statements', 'Daily Toolbox HSE Briefings', 'Primavera P6 Milestone Progress', 'Equipment Erection Reports'],
      tools: ['Primavera P6 EPPM', 'NEBOSH Zero-Harm Protocols', 'IS 456 / IS 800'],
      kpi: 'Zero Lost-Time Incident (LTI)',
    },
    {
      step: '05',
      phase: 'Phase 05',
      title: 'Commissioning & Handover',
      subtitle: 'FAT/SAT & As-Built',
      icon: ShieldCheck,
      desc: 'Pre-commissioning dry & wet loop testing, Factory/Site Acceptance Tests (FAT/SAT), statutory CEIG & SPCB clearance dossiers, and comprehensive As-Built handover.',
      deliverables: ['FAT/SAT Protocol Sign-offs', 'As-Built Engineering Dossier', 'CEIG / SPCB Clearances', 'O&M Client Training Handover'],
      tools: ['SAT Protocols', 'CEIG Statutory Filing', 'Final As-Built CAD Dossier'],
      kpi: 'Turnkey Commercial Operations Handover',
    },
  ]

  // 8 Interactive Orbital Sector Nodes
  const orbitalSectors = [
    {
      id: 1,
      name: 'Chemicals &\nPetrochemicals',
      shortName: 'Petrochemicals',
      angle: 0,
      icon: FlaskConical,
      desc: 'Corrosive fluid handling, batch reactor automation, and ASME B31.3 piping stress analysis.',
      metric: '350+ Reaction Loops',
    },
    {
      id: 2,
      name: 'Drugs &\nPharmaceuticals',
      shortName: 'Pharma Cleanrooms',
      angle: 45,
      icon: Shield,
      desc: '21 CFR Part 11 validated SCADA, sterile cleanroom HVAC cascading, and CIP/SIP automation.',
      metric: '100% US-FDA Audit Pass',
    },
    {
      id: 3,
      name: 'Agro\nChemicals',
      shortName: 'Agrochemicals',
      angle: 90,
      icon: Leaf,
      desc: 'Synthesis plant automation, toxic gas scrubbers, and flameproof IECEx Zone 1 enclosures.',
      metric: 'Zero Emission Incidents',
    },
    {
      id: 4,
      name: 'Automobile\nIndustries',
      shortName: 'Automobile',
      angle: 135,
      icon: Factory,
      desc: 'Intelligent motor control centers (iMCC), Altivar Process drives, and robotic line sync.',
      metric: '320 kVA Peak Demand Drop',
    },
    {
      id: 5,
      name: 'Pesticides\nIndustries',
      shortName: 'Pesticides',
      angle: 180,
      icon: FlaskConical,
      desc: 'High-hazard containment, automated recipe dispensing, and emergency scrubbers.',
      metric: 'SIL-3 ESD Safety Loops',
    },
    {
      id: 6,
      name: 'Common Effluent\nPlants (CETP)',
      shortName: 'CETP & ZLD',
      angle: 225,
      icon: Recycle,
      desc: 'Continuous online CEMS telemetry, zero liquid discharge (ZLD), and automated dosing.',
      metric: '99.8% Effluent Compliance',
    },
    {
      id: 7,
      name: 'Textiles &\nSynthetic Fibers',
      shortName: 'Textiles',
      angle: 270,
      icon: Layers,
      desc: 'Multi-motor synchronized drives, automated dye kitchens, and lint-proof IP66 climate enclosures.',
      metric: '30% Thermal Energy Saved',
    },
    {
      id: 8,
      name: 'Dyes &\nIntermediates',
      shortName: 'Dyes & Intermediates',
      angle: 315,
      icon: Zap,
      desc: 'High-COD effluent treatment, filter press automation, and IEEE 519 active harmonic mitigation.',
      metric: '< 3.2% Total Harmonics',
    },
  ]

  // Expandable Numbered Sector List Data
  const expandableSectors = [
    {
      num: '01',
      title: 'Agrochemicals & Fertilizers',
      desc: 'Comprehensive detailed engineering, flameproof IECEx Zone 1 panel assembly, and dual hot-standby Modicon M580 PAC for hazardous agrochemical synthesis.',
    },
    {
      num: '02',
      title: 'Drugs & Pharmaceuticals',
      desc: 'Sterile cleanroom HVAC differential pressure control, 21 CFR Part 11 compliant SCADA with electronic audit trails, and CIP/SIP cycle validation.',
    },
    {
      num: '03',
      title: 'Petrochemicals & Refineries',
      desc: 'Heavy-duty hydrocarbon process piping, ASME Section VIII pressure vessels, high-fault air circuit breakers, and thermal heat recovery systems.',
    },
    {
      num: '04',
      title: 'Dyes & Specialty Chemical Intermediates',
      desc: 'Corrosion-resistant PP/FRP and SS316L packed bed scrubbers, automated batch reactor sequencing, and online multi-gas CEMS telemetry.',
    },
    {
      num: '05',
      title: 'Textiles & Synthetic Fibers',
      desc: 'Multi-axis variable frequency drive synchronization, automated dye kitchen dispensing, and energy recovery from high-temperature exhaust.',
    },
    {
      num: '06',
      title: 'Common Effluent Treatment Plants (CETPs)',
      desc: 'Turnkey automation for zero liquid discharge (ZLD), multi-effect evaporators, clarifiers, and continuous telemetry to state pollution boards.',
    },
    {
      num: '07',
      title: 'Pesticide & High-Hazard Synthesis',
      desc: 'TÜV Rheinland certified SIL-3 emergency shutdown systems (ESD), toxic gas scrubbing arrays, and automated flameproof interlocks.',
    },
    {
      num: '08',
      title: 'Automobile & Heavy Stamping',
      desc: 'Intelligent motor control centers (iMCC) with Form 4b separation, regenerative drives, and decentralized Profinet I/O islands.',
    },
  ]

  // Core Services Cards (Extended with Phase 1-D Services)
  const coreServices = [
    {
      id: 1,
      slug: 'process-automation',
      tag: 'PROCESS AUTOMATION & SCADA',
      title: 'Turnkey DCS, PLC & Process SCADA Engineering',
      desc: 'Complete engineering of fault-tolerant PLC architectures, distributed I/O, Wonderware/Ignition SCADA, ISA S-88 batch automation, and hazardous area instrumentation.',
      image: '/images/control-room.jpg',
      specs: ['ControlLogix & Modicon M580', 'ISA S-88 Solvent Plant Batch', 'Flameproof & Zener Barriers'],
    },
    {
      id: 2,
      slug: 'electrical-panels',
      tag: 'ELECTRICAL PANELS & SWITCHGEAR',
      title: 'Custom PCC, MCC, IMCC, AMF & 11kV/33kV VCB Switchgear',
      desc: 'Form 4b separated low-voltage switchboards, intelligent motor control centers, 9-tank pre-treatment, and full routine factory testing at our Murad Nagar works.',
      image: '/images/hero-plant.jpg',
      specs: ['PCC / MCC up to 6300A', '11kV / 33kV VCB up to 40kA', '9-Tank Chemical Pre-Treatment'],
    },
    {
      id: 3,
      slug: 'solar-epc',
      tag: 'SOLAR EPC & RENEWABLES',
      title: 'Turnkey MW-Scale Solar EPC & Industrial Rooftops',
      desc: 'Solar cell/wafer line setup through partners, megawatt-scale on/off-grid solar parks, commercial rooftops, and EV charging station infrastructure.',
      image: '/images/hero-plant.jpg',
      specs: ['MW-Scale Solar Parks', 'Industrial Captive Rooftops', 'EV Fleet Fast Charging'],
    },
    {
      id: 4,
      slug: 'mes-mis-iiot',
      tag: 'MES, MIS & ENTERPRISE IIOT',
      title: 'Enterprise MES, MIS & SAP/Oracle Integrations',
      desc: 'Bridging shop floor automation with corporate IT via Wonderware Historian, OPC UA/DA architectures, Geo SCADA telemetry, and real-time BI dashboards.',
      image: '/images/control-room.jpg',
      specs: ['SAP / Oracle Direct Integrator', 'Wonderware System Platform', 'Geo SCADA & Telemetry'],
    },
    {
      id: 5,
      slug: 'epcm',
      tag: 'EPCM & TURNKEY EXECUTION',
      title: 'End-to-End EPCM Project Management',
      desc: 'Comprehensive lifecycle management from concept and FEED through procurement bid analysis, construction CMS, and trial-run handover.',
      image: '/images/process-piping.jpg',
      specs: ['FEED & Detailed Engineering', 'Vendor TBA & Expediting', 'ITP & Site Supervision'],
    },
    {
      id: 6,
      slug: 'pmc',
      tag: 'PROJECT MANAGEMENT CONSULTANCY',
      title: 'PMC Project Governance & Cost Control',
      desc: 'Multi-tier project scheduling (MSP/Primavera P6), daily/weekly progress telemetry, BOQ estimation, and rigorous cost variation control.',
      image: '/images/control-room.jpg',
      specs: ['Primavera P6 Scheduling', 'BOQ & Contract Governance', 'Zero-Incident Safety Audits'],
    },
  ]

  // ROI Calculator Calculations
  const calcResults = useMemo(() => {
    const kVA = Number(calcLoadKVA) || 1000
    const oldPF = Number(calcCurrentPF) || 0.8
    const newPF = Number(calcTargetPF) || 0.99
    const tariff = Number(calcTariffPerKWh) || 8.5
    const hours = Number(calcRunningHours) || 7200

    const currentKW = kVA * oldPF
    const newKVA = currentKW / newPF
    const demandReductionKVA = Math.max(0, kVA - newKVA)

    const annualDemandSavings = demandReductionKVA * 450 * 12
    const energyLossReductionKWh = currentKW * 0.045 * hours
    const annualEnergySavings = energyLossReductionKWh * tariff
    const totalAnnualSavingsINR = annualDemandSavings + annualEnergySavings
    const totalSavingsLakhs = (totalAnnualSavingsINR / 100000).toFixed(2)

    const co2SavedTons = ((energyLossReductionKWh * 0.82) / 1000).toFixed(1)
    const paybackMonths = (Math.max(6, Math.min(24, 18 - (kVA / 1000) * 1.5))).toFixed(1)

    return {
      demandReductionKVA: Math.round(demandReductionKVA),
      totalSavingsLakhs,
      co2SavedTons,
      paybackMonths,
    }
  }, [calcLoadKVA, calcCurrentPF, calcTargetPF, calcTariffPerKWh, calcRunningHours])

  // Auto rotate orbital selector
  useEffect(() => {
    if (isOrbitalPaused) return
    const timer = setInterval(() => {
      setActiveOrbitalIdx((prev) => (prev + 1) % orbitalSectors.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isOrbitalPaused, orbitalSectors.length])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        serviceInterest: 'Turnkey Process Automation & SCADA',
        projectScope: 'New Greenfield Installation',
        message: '',
      })
    }, 5000)
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO — CINEMATIC FULLSCREEN HERO (WHITE & LIGHT BLUE GRADIENTS) */}
      {/* ========================================================================= */}
      <section className="relative w-full flex flex-col justify-end overflow-hidden bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white py-8 sm:py-14 md:py-20 lg:py-0 lg:min-h-screen">
        
        {/* Background Blueprint Grid Vector Overlay (Hidden on small mobile for performance) */}
        <div className="hidden sm:block">
          <TechnicalBlueprintGridSVG />
        </div>

        {/* Cinematic Video Background with Poster Fallback */}
        <div className="absolute inset-0 z-0 origin-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-plant.jpg"
            className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.15]"
          >
            <source src="https://cdn.coverr.co/videos/coverr-robotic-arm-in-factory-4415/1080p.mp4" type="video/mp4" />
            <img src="/images/hero-plant.jpg" alt="Industrial Manufacturing" className="w-full h-full object-cover" loading="lazy" />
          </video>
          
          {/* Luminous White & Light Blue / Navy Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B79] via-[#001B79]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001B79]/90 via-[#0284C7]/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 pb-4 sm:pb-14 md:pb-20 lg:px-16 pt-4 sm:pt-10 lg:pt-[18vh] flex flex-col justify-end">
          <div className="max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-end">
            
            {/* Monospace Eyebrow with Pulse Dot — 1 Line on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse shrink-0" />
                <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.15em] uppercase text-sky-200 font-bold truncate">
                 Turnkey EPCM &amp; Automation
                </span>
              </div>
            </motion.div>

            {/* Editorial Headline with Fluid Clamp on Mobile, Preserved Huge Size on Desktop */}
            <div className="mb-6 sm:mb-10 max-w-6xl">
              <h1 className="text-[2rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] lg:leading-[0.9] font-black tracking-tight text-white drop-shadow-sm">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="block overflow-hidden"
                >
                  ENGINEERED TO
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block overflow-hidden pt-0.5 lg:pt-1"
                >
                  TRANSFORM<span className="text-[#38BDF8]">.</span> WE EMPOWER
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block overflow-hidden pt-0.5 lg:pt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#BAE6FD] via-[#E0F2FE] to-white"
                >
                  CONTINUOUS INDUSTRY<span className="text-[#38BDF8]">.</span>
                </motion.span>
              </h1>
            </div>

            {/* Paragraph & Full-Width Stacked CTAs in Mobile Thumb Zone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 w-full border-t border-sky-300/30 pt-6 sm:pt-8"
            >
              <p className="max-w-xl text-xs sm:text-base md:text-lg text-sky-100 leading-relaxed font-normal">
                SIF Systems (SIF-EPX Group) delivers turnkey chemical process equipment, type-tested IEC 61439 switchboards, SCADA automation, and industrial air emissions scrubbers designed to maximize productivity and regulatory compliance across India.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection('epcm-pipeline')}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#1E3AAE] to-[#0284C7] text-xs sm:text-sm font-bold tracking-wider uppercase text-white shadow-lg active:scale-95 transition-all touch-target-min"
                >
                  <span>Explore EPCM Lifecycle</span>
                  <span className="flex size-7 sm:size-9 items-center justify-center rounded-full bg-white/20">
                    <ArrowUpRight className="size-4" />
                  </span>
                </button>

                <span className="hidden sm:block text-sky-300/40">|</span>

                <button
                  onClick={() => scrollToSection('pid-simulator')}
                  className="w-full sm:w-auto text-center py-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-sky-200 hover:text-white transition-colors underline underline-offset-4 touch-target-min"
                >
                  Interactive P&amp;ID Simulator
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Vertical Rotating Scroll Indicator */}
        <div className="absolute bottom-6 left-6 lg:left-16 z-10 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-sky-200 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-sky-200/30 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#38BDF8]"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 3. ABOUT & INTERACTIVE ROTATING ORBITAL SECTOR WHEEL (WHITE & LIGHT BLUE) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] py-10 sm:py-16 md:py-28 relative overflow-hidden border-b border-sky-200/80">
        
        {/* Subtle Ambient Light Blue Radial Glow */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3)_0%,transparent_70%)] blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Narrative & Action (Text first on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6"
            >
              <div className="inline-flex items-center space-x-2 w-max px-3 py-1 rounded-full bg-sky-100 border border-sky-300">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#001B79]">
                  ABOUT SIF-EPX GROUP
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] leading-tight">
                Providing Solutions for Industrial Process Plants as per ISO &amp; CPCB Guidelines across India.
              </h2>

              <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
                International engineering excellence tailored for continuous chemical synthesis, sterile pharmaceutical formulations, and heavy discrete manufacturing. We design, fabricate, automate, and commission complete process plants with single-point accountability.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-xl sm:rounded-full bg-gradient-to-r from-[#001B79] via-[#00229C] to-[#0284C7] hover:opacity-95 text-white font-semibold text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-all shadow-md active:scale-95 text-center touch-target-min"
                >
                  <span>Read Group Story</span>
                </Link>

                <button
                  onClick={() => scrollToSection('contact-consultation')}
                  className="inline-flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#001B79] hover:text-[#0284C7] transition-colors py-2 touch-target-min"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Centered Orbital Sector Wheel (max-w 280px on mobile) */}
            <div
              className="lg:col-span-6 flex justify-center items-center relative py-6 sm:py-12"
              onMouseEnter={() => setIsOrbitalPaused(true)}
              onMouseLeave={() => setIsOrbitalPaused(false)}
            >
              {/* Outer Glow */}
              <div className="absolute inset-[30px] sm:inset-[60px] md:inset-[80px] rounded-full bg-sky-200/50 blur-3xl pointer-events-none" />

              {/* Main Orbital Container — Scaled down cleanly on mobile with exact orbital radius token */}
              <div
                className="relative w-[270px] h-[270px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-full flex items-center justify-center origin-center [--orbit-radius:100px] sm:[--orbit-radius:155px] md:[--orbit-radius:180px]"
              >
                
                {/* Outer Dashed Orbit Ring */}
                <div className="absolute inset-[15px] sm:inset-[30px] rounded-full border border-sky-400 border-dashed pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
                
                {/* Middle Gradient Ring */}
                <div className="absolute inset-[40px] sm:inset-[70px] rounded-full border border-sky-300 bg-gradient-to-br from-white/80 via-sky-100/50 to-blue-50/60 pointer-events-none shadow-inner" />

                {/* Center Brand Logo Hub */}
                <div className="absolute z-30 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-white shadow-xl border-2 sm:border-4 border-sky-200 flex flex-col items-center justify-center p-2 sm:p-3 text-center">
                  <img
                    src="/images/logo_tight.png"
                    alt="SIF Systems - EPX Group"
                    className="w-16 sm:w-24 md:w-28 h-auto max-h-10 sm:max-h-14 md:max-h-16 object-contain"
                  />
                  <div className="text-[10px] sm:text-[12px] font-bold text-[#001B79] mt-1 font-mono tracking-tight">SIF SYSTEMS</div>
                  <div className="text-[8px] sm:text-[10px] text-slate-500 font-mono uppercase tracking-wider font-semibold">25+ Yrs</div>
                </div>

                {/* 8 Radial Orbital Satellite Nodes */}
                {orbitalSectors.map((sector, sIdx) => {
                  const Icon = sector.icon
                  const isCurrent = activeOrbitalIdx === sIdx
                  const rad = (sector.angle * Math.PI) / 180
                  // Cos and Sin for unit circle
                  const cosVal = Math.cos(rad)
                  const sinVal = Math.sin(rad)

                  return (
                    <div
                      key={sector.id}
                      onClick={() => setActiveOrbitalIdx(sIdx)}
                      className="absolute z-40 cursor-pointer -translate-x-1/2 -translate-y-1/2 touch-target-min flex items-center justify-center"
                      style={{
                        left: `calc(50% + calc(${cosVal.toFixed(4)} * var(--orbit-radius, 102px)))`,
                        top: `calc(50% + calc(${sinVal.toFixed(4)} * var(--orbit-radius, 102px)))`,
                      }}
                    >
                      <motion.div
                        className="relative group flex flex-col items-center"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      >
                        {/* Circle Pod */}
                        <div
                          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center shadow-md ${
                            isCurrent
                              ? 'bg-gradient-to-br from-[#001B79] to-[#0284C7] border-sky-300 text-white scale-110 shadow-sky-400/50 ring-2 ring-sky-300'
                              : 'bg-white border-sky-300 text-[#001B79] hover:bg-sky-50'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                        </div>

                        {/* Floating Label (Hidden on small mobile to avoid clutter, visible on sm+) */}
                        <div className="hidden sm:block absolute top-full mt-1.5 left-1/2 -translate-x-1/2 w-max text-center pointer-events-none">
                          <span className={`text-[10px] sm:text-[11px] font-semibold whitespace-pre-line leading-tight px-2 py-0.5 rounded-full shadow-xs border ${
                            isCurrent ? 'bg-[#001B79] text-white border-sky-400 font-bold' : 'text-[#001B79] bg-white border-sky-200'
                          }`}>
                            {sector.shortName}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  )
                })}

              </div>

            </div>

          </div>

          {/* Active Sector Summary: Compact Mobile Card / Full Desktop Strip */}
          <div className="mt-6 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-white border border-sky-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse shrink-0" />
              <span className="text-slate-500 font-mono uppercase font-bold text-[10px]">SELECTED:</span>
              <strong className="text-[#001B79] text-sm font-bold font-sans">
                {orbitalSectors[activeOrbitalIdx].name.replace('\n', ' ')}
              </strong>
            </div>

            <p className="text-slate-600 font-sans text-xs leading-relaxed max-w-lg">
              {orbitalSectors[activeOrbitalIdx].desc}
            </p>

            <div className="self-start md:self-auto px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-300 text-[#001B79] font-mono font-bold text-[11px]">
              {orbitalSectors[activeOrbitalIdx].metric}
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. UNIQUE BESPOKE COMPONENT: INTERACTIVE P&ID SIMULATOR (WHITE & LIGHT BLUE) */}
      {/* ========================================================================= */}
      <section id="pid-simulator" className="py-20 sm:py-28 bg-gradient-to-b from-[#E0F2FE]/60 via-white to-[#F0F9FF] relative overflow-hidden border-b border-sky-200">
        <TechnicalBlueprintGridSVG isLightMode={true} />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <InteractiveProcessPlantFlowSVG />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 5-STAGE EPCM PIPELINE INTERACTIVE STEPPER (WHITE & LIGHT BLUE) */}
      {/* ========================================================================= */}
      <section id="epcm-pipeline" className="py-24 sm:py-32 bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] relative overflow-hidden border-b border-sky-200">
        <TechnicalBlueprintGridSVG isLightMode={true} />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-3">
                INTEGRATED EPCM METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
                Our 5-Stage Project Execution Pipeline
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              Standardized engineering lifecycle ensuring 100% statutory clearance, zero-clash 3D BIM modeling, and commercial handover.
            </p>
          </motion.div>

          {/* Mobile Stepper: Dropdown selector with progress bar (<lg) */}
          <div className="lg:hidden mb-6 space-y-3 relative z-20">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#001B79]">STAGE {pipelineSteps[activePipelineStep].step} OF 05</span>
              <span className="text-[#0284C7] font-semibold">{Math.round(((activePipelineStep + 1) / 5) * 100)}% COMPLETE</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-sky-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#001B79] to-[#0284C7] transition-all duration-300"
                style={{ width: `${((activePipelineStep + 1) / 5) * 100}%` }}
              />
            </div>

            {/* Mobile Stage Dropdown Selector */}
            <div className="relative">
              <label htmlFor="pipeline-stage-mobile-select" className="sr-only">
                Select Project Execution Stage
              </label>

              <button
                id="pipeline-stage-mobile-select"
                type="button"
                onClick={() => setIsPipelineDropdownOpen(!isPipelineDropdownOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-sky-300 bg-gradient-to-r from-sky-50/90 to-white text-slate-900 shadow-sm text-xs font-mono font-bold cursor-pointer min-h-[44px]"
                aria-haspopup="listbox"
                aria-expanded={isPipelineDropdownOpen}
              >
                <div className="flex items-center space-x-2.5 min-w-0">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#001B79] text-white shrink-0">
                    {pipelineSteps[activePipelineStep].step}
                  </span>
                  {(() => {
                    const CurrentIcon = pipelineSteps[activePipelineStep].icon
                    return <CurrentIcon className="w-4 h-4 text-[#0284C7] shrink-0" />
                  })()}
                  <span className="truncate">{pipelineSteps[activePipelineStep].title}</span>
                </div>

                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isPipelineDropdownOpen ? 'rotate-180 text-[#001B79]' : ''}`} />
              </button>

              {isPipelineDropdownOpen && (
                <div
                  role="listbox"
                  aria-label="Project Execution Stages"
                  className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-sky-200 rounded-xl shadow-xl z-30 py-1.5 max-h-64 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-1"
                >
                  {pipelineSteps.map((step, idx) => {
                    const isSelected = activePipelineStep === idx
                    const StepIcon = step.icon

                    return (
                      <button
                        key={step.step}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setActivePipelineStep(idx)
                          setIsPipelineDropdownOpen(false)
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-mono font-bold text-left cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-[#001B79] text-white'
                            : 'text-slate-700 hover:bg-sky-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'
                          }`}>
                            {step.step}
                          </span>
                          <StepIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-sky-300' : 'text-[#0284C7]'}`} />
                          <span className="truncate">{step.title}</span>
                        </div>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'
                        }`}>
                          {step.phase}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Stepper Navigation Pills (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3 mb-10">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon
              const isSelected = activePipelineStep === idx
              return (
                <button
                  key={step.step}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#001B79] via-[#00229C] to-[#0284C7] border-sky-400 shadow-xl shadow-sky-200 text-white ring-2 ring-sky-300'
                      : 'bg-white border-sky-200 hover:bg-sky-50 text-slate-700 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-sky-200' : 'text-slate-500'}`}>
                      {step.phase}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#0284C7]'}`} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#001B79]'}`}>{step.title}</h4>
                    <span className={`text-[10px] block font-mono mt-0.5 ${isSelected ? 'text-sky-200' : 'text-slate-500'}`}>{step.subtitle}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Phase Detailed Inspection Console */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePipelineStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-white via-sky-50/50 to-[#E0F2FE]/60 border border-sky-200/90 p-8 sm:p-12 shadow-xl shadow-sky-100/50 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono text-[#001B79] font-bold">
                      <span>STAGE {pipelineSteps[activePipelineStep].step} SPECIFICATIONS</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">
                      {pipelineSteps[activePipelineStep].title} — {pipelineSteps[activePipelineStep].subtitle}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {pipelineSteps[activePipelineStep].desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                      PRIMARY DELIVERABLES
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                      {pipelineSteps[activePipelineStep].deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center space-x-2 shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                          <span className="font-medium">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Tools & KPI Box */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-white border border-sky-200 space-y-4 font-mono text-xs shadow-md shadow-sky-100/50">
                    <div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">SOFTWARE TOOLS UTILIZED</span>
                      <div className="flex flex-wrap gap-2 pt-1.5">
                        {pipelineSteps[activePipelineStep].tools.map((t, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white font-bold shadow-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-sky-100">
                      <span className="text-slate-500 text-[10px] uppercase font-bold block">STAGE SIGN-OFF KPI</span>
                      <div className="text-base font-bold text-[#001B79] pt-1">
                        {pipelineSteps[activePipelineStep].kpi}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-sky-50 to-blue-100/60 border border-sky-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-700 font-bold">ISO 9001:2015 AUDITED QAP</span>
                    <button
                      onClick={() => scrollToSection('contact-consultation')}
                      className="text-[#001B79] hover:text-[#0284C7] font-black uppercase"
                    >
                      REQUEST STAGE SCOPE &gt;
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. UNIQUE BESPOKE COMPONENT: INDIA INDUSTRIAL CORRIDORS RADAR MAP (LIGHT) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#E0F2FE]/60 via-white to-[#F0F9FF] text-slate-900 border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <IndiaIndustrialCorridorsRadarMap />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. UNIQUE COMPONENT: LIVE INDUSTRIAL ENERGY & HARMONIC ROI CALCULATOR (LIGHT BLUE) */}
      {/* ========================================================================= */}
     

      {/* ========================================================================= */}
      {/* 7. UNIQUE COMPONENT: MODULAR IEC 61439 SWITCHBOARD CONFIGURATOR (LIGHT BLUE) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-3">
                PANEL BUILDING MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
                Modular IEC 61439 Panel Configurator
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed font-normal">
              Select technical parameters for your power control center (PCC) or motor control center (iMCC) to generate a standardized bill of specification.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-[#E0F2FE]/60 border border-sky-200/90 p-6 sm:p-12 shadow-xl shadow-sky-100/50 text-slate-900">
            
            {/* Mobile Step-by-Step Wizard (<lg) */}
            <div className="lg:hidden space-y-5">
              {/* Step indicator header */}
              <div className="flex items-center justify-between pb-3 border-b border-sky-200 text-xs font-mono">
                <span className="font-bold text-[#001B79]">
                  STEP {configStep + 1} OF 5: {['ENCLOSURE', 'CIRCUIT BREAKER', 'FORM SEGREGATION', 'COPPER BUSBAR', 'INGRESS PROTECTION'][configStep]}
                </span>
                <span className="text-[#0284C7] font-semibold">{((configStep + 1) * 20)}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-sky-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#001B79] to-[#0284C7] transition-all duration-300"
                  style={{ width: `${(configStep + 1) * 20}%` }}
                />
              </div>

              {/* Step pill navigation */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
                {['1. Enclosure', '2. Breaker', '3. Form', '4. Busbar', '5. Ingress'].map((stTitle, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setConfigStep(sIdx)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold whitespace-nowrap transition-all ${
                      configStep === sIdx
                        ? 'bg-[#001B79] text-white shadow-xs'
                        : 'bg-white/80 text-slate-600 border border-sky-200'
                    }`}
                  >
                    {stTitle}
                  </button>
                ))}
              </div>

              {/* Active Step Choices */}
              <div className="pt-2">
                {configStep === 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-600 block">Select Enclosure Suite:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {['VX25 Baying', 'AX Compact', 'SS316L Hygienic'].map((enc) => (
                        <button
                          key={enc}
                          onClick={() => { setConfigEnclosure(enc); setConfigStep(1) }}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition-all ${
                            configEnclosure === enc
                              ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md ring-2 ring-sky-300'
                              : 'bg-white text-slate-700 border border-sky-200'
                          }`}
                        >
                          <span>{enc}</span>
                          {configEnclosure === enc && <CheckCircle2 className="w-4 h-4 text-sky-200" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {configStep === 1 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-600 block">Select Main ACB / MCCB:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {['Masterpact MTZ', 'Sentron 3VA', 'ABB Emax 2'].map((bkr) => (
                        <button
                          key={bkr}
                          onClick={() => { setConfigBreaker(bkr); setConfigStep(2) }}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition-all ${
                            configBreaker === bkr
                              ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md ring-2 ring-sky-300'
                              : 'bg-white text-slate-700 border border-sky-200'
                          }`}
                        >
                          <span>{bkr}</span>
                          {configBreaker === bkr && <CheckCircle2 className="w-4 h-4 text-sky-200" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {configStep === 2 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-600 block">Select Form Separation:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {['Form 2b', 'Form 3b', 'Form 4b'].map((frm) => (
                        <button
                          key={frm}
                          onClick={() => { setConfigForm(frm); setConfigStep(3) }}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition-all ${
                            configForm === frm
                              ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md ring-2 ring-sky-300'
                              : 'bg-white text-slate-700 border border-sky-200'
                          }`}
                        >
                          <span>{frm}</span>
                          {configForm === frm && <CheckCircle2 className="w-4 h-4 text-sky-200" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {configStep === 3 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-600 block">Select Copper Busbar Rating:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {['1600A Cu', '3200A Cu', '6300A Cu'].map((bus) => (
                        <button
                          key={bus}
                          onClick={() => { setConfigBusbar(bus); setConfigStep(4) }}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition-all ${
                            configBusbar === bus
                              ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md ring-2 ring-sky-300'
                              : 'bg-white text-slate-700 border border-sky-200'
                          }`}
                        >
                          <span>{bus}</span>
                          {configBusbar === bus && <CheckCircle2 className="w-4 h-4 text-sky-200" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {configStep === 4 && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-slate-600 block">Select Ingress Rating:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {['IP54 Indoor', 'IP55 Dust-Proof', 'IP66 Washdown'].map((ing) => (
                        <button
                          key={ing}
                          onClick={() => setConfigIngress(ing)}
                          className={`w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition-all ${
                            configIngress === ing
                              ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md ring-2 ring-sky-300'
                              : 'bg-white text-slate-700 border border-sky-200'
                          }`}
                        >
                          <span>{ing}</span>
                          {configIngress === ing && <CheckCircle2 className="w-4 h-4 text-sky-200" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Step Prev / Next Buttons */}
              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  disabled={configStep === 0}
                  onClick={() => setConfigStep(Math.max(0, configStep - 1))}
                  className="px-4 py-2 rounded-xl border border-sky-300 text-xs font-mono font-bold text-slate-700 disabled:opacity-40"
                >
                  ← Prev Step
                </button>
                <button
                  type="button"
                  disabled={configStep === 4}
                  onClick={() => setConfigStep(Math.min(4, configStep + 1))}
                  className="px-4 py-2 rounded-xl bg-[#001B79] text-white text-xs font-mono font-bold disabled:opacity-40"
                >
                  Next Step →
                </button>
              </div>

              {/* Mobile Selected Summary Box */}
              <div className="p-4 rounded-2xl bg-white border border-sky-200 space-y-2 font-mono text-xs shadow-md">
                <div className="text-[10px] font-bold text-[#0369A1] flex items-center space-x-1">
                  <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>SELECTED CONFIGURATION:</span>
                </div>
                <div className="text-xs font-bold text-[#001B79] leading-snug">
                  {configEnclosure} • {configBreaker} • {configForm} • {configBusbar} • {configIngress}
                </div>
                <button
                  onClick={() => scrollToSection('contact-consultation')}
                  className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#001B79] via-[#00229C] to-[#0284C7] text-white font-black text-xs uppercase tracking-wider shadow-md"
                >
                  GET INSTANT QUOTE FOR THIS BOM
                </button>
              </div>
            </div>

            {/* Desktop 5-Column Grid (lg and up) */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-6">
              
              {/* Option 1: Enclosure Platform */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-[#001B79] uppercase">
                  1. ENCLOSURE SUITE
                </label>
                <div className="space-y-1.5">
                  {['VX25 Baying', 'AX Compact', 'SS316L Hygienic'].map((enc) => (
                    <button
                      key={enc}
                      onClick={() => setConfigEnclosure(enc)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-left transition-all ${
                        configEnclosure === enc
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {enc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Main Circuit Breaker */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-[#001B79] uppercase">
                  2. MAIN ACB / MCCB
                </label>
                <div className="space-y-1.5">
                  {['Masterpact MTZ', 'Sentron 3VA', 'ABB Emax 2'].map((bkr) => (
                    <button
                      key={bkr}
                      onClick={() => setConfigBreaker(bkr)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-left transition-all ${
                        configBreaker === bkr
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {bkr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Form Segregation */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-[#001B79] uppercase">
                  3. FORM SEPARATION
                </label>
                <div className="space-y-1.5">
                  {['Form 2b', 'Form 3b', 'Form 4b'].map((frm) => (
                    <button
                      key={frm}
                      onClick={() => setConfigForm(frm)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-left transition-all ${
                        configForm === frm
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {frm}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Busbar Rating */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-[#001B79] uppercase">
                  4. COPPER BUSBAR
                </label>
                <div className="space-y-1.5">
                  {['1600A Cu', '3200A Cu', '6300A Cu'].map((bus) => (
                    <button
                      key={bus}
                      onClick={() => setConfigBusbar(bus)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-left transition-all ${
                        configBusbar === bus
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {bus}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 5: Ingress Rating */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-[#001B79] uppercase">
                  5. INGRESS RATING
                </label>
                <div className="space-y-1.5">
                  {['IP54 Indoor', 'IP55 Dust-Proof', 'IP66 Washdown'].map((ing) => (
                    <button
                      key={ing}
                      onClick={() => setConfigIngress(ing)}
                      className={`w-full py-2.5 px-3 rounded-xl text-xs font-mono font-bold text-left transition-all ${
                        configIngress === ing
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-md font-black ring-2 ring-sky-300'
                          : 'bg-white text-slate-700 hover:bg-sky-50 border border-sky-200'
                      }`}
                    >
                      {ing}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Desktop Generated Specification Preview Console */}
           
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. UNIQUE COMPONENT: HAZARDOUS AREA & CLEANROOM CLASSIFICATION MATRIX */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-[#F0F9FF] to-[#E0F2FE]/60 border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <HazardousAreaAndCleanroomMatrix />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHAT WE DO — 2-COLUMN INDUSTRIAL SHOWCASE (WHITE & LIGHT BLUE) */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] text-slate-900 py-10 md:py-20 lg:py-32 border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Mobile Layout (<lg): Image on top (16:10), text below with read more */}
          <div className="lg:hidden space-y-6">
            {/* Image (16:10 aspect ratio) */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-sky-200 bg-slate-900">
              <img
                src="/images/process-piping.jpg"
                alt="Continuous Chemical Facility Installation"
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B79]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-[#001B79] text-white font-mono text-[9px] font-bold uppercase">
                  ISO 9001:2015 AUDITED
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Chemical Process &amp; Heavy Piping Infrastructure
                </h4>
                <p className="text-[11px] text-sky-100">
                  Dahej Chemical Zone • Turnkey EPC Execution
                </p>
              </div>
            </div>

            {/* Narrative with line clamp toggle */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#001B79] uppercase px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
                WHAT WE DO
              </span>
              <h2 className="text-2xl font-black text-[#001B79] leading-tight">
                Turning complex process engineering into reliable, continuous plant performance.
              </h2>

              <div className="text-slate-700 text-sm leading-relaxed space-y-3">
                <p>
                  SIF Systems provides comprehensive turnkey process engineering, IEC 61439 panel assembly, and automated SCADA solutions as per Central and State Pollution Control Board guidelines across India.
                </p>
                {showFullWhatWeDo ? (
                  <>
                    <p>
                      For over two decades, we have partnered with major chemical, pharmaceutical, power, and discrete manufacturing sectors to ensure complex industrial infrastructure is delivered on schedule with zero-defect quality.
                    </p>
                    <p>
                      From P&amp;ID generation and CAESAR II piping stress analysis to routine in-house FAT testing and CEIG clearances, we act as an extended engineering arm for our industrial clients.
                    </p>
                  </>
                ) : null}
              </div>

              <button
                type="button"
                onClick={() => setShowFullWhatWeDo(!showFullWhatWeDo)}
                className="text-xs font-mono font-bold text-[#0284C7] flex items-center space-x-1"
              >
                <span>{showFullWhatWeDo ? 'Read Less ▲' : 'Read More ▼'}</span>
              </button>

              <div className="pt-2">
                <Link
                  to="/services"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-200 flex items-center justify-center space-x-2"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Narrative */}
            <div className="flex flex-col items-start lg:pr-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#001B79] uppercase px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
                WHAT WE DO
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79] leading-tight">
                Turning complex process engineering into reliable, continuous plant performance.
              </h2>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  SIF Systems provides comprehensive turnkey process engineering, IEC 61439 panel assembly, and automated SCADA solutions as per Central and State Pollution Control Board guidelines across India.
                </p>
                <p>
                  For over two decades, we have partnered with major chemical, pharmaceutical, power, and discrete manufacturing sectors to ensure complex industrial infrastructure is delivered on schedule with zero-defect quality.
                </p>
                <p>
                  From P&amp;ID generation and CAESAR II piping stress analysis to routine in-house FAT testing and CEIG clearances, we act as an extended engineering arm for our industrial clients.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-200 hover:opacity-95"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Tall Industrial Image */}
            <div className="relative w-full h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-sky-200 bg-slate-900">
              <img
                src="/images/process-piping.jpg"
                alt="Continuous Chemical Facility Installation"
                className="w-full h-full object-cover object-center filter brightness-[0.9]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B79]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-1">
                <span className="px-3 py-1 rounded bg-[#001B79] text-white font-mono text-[10px] font-bold uppercase">
                  ISO 9001:2015 AUDITED
                </span>
                <h4 className="text-2xl font-bold text-white pt-2">
                  Chemical Process &amp; Heavy Piping Infrastructure
                </h4>
                <p className="text-xs text-sky-100">
                  Dahej Chemical Zone • Turnkey EPC Execution
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. INDUSTRIES SERVED — EXPANDABLE NUMBERED GRID (LIGHT BLUE GRADIENTS) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/60 via-white to-[#F0F9FF] text-slate-900 py-20 md:py-28 border-b border-sky-200 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-sky-200 pb-8">
            <div>
              <p className="font-mono text-xs tracking-widest text-[#0284C7] font-bold uppercase mb-2">
                INDUSTRIES SERVED
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
                Sector Applications
              </h2>
            </div>

            <Link
              to="/industries"
              className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#001B79] hover:text-[#0284C7] flex items-center gap-2 transition-colors"
            >
              <span>View All Industries</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Mobile View (<md): Compact Accordion */}
          <div className="md:hidden">
            <MobileAccordionGroup>
              {expandableSectors.map((sector) => (
                <MobileAccordionItem
                  key={sector.num}
                  title={`${sector.num} — ${sector.title}`}
                  defaultOpen={sector.num === '01'}
                >
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {sector.desc}
                  </p>
                </MobileAccordionItem>
              ))}
            </MobileAccordionGroup>
          </div>

          {/* Desktop / Tablet View (md and up): 2-column numbered grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
            {expandableSectors.map((sector) => (
              <div
                key={sector.num}
                className="group cursor-pointer border-b border-sky-200/80 pb-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm tracking-widest text-[#0284C7] mt-1 font-black">
                    {sector.num}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl font-black tracking-tight text-[#001B79]/70 group-hover:text-[#001B79] transition-colors duration-300">
                      {sector.title}
                    </h4>
                    <p className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. CORE SERVICES — HORIZONTAL WIDESCREEN SNAP CAROUSEL */}
      {/* ========================================================================= */}
      <section id="core-services" className="bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] py-24 md:py-32 border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl space-y-3">
              <p className="font-mono text-xs tracking-widest text-[#001B79] uppercase font-bold px-3 py-1 rounded-full bg-sky-100 border border-sky-200 w-max">
                CORE SOLUTIONS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79]">
                Turnkey Engineering Capabilities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal">
                Standardized, ISO 9001:2015 audited delivery methodology ensuring zero downtime and 100% statutory clearance.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('contact-consultation')}
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#001B79] hover:text-[#0284C7] hover:underline shrink-0"
            >
              <span>Download Solutions Catalog</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile View (<lg): Horizontal snap slider with peek */}
          <div className="lg:hidden">
            <MobileSnapSlider
              itemWidth="w-[86vw] max-w-[340px]"
              ariaLabel="Core Engineering Capabilities"
            >
              {coreServices.map((srv) => (
                <div
                  key={srv.id}
                  className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl flex flex-col justify-between h-[380px] border border-sky-200"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover object-center opacity-70"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001B79] via-[#001B79]/80 to-transparent" />
                  </div>

                  {/* Top Badge */}
                  <div className="relative z-10 p-5 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-wider border border-sky-300/40 shadow-sm">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 p-5 space-y-3">
                    <h3 className="text-xl font-black text-white leading-tight">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-sky-100 leading-relaxed font-normal line-clamp-3">
                      {srv.desc}
                    </p>

                    <div className="pt-1 flex flex-col gap-2.5">
                      <div
                        tabIndex={0}
                        role="region"
                        aria-label={`${srv.title} specs`}
                        className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 focus:outline-none focus:ring-1 focus:ring-sky-400 rounded"
                      >
                        {srv.specs.map((spec, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono text-sky-100 border border-white/30 whitespace-nowrap">
                            {spec}
                          </span>
                        ))}
                      </div>
                      {srv.slug && (
                        <Link
                          to="/services/$serviceId"
                          params={{ serviceId: srv.slug }}
                          className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-sky-300 hover:text-white"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </MobileSnapSlider>
          </div>

          {/* Desktop View (lg and up): 4 Large Widescreen Cards Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {coreServices.map((srv) => (
              <motion.div
                key={srv.id}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl flex flex-col justify-between group h-[420px] sm:h-[460px] border border-sky-200"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001B79] via-[#001B79]/75 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-6 sm:p-8 flex justify-between items-center">
                  <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold font-mono uppercase tracking-wider border border-sky-300/40 shadow-sm">
                    {srv.tag}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-200 transition-colors leading-tight">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-xl font-normal">
                    {srv.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {srv.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono text-sky-100 border border-white/30">
                          {spec}
                        </span>
                      ))}
                    </div>
                    {srv.slug && (
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: srv.slug }}
                        className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-sky-300 hover:text-white"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11B. UNIQUE SELLING PROPOSITION (USP) — WHY CHOOSE SIF AS EPCC COMPANY */}
      {/* ========================================================================= */}
      <section className="bg-white py-24 md:py-32 border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="font-mono text-xs tracking-widest text-[#001B79] uppercase font-bold px-3 py-1 rounded-full bg-sky-100 border border-sky-200 w-max mx-auto">
              COMPETITIVE EDGE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001B79]">
              Why Choose SIF as Your EPCC Partner?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              Six core reasons why SIF-EPX Group is the first choice for multinational process and energy corporations.
            </p>
          </div>

          {/* Mobile View (<md): Horizontal Snap Slider */}
          <div className="md:hidden">
            <MobileSnapSlider
              itemWidth="w-[82vw] max-w-[300px]"
              ariaLabel="Why Choose SIF"
            >
              {companyInfo.usp.map((u) => (
                <div
                  key={u.id}
                  className="rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/50 via-white to-white p-6 shadow-xs flex flex-col justify-between h-[280px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#001B79] text-white font-mono font-bold text-xs shadow-md">
                        0{u.id}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full uppercase">
                        USP {u.id}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-1.5 leading-snug">
                      {u.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-4">
                      {u.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-900">
                    <span>SIF-EPX Assured</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              ))}
            </MobileSnapSlider>
          </div>

          {/* Desktop / Tablet View (md and up): 3-column grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {companyInfo.usp.map((u) => (
              <div
                key={u.id}
                className="group rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/50 via-white to-white p-7 sm:p-8 shadow-xs hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#001B79] text-white font-mono font-bold text-sm shadow-md group-hover:bg-[#0284C7] transition-colors">
                      0{u.id}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full uppercase">
                      USP {u.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-950 transition-colors mb-2">
                    {u.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {u.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>SIF-EPX Assured</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

 

    </div>
  )
}
