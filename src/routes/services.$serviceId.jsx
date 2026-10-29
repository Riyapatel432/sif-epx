import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { CheckCircle2, ArrowRight, Award, FileText, ChevronRight, Zap, ShieldCheck, Sparkles, Activity, Layers, Target, Compass } from 'lucide-react'
import PageHero from '../components/PageHero'
import StickySectionNav from '../components/StickySectionNav'
import ControlArchitectureSimulator from '../components/ControlArchitectureSimulator'
import BatchSequenceStepper from '../components/BatchSequenceStepper'
import PanelRangeExplorer from '../components/PanelRangeExplorer'
import ManufacturingFlow from '../components/ManufacturingFlow'
import EpcmLifecycleExplorer from '../components/EpcmLifecycleExplorer'
import IiotArchitectureExplorer from '../components/IiotArchitectureExplorer'
import SolarRenewableExplorer from '../components/SolarRenewableExplorer'
import MultidisciplineBimExplorer from '../components/MultidisciplineBimExplorer'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import ShinyText from '../components/reactbits/ShinyText'
import CountUp from '../components/reactbits/CountUp'
import CTASection from '../components/CTASection'
import { servicesData } from '../data/servicesData'
import { productsData } from '../data/productsData'
import { companyInfo } from '../data/companyData'

export const Route = createFileRoute('/services/$serviceId')({
  head: ({ params }) => {
    const service = servicesData.find(
      (s) => s.slug === params.serviceId || s.id === params.serviceId
    )
    const title = service ? `${service.title} | SIF Systems - SIF-EPX Group` : 'Engineering Service | SIF Systems'
    const description = service?.summary || 'Industrial engineering discipline and execution service by SIF Systems.'
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ],
    }
  },
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const { serviceId } = Route.useParams()
  const service = servicesData.find(
    (s) => s.slug === serviceId || s.id === serviceId
  )

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] flex items-center justify-center p-4">
        <div className="card-sky max-w-md p-8 text-center space-y-4">
          <span className="eyebrow-pill">404 // SERVICE NOT FOUND</span>
          <h2 className="text-2xl font-black text-[#001B79]">Engineering Service Not Found</h2>
          <p className="text-xs text-slate-600">The requested engineering discipline or service could not be located in our registry.</p>
          <Link to="/services" className="btn-pill-primary inline-flex text-xs">
            Return to All Services
          </Link>
        </div>
      </div>
    )
  }

  const isAutomation = service.slug === 'process-automation' || service.slug === 'turnkey-process-automation'
  const isElectrical = service.slug === 'electrical-panels' || service.slug === 'custom-electrical-panels'
  const isEpcm = service.slug === 'epcm' || service.slug === 'pmc'
  const isIiot = service.slug === 'mes-mis-iiot'
  const isSolar = service.slug === 'solar-epc'
  const isCompositeOrDesign = service.slug === 'composite-engineering' || service.slug === 'detailed-design' || service.slug === 'manpower-supply'

  const navItems = [
    { id: 'summary', label: 'Summary & Scope' },
    ...(isAutomation ? [{ id: 'architecture', label: 'Control Hierarchy' }, { id: 'batch-stepper', label: 'ISA S-88 Workflow' }] : []),
    ...(isElectrical ? [{ id: 'panel-explorer', label: 'Panel Range' }, { id: 'manufacturing-flow', label: 'Manufacturing Flow' }] : []),
    ...(isEpcm ? [{ id: 'epcm-lifecycle', label: 'EPCM Lifecycle' }] : []),
    ...(isIiot ? [{ id: 'iiot-architecture', label: 'IT/OT Pipeline' }] : []),
    ...(isSolar ? [{ id: 'solar-explorer', label: 'Renewable EPC' }] : []),
    ...(isCompositeOrDesign ? [{ id: 'bim-explorer', label: 'BIM & Value Eng.' }] : []),
    { id: 'benefits', label: 'Strategic Benefits' },
    { id: 'related', label: 'Related Switchgear' }
  ]

  const relatedProducts = productsData.slice(0, 3)

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white">
      {/* 1. PageHero with dynamic Aurora Waves & Technical Blueprint vector grid */}
      <PageHero
        eyebrow={`SERVICE // ${service.slug.toUpperCase()}`}
        title={service.title}
        subtitle={service.summary}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title }
        ]}
        badge="ISO 9001:2015"
      />

      {/* 2. Quick Engineering Metrics Banner */}
      <section className="reveal-fade-in bg-white border-b border-sky-200/80 shadow-xs relative z-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-sky-100 text-center">
            <div className="fade-up p-2 space-y-1" data-delay="100">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider">Governing Quality</span>
              <p className="font-mono text-sm sm:text-base font-black text-[#001B79]">ISO 9001:2015 QA</p>
            </div>
            <div className="fade-up p-2 space-y-1" data-delay="200">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-600 tracking-wider">Multi-Tier Inspection</span>
              <p className="font-mono text-sm sm:text-base font-black text-[#0369A1]">100% FAT / SAT Verified</p>
            </div>
            <div className="fade-up p-2 space-y-1" data-delay="300">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-600 tracking-wider">Compliance Codes</span>
              <p className="font-mono text-sm sm:text-base font-black text-[#001B79]">IS / IEC / ASME / CEIG</p>
            </div>
            <div className="fade-up p-2 space-y-1" data-delay="400">
              <span className="font-mono text-[10px] uppercase font-bold text-slate-600 tracking-wider">Execution Hub</span>
              <p className="font-mono text-sm sm:text-base font-black text-[#047857]">Murad Nagar Works &amp; Sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sticky In-Page Navigation */}
      <StickySectionNav items={navItems} />

      {/* 4. Main Body: Overview & Scope */}
      <section id="summary" className="py-16 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Scope & Overview */}
            <div className="lg:col-span-8 space-y-10">
              <SpotlightCard className="fade-up p-8 sm:p-10 rounded-3xl border border-sky-200/90 bg-white/90 shadow-md space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="eyebrow-pill">DISCIPLINE OVERVIEW</span>
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-[#001B79]">
                    SIF Process Excellence
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#001B79]">{service.subtitle || service.title}</h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">{service.description || service.summary}</p>
                {service.deliverables && (
                  <div className="pt-6 border-t border-sky-100 space-y-3">
                    <span className="text-xs font-mono font-bold text-[#001B79] uppercase block tracking-wider">Core Engineering Deliverables:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                      {service.deliverables.map((d, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 p-2 rounded-xl bg-sky-50/80 border border-sky-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </SpotlightCard>

              {/* Accordion Detailed Scope Sections */}
              {service.sections && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="eyebrow-pill">DETAILED SCOPE OF WORK</span>
                    <span className="font-mono text-xs text-slate-500">({service.sections.length} Engineering Work Packages)</span>
                  </div>
                  <div className="grid grid-cols-1 gap-5">
                    {service.sections.map((sec, idx) => (
                      <SpotlightCard key={idx} className="p-6 sm:p-8 rounded-2xl border border-sky-200/80 bg-white shadow-sm space-y-4 hover:border-sky-400 transition-all">
                        <div className="flex items-center space-x-3.5">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white font-mono font-black text-xs shadow-xs">
                            0{idx + 1}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-[#001B79]">{sec.title}</h4>
                        </div>
                        <ul className="space-y-2.5 pl-3 sm:pl-12 text-xs sm:text-sm text-slate-700">
                          {sec.items.map((it, iIdx) => (
                            <li key={iIdx} className="flex items-start space-x-2.5">
                              <span className="w-2 h-2 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar Inquiry Card & Service Index */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-sky-300 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] p-8 text-white shadow-xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-sky-400/20 blur-2xl rounded-full pointer-events-none" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#38BDF8] block">
                  <ShinyText text="APPLICATION CONSULTATION" speed={3} />
                </span>
                <h4 className="text-xl sm:text-2xl font-black">Request Scope Proposal</h4>
                <p className="text-xs text-sky-100 leading-relaxed font-normal">
                  Speak directly with our senior application technocrats for technical sizing, scope definition, and budgetary estimates.
                </p>
                <div className="space-y-3 pt-2">
                  <Link to="/contact" className="block text-center py-3.5 rounded-xl bg-white text-[#001B79] font-bold text-xs uppercase tracking-wider hover:bg-sky-50 transition-colors shadow-md">
                    Submit RFP Consultation
                  </Link>
                  <a href={`tel:${companyInfo.contact.phones[0]}`} className="block text-center py-2.5 rounded-xl border border-white/30 text-white font-mono text-xs hover:bg-white/10 transition-colors">
                    {companyInfo.contact.phones[0]}
                  </a>
                </div>
              </div>

              <div className="card-sky p-6 rounded-2xl space-y-3 bg-white/90">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] flex items-center justify-between">
                  <span>All Engineering Services</span>
                  <span className="text-[10px] text-slate-600 font-medium">9 Capabilities</span>
                </h4>
                <div className="space-y-1.5">
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      to="/services/$serviceId"
                      params={{ serviceId: s.slug }}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-all ${
                        s.id === service.id 
                          ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-xs' 
                          : 'text-slate-700 hover:bg-sky-50 hover:text-[#001B79]'
                      }`}
                    >
                      <span className="truncate">{s.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Custom Dynamic Simulators & Stage Visualizers */}
      {isAutomation && (
        <>
          <section id="architecture" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <ControlArchitectureSimulator />
            </div>
          </section>

          <section id="batch-stepper" className="py-16 bg-white border-b border-sky-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <BatchSequenceStepper />
            </div>
          </section>
        </>
      )}

      {isElectrical && (
        <>
          <section id="panel-explorer" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <PanelRangeExplorer />
            </div>
          </section>

          <section id="manufacturing-flow" className="py-16 bg-white border-b border-sky-200">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
              <ManufacturingFlow />
            </div>
          </section>
        </>
      )}

      {isEpcm && (
        <section id="epcm-lifecycle" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <EpcmLifecycleExplorer />
          </div>
        </section>
      )}

      {isIiot && (
        <section id="iiot-architecture" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <IiotArchitectureExplorer />
          </div>
        </section>
      )}

      {isSolar && (
        <section id="solar-explorer" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <SolarRenewableExplorer />
          </div>
        </section>
      )}

      {isCompositeOrDesign && (
        <section id="bim-explorer" className="py-16 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE] border-y border-sky-200">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <MultidisciplineBimExplorer />
          </div>
        </section>
      )}

      {/* 6. Strategic Benefits & Competitive Edge */}
      <section id="benefits" className="py-16 bg-white border-b border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="eyebrow-pill">KEY STRATEGIC VALUE</span>
            <h3 className="text-3xl font-black text-[#001B79]">Benefits &amp; Competitive Edge</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Measurable capital efficiency, risk elimination, and operational uptime for process plants.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.7, delay: (idx % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <SpotlightCard className="p-6 rounded-2xl border border-sky-200 bg-white/95 shadow-xs flex flex-col justify-between hover:border-sky-400 transition-all h-full">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-100 text-[#001B79] font-mono font-bold text-xs mb-3">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{b}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sky-100 text-[10px] font-mono text-[#0369A1] font-bold">
                    TESTED PROTOCOL
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Switchgear & Products */}
      <section id="related" className="py-16 bg-[#F0F9FF]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-sky-200">
            <div className="fade-up">
              <span className="eyebrow-pill">COMPLEMENTARY PACKAGES</span>
              <h3 className="text-2xl font-black text-[#001B79]">Related Switchgear &amp; Products</h3>
            </div>
            <Link to="/products" className="fade-up btn-pill-secondary text-xs" data-delay="100">
              View All Products &gt;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.7, delay: (idx % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <SpotlightCard className="p-6 rounded-2xl border border-sky-200 bg-white shadow-sm flex flex-col justify-between hover:border-sky-400 transition-all h-full">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0369A1] uppercase">{p.category}</span>
                    <h4 className="text-base font-black text-[#001B79] mt-1 mb-2">{p.title}</h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{p.summary}</p>
                  </div>
                  <Link to="/products/$productId" params={{ productId: p.slug }} className="mt-4 inline-flex items-center space-x-1 text-xs font-bold text-[#001B79] hover:text-[#0284C7]">
                    <span>Explore Technical Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <CTASection />
    </div>
  )
}

