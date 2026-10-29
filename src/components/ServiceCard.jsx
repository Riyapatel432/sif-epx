import { Link } from '@tanstack/react-router'
import {
  Building2,
  LineChart,
  Cpu,
  Layers,
  Users,
  Zap,
  Sun,
  ArrowRight,
} from 'lucide-react'
import LordIcon from './LordIcon'
import SpotlightCard from './reactbits/SpotlightCard'
import TiltedCard from './reactbits/TiltedCard'

// Curated Lordicon system outline URLs for the 9 Engineering Services
const serviceLordicons = {
  'epcm-detailed-engineering': {
    src: 'https://cdn.lordicon.com/dxjqoygy.json', // building / engineering
    fallback: Building2,
  },
  'process-engineering-instrumentation': {
    src: 'https://cdn.lordicon.com/qhgmphtg.json', // chemistry flask / process
    fallback: LineChart,
  },
  'plc-dcs-scada-automation': {
    src: 'https://cdn.lordicon.com/wloilxuq.json', // automation / tech
    fallback: Cpu,
  },
  'electrical-switchgear-manufacturing': {
    src: 'https://cdn.lordicon.com/rjzlnunf.json', // electric zap
    fallback: Zap,
  },
  'solar-power-epc-solutions': {
    src: 'https://cdn.lordicon.com/qhviklyi.json', // sun / solar
    fallback: Sun,
  },
  'project-management-procurement': {
    src: 'https://cdn.lordicon.com/mrdiiocb.json', // package / procurement
    fallback: Layers,
  },
  'technical-manpower-secondment': {
    src: 'https://cdn.lordicon.com/dxjqoygy.json', // manpower / engineers
    fallback: Users,
  },
  'substation-ht-lt-automation': {
    src: 'https://cdn.lordicon.com/rjzlnunf.json', // lightning / substation
    fallback: Zap,
  },
  'piping-stress-analysis-caesarii': {
    src: 'https://cdn.lordicon.com/lupuorrc.json', // piping / flow
    fallback: Layers,
  },
}

export function ServiceCard({ service }) {
  const iconConfig = serviceLordicons[service.slug] || {
    src: 'https://cdn.lordicon.com/wloilxuq.json',
    fallback: Cpu,
  }
  const FallbackIcon = iconConfig.fallback

  return (
    <TiltedCard maxTilt={4} perspective={900} className="h-full">
      <SpotlightCard
        spotlightColor="rgba(34, 184, 240, 0.22)"
        size={350}
        className="group relative overflow-hidden rounded-[20px] border border-sky-200/90 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between sector-card-corner h-full"
      >
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#031A5D] via-[#023E92] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#031A5D] to-[#1E3AAE] text-white shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shrink-0">
              <LordIcon
                src={iconConfig.src}
                trigger="hover"
                primaryColor="#ffffff"
                secondaryColor="#22B8F0"
                size={28}
                stroke={60}
                fallback={<FallbackIcon className="h-6 w-6 text-white" />}
              />
            </div>
            <span className="font-mono text-[11px] font-bold text-[#031A5D] bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full uppercase">
              {service.slug.toUpperCase()}
            </span>
          </div>

          <h3 className="text-xl font-black text-[#031A5D] group-hover:text-[#004999] transition-colors leading-snug">
            <Link to="/services/$serviceId" params={{ serviceId: service.slug }}>
              {service.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs font-mono font-bold text-[#023E92] uppercase tracking-wide">
            {service.subtitle}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {service.summary}
          </p>

          {/* Sections Preview */}
          {service.sections && (
            <div className="mt-5 space-y-1.5 border-t border-sky-100 pt-4">
              <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Core Scope Highlights:
              </p>
              {service.sections.slice(0, 3).map((sec, idx) => (
                <div key={idx} className="text-xs text-slate-700 flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#1E3AAE] mt-1 shrink-0" />
                  <span className="font-medium text-slate-800 line-clamp-1">{sec.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs font-mono font-bold text-[#1E3AAE] group-hover:text-[#031A5D] transition-colors relative z-10">
          <Link
            to="/services/$serviceId"
            params={{ serviceId: service.slug }}
            className="inline-flex items-center space-x-1.5 min-h-[44px] py-1"
          >
            <span>EXPLORE FULL SCOPE</span>
            <ArrowRight className="h-3.5 w-3.5 card-arrow-shift" />
          </Link>
          <span className="text-[10px] uppercase text-[#12B76A] flex items-center gap-1 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12B76A] animate-pulse" />
            <span>ACTIVE CAPABILITY</span>
          </span>
        </div>
      </SpotlightCard>
    </TiltedCard>
  )
}

export default ServiceCard
