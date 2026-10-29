import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import {
  FlaskConical,
  Pill,
  Package,
  Cog,
  Layers,
  Zap,
  Sun,
  Building,
  Flame,
  Droplets,
  ChevronDown,
  ChevronUp,
  Compass,
  Sparkles,
  Tag
} from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import CTASection from '../components/CTASection'
import LordIcon from '../components/LordIcon'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import { industriesData } from '../data/industriesData'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import TiltedCard from '../components/reactbits/TiltedCard'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/industries')({
  head: () => ({
    meta: [
      {
        title: 'Industrial Sectors & Process Applications | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'Engineering solutions across Chemical & Specialty Polymers, Petrochemicals, Pharmaceuticals, Food & Agro, Power & Energy, and Water Treatment.',
      },
      {
        property: 'og:title',
        content: 'Industrial Sectors & Process Applications | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'Engineering solutions across Chemical & Specialty Polymers, Petrochemicals, Pharmaceuticals, Food & Agro, Power & Energy, and Water Treatment.',
      },
    ],
  }),
  component: IndustriesPage,
})

// Curated Lordicon system outline animation URLs + static fallback icons for all 10 sectors
const sectorVisualMeta = [
  {
    src: 'https://cdn.lordicon.com/qhgmphtg.json', // 01: chemistry flask
    fallback: FlaskConical,
  },
  {
    src: 'https://cdn.lordicon.com/xulniijg.json', // 02: pill / DNA / health
    fallback: Pill,
  },
  {
    src: 'https://cdn.lordicon.com/mrdiiocb.json', // 03: package / box
    fallback: Package,
  },
  {
    src: 'https://cdn.lordicon.com/wloilxuq.json', // 04: gear / automotive
    fallback: Cog,
  },
  {
    src: 'https://cdn.lordicon.com/etwtznjn.json', // 05: factory / mining
    fallback: Layers,
  },
  {
    src: 'https://cdn.lordicon.com/rjzlnunf.json', // 06: lightning / power
    fallback: Zap,
  },
  {
    src: 'https://cdn.lordicon.com/qhviklyi.json', // 07: sun / solar
    fallback: Sun,
  },
  {
    src: 'https://cdn.lordicon.com/dxjqoygy.json', // 08: building / infrastructure
    fallback: Building,
  },
  {
    src: 'https://cdn.lordicon.com/usownftb.json', // 09: flame / fuel / oil
    fallback: Flame,
  },
  {
    src: 'https://cdn.lordicon.com/lupuorrc.json', // 10: water drops / pipe
    fallback: Droplets,
  },
]

// Single unified data-driven structure merging text data with visual/icon/bento layout configuration
const sectorsConfig = industriesData.map((ind, idx) => {
  const meta = sectorVisualMeta[idx] || sectorVisualMeta[0]
  const numInt = idx + 1
  const numStr = String(numInt).padStart(2, '0')

  let bentoClass = 'lg:col-span-6'
  if (idx === 2) bentoClass = 'lg:col-span-7'
  else if (idx === 3) bentoClass = 'lg:col-span-5'
  else if (idx === 4) bentoClass = 'lg:col-span-5'
  else if (idx === 5) bentoClass = 'lg:col-span-7'
  else if (idx === 6) bentoClass = 'lg:col-span-6'
  else if (idx === 7) bentoClass = 'lg:col-span-6'

  return {
    ...ind,
    sectorNum: numStr,
    sectorInt: numInt,
    iconSrc: meta.src,
    FallbackIcon: meta.fallback,
    bentoClass,
  }
})

function IndustriesPage() {
  const [activeSectorId, setActiveSectorId] = useState(sectorsConfig[0]?.id || '')
  // On mobile, keep track of which single accordion card is open (first open by default)
  const [openAccordionId, setOpenAccordionId] = useState(sectorsConfig[0]?.id || '')

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id)
  }

  const scrollToSector = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSectorId(id)
      setOpenAccordionId(id)
    }
  }

  // Scrollspy observer for sticky sector navigator
  useEffect(() => {
    const observers = []
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectorId(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0.1,
    })

    sectorsConfig.forEach((ind) => {
      const el = document.getElementById(ind.id)
      if (el) {
        observer.observe(el)
        observers.push(el)
      }
    })

    return () => {
      observers.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. HERO WITH AURORA WAVES + BLURTEXT                                      */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        <AuroraWaves speed={0.007} />

        {/* Ambient Radial Energy Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(30,64,216,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          
          <div>
            <Breadcrumbs items={[{ label: 'Industries' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            {/* Badges wrap in 2 lines max */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                  INDUSTRIAL DOMAINS
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="Pan-India Execution" speed={4} />
              </span>
            </div>

            {/* Fluid clamp title */}
            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Industries & Process Sectors Served"
                delay={50}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Turnkey multidisciplinary engineering, process SCADA, Form 4b switchgear, and technical manpower across heavy chemical, pharmaceutical, power, and manufacturing sectors.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={sectorsConfig.map((ind) => ({
                id: ind.id,
                label: `${ind.sectorNum}. ${ind.name.split('/')[0].split('(')[0].trim()}`,
              }))}
              activeId={activeSectorId}
              onSelect={(id) => scrollToSector(id)}
              ariaLabel="Industries & sectors quick links"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STANDARDS AS CERTIFICATION RAIL                                        */}
      {/* ========================================================================= */}
      <section className="reveal-fade-in py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STICKY SECTOR FILTER & SCROLLSPY NAVIGATOR                             */}
      {/* ========================================================================= */}
      <nav
        aria-label="Sector Navigator"
        className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-sky-200/80 shadow-xs py-1.5"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Dropdown Sticky Nav (< lg) */}
          <div className="lg:hidden py-0.5">
            <MobileDropdown
              items={sectorsConfig.map((ind) => ({
                id: ind.id,
                label: `${ind.sectorNum}. ${ind.name.split('/')[0].split('(')[0].trim()}`,
                icon: ind.FallbackIcon,
              }))}
              activeId={activeSectorId}
              onSelect={(id) => scrollToSector(id)}
              theme="light"
            />
          </div>

          {/* Desktop Sticky Chip Row (>= lg) */}
          <div className="hidden lg:flex items-center space-x-2 py-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mr-3 shrink-0">
              <Compass className="w-4 h-4 text-[#1E40D8]" />
              <span className="font-bold uppercase tracking-wider text-[#0B1F6B]">Sector Index:</span>
            </div>

            <ChipScroller
              items={sectorsConfig.map((ind) => ({
                id: ind.id,
                label: `${ind.sectorNum} ${ind.name.split('/')[0].split('(')[0].trim().slice(0, 16)}`,
                icon: ind.FallbackIcon,
              }))}
              activeId={activeSectorId}
              onSelect={(id) => scrollToSector(id)}
              itemClassName="min-h-[40px] text-xs"
              activeClassName="bg-[#0B1F6B] text-white shadow-xs"
              inactiveClassName="bg-white text-slate-600 hover:text-[#0B1F6B] hover:bg-sky-50 border-sky-200"
            />
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 4. SECTOR SHOWCASE: ACCORDIONS ON MOBILE (< 1024px), BENTO ON DESKTOP      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-16 bg-sif-sector-grid">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">TARGET DOMAINS</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                Sector-Specific Engineering Expertise
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Every industrial segment is addressed with tailored regulatory clearances, flameproof instrument selection, and process automation architectures.
              </p>
            </div>
          </AnimatedContent>

          {/* =================================================================== */}
          {/* MOBILE VIEW (< 1024px): MobileAccordion cards, first open by default */}
          {/* =================================================================== */}
          <div className="block lg:hidden space-y-3">
            {sectorsConfig.map((ind) => {
              const isOpen = openAccordionId === ind.id
              const Fallback = ind.FallbackIcon

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  className="rounded-2xl border border-sky-200/90 bg-white shadow-2xs overflow-hidden transition-all text-left scroll-mt-16"
                >
                  {/* Collapsed Header: sector number, icon, title, status badge */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(ind.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer min-h-[52px] hover:bg-sky-50/60 transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <LordIcon
                          src={ind.iconSrc}
                          trigger="hover"
                          primaryColor="#ffffff"
                          secondaryColor="#22B8F0"
                          size={22}
                          stroke={60}
                          fallback={<Fallback className="w-5 h-5 text-white" />}
                        />
                      </div>
                      <div className="min-w-0 pr-1">
                        <span className="text-[10px] font-mono font-bold text-[#1E40D8] block">
                          SECTOR {ind.sectorNum}
                        </span>
                        <h3 className="font-bold text-sm text-[#0B1F6B] truncate leading-tight">
                          {ind.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[9px] font-bold border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>ACTIVE</span>
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${
                          isOpen ? 'bg-[#0B1F6B] text-white rotate-180' : 'bg-sky-100 text-[#0B1F6B]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content: description + key application tags (full wrapping) + Active corridor badge */}
                  {isOpen && (
                    <div className="p-4 pt-2 text-xs text-slate-700 leading-relaxed border-t border-sky-100 bg-sky-50/30 space-y-4">
                      <p className="text-slate-700 leading-relaxed font-normal">
                        {ind.overview}
                      </p>

                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-[#1E40D8]" />
                          <span>Key Applications &amp; Focus Segments:</span>
                        </span>
                        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                          {ind.applications.map((app, i) => (
                            <li
                              key={i}
                              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[10px] bg-white border border-sky-200 text-slate-800 text-[11px] font-semibold"
                            >
                              <span className="w-1.5 h-1.5 rotate-45 bg-[#1E40D8]" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-sky-200/80 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-500 font-medium">ENGINEERING STATUS:</span>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>ACTIVE CORRIDOR</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* =================================================================== */}
          {/* DESKTOP VIEW (>= 1024px): Original Bento Grid Layout                */}
          {/* =================================================================== */}
          <div className="hidden lg:block space-y-8">
            {/* ROW 1: SECTORS 01 & 02 */}
            <div className="grid grid-cols-2 gap-8 items-stretch">
              {sectorsConfig.slice(0, 2).map((ind, idx) => {
                const Fallback = ind.FallbackIcon
                return (
                  <motion.div
                    key={ind.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                    transition={{ duration: 0.7, delay: (idx % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    <TiltedCard maxTilt={4} perspective={900} className="h-full">
                      <SpotlightCard
                        spotlightColor="rgba(34, 184, 240, 0.22)"
                        size={380}
                        id={ind.id}
                        className="scroll-mt-20 group relative overflow-hidden rounded-[20px] border border-sky-200/90 bg-white p-7 sm:p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between sector-card-corner h-full text-left"
                      >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />
                      
                      {/* Watermark numbers: kept small and positioned out of text flow */}
                      <div className="absolute right-5 top-5 font-mono font-black text-6xl text-sky-100/50 select-none pointer-events-none group-hover:text-sky-200/60 transition-colors">
                        <CountUp to={ind.sectorInt} padZero={true} duration={0.9} />
                      </div>

                      <div className="relative z-10 space-y-5">
                        <div className="flex items-start space-x-4">
                          <div className="p-3.5 rounded-[12px] bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shrink-0">
                            <LordIcon
                              src={ind.iconSrc}
                              trigger="hover"
                              primaryColor="#ffffff"
                              secondaryColor="#22B8F0"
                              size={32}
                              stroke={60}
                              fallback={<Fallback className="w-8 h-8 text-white" />}
                            />
                          </div>
                          <div className="min-w-0 pr-12">
                            <span className="text-[11px] font-mono font-bold text-[#1E40D8] uppercase tracking-wider block">
                              SECTOR {ind.sectorNum} // PROCESS DOMAIN
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-[#0B1F6B] leading-snug">
                              {ind.name}
                            </h3>
                          </div>
                        </div>

                        <div className="text-sm text-slate-700 leading-relaxed font-normal">
                          <p>{ind.overview}</p>
                        </div>

                        <div className="space-y-2 pt-2">
                          <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-[#1E40D8]" />
                            <span>Key Applications &amp; Focus Segments:</span>
                          </span>
                          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                            {ind.applications.map((app, i) => (
                              <li
                                key={i}
                                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-[12px] bg-sky-50 border border-sky-200 text-slate-800 text-xs font-semibold hover:border-[#1E40D8] hover:bg-sky-100/80 transition-all cursor-default"
                              >
                                <span className="w-1.5 h-1.5 rotate-45 bg-[#1E40D8]" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="relative z-10 pt-5 mt-6 border-t border-sky-100 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 font-medium">ENGINEERING STATUS:</span>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>ACTIVE CORRIDOR</span>
                        </span>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
                )
              })}
            </div>

            {/* ROW 2: SECTORS 03 TO 08 */}
            <div className="grid grid-cols-12 gap-8 items-stretch">
              {sectorsConfig.slice(2, 8).map((ind) => {
                const Fallback = ind.FallbackIcon
                return (
                  <TiltedCard
                    key={ind.id}
                    maxTilt={4}
                    perspective={900}
                    className={ind.bentoClass}
                  >
                    <SpotlightCard
                      spotlightColor="rgba(34, 184, 240, 0.18)"
                      size={340}
                      id={ind.id}
                      className="scroll-mt-20 group relative overflow-hidden rounded-[20px] border border-sky-200/90 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between sector-card-corner h-full text-left"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />
                      <div className="absolute right-5 top-5 font-mono font-black text-6xl text-sky-100/50 select-none pointer-events-none group-hover:text-sky-200/60 transition-colors">
                        <CountUp to={ind.sectorInt} padZero={true} duration={0.9} />
                      </div>

                      <div className="relative z-10 space-y-4">
                        <div className="flex items-start space-x-3.5">
                          <div className="p-3 rounded-[12px] bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shrink-0">
                            <LordIcon
                              src={ind.iconSrc}
                              trigger="hover"
                              primaryColor="#ffffff"
                              secondaryColor="#22B8F0"
                              size={26}
                              stroke={60}
                              fallback={<Fallback className="w-6 h-6 text-white" />}
                            />
                          </div>
                          <div className="min-w-0 pr-10">
                            <span className="text-[10px] font-mono font-bold text-[#1E40D8] uppercase">
                              SECTOR {ind.sectorNum}
                            </span>
                            <h3 className="text-xl font-black text-[#0B1F6B]">{ind.name}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {ind.overview}
                        </p>

                        <div className="space-y-2 pt-1">
                          <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-[#1E40D8]" />
                            <span>Key Applications &amp; Focus Segments:</span>
                          </span>
                          <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                            {ind.applications.map((app, i) => (
                              <li
                                key={i}
                                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[12px] bg-sky-50 border border-sky-200 text-slate-800 text-[11px] font-semibold hover:border-[#1E40D8] hover:bg-sky-100 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rotate-45 bg-[#1E40D8]" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="relative z-10 pt-4 mt-6 border-t border-sky-100 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 font-medium">ENGINEERING STATUS:</span>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>ACTIVE CORRIDOR</span>
                        </span>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                )
              })}
            </div>

            {/* ROW 3: SECTORS 09 & 10 */}
            <div className="grid grid-cols-2 gap-8 items-stretch">
              {sectorsConfig.slice(8, 10).map((ind) => {
                const Fallback = ind.FallbackIcon
                return (
                  <TiltedCard key={ind.id} maxTilt={4} perspective={900} className="h-full">
                    <SpotlightCard
                      spotlightColor="rgba(34, 184, 240, 0.22)"
                      size={380}
                      id={ind.id}
                      className="scroll-mt-20 group relative overflow-hidden rounded-[20px] border border-sky-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between sector-card-corner h-full text-left"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />
                      <div className="absolute right-5 top-5 font-mono font-black text-6xl text-sky-100/50 select-none pointer-events-none group-hover:text-sky-200/60 transition-colors">
                        <CountUp to={ind.sectorInt} padZero={true} duration={0.9} />
                      </div>

                      <div className="relative z-10 space-y-4">
                        <div className="flex items-start space-x-3.5">
                          <div className="p-3 rounded-[12px] bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shrink-0">
                            <LordIcon
                              src={ind.iconSrc}
                              trigger="hover"
                              primaryColor="#ffffff"
                              secondaryColor="#22B8F0"
                              size={28}
                              stroke={60}
                              fallback={<Fallback className="w-6 h-6 text-white" />}
                            />
                          </div>
                          <div className="min-w-0 pr-10">
                            <span className="text-[10px] font-mono font-bold text-[#1E40D8] uppercase">
                              SECTOR {ind.sectorNum}
                            </span>
                            <h3 className="text-xl font-black text-[#0B1F6B]">{ind.name}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {ind.overview}
                        </p>

                        <div className="space-y-2 pt-1">
                          <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase block flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-[#1E40D8]" />
                            <span>Key Applications &amp; Focus Segments:</span>
                          </span>
                          <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                            {ind.applications.map((app, i) => (
                              <li
                                key={i}
                                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[12px] bg-sky-50 border border-sky-200 text-slate-800 text-[11px] font-semibold hover:border-[#1E40D8] hover:bg-sky-100 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rotate-45 bg-[#1E40D8]" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="relative z-10 pt-4 mt-6 border-t border-sky-100 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 font-medium">ENGINEERING STATUS:</span>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>ACTIVE CORRIDOR</span>
                        </span>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA BANNER                                                             */}
      {/* ========================================================================= */}
      <CTASection />

    </div>
  )
}
