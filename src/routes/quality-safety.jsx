import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  AlertTriangle,
  Sliders,
  FileCheck2,
  Check,
  Zap,
  Activity,
  HardHat,
  HeartPulse,
  Scale,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

import Breadcrumbs from '../components/Breadcrumbs'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import RiskFormulaCard from '../components/RiskFormulaCard'
import CTASection from '../components/CTASection'
import LordIcon from '../components/LordIcon'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import {
  safetyFramework,
  statutoryApprovals,
  panelRoutineTests,
} from '../data/standardsData'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import TiltedCard from '../components/reactbits/TiltedCard'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/quality-safety')({
  head: () => ({
    meta: [
      {
        title: 'Quality, Safety & Compliance Framework | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'ISO 9001:2015 quality standards, zero-harm HSE policy, statutory environmental clearances, and factory testing protocols.',
      },
      {
        property: 'og:title',
        content: 'Quality, Safety & Compliance Framework | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'ISO 9001:2015 quality standards, zero-harm HSE policy, statutory environmental clearances, and factory testing protocols.',
      },
    ],
  }),
  component: QualitySafetyPage,
})

function QualitySafetyPage() {
  const [showAllChecklist, setShowAllChecklist] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const hseIcons = [
    'https://cdn.lordicon.com/egiwmiit.json', // shield
    'https://cdn.lordicon.com/xulniijg.json', // health / safety
    'https://cdn.lordicon.com/wloilxuq.json', // gear / compliance
  ]

  const compliancePoints = safetyFramework.statutoryCompliance.points
  const visibleChecklist = showAllChecklist ? compliancePoints : compliancePoints.slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO WITH AURORAWAVES + BLURTEXT                                       */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        <AuroraWaves speed={0.007} />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(30,64,216,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div>
            <Breadcrumbs items={[{ label: 'Quality & Safety' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            {/* Badges wrap in 2 lines max */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                 QUALITY &amp; HSE GOVERNANCE
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="Zero Lost-Time Incidents" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[11px] font-mono font-bold border border-emerald-400/30">
                ISO 9001:2015 Audited
              </span>
            </div>

            {/* Fluid clamp title: clamp(1.9rem, 8vw, 2.75rem) on mobile */}
            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Quality Assurance & Safety Governance"
                delay={45}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Uncompromising adherence to ISO 9001:2015 quality standards, global engineering codes (IS/BIS/IEC/API/ASME), rigorous quantitative risk modeling (R = F x D), and 100% factory routine tests.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={[
                { id: 'standards-codes', label: '01 Standards & Codes' },
                { id: 'risk-formula', label: '02 Risk Matrix (R=F×D)' },
                { id: 'hse-pillars', label: '03 HSE Governance' },
                { id: 'panel-tests', label: '04 Routine FAT Tests' },
                { id: 'statutory', label: '05 Statutory Clearances' },
              ]}
              onSelect={(id) => scrollTo(id)}
              ariaLabel="Quality & safety quick links"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STANDARDS & CODES (Shared Section A: MobileSnapSlider with dots)       */}
      {/* ========================================================================= */}
      <section id="standards-codes" className="reveal-fade-in py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE RISK FORMULA CONSOLE (R = F × D)                           */}
      {/* ========================================================================= */}
      <section id="risk-formula" className="reveal-fade-in py-10 sm:py-18 bg-white border-b border-sky-200/80 scroll-mt-12">
        <div className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <RiskFormulaCard />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HSE POLICY & ZERO-HARM PILLARS (MobileSnapSlider on mobile)             */}
      {/* ========================================================================= */}
      <section id="hse-pillars" className="py-10 sm:py-18 bg-sif-sector-grid border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">ZERO-HARM CULTURE</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                HSE Policy &amp; Worker Protection Governance
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                NEBOSH-certified safety officers and IOSH supervisors enforce structured toolbox meetings, PPE compliance, and comprehensive transit/erection insurance.
              </p>
            </div>
          </AnimatedContent>

          {/* 3 Core HSE Pillars: MobileSnapSlider on mobile, 3-col grid on desktop */}
          <MobileSnapSlider
            desktopClassName="lg:grid lg:grid-cols-3 lg:gap-6"
            itemWidth="w-[85vw] max-w-[340px]"
            ariaLabel="HSE Governance Pillars"
          >
            {safetyFramework.pillars.map((pillar, idx) => (
              <TiltedCard key={idx} maxTilt={4} perspective={900} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(34, 184, 240, 0.22)"
                  size={320}
                  className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden sector-card-corner text-left"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />
                  
                  <div className="space-y-3 sm:space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white shadow-md">
                        <LordIcon
                          src={hseIcons[idx % hseIcons.length]}
                          trigger="hover"
                          primaryColor="#ffffff"
                          secondaryColor="#22B8F0"
                          size={24}
                          stroke={60}
                          fallback={<ShieldCheck className="w-5 h-5 text-white" />}
                        />
                      </div>
                      <span className="font-mono font-black text-xs text-[#1E40D8] px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#0B1F6B] leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mt-2">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-5 sm:mt-6 border-t border-sky-100 flex items-center justify-between text-xs font-mono relative z-10">
                    <span className="text-slate-500 font-medium">COMPLIANCE:</span>
                    <span className="inline-flex items-center space-x-1.5 text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>MANDATORY PROTOCOL</span>
                    </span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            ))}
          </MobileSnapSlider>

          {/* Statutory Worker Protection Policy: Single column list, first 3 visible, Show all expander on mobile */}
          <div className="rounded-[24px] bg-white border border-sky-200 p-5 sm:p-9 shadow-sm space-y-4 text-left">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F6B]">
              <HardHat className="w-4 h-4 text-[#1E40D8]" />
              <span>{safetyFramework.statutoryCompliance.title}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-700">
              {visibleChecklist.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start space-x-3 p-3.5 rounded-xl bg-sky-50/50 border border-sky-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{pt}</span>
                </div>
              ))}
            </div>

            {/* Mobile Expander Button */}
            {compliancePoints.length > 3 && (
              <div className="md:hidden pt-2 border-t border-sky-100">
                <button
                  type="button"
                  onClick={() => setShowAllChecklist(!showAllChecklist)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[44px]"
                >
                  <span>{showAllChecklist ? 'Show First 3 Policies' : `Show All ${compliancePoints.length} Policies`}</span>
                  {showAllChecklist ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PANEL ROUTINE-TEST CHECKLIST (MobileSnapSlider with step counter)      */}
      {/* ========================================================================= */}
      <section id="panel-tests" className="py-10 sm:py-18 bg-white border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-sky-200/80 text-left">
              <div className="space-y-2">
                <span className="eyebrow-pill">MURAD NAGAR FAT BAY</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                  Electrical Panel Routine Testing Checklist
                </h2>
                <p className="text-slate-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                  Every switchboard manufactured at our works undergoes verified routine testing in compliance with IEC 61439 before customer dispatch.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-[#0B1F6B] self-start md:self-auto">
                <span>CRITERIA:</span>
                <span className="text-emerald-700">100% FAT VERIFIED</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Routine Tests: MobileSnapSlider with peeking cards below 1024px, 3-col grid above 1024px */}
          <MobileSnapSlider
            desktopClassName="lg:grid lg:grid-cols-3 lg:gap-6"
            itemWidth="w-[85vw] max-w-[340px]"
            ariaLabel="Routine Testing Steps"
          >
            {panelRoutineTests.map((t, idx) => (
              <SpotlightCard
                key={t.id}
                spotlightColor="rgba(34, 184, 240, 0.2)"
                size={280}
                className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group h-full text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B1F6B] to-[#1E40D8] text-white font-mono text-xs font-black shadow-xs shrink-0">
                        0{t.id}
                      </span>
                      <h3 className="text-sm font-black text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors leading-snug">
                        {t.test}
                      </h3>
                    </div>
                    <span className="lg:hidden text-[10px] font-mono text-slate-600 font-bold">
                      {idx + 1} / {panelRoutineTests.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-11">
                    {t.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono pl-11">
                  <span className="text-slate-600 font-medium">BENCHMARK:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    PASS CRITERIA MANDATED
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </MobileSnapSlider>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STATUTORY CLEARANCES LIAISON (MobileSnapSlider on mobile)               */}
      {/* ========================================================================= */}
      <section id="statutory" className="py-10 sm:py-18 bg-sif-sector-grid scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">REGULATORY CLEARANCE DESK</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                Statutory Clearances &amp; Liaison Support
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Assisting client facilities in securing essential government, environmental, and electrical statutory clearances.
              </p>
            </div>
          </AnimatedContent>

          {/* Statutory Approvals: MobileSnapSlider on mobile, 4-col grid on desktop */}
          <MobileSnapSlider
            desktopClassName="lg:grid lg:grid-cols-4 lg:gap-6"
            itemWidth="w-[82vw] max-w-[310px]"
            ariaLabel="Statutory Clearances"
          >
            {statutoryApprovals.map((app, idx) => (
              <TiltedCard key={idx} maxTilt={4} perspective={800} className="h-full">
                <SpotlightCard
                  spotlightColor="rgba(34, 184, 240, 0.22)"
                  size={260}
                  className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group text-left"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold text-[#1E40D8] uppercase block">
                      CLEARANCE 0{idx + 1}
                    </span>
                    <h3 className="text-base font-black text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors leading-snug">
                      {app.authority}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {app.purpose}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-slate-600 font-medium">STATUS:</span>
                    <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      100% REGULATORY PASS
                    </span>
                  </div>
                </SpotlightCard>
              </TiltedCard>
            ))}
          </MobileSnapSlider>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CTA SECTION                                                            */}
      {/* ========================================================================= */}
      <CTASection />

    </div>
  )
}
