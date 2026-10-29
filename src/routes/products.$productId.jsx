import { useState, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import {
  ShieldCheck,
  Sliders,
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
  Maximize2,
  X,
  Compass,
  Cpu,
  Zap,
  Activity,
  Layers,
  Check,
  Gauge,
  Factory,
  Droplets,
  Paintbrush,
  Shield,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react'
import CTASection from '../components/CTASection'
import Breadcrumbs from '../components/Breadcrumbs'
import TechnicalBlueprintGridSVG from '../components/visuals/TechnicalBlueprintGridSVG'
import { productsData } from '../data/productsData'
import { companyInfo } from '../data/companyData'
import TiltedCard from '../components/reactbits/TiltedCard'
import ShinyText from '../components/reactbits/ShinyText'
import BlurText from '../components/reactbits/BlurText'
import AuroraWaves from '../components/reactbits/AuroraWaves'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import LordIcon from '../components/LordIcon'

export const Route = createFileRoute('/products/$productId')({
  head: ({ params }) => {
    const product = productsData.find(
      (p) => p.slug === params.productId || p.id === params.productId
    )
    const title = product ? `${product.name} | SIF Systems - SIF-EPX Group` : 'Industrial Product | SIF Systems'
    const description = product?.shortDescription || product?.fullDescription || 'Manufactured industrial equipment and automation systems by SIF Systems.'
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ],
    }
  },
  component: ProductDetailPage,
})


// Spec icon resolver based on parameter or index
function getSpecIcon(label, index) {
  const l = (label || '').toLowerCase()
  if (l.includes('location') || l.includes('manufactur') || l.includes('works')) return Factory
  if (l.includes('cleaning') || l.includes('tank') || l.includes('pre-treatment')) return Droplets
  if (l.includes('coat') || l.includes('micron') || l.includes('powder') || l.includes('paint')) return Paintbrush
  if (l.includes('current') || l.includes('rating') || l.includes('voltage') || l.includes('breaking') || l.includes('temp') || l.includes('pressure')) return Zap
  if (l.includes('busbar') || l.includes('conductor') || l.includes('moc') || l.includes('pipe') || l.includes('material')) return Layers
  if (l.includes('compartment') || l.includes('internal') || l.includes('separation') || l.includes('form') || l.includes('hazard')) return Shield
  if (l.includes('test') || l.includes('routine') || l.includes('quality') || l.includes('compliance')) return Activity
  
  // Fallbacks by index
  const icons = [Factory, Droplets, Paintbrush, Zap, Layers, Shield, Activity]
  return icons[index % icons.length]
}

function ProductDetailPage() {
  const { productId } = Route.useParams()
  const product = productsData.find(
    (p) => p.slug === productId || p.id === productId
  )

  const [activeSection, setActiveSection] = useState('overview')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Scrollspy via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['overview', 'specifications', 'deliverables', 'enquire']
    const observers = []

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observers.push(el)
      }
    })

    return () => {
      observers.forEach((el) => observer.unobserve(el))
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] flex items-center justify-center p-4">
        <div className="card-sky max-w-md p-8 text-center space-y-4">
          <span className="eyebrow-pill">404 // PACKAGE NOT FOUND</span>
          <h2 className="text-2xl font-black text-[#001B79]">Product Package Not Found</h2>
          <p className="text-xs text-slate-600">The requested equipment or switchboard package could not be located.</p>
          <Link to="/products" className="btn-pill-primary inline-flex text-xs">
            Return to Products Catalog
          </Link>
        </div>
      </div>
    )
  }

  const otherProducts = productsData.filter((p) => p.id !== product.id).slice(0, 4)

  // Extract key highlights for quick-fact metrics banner if available
  const extractKeyFacts = () => {
    const facts = []
    if (product.standards && product.standards.length > 0) {
      facts.push({
        label: 'GOVERNING CODES',
        value: product.standards[0],
        sub: product.standards.slice(1).join(' • ')
      })
    }
    // Search specifications for current, separation, or voltage
    if (product.specifications) {
      const ratingSpec = product.specifications.find(s => 
        (s.key || s.label || '').toLowerCase().includes('current') || 
        (s.key || s.label || '').toLowerCase().includes('rating') ||
        (s.value || '').includes('6300A') ||
        (s.value || '').includes('11kV')
      )
      if (ratingSpec) {
        facts.push({
          label: 'RATINGS & VOLTAGE',
          value: ratingSpec.value.split('/')[0]?.trim() || ratingSpec.value,
          sub: ratingSpec.value.split('/')[1]?.trim() || 'High Breaking Capacity'
        })
      }

      const formSpec = product.specifications.find(s => 
        (s.key || s.label || '').toLowerCase().includes('separation') || 
        (s.key || s.label || '').toLowerCase().includes('internal') ||
        (s.value || '').toLowerCase().includes('form')
      )
      if (formSpec) {
        facts.push({
          label: 'INTERNAL SEPARATION',
          value: formSpec.value,
          sub: 'Compartmentalized Construction'
        })
      }
    }

    if (product.grade) {
      facts.push({
        label: 'TESTING & COMPLIANCE',
        value: product.grade.includes('CPRI') ? 'CPRI Type Tested' : 'Works Routine Tested',
        sub: 'Murad Nagar Works QA'
      })
    }

    return facts.slice(0, 4)
  }

  const keyFacts = extractKeyFacts()

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'deliverables', label: 'Deliverables' },
    { id: 'enquire', label: 'Enquire' },
  ]

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. SPLIT HERO WITH MONOSPACE SPEC RAIL, AURORAWAVES & BLUEPRINT GRID      */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        
        {/* Dynamic Fluid Aurora Wave Canvas */}
        <AuroraWaves speed={0.007} />

        {/* Precision Technical Blueprint Vector Grid */}
        <TechnicalBlueprintGridSVG className="opacity-25" isLightMode={false} />
        
        {/* Ambient Radial Energy Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.30)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(2,62,146,0.40)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb row */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Products', to: '/products' },
                { label: product.name }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Title Area */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Monospace Package Tag & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-sky-200 font-bold">
                    <ShinyText text={`PACKAGE // ${product.category.toUpperCase()}`} speed={3.5} />
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0284C7]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                  Murad Nagar Works
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold border border-emerald-400/30">
                  CPRI / ISO Tested
                </span>
              </div>

              {/* Title with BlurText reveal */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-black tracking-tight text-white leading-[1.18]">
                <BlurText
                  text={product.name}
                  delay={35}
                  direction="top"
                  className="text-white"
                />
              </h1>

              {/* Subtitle */}
              {product.shortDescription && (
                <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
                  {product.shortDescription}
                </p>
              )}
            </div>

            {/* Right: Glassmorphism Spec Rail / Quick Standards Box */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-sky-300/40 bg-white/15 backdrop-blur-md p-5 sm:p-6 shadow-xl shadow-blue-950/40 space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-200">
                      Governing Codes &amp; Standards
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-400/20 text-sky-200 border border-sky-300/30 font-bold">
                    VERIFIED
                  </span>
                </div>

                {/* Pill Chips for Governing Codes */}
                {product.standards && product.standards.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.standards.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-sky-950/60 text-sky-100 font-mono text-xs font-semibold border border-sky-400/30 shadow-2xs hover:border-sky-300 transition-colors"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-xs font-mono text-sky-200">ISO 9001:2015 &amp; IS Standards</span>
                )}

                {product.grade && (
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-300 block mb-1">
                      Build Grade / Standard
                    </span>
                    <p className="text-xs font-medium text-white/90 leading-snug">
                      {product.grade}
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Edge Key Facts Strip (Buried specs surfaced with monospaced clarity) */}
          {keyFacts.length > 0 && (
            <div className="mt-10 pt-6 border-t border-sky-400/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {keyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-sky-300 font-bold truncate">
                      {fact.label}
                    </div>
                    <div className="text-sm sm:text-base font-black font-mono text-white mt-1 truncate">
                      {fact.value}
                    </div>
                    <div className="text-[11px] text-sky-200/80 mt-0.5 truncate font-normal">
                      {fact.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY SECTION NAVIGATOR (Horizontal scroller / desktop sticky rail)  */}
      {/* ========================================================================= */}
      <nav
        aria-label="Section Navigation"
        className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-sky-200/80 shadow-xs"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 overflow-x-auto no-scrollbar py-2">
            
            {/* Monospace Indicator */}
            <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-slate-500 mr-6 shrink-0">
              <Compass className="w-4 h-4 text-[#0284C7]" />
              <span className="font-bold uppercase tracking-wider text-[#001B79]">Section Navigator:</span>
            </div>

            {/* Nav Links */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.getElementById(item.id)
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#001B79] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#001B79] hover:bg-sky-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Direct Proposal Shortcut */}
            <div className="hidden lg:flex items-center space-x-3 ml-auto shrink-0">
              <span className="text-[11px] font-mono text-slate-500">Need sizing estimate?</span>
              <a
                href="#enquire"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#001B79] hover:bg-[#0284C7] text-white text-xs font-mono font-bold transition-all shadow-xs"
              >
                <span>REQUEST PROPOSAL</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. MAIN BODY LAYOUT (12-column grid with editorial left & sticky right)    */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ======================================================================= */}
          {/* LEFT CONTENT COLUMN (8 Columns)                                         */}
          {/* ======================================================================= */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 3A. IMAGE SHOWCASE WITH HOTSPOT OVERLAY & LIGHTBOX (With TiltedCard 3D motion on desktop) */}
            {product.image && (
              <TiltedCard maxTilt={5} perspective={1000} className="w-full">
                <div className="relative group overflow-hidden rounded-2xl border border-sky-200/80 bg-slate-900 shadow-md">
                  <div
                    className="relative cursor-pointer overflow-hidden"
                    onClick={() => setLightboxOpen(true)}
                    title="Click to zoom image"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-80 sm:h-96 md:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle technical gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="rounded-full bg-white/95 px-3 py-1 font-mono text-xs font-bold text-[#001B79] shadow-md uppercase tracking-wider border border-white/50 backdrop-blur-md">
                        {product.category}
                      </span>
                      <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-mono text-sky-300 border border-sky-400/30 backdrop-blur-md flex items-center space-x-1">
                        <Zap className="w-3 h-3 text-[#38BDF8]" />
                        <span>ENGINEERED SPEC</span>
                      </span>
                    </div>

                    {/* Hotspot Zoom Prompt */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxOpen(true)
                      }}
                      className="absolute top-4 right-4 z-10 flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-mono font-medium backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                      aria-label="Zoom View"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-sky-300" />
                      <span className="hidden sm:inline">Zoom View</span>
                    </button>

                    {/* Bottom Caption Bar */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-sky-500/30 text-white">
                      <div className="flex items-center space-x-2 text-xs font-mono font-bold text-sky-200">
                        <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                        <span className="truncate">
                          {product.grade || 'Heavy Industrial / High Breaking Capacity / CPRI Tested Standards'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0 uppercase tracking-widest">
                        MURAD NAGAR WORKS
                      </span>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            )}

            {/* LIGHTBOX MODAL */}
            {lightboxOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
                onClick={() => setLightboxOpen(false)}
              >
                <div
                  className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-sky-400/40 p-2 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between p-3 border-b border-white/10 text-white font-mono text-xs">
                    <span className="font-bold text-sky-200 uppercase">{product.name}</span>
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(false)}
                      className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-h-[75vh] object-contain rounded-xl"
                  />
                  <div className="p-3 text-center text-xs font-mono text-sky-200">
                    {product.grade || product.name}
                  </div>
                </div>
              </div>
            )}

            {/* 3B. OVERVIEW SECTION (Editorial Layout) */}
            <section
              id="overview"
              className="scroll-mt-20 rounded-2xl bg-white border border-sky-200/80 p-6 sm:p-9 shadow-sm space-y-6"
            >
              <div className="space-y-3">
                <span className="eyebrow-pill">ENGINEERING OVERVIEW</span>
                
                {/* Heading with accent bar */}
                <div className="relative pl-4 border-l-4 border-[#0284C7]">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#001B79] tracking-tight">
                    {product.name}
                  </h2>
                </div>
              </div>

              {/* Paragraph in comfortable reading width */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-3xl">
                {product.fullDescription}
              </p>

              {/* Target Process & Plant Applications Callout */}
              {product.chemicalApplication && (
                <div className="rounded-xl bg-gradient-to-r from-sky-50 via-sky-50/50 to-white p-5 border-l-4 border-[#001B79] border-t border-r border-b border-sky-200/80 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 text-[#001B79] font-bold uppercase font-mono tracking-wider mb-1.5">
                    <Activity className="w-4 h-4 text-[#0284C7]" />
                    <span>Target Process &amp; Plant Applications:</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {product.chemicalApplication}
                  </p>
                </div>
              )}
            </section>

            {/* 3C. TECHNICAL SPECIFICATIONS (Datasheet Component) */}
            {product.specifications && product.specifications.length > 0 && (
              <section
                id="specifications"
                className="scroll-mt-20 rounded-2xl bg-white border border-sky-200/80 p-6 sm:p-9 shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-sky-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#001B79] flex items-center justify-center font-bold">
                      <Sliders className="w-5 h-5 text-[#0284C7]" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#001B79]">Technical Specifications</h3>
                      <p className="text-xs text-slate-500 font-mono">Standard Engineering Parameters &amp; Verification</p>
                    </div>
                  </div>
                  
                  <span className="self-start sm:self-center px-3 py-1 rounded-full bg-sky-50 border border-sky-200 font-mono text-[11px] text-[#001B79] font-bold">
                    {product.specifications.length} PARAMETERS DOCUMENTED
                  </span>
                </div>

                {/* Datasheet Table View with horizontal smooth scroll and mobile-card styling */}
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Engineering specifications table"
                  className="overflow-x-auto rounded-xl border border-sky-200 shadow-2xs -mx-2 sm:mx-0 focus:outline-none focus:ring-1 focus:ring-sky-400"
                >
                  <table className="w-full min-w-[500px] text-xs text-left border-collapse">
                    <thead className="bg-[#001B79] text-white font-mono uppercase text-[11px] tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-bold w-12 text-center text-sky-200">#</th>
                        <th className="py-3.5 px-4 font-bold w-2/5">Parameter</th>
                        <th className="py-3.5 px-4 font-bold">Standard Engineering Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sky-100">
                      {product.specifications.map((spec, idx) => {
                        const paramLabel = spec.key || spec.label || spec.name || 'Specification'
                        const SIcon = getSpecIcon(paramLabel, idx)
                        const indexFormatted = String(idx + 1).padStart(2, '0')
                        const isEven = idx % 2 === 0

                        return (
                          <tr
                            key={idx}
                            className={`transition-colors hover:bg-sky-50/80 ${
                              isEven ? 'bg-white' : 'bg-sky-50/30'
                            }`}
                          >
                            {/* Numbered Monospace Index */}
                            <td className="py-3.5 px-4 font-mono font-bold text-center text-slate-600 text-[11px]">
                              {indexFormatted}
                            </td>

                            {/* Parameter Label with Icon */}
                            <td className="py-3.5 px-4">
                              <div className="flex items-center space-x-2.5">
                                <span className="p-1 rounded bg-sky-100/70 text-[#001B79] shrink-0">
                                  <SIcon className="w-3.5 h-3.5 text-[#0284C7]" />
                                </span>
                                <span className="font-bold text-slate-800 text-xs sm:text-sm">
                                  {paramLabel}
                                </span>
                              </div>
                            </td>

                            {/* Standard Engineering Value verbatim in Bold Mono */}
                            <td className="py-3.5 px-4 font-mono font-bold text-slate-900 text-xs sm:text-[13px] leading-relaxed">
                              {spec.value}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Footnote on testing */}
                <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>All values adhere to CPRI type tested designs and internal QA protocols at Murad Nagar.</span>
                </div>
              </section>
            )}

            {/* 3D. DELIVERABLES (Checklist Grid 2x2 with Animated Check Icons) */}
            {product.deliverables && product.deliverables.length > 0 && (
              <section
                id="deliverables"
                className="scroll-mt-20 rounded-2xl bg-white border border-sky-200/80 p-6 sm:p-9 shadow-sm space-y-6"
              >
                <div className="flex items-center space-x-3 text-[#001B79] border-b border-sky-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#001B79] flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5 text-[#0284C7]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black">Standard Package Deliverables</h3>
                    <p className="text-xs text-slate-500 font-mono">Documentation, certification &amp; handover scope</p>
                  </div>
                </div>

                {/* 2x2 Grid of Deliverable Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.deliverables.map((del, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
                      transition={{ duration: 0.7, delay: (idx % 5) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-start space-x-3.5 p-4 rounded-xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/50 hover:border-sky-300 hover:shadow-md transition-all"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          DELIVERABLE // 0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {del}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* ======================================================================= */}
          {/* RIGHT SIDEBAR (4 Columns) - Sticky on Desktop                           */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            
            {/* 3E. GOVERNING CODES CARD */}
            {product.standards && product.standards.length > 0 && (
              <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm space-y-3.5">
                <div className="flex items-center space-x-2 text-[#001B79]">
                  <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Governing Codes</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-sky-50 text-[#001B79] font-mono text-xs font-bold border border-sky-200 shadow-2xs hover:bg-sky-100 transition-colors"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 3F. STICKY ENQUIRY CARD WITH ACCENT GLOW */}
            <div
              id="enquire"
              className="scroll-mt-24 rounded-2xl border border-sky-300 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] p-6 sm:p-7 text-white shadow-xl shadow-blue-900/30 space-y-4 relative overflow-hidden"
            >
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-200 block">
                PROCUREMENT SIZING
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white leading-snug">
                Enquire for {product.name}
              </h4>
              <p className="text-xs text-sky-100 leading-relaxed font-normal">
                Request custom GA drawings, technical datasheets, or budgetary estimates from our works engineers.
              </p>
              
              <Link
                to="/contact"
                className="block text-center py-3.5 rounded-xl bg-white text-[#001B79] font-bold text-xs uppercase tracking-wider hover:bg-sky-50 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                REQUEST TECHNICAL PROPOSAL
              </Link>
            </div>

            {/* 3G. OTHER PRODUCT PACKAGES (Visual Switcher with hover slide) */}
            <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-sky-100 pb-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#001B79]">
                  Other Product Packages
                </h4>
                <Link
                  to="/products"
                  className="text-[11px] font-mono text-[#0369A1] hover:underline font-bold"
                >
                  All (10)
                </Link>
              </div>

              <div className="space-y-2">
                {otherProducts.map((p) => (
                  <Link
                    key={p.slug}
                    to="/products/$productId"
                    params={{ productId: p.slug }}
                    className="group flex items-start space-x-3 p-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-sky-50 hover:text-[#001B79] transition-all border border-transparent hover:border-sky-200"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-100 text-[#001B79] group-hover:bg-[#001B79] group-hover:text-white transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="leading-snug group-hover:translate-x-1 transition-transform">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-600 group-hover:text-[#001B79] font-medium mt-0.5 truncate">
                        {p.category}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CTA BANNER (Diagonal gradient, circuit pattern, 3 trust chips)         */}
      {/* ========================================================================= */}
      <CTASection />

    </div>
  )
}
