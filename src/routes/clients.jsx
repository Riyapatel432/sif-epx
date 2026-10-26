import { useState, useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Building2,
  Briefcase,
  FileText,
  Search,
  CheckCircle2,
  Clock,
  ExternalLink,
  Award,
  Zap,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  MapPin,
  Calendar,
  Sparkles,
  Layers,
  ArrowUpRight,
  Filter,
  Check,
  Users,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react'

import Breadcrumbs from '../components/Breadcrumbs'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import CTASection from '../components/CTASection'
import LordIcon from '../components/LordIcon'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import { MobileBottomSheet } from '../components/ui/MobileBottomSheet'
import { MobileTabs, TabPanel } from '../components/ui/MobileTabs'
import { MobileAccordionItem, MobileAccordionGroup } from '../components/ui/MobileAccordion'
import { clientsList, caseStudies, projectsTrackRecord, showProjectValues } from '../data/clientsData'
import { companyInfo } from '../data/companyData'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import TiltedCard from '../components/reactbits/TiltedCard'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/clients')({
  head: () => ({
    meta: [
      {
        title: 'Clients & Track Record | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'Proven industrial track record across 100+ major process plants, multinational chemical complexes, and infrastructure projects across India.',
      },
      {
        property: 'og:title',
        content: 'Clients & Track Record | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'Proven industrial track record across 100+ major process plants, multinational chemical complexes, and infrastructure projects across India.',
      },
    ],
  }),
  component: ClientsPage,
})

function ClientsPage() {
  const [activeTab, setActiveTab] = useState('all') // filter for clients
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState(0)
  const [ledgerStatus, setLedgerStatus] = useState('all') // 'all' | 'executed' | 'proposed'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedClientForSheet, setSelectedClientForSheet] = useState(null)
  
  // Mobile client grid pagination: show 6 first, with "Show more"
  const [visibleClientCount, setVisibleClientCount] = useState(6)
  // Mobile project ledger pagination: load more every 6 items
  const [visibleLedgerCount, setVisibleLedgerCount] = useState(6)

  // Filter clients by domain category
  const filteredClients = useMemo(() => {
    return clientsList.filter((client) => {
      if (activeTab === 'all') return true
      if (activeTab === 'chemicals') {
        return (
          client.industry.toLowerCase().includes('chemical') ||
          client.industry.toLowerCase().includes('fluorochemical')
        )
      }
      if (activeTab === 'inks') {
        return (
          client.industry.toLowerCase().includes('ink') ||
          client.industry.toLowerCase().includes('coating') ||
          client.industry.toLowerCase().includes('printing')
        )
      }
      if (activeTab === 'energy') {
        return (
          client.industry.toLowerCase().includes('energy') ||
          client.industry.toLowerCase().includes('power')
        )
      }
      if (activeTab === 'pharma') {
        return (
          client.industry.toLowerCase().includes('pharma') ||
          client.industry.toLowerCase().includes('food')
        )
      }
      if (activeTab === 'gov') {
        return (
          client.isGovernment ||
          client.industry.toLowerCase().includes('government') ||
          client.industry.toLowerCase().includes('atomic')
        )
      }
      return true
    })
  }, [activeTab])

  // Filter project ledger
  const filteredLedger = useMemo(() => {
    return projectsTrackRecord.filter((p) => {
      const matchStatus = ledgerStatus === 'all' || p.status === ledgerStatus
      const q = searchQuery.toLowerCase().trim()
      const matchSearch =
        !q ||
        p.client.toLowerCase().includes(q) ||
        p.projectName.toLowerCase().includes(q) ||
        p.solutionOffered.toLowerCase().includes(q)
      return matchStatus && matchSearch
    })
  }, [ledgerStatus, searchQuery])

  // Mobile sliced lists
  const mobileClientsToShow = filteredClients.slice(0, visibleClientCount)
  const mobileLedgerToShow = filteredLedger.slice(0, visibleLedgerCount)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Row splitter for marquee
  const clientsWithLogos = clientsList.filter((c) => Boolean(c.logo))
  const half = Math.ceil(clientsWithLogos.length / 2)
  const rowOne = clientsWithLogos.slice(0, half)
  const rowTwo = clientsWithLogos.slice(half)

  return (
    <div className="min-h-screen bg-[#EAF4FF] text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">

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
            <Breadcrumbs items={[{ label: 'Clients & Track Record' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            {/* Badges wrap in 2 lines max */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                  CLIENTELE &amp; LEDGER
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="15+ Years Track Record" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[11px] font-mono font-bold border border-emerald-400/30">
                100% Repeat Relationship Rate
              </span>
            </div>

            {/* Fluid clamp title */}
            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Esteemed Industrial Clients & Track Record"
                delay={45}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Trusted vendor of choice for global specialty chemicals, printing inks, power generation, and public sector defense research organizations across India.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={[
                { id: 'client-roster', label: `01 Key Enterprise Roster (${clientsList.length})` },
                { id: 'case-studies', label: `02 Deep Case Studies (${caseStudies.length})` },
                { id: 'project-ledger', label: `03 Comprehensive Ledger (${projectsTrackRecord.length})` },
              ]}
              onSelect={(id) => scrollToSection(id)}
              ariaLabel="Clients & track record quick links"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS SECTION (2-column x 3-row grid on mobile, 6-col on desktop)      */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {companyInfo.keyStats.map((stat, idx) => {
              const numericVal = parseInt(stat.value, 10)
              const isPureNum = !isNaN(numericVal) && !stat.value.includes('-')

              return (
                <SpotlightCard
                  key={idx}
                  spotlightColor="rgba(34, 184, 240, 0.22)"
                  size={180}
                  className="rounded-2xl border border-sky-200/90 bg-white p-3.5 sm:p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#1E40D8] hover:shadow-md flex flex-col items-center justify-center text-center"
                >
                  <div className="text-xl sm:text-3xl font-black text-[#0B1F6B] font-mono flex items-baseline justify-center">
                    {isPureNum ? (
                      <CountUp to={numericVal} duration={1.2} />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                    {stat.value.includes('+') && <span>+</span>}
                    {stat.value.includes('%') && <span>%</span>}
                  </div>
                  {stat.suffix && (
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#1E40D8] block mt-0.5 uppercase tracking-wide">
                      {stat.suffix}
                    </span>
                  )}
                  <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600 leading-tight">
                    {stat.label}
                  </div>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAL-ROW MARQUEE STRIP (Pauses on touch / hover)                       */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-white border-b border-sky-200/80 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#0B1F6B] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#1E40D8]" />
            <span>Esteemed Clientele Brand Showcase</span>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Scroll paused on touch / hover
          </span>
        </div>

        <div className="space-y-3 relative group active:[&_*]:[animation-play-state:paused]">
          <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_6%,white_94%,transparent)]">
            <div className="flex shrink-0 gap-3 animate-marquee group-hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              {[...rowOne, ...rowOne, ...rowOne, ...rowOne].map((client, idx) => (
                <div
                  key={`r1-${client.id}-${idx}`}
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-sky-50/60 border border-sky-200 flex items-center space-x-3 shrink-0 hover:bg-white hover:border-[#1E40D8] transition-all cursor-pointer shadow-2xs min-h-[44px]"
                  onClick={() => setSelectedClientForSheet(client)}
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-5 sm:h-6 w-auto max-w-[70px] sm:max-w-[80px] object-contain mix-blend-multiply"
                    />
                  ) : (
                    <span className="font-mono text-xs font-black text-[#0B1F6B]">
                      {client.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div className="min-w-0 pr-1">
                    <span className="text-xs font-bold text-[#0B1F6B] block truncate max-w-[130px] sm:max-w-[150px]">
                      {client.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block truncate max-w-[130px] sm:max-w-[150px]">
                      {client.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_6%,white_94%,transparent)]">
            <div className="flex shrink-0 gap-3 animate-marquee-reverse group-hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              {[...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo].map((client, idx) => (
                <div
                  key={`r2-${client.id}-${idx}`}
                  className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-sky-50/60 border border-sky-200 flex items-center space-x-3 shrink-0 hover:bg-white hover:border-[#1E40D8] transition-all cursor-pointer shadow-2xs min-h-[44px]"
                  onClick={() => setSelectedClientForSheet(client)}
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-5 sm:h-6 w-auto max-w-[70px] sm:max-w-[80px] object-contain mix-blend-multiply"
                    />
                  ) : (
                    <span className="font-mono text-xs font-black text-[#0B1F6B]">
                      {client.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div className="min-w-0 pr-1">
                    <span className="text-xs font-bold text-[#0B1F6B] block truncate max-w-[130px] sm:max-w-[150px]">
                      {client.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 block truncate max-w-[130px] sm:max-w-[150px]">
                      {client.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLIENT ROSTER: 2-COL COMPACT GRID + BOTTOM SHEET DETAIL ON MOBILE      */}
      {/* ========================================================================= */}
      <section id="client-roster" className="py-10 sm:py-18 bg-sif-sector-grid scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-sky-200/80 text-left">
              <div className="space-y-2">
                <span className="eyebrow-pill">ENTERPRISE PARTNERS</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                  Long-Standing Client Relationships
                </h2>
                <p className="text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                  Decades of trusted turnkey execution across multinational specialty chemical leaders, public sector corporations, and manufacturing conglomerates.
                </p>
              </div>

              {/* Filter: MobileDropdown on mobile (< lg), ChipScroller on desktop (>= lg) */}
              <div className="w-full lg:w-auto min-w-0 max-w-full">
                {/* Mobile Dropdown View */}
                <div className="lg:hidden">
                  <MobileDropdown
                    label="FILTER SECTOR"
                    items={[
                      { id: 'all', label: `All (${clientsList.length})` },
                      { id: 'chemicals', label: 'Chemicals' },
                      { id: 'inks', label: 'Inks & Coatings' },
                      { id: 'energy', label: 'Energy & Power' },
                      { id: 'pharma', label: 'Pharma & Food' },
                      { id: 'gov', label: 'Govt & Nuclear' },
                    ]}
                    activeId={activeTab}
                    onSelect={(id) => {
                      setActiveTab(id)
                      setVisibleClientCount(6)
                    }}
                    theme="light"
                  />
                </div>

                {/* Desktop Chip Scroller */}
                <div className="hidden lg:block min-w-0 max-w-full">
                  <ChipScroller
                    items={[
                      { id: 'all', label: `All (${clientsList.length})` },
                      { id: 'chemicals', label: 'Chemicals' },
                      { id: 'inks', label: 'Inks & Coatings' },
                      { id: 'energy', label: 'Energy & Power' },
                      { id: 'pharma', label: 'Pharma & Food' },
                      { id: 'gov', label: 'Govt & Nuclear' },
                    ]}
                    activeId={activeTab}
                    onSelect={(id) => {
                      setActiveTab(id)
                      setVisibleClientCount(6)
                    }}
                    itemClassName="min-h-[40px] text-xs"
                  />
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* =================================================================== */}
          {/* MOBILE VIEW (< 1024px): 2-Column Compact Grid, tap opens bottom sheet */}
          {/* =================================================================== */}
          <div className="block lg:hidden space-y-4">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {mobileClientsToShow.map((client) => (
                <button
                  key={client.id || client.name}
                  type="button"
                  onClick={() => setSelectedClientForSheet(client)}
                  className="p-3 sm:p-4 rounded-2xl border border-sky-200 bg-white hover:border-[#1E40D8] shadow-2xs hover:shadow-md transition-all text-left flex flex-col justify-between space-y-3 cursor-pointer min-h-[140px]"
                >
                  <div className="space-y-2">
                    <div className="h-10 w-full p-1.5 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center justify-center shrink-0">
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-7 max-w-full object-contain mix-blend-multiply"
                          loading="lazy"
                        />
                      ) : (
                        <span className="font-mono font-black text-xs text-[#0B1F6B]">
                          {client.name.slice(0, 3).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-black text-xs text-[#0B1F6B] leading-tight line-clamp-1">
                        {client.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#1E40D8] block truncate mt-0.5">
                        {client.industry}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-600 font-medium">RELATION:</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Vendor</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* "Show more" expander for mobile clients */}
            {filteredClients.length > visibleClientCount && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleClientCount((prev) => prev + 6)}
                  className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[46px] shadow-2xs cursor-pointer"
                >
                  <span>Show More Clients ({filteredClients.length - visibleClientCount} remaining)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* =================================================================== */}
          {/* DESKTOP VIEW (>= 1024px): Full Bento Grid Layout                   */}
          {/* =================================================================== */}
          <div className="hidden lg:grid grid-cols-12 gap-6">
            {filteredClients.map((client, idx) => {
              let bentoClass = 'col-span-4'
              if (idx === 0 || idx === 1) bentoClass = 'col-span-6'
              else if (idx === 2) bentoClass = 'col-span-7'
              else if (idx === 3) bentoClass = 'col-span-5'

              const clientProjects = projectsTrackRecord.filter((p) =>
                p.client.toLowerCase().includes(client.name.split(' ')[0].toLowerCase())
              )

              return (
                <div key={client.id || client.name} className={bentoClass}>
                  <TiltedCard maxTilt={4} perspective={900} className="h-full">
                    <SpotlightCard
                      spotlightColor="rgba(34, 184, 240, 0.2)"
                      size={320}
                      className="h-full rounded-[20px] border border-sky-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden sector-card-corner text-left"
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />

                      <div className="space-y-4 relative z-10">
                        <div className="flex items-start justify-between gap-3">
                          <div className="h-14 w-auto min-w-[70px] max-w-[150px] p-2 rounded-xl bg-sky-50/70 border border-sky-200/80 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-[#1E40D8] transition-all">
                            {client.logo ? (
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="max-h-10 max-w-full object-contain mix-blend-multiply"
                                loading="lazy"
                              />
                            ) : (
                              <span className="font-mono font-black text-sm text-[#0B1F6B]">
                                {client.name.slice(0, 3).toUpperCase()}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            {client.relationshipSince && (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-sky-100 text-[#0B1F6B] text-[10px] font-mono font-bold border border-sky-300/80">
                                <Calendar className="w-3 h-3 text-[#1E40D8]" />
                                <span>SINCE {client.relationshipSince}</span>
                              </span>
                            )}
                            {client.isGovernment && (
                              <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-mono font-bold border border-purple-300">
                                GOVT / R&amp;D
                              </span>
                            )}
                            {client.badge && !client.relationshipSince && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold border border-emerald-300">
                                {client.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-black text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors leading-snug">
                            {client.name}
                          </h3>
                          <span className="text-xs font-mono font-semibold text-[#1E40D8] block mt-0.5">
                            {client.industry}
                          </span>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed font-normal bg-sky-50/40 p-3 rounded-xl border border-sky-100">
                          {client.highlight}
                        </p>

                        {clientProjects.length > 0 && (
                          <div className="pt-1">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block mb-1.5 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Logged Turnkey Packages ({clientProjects.length}):</span>
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {clientProjects.slice(0, 3).map((cp) => (
                                <span
                                  key={cp.id}
                                  className="px-2 py-0.5 rounded-md bg-white border border-sky-200 text-slate-700 text-[10px] font-mono truncate max-w-[190px]"
                                  title={cp.projectName}
                                >
                                  {cp.projectName}
                                </span>
                              ))}
                              {clientProjects.length > 3 && (
                                <span className="px-1.5 py-0.5 rounded-md bg-sky-100 text-[#0B1F6B] text-[10px] font-mono font-bold">
                                  +{clientProjects.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 mt-5 border-t border-sky-100 flex items-center justify-between text-xs font-mono relative z-10">
                        <span className="text-slate-500 font-medium">RELATIONSHIP:</span>
                        <span className="inline-flex items-center space-x-1.5 text-[#1E40D8] font-bold">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          <span>ESTABLISHED VENDOR</span>
                        </span>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ENTERPRISE CASE STUDY CONSOLE (MobileTabs + Accordions on Mobile)       */}
      {/* ========================================================================= */}
      <section id="case-studies" className="py-10 sm:py-18 bg-white border-y border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-sky-200/80 text-left">
              <div className="space-y-2">
                <span className="eyebrow-pill">DETAILED CASE INSPECTION</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                  Enterprise Client Case Studies
                </h2>
                <p className="text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                  Deep-dive into multi-year relationships with global leaders in printing inks and specialty chemicals, illustrating end-to-end execution.
                </p>
              </div>

              {/* Case Study Switcher Pills */}
              <div
                role="tablist"
                aria-label="Case Study Selector"
                className="w-full md:w-auto flex items-center gap-1.5 p-1 rounded-2xl bg-sky-100/70 border border-sky-200 overflow-x-auto no-scrollbar"
              >
                {caseStudies.map((s, idx) => {
                  const isSelected = activeCaseStudyIndex === idx
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveCaseStudyIndex(idx)}
                      className={`flex-1 min-w-max py-2.5 px-3.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer touch-target-min flex items-center justify-center gap-1.5 focus:outline-hidden ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-sm ring-1 ring-sky-300'
                          : 'text-slate-600 hover:text-[#001B79] hover:bg-white/60'
                      }`}
                    >
                      <span>{s.client}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </AnimatedContent>

          {/* Active Case Study Presentation */}
          {(() => {
            const currentCaseStudy = caseStudies[activeCaseStudyIndex] || caseStudies[0]

            return (
              <div className="rounded-[24px] bg-gradient-to-br from-[#F0F9FF] via-white to-sky-50/70 border border-sky-200 p-5 sm:p-10 shadow-lg relative overflow-hidden text-left">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0]" />

                <div className="space-y-6 sm:space-y-8">
                  {/* Header Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 border-b border-sky-200/80 pb-4 sm:pb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0B1F6B] text-white text-[11px] sm:text-xs font-mono font-bold shadow-xs">
                          {currentCaseStudy.partnership}
                        </span>
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-sky-100 text-[#0B1F6B] text-[11px] sm:text-xs font-mono font-bold">
                          <MapPin className="w-3 h-3 text-[#1E40D8]" />
                          <span>{currentCaseStudy.location}</span>
                        </span>
                        <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-sky-50 text-slate-700 text-[11px] sm:text-xs font-mono border border-sky-200">
                          {currentCaseStudy.sector}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-3xl font-black text-[#0B1F6B] tracking-tight leading-snug">
                        {currentCaseStudy.title}
                      </h3>
                      <p className="text-xs font-mono text-[#1E40D8] font-bold mt-1">
                        CLIENT: {currentCaseStudy.client.toUpperCase()}
                      </p>
                    </div>

                    <div className="shrink-0 self-start lg:self-auto">
                      <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[11px] sm:text-xs font-mono font-bold shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>VERIFIED SUCCESSFUL EXECUTION</span>
                      </span>
                    </div>
                  </div>

                  {/* Scope & Architecture Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-200/90 shadow-2xs space-y-2">
                      <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#1E40D8]" />
                        <span>Project Scope &amp; Facility Context:</span>
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {currentCaseStudy.overview}
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-200/90 shadow-2xs space-y-2">
                      <span className="text-xs font-mono font-bold text-[#1E40D8] uppercase flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-[#22B8F0]" />
                        <span>Engineered Automation Architecture:</span>
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {currentCaseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights & Results: MobileAccordion groups on mobile (< 1024px), 2-col on desktop */}
                  <div className="block lg:hidden space-y-3">
                    <MobileAccordionItem
                      title="Key Technical Highlights"
                      subtitle={`${currentCaseStudy.highlights.length} core technical deliverables`}
                      icon={Zap}
                      defaultOpen={true}
                    >
                      <div className="space-y-2 pt-2">
                        {currentCaseStudy.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2.5 text-xs text-slate-700 bg-white p-3 rounded-xl border border-sky-200/80"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E40D8] shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </MobileAccordionItem>

                    <MobileAccordionItem
                      title="Demonstrated Business Results"
                      subtitle={`${currentCaseStudy.results.length} quantified plant achievements`}
                      icon={Award}
                      defaultOpen={true}
                    >
                      <div className="space-y-2 pt-2">
                        {currentCaseStudy.results.map((r, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2.5 text-xs text-slate-800 bg-emerald-50/70 p-3 rounded-xl border border-emerald-200"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{r}</span>
                          </div>
                        ))}
                      </div>
                    </MobileAccordionItem>
                  </div>

                  {/* Desktop 2-Col View (>= 1024px) */}
                  <div className="hidden lg:grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#1E40D8]" />
                        <span>Key Technical Highlights:</span>
                      </span>
                      <div className="space-y-2.5">
                        {currentCaseStudy.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-sky-200/80 shadow-2xs hover:border-[#1E40D8] transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#1E40D8] shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-mono font-bold text-emerald-800 uppercase flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-600" />
                        <span>Demonstrated Business Results:</span>
                      </span>
                      <div className="space-y-2.5">
                        {currentCaseStudy.results.map((r, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 text-xs sm:text-sm text-slate-800 bg-emerald-50/70 p-3.5 rounded-xl border border-emerald-200 shadow-2xs hover:border-emerald-500 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )
          })()}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPREHENSIVE PROJECT LEDGER: CARDS + STICKY SEARCH ON MOBILE          */}
      {/* ========================================================================= */}
      <section id="project-ledger" className="py-10 sm:py-18 bg-sif-sector-grid scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-sky-200/80 text-left">
              <div className="space-y-2">
                <span className="eyebrow-pill">COMPLETE TRACK RECORD</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                  Comprehensive Project Ledger
                </h2>
                <p className="text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                  Search and filter across executed and proposed turnkey projects spanning chemical, pharmaceutical, ink, and renewable installations.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-sky-300 text-xs font-mono font-bold text-[#0B1F6B] shadow-2xs self-start md:self-auto">
                <span>TOTAL LOGGED:</span>
                <span className="px-2 py-0.5 rounded-full bg-[#0B1F6B] text-white">
                  {projectsTrackRecord.length} PACKAGES
                </span>
              </div>
            </div>
          </AnimatedContent>

          {/* Search Box Sticky on Mobile + Filters in ChipScroller */}
          <div className="space-y-3 sticky top-14 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-sky-200 shadow-sm">
            {/* Live Search Input */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search client, plant or turnkey scope..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setVisibleLedgerCount(6)
                }}
                className="w-full pl-10 pr-10 py-2.5 text-base sm:text-xs rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-[#1E40D8] bg-sky-50/50 text-slate-900 placeholder:text-slate-400 min-h-[44px]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filters: MobileDropdown on mobile (< lg), ChipScroller on desktop (>= lg) */}
            <div className="w-full">
              {/* Mobile Dropdown View */}
              <div className="lg:hidden">
                <MobileDropdown
                  label="FILTER STATUS"
                  items={[
                    { id: 'all', label: `All Projects (${projectsTrackRecord.length})` },
                    {
                      id: 'executed',
                      label: `Executed (${projectsTrackRecord.filter((p) => p.status === 'executed').length})`,
                    },
                    {
                      id: 'proposed',
                      label: `Proposed (${projectsTrackRecord.filter((p) => p.status === 'proposed').length})`,
                    },
                  ]}
                  activeId={ledgerStatus}
                  onSelect={(id) => {
                    setLedgerStatus(id)
                    setVisibleLedgerCount(6)
                  }}
                  theme="light"
                />
              </div>

              {/* Desktop Chip Scroller */}
              <div className="hidden lg:block">
                <ChipScroller
                  items={[
                    { id: 'all', label: `All (${projectsTrackRecord.length})` },
                    {
                      id: 'executed',
                      label: `Executed (${projectsTrackRecord.filter((p) => p.status === 'executed').length})`,
                    },
                    {
                      id: 'proposed',
                      label: `Proposed (${projectsTrackRecord.filter((p) => p.status === 'proposed').length})`,
                    },
                  ]}
                  activeId={ledgerStatus}
                  onSelect={(id) => {
                    setLedgerStatus(id)
                    setVisibleLedgerCount(6)
                  }}
                  itemClassName="min-h-[38px] text-xs"
                />
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* MOBILE VIEW (< 1024px): Stacked Cards with Friendly Empty State     */}
          {/* =================================================================== */}
          <div className="block lg:hidden space-y-3 w-full">
            {filteredLedger.length === 0 ? (
              <div className="p-8 rounded-2xl bg-white border border-sky-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-[#001B79] flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-[#001B79]">No matching projects located</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  No logged packages match &ldquo;{searchQuery}&rdquo;. Try another client name or clear search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setLedgerStatus('all')
                  }}
                  className="btn-pill-primary text-xs py-2 px-4"
                >
                  Clear Search &amp; Filters
                </button>
              </div>
            ) : (
              <>
                {mobileLedgerToShow.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl border border-sky-200 bg-white space-y-2.5 shadow-2xs text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 pr-1">
                        <span className="font-black text-sm text-[#0B1F6B] block truncate">
                          {p.client}
                        </span>
                        <span className="font-mono text-xs text-[#1E40D8] font-bold block mt-0.5 truncate">
                          {p.projectName}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase shrink-0 ${
                          p.status === 'executed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}
                      >
                        {p.status === 'executed' ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Clock className="w-3 h-3 text-amber-600" />
                        )}
                        <span>{p.status}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-snug bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                      {p.solutionOffered}
                    </p>

                    {showProjectValues && p.valueMillion && (
                      <div className="pt-1 text-[11px] font-mono text-slate-500 flex justify-between">
                        <span>PROJECT VALUE:</span>
                        <span className="font-bold text-[#0B1F6B]">{p.valueMillion} M</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Load More Button for Mobile Ledger (every 6 items) */}
                {filteredLedger.length > visibleLedgerCount && (
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleLedgerCount((prev) => prev + 6)}
                      className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[46px] shadow-2xs cursor-pointer"
                    >
                      <span>Load More Projects ({filteredLedger.length - visibleLedgerCount} remaining)</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* =================================================================== */}
          {/* DESKTOP VIEW (>= 1024px): Full Interactive Table                    */}
          {/* =================================================================== */}
          <div className="hidden lg:block overflow-hidden rounded-[20px] border border-sky-200/90 bg-white shadow-sm text-left">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-sky-50/80 text-[#0B1F6B] font-mono uppercase text-[11px] border-b border-sky-200">
                  <tr>
                    <th className="py-4 px-5 font-bold w-12 text-center">#</th>
                    <th className="py-4 px-5 font-bold">Client Enterprise</th>
                    <th className="py-4 px-5 font-bold">Project / Facility Scope</th>
                    <th className="py-4 px-5 font-bold">Solution Offered</th>
                    <th className="py-4 px-5 font-bold text-center">Status</th>
                    {showProjectValues && (
                      <th className="py-4 px-5 font-bold text-right">Value (M)</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 font-sans">
                  {filteredLedger.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-500 font-mono">
                        No projects found matching &ldquo;{searchQuery}&rdquo;.
                      </td>
                    </tr>
                  ) : (
                    filteredLedger.map((p, idx) => (
                      <tr
                        key={p.id}
                        className="hover:bg-sky-50/50 transition-colors group"
                      >
                        <td className="py-3.5 px-5 font-mono text-slate-600 text-center font-bold">
                          {String(idx + 1).padStart(2, '0')}
                        </td>
                        <td className="py-3.5 px-5 font-black text-slate-900 group-hover:text-[#1E40D8] transition-colors">
                          {p.client}
                        </td>
                        <td className="py-3.5 px-5 font-mono text-slate-700 font-semibold">
                          {p.projectName}
                        </td>
                        <td className="py-3.5 px-5 text-slate-600 leading-snug">
                          {p.solutionOffered}
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          <span
                            className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase ${
                              p.status === 'executed'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-amber-100 text-amber-800 border border-amber-300'
                            }`}
                          >
                            {p.status === 'executed' ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Clock className="w-3 h-3 text-amber-600" />
                            )}
                            <span>{p.status}</span>
                          </span>
                        </td>
                        {showProjectValues && (
                          <td className="py-3.5 px-5 text-right font-mono font-bold text-[#0B1F6B]">
                            {p.valueMillion ? `${p.valueMillion} M` : '—'}
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. STANDARDS RAIL (Consistency)                                           */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-sif-standards border-y border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CTA SECTION                                                            */}
      {/* ========================================================================= */}
      <CTASection />

      {/* ========================================================================= */}
      {/* 9. MOBILE BOTTOM SHEET FOR CLIENT CARD DETAILS                            */}
      {/* ========================================================================= */}
      <MobileBottomSheet
        isOpen={Boolean(selectedClientForSheet)}
        onClose={() => setSelectedClientForSheet(null)}
        title={selectedClientForSheet?.name}
        subtitle={selectedClientForSheet?.industry}
      >
        {selectedClientForSheet && (
          <div className="space-y-4 text-left">
            {selectedClientForSheet.logo && (
              <div className="h-14 p-2 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                <img
                  src={selectedClientForSheet.logo}
                  alt={selectedClientForSheet.name}
                  className="max-h-10 max-w-full object-contain mix-blend-multiply"
                />
              </div>
            )}

            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
                EXECUTIVE PARTNERSHIP OVERVIEW
              </span>
              <p className="text-xs text-slate-700 leading-relaxed bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                {selectedClientForSheet.highlight}
              </p>
            </div>

            {selectedClientForSheet.relationshipSince && (
              <div className="flex items-center justify-between text-xs font-mono p-3 rounded-xl bg-white border border-sky-200">
                <span className="text-slate-500">RELATIONSHIP TIMELINE:</span>
                <span className="font-bold text-[#001B79]">SINCE {selectedClientForSheet.relationshipSince}</span>
              </div>
            )}

            {/* Linked turnkey packages */}
            {(() => {
              const matchedPackages = projectsTrackRecord.filter((p) =>
                p.client.toLowerCase().includes(selectedClientForSheet.name.split(' ')[0].toLowerCase())
              )

              if (matchedPackages.length === 0) return null

              return (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#001B79] block">
                    LINKED TURNKEY PACKAGES ({matchedPackages.length})
                  </span>
                  <div className="space-y-2">
                    {matchedPackages.map((p) => (
                      <div key={p.id} className="p-3 rounded-xl bg-white border border-sky-200 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#001B79]">{p.projectName}</span>
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ${
                            p.status === 'executed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {p.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600">{p.solutionOffered}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedClientForSheet(null)}
                className="btn-pill-primary w-full text-xs min-h-[44px]"
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </MobileBottomSheet>

    </div>
  )
}
