import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  FileText
} from 'lucide-react'

import Breadcrumbs from '../components/Breadcrumbs'
import ContactForm from '../components/ContactForm'
import OfficeLocator from '../components/OfficeLocator'
import CTASection from '../components/CTASection'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'
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

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact Engineering & Works | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'Connect with SIF Systems engineering headquarters in Noida NCR, Murad Nagar switchgear manufacturing works, or Western branch desks in Vadodara and Ahmedabad.',
      },
      {
        property: 'og:title',
        content: 'Contact Engineering & Works | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'Connect with SIF Systems engineering headquarters in Noida NCR, Murad Nagar switchgear manufacturing works, or Western branch desks in Vadodara and Ahmedabad.',
      },
    ],
  }),
  component: ContactPage,
})

const faqs = [
  {
    q: 'What is the standard response SLA for technical proposals?',
    a: 'A dedicated application engineer evaluates your inquiry and responds with a preliminary technical query or meeting schedule within 24 business hours.'
  },
  {
    q: 'Can clients schedule a factory inspection at Murad Nagar Works?',
    a: 'Yes. We routinely host client FAT (Factory Acceptance Test) delegations, third-party inspection agencies (TUV, DNV, CEIL), and consultant audits at our Murad Nagar facility.'
  },
  {
    q: 'Do you offer customized panel designs matching non-standard site constraints?',
    a: 'Yes. Our in-house engineering team designs custom dimensional enclosures in CRCA or SS316L with front/rear access and top/bottom cable entry as per site requirements.'
  },
  {
    q: 'Which industrial regions in India do your field teams support?',
    a: 'We provide pan-India commissioning with dedicated regional desks in Noida (NCR), Ghaziabad, Vadodara, and Ahmedabad, covering Gujarat, Maharashtra, and North India corridors.'
  }
]

const contactStats = [
  {
    icon: Clock,
    label: 'Response SLA',
    value: '< 24 Business Hours',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Works Unit',
    value: 'Murad Nagar (FAT Bay)',
    href: 'https://maps.google.com/?q=Murad+Nagar+Industrial+Area+Ghaziabad',
  },
  {
    icon: Building,
    label: 'Corporate Office',
    value: 'I-Thum, Sector-62, Noida',
    href: 'https://maps.google.com/?q=I-Thum+Sector+62+Noida',
  },
  {
    icon: Phone,
    label: 'Direct Line',
    value: companyInfo.contact.phones[0],
    href: `tel:${companyInfo.contact.phones[0]}`,
  },
]

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#EAF4FF] text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">

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
            <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            {/* Badges wrap in 2 lines max */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                   CONTACT &amp; PROPOSALS
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="24-Hour SLA" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[11px] font-mono font-bold border border-emerald-400/30">
                Pan-India Field Desks
              </span>
            </div>

            {/* Fluid clamp title: clamp(1.9rem, 8vw, 2.75rem) on mobile, up to 6xl on desktop */}
            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Connect with SIF-EPX Group"
                delay={45}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Submit your project scope, request a turnkey EPCC/EPCM proposal, schedule a factory visit to our Murad Nagar works, or enquire about engineering solutions.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={[
                { id: 'regional-desks', label: '01 Regional Desks & Works' },
                { id: 'proposal-form', label: '02 Request Proposal Form' },
                { id: 'faq-section', label: '03 Application FAQs' },
              ]}
              onSelect={(id) => scrollTo(id)}
              ariaLabel="Contact section quick links"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FAST CONTACT STATS / ACCELERATORS (2x2 Grid with Tap-to-Call/Mail)     */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {contactStats.map((stat, idx) => {
              const Icon = stat.icon
              const CardInner = (
                <SpotlightCard
                  spotlightColor="rgba(34, 184, 240, 0.22)"
                  size={240}
                  className="rounded-2xl border border-sky-200/90 bg-white p-3.5 sm:p-5 shadow-xs hover:border-[#1E40D8] transition-all flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5 h-full text-left"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-sky-100 text-[#0B1F6B] shrink-0">
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-[#1E40D8]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block truncate">
                      {stat.label}
                    </span>
                    <span className="text-xs sm:text-base font-black text-[#0B1F6B] block truncate">
                      {stat.value}
                    </span>
                  </div>
                </SpotlightCard>
              )

              if (stat.href) {
                return (
                  <a
                    key={idx}
                    href={stat.href}
                    className="block hover:scale-[1.01] transition-transform"
                    target={stat.href.startsWith('http') ? '_blank' : undefined}
                    rel={stat.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {CardInner}
                  </a>
                )
              }

              return <div key={idx}>{CardInner}</div>
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. REGIONAL DESKS & WORKS INTERACTIVE LOCATOR                             */}
      {/* ========================================================================= */}
      <section id="regional-desks" className="py-10 sm:py-18 bg-white border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">PAN-INDIA ENGINEERING NETWORK</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                Corporate Headquarters &amp; Manufacturing Works
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Connect with our regional technical desks across North and West India industrial corridors for on-site FAT inspections and site engineering surveys.
              </p>
            </div>
          </AnimatedContent>

          <OfficeLocator />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL PROPOSAL & BUDGETARY FORM (Spotlight Wrap)                   */}
      {/* ========================================================================= */}
      <section id="proposal-form" className="py-10 sm:py-18 bg-sif-sector-grid border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">APPLICATION DESK</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                Request a Technical Proposal &amp; Budgetary Sizing
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Fill in your preliminary requirements for immediate review by our senior multidisciplinary engineering team.
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-4xl mx-auto">
            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.15)"
              size={450}
              className="rounded-[24px] border border-sky-200/90 bg-white p-4 sm:p-10 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0]" />
              <ContactForm />
            </SpotlightCard>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. APPLICATION & EXECUTION FAQS (Rows >= 56px, One Open at a Time)       */}
      {/* ========================================================================= */}
      <section id="faq-section" className="py-10 sm:py-18 bg-white border-b border-sky-200/80 scroll-mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <AnimatedContent distance={20} duration={0.6}>
            <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
              <span className="eyebrow-pill">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0B1F6B] tracking-tight">
                Application &amp; Execution FAQs
              </h2>
              <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
                Clear answers regarding our SLA turnaround, FAT bay audits, bespoke enclosures, and multi-state mobilization.
              </p>
            </div>
          </AnimatedContent>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-sky-200/90 bg-white shadow-2xs overflow-hidden transition-all text-left"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 hover:bg-sky-50/60 transition-colors cursor-pointer min-h-[56px]"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#0B1F6B] leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#0B1F6B] text-white' : 'bg-sky-100 text-[#0B1F6B]'}`}>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-sky-50/40">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STANDARDS RAIL & CTA                                                   */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      <CTASection />

    </div>
  )
}
