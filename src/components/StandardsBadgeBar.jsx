import { useState } from 'react'
import { qualityStandards } from '../data/standardsData'
import { ShieldCheck, Award, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import LordIcon from './LordIcon'
import SpotlightCard from './reactbits/SpotlightCard'
import { MobileSnapSlider } from './ui/MobileSnapSlider'

const standardLordicons = [
  {
    // ISO 9001:2015
    src: 'https://cdn.lordicon.com/fgxwhgfp.json',
    fallback: Award,
  },
  {
    // IS / BIS
    src: 'https://cdn.lordicon.com/oqdmuxru.json',
    fallback: ShieldCheck,
  },
  {
    // IEC Standards
    src: 'https://cdn.lordicon.com/qhgmphtg.json',
    fallback: Zap,
  },
  {
    // API & ASME
    src: 'https://cdn.lordicon.com/lomfljuq.json',
    fallback: CheckCircle2,
  },
]

export default function StandardsBadgeBar() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <div className="rounded-[20px] bg-white/95 border border-[#1E40D8]/20 p-5 sm:p-7 shadow-lg shadow-[#0B1F6B]/5 relative overflow-hidden backdrop-blur-sm">
      <div className="text-center sm:text-left mb-6">
        <span className="text-[10px] font-mono font-bold text-[#1E40D8] uppercase tracking-wider block mb-1">
          ENGINEERING CODE BENCHMARKS
        </span>
        <h4 className="text-base sm:text-lg font-black text-[#0B1F6B] tracking-tight">
          Built in Strict Accordance with International Standards
        </h4>
      </div>

      {/* Mobile Snap Slider for clean peeking cards below 1024px; Desktop 4-col grid above 1024px */}
      <MobileSnapSlider
        desktopClassName="lg:grid lg:grid-cols-4 lg:gap-5"
        itemWidth="w-[82vw] max-w-[310px]"
        ariaLabel="International Standards"
      >
        {qualityStandards.map((std, idx) => {
          const iconConfig = standardLordicons[idx] || standardLordicons[0]
          const FallbackIcon = iconConfig.fallback
          const isExpanded = expandedIndex === idx

          return (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={300}
              className="p-5 rounded-[16px] border border-sky-200/80 bg-white hover:border-[#1E40D8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between space-y-4 h-full"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] flex items-center justify-center border border-[#22B8F0]/30 group-hover:bg-[#0B1F6B] transition-colors duration-300 shrink-0">
                    <LordIcon
                      src={iconConfig.src}
                      trigger="hover"
                      primaryColor="#1E40D8"
                      secondaryColor="#22B8F0"
                      size={24}
                      stroke={60}
                      fallback={<FallbackIcon className="w-5 h-5 text-[#1E40D8] group-hover:text-white" />}
                    />
                  </div>
                  <span className="font-mono font-black text-sm text-[#0B1F6B] tracking-tight">
                    {std.code}
                  </span>
                </div>
                <div className="h-0.5 w-8 bg-[#22B8F0] rounded-full mb-2.5 group-hover:w-16 transition-all duration-300" />
                <p className="text-xs font-bold text-slate-800 leading-snug">
                  {std.title}
                </p>
              </div>

              <div>
                <p className={`text-[11px] text-slate-600 leading-relaxed font-normal pt-2 border-t border-sky-100 ${
                  isExpanded ? 'block' : 'line-clamp-3 sm:line-clamp-none'
                }`}>
                  {std.description}
                </p>
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="sm:hidden mt-2 text-[10px] font-mono font-bold text-[#1E40D8] hover:underline inline-flex items-center gap-1 cursor-pointer min-h-[32px]"
                >
                  <span>{isExpanded ? 'Show less' : 'Read full text'}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            </SpotlightCard>
          )
        })}
      </MobileSnapSlider>
    </div>
  )
}
