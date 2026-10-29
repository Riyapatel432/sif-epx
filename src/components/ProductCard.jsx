import { useState, useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Sliders, 
  ExternalLink,
  ChevronDown,
  Info,
  Tag,
  Factory
} from 'lucide-react'

import SpotlightCard from './reactbits/SpotlightCard'
import TiltedCard from './reactbits/TiltedCard'
import CountUp from './reactbits/CountUp'

export function ProductCard({ product, viewMode = 'grid', isFeatured = false, index = 0, onOpenDossier }) {
  const [showQuickSpecs, setShowQuickSpecs] = useState(false)
  const [isExpandedDescription, setIsExpandedDescription] = useState(false)

  // Map icons based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Electrical Panels & Switchgear':
      case 'Electrical & Power Distribution':
        return <Cpu className="w-3.5 h-3.5 text-[#1E40D8]" />
      case 'Plant Automation & Controls':
      case 'BIM & Digital Twin Packages':
        return <Activity className="w-3.5 h-3.5 text-[#0B1F6B]" />
      case 'Civil & Structural Engineering':
      case 'Piping & Mechanical Solutions':
        return <Layers className="w-3.5 h-3.5 text-cyan-600" />
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-[#0B1F6B]" />
    }
  }

  // Key highlight specs (pick first 2-3)
  const highlightSpecs = useMemo(() => {
    if (!product.specifications || product.specifications.length === 0) return []
    return product.specifications.slice(0, 3)
  }, [product.specifications])

  // Key standards (pick first 3)
  const displayStandards = useMemo(() => {
    if (!product.standards || product.standards.length === 0) return []
    return product.standards.slice(0, 3)
  }, [product.standards])

  /* ---------------- MOBILE COMPACT CARD (Below 1024px) ---------------- */
  const renderMobileCompactCard = () => {
    const isGrid = viewMode === 'grid'
    return (
      <div className="lg:hidden w-full rounded-[18px] border border-sky-200/90 bg-white p-3.5 sm:p-4 shadow-xs flex flex-col justify-between overflow-hidden relative sector-card-corner">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0]" />

        <div className="space-y-2.5">
          {/* Image Thumbnail (16:9, lazy) */}
          {product.image && (
            <div className={`relative w-full ${isGrid ? 'aspect-[16/10]' : 'aspect-[16/9]'} rounded-xl overflow-hidden bg-slate-950 border border-sky-100`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Category Badge */}
              <div className="absolute top-2 left-2 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 font-mono text-[9px] font-bold text-[#0B1F6B] shadow-xs uppercase">
                  {getCategoryIcon(product.category)}
                  <span className="truncate max-w-[120px]">{product.category}</span>
                </span>
              </div>

              {/* Package code */}
              <div className="absolute bottom-1.5 right-2 z-10">
                <span className="rounded bg-black/60 backdrop-blur-xs px-1.5 py-0.5 font-mono text-[9px] text-sky-200">
                  PKG 0{index + 1}
                </span>
              </div>
            </div>
          )}

          {/* Package Title */}
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#0B1F6B] leading-snug line-clamp-2">
              <Link to="/products/$productId" params={{ productId: product.slug }}>
                {product.name}
              </Link>
            </h3>
          </div>

          {/* 2-line clamped description with Read more */}
          <div className="text-xs text-slate-600 leading-relaxed font-normal">
            <p className={isExpandedDescription ? 'text-slate-700' : 'line-clamp-2'}>
              {product.shortDescription}
            </p>
            {product.shortDescription && product.shortDescription.length > 70 && (
              <button
                type="button"
                onClick={() => setIsExpandedDescription(!isExpandedDescription)}
                className="text-[11px] font-mono font-bold text-[#1E40D8] hover:underline mt-0.5 cursor-pointer"
              >
                {isExpandedDescription ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons: View Dossier (opens Bottom Sheet) + RFQ Estimate in one row */}
        <div className="pt-3 mt-2.5 border-t border-sky-100 grid grid-cols-2 gap-2 text-xs font-mono">
          <button
            type="button"
            onClick={() => onOpenDossier ? onOpenDossier(product) : null}
            className="w-full inline-flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-gradient-to-r from-[#0B1F6B] to-[#1E40D8] text-white text-[11px] font-bold uppercase tracking-wider min-h-[44px] cursor-pointer shadow-xs active:scale-[0.98] transition-transform"
          >
            <span>Dossier</span>
            <ArrowRight className="w-3 h-3 shrink-0" />
          </button>
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center py-2 px-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0B1F6B] text-[11px] font-mono font-bold border border-sky-200 min-h-[44px] text-center active:scale-[0.98] transition-all"
          >
            RFQ Estimate
          </Link>
        </div>
      </div>
    )
  }

  /* ---------------- DESKTOP LIST VIEW MODE (>= 1024px) ---------------- */
  if (viewMode === 'list') {
    return (
      <>
        {renderMobileCompactCard()}
        <div className="hidden lg:block">
          <TiltedCard maxTilt={3} perspective={1000}>
            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.18)"
              size={400}
              className="group relative rounded-[20px] border border-sky-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row items-stretch gap-6 overflow-hidden sector-card-corner"
            >
              {/* Top Sweeping Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />

              {/* Left Thumbnail */}
              {product.image && (
                <div className="relative w-full lg:w-72 h-48 lg:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-sky-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-[#0B1F6B] shadow-xs uppercase">
                      {getCategoryIcon(product.category)}
                      <span>{product.category}</span>
                    </span>
                  </div>
                  {product.grade && (
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="block truncate rounded bg-slate-900/90 px-2 py-0.5 text-[10px] font-mono text-sky-200 backdrop-blur-md border border-sky-400/30">
                        {product.grade}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Middle Content */}
              <div className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block px-2 py-0.5 rounded bg-sky-100/80 text-[10px] font-mono font-bold text-[#0B1F6B]">
                      PKG // {product.slug}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-bold text-emerald-800 border border-emerald-200">
                      Murad Nagar Works
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors leading-snug">
                    <Link to="/products/$productId" params={{ productId: product.slug }}>
                      {product.name}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {product.shortDescription}
                  </p>

                  {product.chemicalApplication && (
                    <div className="mt-3 text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="font-mono text-[10px] font-bold uppercase text-[#0B1F6B] shrink-0 mt-0.5">
                        Target:
                      </span>
                      <span className="text-slate-600 line-clamp-1">{product.chemicalApplication}</span>
                    </div>
                  )}
                </div>

                {/* Quick Specs Strip */}
                {highlightSpecs.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3 border-t border-sky-100 text-xs">
                    {highlightSpecs.map((spec, i) => (
                      <div key={i} className="rounded-xl bg-sky-50/70 p-2.5 border border-sky-200/60">
                        <div className="font-mono text-[9px] uppercase font-bold text-slate-500 truncate">{spec.key}</div>
                        <div className="font-mono text-[11px] font-bold text-[#0B1F6B] truncate mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Action Column */}
              <div className="lg:w-56 shrink-0 flex flex-col justify-between pt-4 lg:pt-0 lg:border-l lg:border-sky-100 lg:pl-6 space-y-4 relative z-10">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 block mb-2">
                    Governing Codes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {displayStandards.map((std, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <Link
                    to="/products/$productId"
                    params={{ productId: product.slug }}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0B1F6B] to-[#1E40D8] hover:from-[#1E40D8] hover:to-[#0B1F6B] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center py-2 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0B1F6B] text-xs font-mono font-bold transition-all border border-sky-200 text-center"
                  >
                    RFQ Estimate
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </TiltedCard>
        </div>
      </>
    )
  }

  /* ---------------- DESKTOP GRID / BENTO CARD MODE (>= 1024px) ---------------- */
  return (
    <>
      {renderMobileCompactCard()}
      <div className="hidden lg:block h-full">
        <TiltedCard maxTilt={4} perspective={900} className="h-full">
          <SpotlightCard
            spotlightColor="rgba(34, 184, 240, 0.22)"
            size={350}
            className={`group relative overflow-hidden rounded-[20px] border border-sky-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between sector-card-corner h-full ${
              isFeatured ? 'md:col-span-2' : ''
            }`}
          >
            {/* Top Sweeping Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0B1F6B] via-[#1E40D8] to-[#22B8F0] opacity-80 group-hover:h-2 transition-all duration-300" />

            {/* Faint Outline Numeral in Background like Industry Card */}
            <div className="absolute right-5 top-5 font-mono font-black text-6xl text-sky-100/70 select-none pointer-events-none group-hover:text-sky-200/80 transition-colors">
              <CountUp to={index + 1} padZero={true} duration={0.8} />
            </div>

            <div className="relative z-10 space-y-4">
              
              {/* Top Image Banner */}
              {product.image && (
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-950 border border-sky-100 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-black/20 pointer-events-none" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold text-[#0B1F6B] shadow-xs uppercase tracking-wide">
                      {getCategoryIcon(product.category)}
                      <span>{product.category}</span>
                    </span>
                  </div>

                  {/* Standard Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="rounded-full bg-slate-900/85 backdrop-blur-md px-2.5 py-1 font-mono text-[9px] font-bold text-sky-200 border border-sky-400/30 uppercase tracking-widest">
                      CPRI / ISO
                    </span>
                  </div>

                  {/* Bottom floating grade bar */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs z-10">
                    {product.grade && (
                      <span className="rounded-md bg-slate-900/90 px-2 py-0.5 text-[9px] font-mono text-sky-200 backdrop-blur-md border border-sky-400/30 truncate max-w-[200px]">
                        {product.grade}
                      </span>
                    )}
                    <span className="font-mono text-[9px] text-white/80 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                      Murad Nagar
                    </span>
                  </div>
                </div>
              )}

              {/* Header Title */}
              <div>
                <span className="text-[10px] font-mono font-bold text-[#1E40D8] uppercase tracking-wider block mb-1">
                  PACKAGE 0{index + 1} // {product.slug}
                </span>
                <h3 className="text-xl font-black text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors leading-snug">
                  <Link to="/products/$productId" params={{ productId: product.slug }}>
                    {product.name}
                  </Link>
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                {product.shortDescription}
              </p>

              {/* Interactive Quick-Specs Matrix Toggle */}
              {highlightSpecs.length > 0 && (
                <div className="rounded-xl bg-sky-50/70 border border-sky-200/70 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0B1F6B] flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-[#1E40D8]" />
                      <span>Key Specifications</span>
                    </span>
                    {product.specifications.length > 3 && (
                      <button
                        type="button"
                        onClick={() => setShowQuickSpecs(!showQuickSpecs)}
                        className="text-[10px] font-mono font-bold text-[#1E40D8] hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>{showQuickSpecs ? 'Less' : `+${product.specifications.length - 3} more`}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${showQuickSpecs ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Spec Items */}
                  <div className="space-y-1.5 pt-1">
                    {(showQuickSpecs ? product.specifications : highlightSpecs).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px] gap-2">
                        <span className="text-slate-500 font-mono text-[10px] truncate max-w-[45%]">{spec.key}:</span>
                        <span className="font-mono font-bold text-[#0B1F6B] truncate text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Chemical Application Chip with Hex / Tag Bullet */}
              {product.chemicalApplication && (
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-mono font-bold text-[#0B1F6B] uppercase flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#1E40D8]" />
                    <span>Target Focus:</span>
                  </span>
                  <p className="line-clamp-2 leading-relaxed text-slate-700 text-xs font-medium pl-4 border-l-2 border-sky-300">
                    {product.chemicalApplication}
                  </p>
                </div>
              )}

              {/* Standards & Deliverables badges */}
              {displayStandards.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold mr-1">Codes:</span>
                  {displayStandards.map((std, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-[8px] bg-sky-50 border border-sky-200 text-[#0B1F6B] font-mono text-[10px] font-bold">
                      {std}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Card Footer Actions (Active Status Pill + Button) */}
            <div className="relative z-10 pt-4 mt-6 border-t border-sky-100 flex items-center justify-between gap-3 text-xs font-mono">
              <Link
                to="/products/$productId"
                params={{ productId: product.slug }}
                className="inline-flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[#0B1F6B] group-hover:text-[#1E40D8] transition-colors"
              >
                <span>VIEW DOSSIER</span>
                <ArrowRight className="h-3.5 w-3.5 card-arrow-shift" />
              </Link>
              <Link
                to="/contact"
                className="text-[10px] font-mono font-bold text-[#1E40D8] hover:text-white hover:bg-[#0B1F6B] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 transition-colors"
              >
                RFQ ESTIMATE
              </Link>
            </div>

          </SpotlightCard>
        </TiltedCard>
      </div>
    </>
  )
}

export default ProductCard
