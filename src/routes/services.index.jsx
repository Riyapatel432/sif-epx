import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Compass,
  Sparkles,
  Building2,
  Cpu,
  Layers,
  Zap,
  LineChart,
  Sun,
  Users,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from 'lucide-react'

import Breadcrumbs from '../components/Breadcrumbs'
import { motion } from 'motion/react'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import LordIcon from '../components/LordIcon'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import { servicesData } from '../data/servicesData'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      {
        title: 'Turnkey EPCM & Engineering Services | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'Comprehensive EPCM, PMC, Detailed Engineering, Plant Automation, Electrical Switchboards, and Solar EPC services across India.',
      },
      {
        property: 'og:title',
        content: 'Turnkey EPCM & Engineering Services | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'Comprehensive EPCM, PMC, Detailed Engineering, Plant Automation, Electrical Switchboards, and Solar EPC services across India.',
      },
    ],
  }),
  component: ServicesIndexPage,
})

function ServicesIndexPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const serviceCategories = [
    { id: 'all', label: 'All Services', count: servicesData.length },
    { id: 'epcm', label: 'EPCM & PMC', filter: ['epcm', 'pmc', 'project-management-procurement'] },
    { id: 'automation', label: 'Automation & SCADA', filter: ['plc-dcs-scada-automation', 'process-engineering-instrumentation'] },
    { id: 'electrical', label: 'Electrical Switchgear', filter: ['electrical-switchgear-manufacturing', 'substation-ht-lt-automation'] },
    { id: 'specialized', label: 'Piping & Solar', filter: ['piping-stress-analysis-caesarii', 'solar-power-epc-solutions', 'technical-manpower-secondment'] },
  ]

  const filteredServices = servicesData.filter((s) => {
    if (activeCategory === 'all') return true
    const current = serviceCategories.find((c) => c.id === activeCategory)
    return current ? current.filter.includes(s.slug || s.id) : true
  })

  const [openServiceAccordionId, setOpenServiceAccordionId] = useState(servicesData[0]?.slug || '')

  const scrollToService = (slug) => {
    setOpenServiceAccordionId(slug)
    const el = document.getElementById(`service-${slug}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO WITH AURORAWAVES + BLURTEXT + CHIPSCROLLER NAVIGATOR              */}
      {/* ========================================================================= */}
      <section id="services-hero" className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        <AuroraWaves speed={0.007} />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(30,64,216,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div>
            <Breadcrumbs items={[{ label: 'Engineering Services' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                   ENGINEERING SERVICES
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="9 Turnkey Capabilities" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[11px] font-mono font-bold border border-emerald-400/30">
                Concept to Commissioning
              </span>
            </div>

            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Engineering, Automation & EPCM Services"
                delay={40}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              End-to-end engineering and project support from concept to commissioning, enabling industrial clients to execute projects with speed, quality, technical accuracy, and cost efficiency.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20 min-w-0 max-w-full">
            <HeroAnchorNav
              items={servicesData.map((s, idx) => ({
                id: s.slug || s.id,
                label: `0${idx + 1}. ${s.title}`,
              }))}
              activeId={openServiceAccordionId}
              onSelect={(id) => scrollToService(id)}
              ariaLabel="Engineering services quick navigation"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STANDARDS CERTIFICATION RAIL (Shared Section A)                        */}
      {/* ========================================================================= */}
      <section id="standards-compliance" className="reveal-fade-in py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAPABILITIES SHOWCASE WITH STICKY FILTER & COMPACT ACCORDIONS          */}
      {/* ========================================================================= */}
      <section id="capabilities-catalog" className="py-10 sm:py-18 bg-sif-sector-grid">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-sky-200/80">
              <div className="space-y-2">
                <span className="eyebrow-pill">COMPREHENSIVE CAPABILITIES</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                  Turnkey Process Engineering &amp; Automation Packages
                </h2>
                <p className="text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                  Explore our core capabilities spanning EPCM management, electrical switchgear fabrication, process SCADA, and skilled engineering manpower.
                </p>
              </div>

              {/* Filter Tabs: ChipScroller on both mobile and desktop (sticky under header with no clipped text) */}
              <div className="w-full lg:w-auto min-w-0 max-w-full">
                <ChipScroller
                  items={serviceCategories.map((cat) => ({
                    id: cat.id,
                    label: `${cat.label} (${cat.count || servicesData.filter((s) => cat.filter?.includes(s.slug)).length})`,
                  }))}
                  activeId={activeCategory}
                  onSelect={(id) => setActiveCategory(id)}
                  itemClassName="min-h-[44px] text-xs font-mono font-bold"
                  activeClassName="bg-[#0B1F6B] text-white border-[#1E40D8] shadow-sm"
                  inactiveClassName="bg-white text-slate-700 border-sky-200 hover:bg-sky-50"
                  ariaLabel="Services category filter"
                />
              </div>
            </div>
          </AnimatedContent>

          {/* =================================================================== */}
          {/* MOBILE VIEW (< 1024px): Compact Mobile Accordion List                */}
          {/* =================================================================== */}
          <div className="block lg:hidden space-y-3">
            {filteredServices.map((service, idx) => {
              const isOpen = openServiceAccordionId === (service.slug || service.id)
              const staggerDelay = (idx % 5) * 0.1

              return (
                <motion.div
                  key={service.id || service.slug}
                  id={`service-${service.slug || service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                  transition={{ duration: 0.7, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-sky-200/90 bg-white overflow-hidden shadow-2xs scroll-mt-20 transition-all text-left"
                >
                  {/* Collapsed Header */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenServiceAccordionId(isOpen ? null : (service.slug || service.id))
                    }
                    className="w-full p-4 flex items-center justify-between gap-3 text-left min-h-[48px] hover:bg-sky-50/60 transition-colors"
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#031A5D] to-[#1E3AAE] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <span className="font-mono font-bold text-xs">0{idx + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <span className="font-black text-sm text-[#0B1F6B] block truncate leading-tight">
                          {service.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[#1E40D8] block truncate mt-0.5 uppercase tracking-wide">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 shrink-0 ${
                        isOpen ? 'bg-[#0B1F6B] text-white rotate-180' : 'bg-sky-100 text-[#0B1F6B]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Content: Description, Highlights, and Actions */}
                  {isOpen && (
                    <div className="p-4 pt-2 border-t border-sky-100/90 bg-sky-50/40 space-y-3.5 animate-in fade-in">
                      <p className="text-xs text-slate-700 leading-relaxed font-normal bg-white p-3 rounded-xl border border-sky-200/60">
                        {service.summary}
                      </p>

                      {/* Full Scope Highlights */}
                      {service.sections && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B1F6B] block">
                            Core Scope Highlights:
                          </span>
                          <div className="space-y-1">
                            {service.sections.map((sec, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start space-x-2 text-xs text-slate-800 bg-white/80 p-2.5 rounded-lg border border-sky-100"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#1E40D8] shrink-0 mt-0.5" />
                                <span className="font-medium leading-snug">{sec.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Row */}
                      <div className="pt-2 border-t border-sky-200/60 flex items-center justify-between text-xs font-mono">
                        <Link
                          to="/services/$serviceId"
                          params={{ serviceId: service.slug }}
                          className="inline-flex items-center space-x-1.5 font-bold text-[#0B1F6B] hover:text-[#1E40D8] py-2 px-3 rounded-xl bg-white border border-sky-200 shadow-2xs"
                        >
                          <span>Explore Full Scope</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#1E40D8]" />
                        </Link>

                        <span className="text-[10px] uppercase text-emerald-700 flex items-center gap-1 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span>Active Capability</span>
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* =================================================================== */}
          {/* DESKTOP VIEW (>= 1024px): 3-Column Card Grid with Motion Stagger   */}
          {/* =================================================================== */}
          <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
            {filteredServices.map((service, idx) => {
              const staggerDelay = (idx % 5) * 0.1
              return (
                <motion.div
                  key={service.id || service.slug}
                  id={`service-${service.slug || service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                  transition={{ duration: 0.7, delay: staggerDelay, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-24 h-full"
                >
                  <ServiceCard service={service} />
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CTA BANNER (Shared Section B)                                          */}
      {/* ========================================================================= */}
      <CTASection />

    </div>
  )
}
