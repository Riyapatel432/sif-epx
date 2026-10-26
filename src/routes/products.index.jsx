import { useState, useMemo } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { 
  Search, 
  LayoutGrid, 
  List, 
  SlidersHorizontal, 
  RotateCcw,
  Sparkles,
  Layers,
  ShieldCheck,
  Building2,
  Factory,
  ChevronDown,
  X,
  Sliders,
  Filter
} from 'lucide-react'

import Breadcrumbs from '../components/Breadcrumbs'
import StandardsBadgeBar from '../components/StandardsBadgeBar'
import ProductCard from '../components/ProductCard'
import ProductFacilityBanner from '../components/ProductFacilityBanner'
import CTASection from '../components/CTASection'
import HeroAnchorNav from '../components/HeroAnchorNav'
import { ChipScroller } from '../components/ui/ChipScroller'
import { MobileDropdown } from '../components/ui/MobileDropdown'
import { MobileBottomSheet } from '../components/ui/MobileBottomSheet'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'
import { productsData, productCategories } from '../data/productsData'

// React Bits Components
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import TiltedCard from '../components/reactbits/TiltedCard'
import Magnet from '../components/reactbits/Magnet'
import CountUp from '../components/reactbits/CountUp'
import AnimatedContent from '../components/reactbits/AnimatedContent'
import AuroraWaves from '../components/reactbits/AuroraWaves'

export const Route = createFileRoute('/products/')({
  head: () => ({
    meta: [
      {
        title: 'Industrial Products & Manufactured Systems | SIF Systems - SIF-EPX Group',
      },
      {
        name: 'description',
        content:
          'HT/LT Electrical Panels, Intelligent MCCs, S-88 Batch Automation Systems, Reaction Skids, and High-Breaking Capacity Switchgear.',
      },
      {
        property: 'og:title',
        content: 'Industrial Products & Manufactured Systems | SIF Systems - SIF-EPX Group',
      },
      {
        property: 'og:description',
        content:
          'HT/LT Electrical Panels, Intelligent MCCs, S-88 Batch Automation Systems, Reaction Skids, and High-Breaking Capacity Switchgear.',
      },
    ],
  }),
  component: ProductsIndexPage,
})

function ProductsIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'list'
  const [visibleProductCount, setVisibleProductCount] = useState(4)
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false)
  const [selectedProductForSheet, setSelectedProductForSheet] = useState(null)

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.chemicalApplication &&
          product.chemicalApplication.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.grade && product.grade.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (product.standards &&
          product.standards.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts = { 'All Categories': productsData.length }
    productsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  const mobileProductsToShow = filteredProducts.slice(0, visibleProductCount)

  return (
    <div className="min-h-screen bg-[#EAF4FF] text-slate-900 font-sans selection:bg-[#1E40D8] selection:text-white">

      {/* ========================================================================= */}
      {/* 1. HERO WITH AURORAWAVES + BLURTEXT + CHIPSCROLLER                        */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
        <AuroraWaves speed={0.007} />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(30,64,216,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
          <div>
            <Breadcrumbs items={[{ label: 'Products & Switchgear' }]} />
          </div>

          <div className="max-w-4xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-sky-200 font-bold">
                  PRODUCTS &amp; SWITCHGEAR
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#1E40D8]/90 text-white text-[11px] font-mono font-bold border border-sky-300/30 shadow-xs">
                <ShinyText text="Murad Nagar Works Bay" speed={4} />
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-[11px] font-mono font-bold border border-emerald-400/30">
                IEC 61439 Form 4b Tested
              </span>
            </div>

            <h1 className="text-[clamp(1.9rem,8vw,3.75rem)] font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text="Products, Switchgear & Engineered Skids"
                delay={40}
                direction="top"
                className="text-white"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
              Standardized engineering packages, Form 4b type-tested switchboards, turnkey process skids, and automation hardware engineered at our Murad Nagar Works.
            </p>
          </div>

          {/* Hero Anchor Navigation */}
          <div className="pt-3 border-t border-[#22B8F0]/20">
            <HeroAnchorNav
              items={productCategories.map((cat) => ({
                id: cat,
                label: `${cat} (${categoryCounts[cat] || 0})`,
              }))}
              activeId={selectedCategory}
              onSelect={(cat) => {
                setSelectedCategory(cat)
                setVisibleProductCount(4)
              }}
              ariaLabel="Product categories quick navigation"
            />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STANDARDS CERTIFICATION RAIL (Shared Section A)                        */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-10 bg-sif-standards border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <StandardsBadgeBar />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WORKS FACILITY HIGHLIGHTS BANNER                                       */}
      {/* ========================================================================= */}
      <section className="py-6 sm:py-8 bg-white border-b border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ProductFacilityBanner />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEARCH & FILTER CONTROLS BAR (Sticky & App-like)                       */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-12 bg-sif-sector-grid">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <div className="rounded-2xl border border-sky-200/90 bg-white p-3.5 sm:p-5 shadow-sm space-y-3">
            
            {/* Search Input + Action Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products, switchgear ratings, codes (e.g. IEC 61439, PCC)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setVisibleProductCount(4)
                  }}
                  className="w-full pl-10 pr-10 py-2.5 text-base sm:text-xs rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-[#1E40D8] bg-sky-50/40 text-slate-900 placeholder:text-slate-400 min-h-[44px]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Controls bar: Results line + Filter Bottom Sheet Trigger + Grid/List toggle */}
              <div className="flex items-center justify-between md:justify-end gap-2.5 shrink-0">
                <span className="text-xs font-mono font-bold text-[#0B1F6B] bg-sky-50 px-3 py-2 rounded-xl border border-sky-200 truncate">
                  Showing {filteredProducts.length} of {productsData.length} packages
                </span>

                {/* Mobile Filter Button */}
                <button
                  type="button"
                  onClick={() => setIsFilterSheetOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-100/70 border border-sky-200 text-[#0B1F6B] font-mono text-xs font-bold min-h-[40px] cursor-pointer"
                >
                  <Filter className="w-3.5 h-3.5 text-[#1E40D8]" />
                  <span>Filters</span>
                </button>

                {/* Grid / List Mode Toggle */}
                <div className="flex items-center gap-1 rounded-xl border border-sky-200 p-1 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid View"
                    className={`p-2 rounded-lg transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center ${
                      viewMode === 'grid'
                        ? 'bg-[#0B1F6B] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    aria-label="List View"
                    className={`p-2 rounded-lg transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center ${
                      viewMode === 'list'
                        ? 'bg-[#0B1F6B] text-white shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Chips Bar (ChipScroller for all viewports, one-row scrollable with no cut-off chips) */}
            <div className="pt-3 border-t border-sky-100">
              <ChipScroller
                items={productCategories.map((cat) => ({
                  id: cat,
                  label: `${cat} (${categoryCounts[cat] || 0})`,
                }))}
                activeId={selectedCategory}
                onSelect={(cat) => {
                  setSelectedCategory(cat)
                  setVisibleProductCount(4)
                }}
                itemClassName="min-h-[40px] text-xs font-mono font-bold"
                activeClassName="bg-[#0B1F6B] text-white border-[#1E40D8] shadow-sm"
                inactiveClassName="bg-sky-50/80 text-slate-700 border-sky-200/90 hover:bg-sky-100"
                ariaLabel="Catalogue category filter"
              />
            </div>

            {/* Mobile Active Filter Badge (if not All Categories) */}
            {selectedCategory !== 'All Categories' && (
              <div className="lg:hidden flex items-center justify-between text-xs font-mono pt-1 text-[#0B1F6B]">
                <span className="flex items-center gap-1">
                  <span className="text-slate-500">Active filter:</span>
                  <span className="font-bold underline">{selectedCategory}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All Categories')}
                  className="text-rose-600 font-bold hover:underline"
                >
                  Clear
                </button>
              </div>
            )}

          </div>

          {/* =================================================================== */}
          {/* MOBILE VIEW (< 1024px): 1-Col / 2-Col Compact Cards with Load More   */}
          {/* =================================================================== */}
          <div className="block lg:hidden space-y-4">
            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl bg-white border border-sky-200 p-8 text-center max-w-sm mx-auto space-y-3 shadow-xs">
                <span className="eyebrow-pill">NO MATCHING PACKAGES</span>
                <h3 className="text-lg font-bold text-[#0B1F6B]">No packages found</h3>
                <p className="text-xs text-slate-600">
                  No packages matched &ldquo;{searchQuery}&rdquo;. Try another search or reset filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All Categories')
                    setSearchQuery('')
                  }}
                  className="btn-pill-primary text-xs py-2 px-4"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-2.5 sm:gap-4' : 'space-y-3.5'}>
                  {mobileProductsToShow.map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                      index={idx}
                      onOpenDossier={(p) => setSelectedProductForSheet(p)}
                    />
                  ))}
                </div>

                {/* Load More Button for Mobile Products (4 at a time) */}
                {filteredProducts.length > visibleProductCount && (
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleProductCount((prev) => prev + 4)}
                      className="w-full flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[46px] shadow-2xs cursor-pointer"
                    >
                      <span>Load More Products ({filteredProducts.length - visibleProductCount} remaining)</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* =================================================================== */}
          {/* DESKTOP VIEW (>= 1024px): Full Bento Grid or List                    */}
          {/* =================================================================== */}
          <div className="hidden lg:block">
            {filteredProducts.length === 0 ? (
              <div className="rounded-[20px] bg-white border border-sky-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
                <span className="eyebrow-pill">NO MATCHING PACKAGES</span>
                <h3 className="text-xl font-bold text-[#0B1F6B]">No engineering packages found</h3>
                <p className="text-xs text-slate-600">
                  No product packages matched &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All Categories')
                    setSearchQuery('')
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0B1F6B] text-white font-mono text-xs font-bold hover:bg-[#1E40D8] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'list' ? (
              <div className="space-y-6">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} viewMode="list" index={idx} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className="h-full">
                    <ProductCard product={product} viewMode="grid" index={idx} />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TURNKEY MANUFACTURING ASSURANCE STRIP (MobileSnapSlider on mobile)     */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-18 bg-white border-t border-sky-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <MobileSnapSlider
            desktopClassName="lg:grid lg:grid-cols-3 lg:gap-6"
            itemWidth="w-[85vw] max-w-[340px]"
            ariaLabel="Manufacturing Assurance Pillars"
          >
            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={300}
              className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-7 shadow-xs hover:border-[#1E40D8] transition-all space-y-3 h-full text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0B1F6B] font-black font-mono text-sm">
                01
              </div>
              <h4 className="text-base font-black text-[#0B1F6B]">In-House Works Fabrication</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Manufactured at Murad Nagar Works with complete 9-tank pre-treatment, powder coating line, and CPRI tested designs.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={300}
              className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-7 shadow-xs hover:border-[#1E40D8] transition-all space-y-3 h-full text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0B1F6B] font-black font-mono text-sm">
                02
              </div>
              <h4 className="text-base font-black text-[#0B1F6B]">100% Factory Routine Tested</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every switchboard and skid undergoes visual, insulation resistance, high voltage (HV withstand), and functional simulation before dispatch.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(34, 184, 240, 0.22)"
              size={300}
              className="rounded-[20px] border border-sky-200/90 bg-white p-5 sm:p-7 shadow-xs hover:border-[#1E40D8] transition-all space-y-3 h-full text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0B1F6B] font-black font-mono text-sm">
                03
              </div>
              <h4 className="text-base font-black text-[#0B1F6B]">Complete Engineering Dossiers</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Supplied with approved GA drawings, busbar thermal dissipation calculations, SLDs, wiring schematics, and bilingual O&amp;M manuals.
              </p>
            </SpotlightCard>
          </MobileSnapSlider>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CTA BANNER (Shared Section B)                                          */}
      {/* ========================================================================= */}
      <CTASection />

      {/* ========================================================================= */}
      {/* 7. MOBILE FILTER BOTTOM SHEET (Triggered by Filters button)               */}
      {/* ========================================================================= */}
      <MobileBottomSheet
        isOpen={isFilterSheetOpen}
        onClose={() => setIsFilterSheetOpen(false)}
        title="Filter Product Categories"
        subtitle="SELECT RELEVANT DOMAIN"
      >
        <div className="space-y-3">
          <div className="space-y-1.5 max-h-[50vh] overflow-y-auto no-scrollbar">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat)
                    setIsFilterSheetOpen(false)
                    setVisibleProductCount(4)
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-mono font-bold text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B1F6B] text-white'
                      : 'bg-sky-50/60 hover:bg-sky-100 text-slate-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#0B1F6B]'
                  }`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Categories')
                setIsFilterSheetOpen(false)
                setVisibleProductCount(4)
              }}
              className="flex-1 py-3 px-4 rounded-xl border border-sky-200 text-slate-700 font-mono text-xs font-bold hover:bg-sky-50"
            >
              Reset Filter
            </button>
            <button
              type="button"
              onClick={() => setIsFilterSheetOpen(false)}
              className="btn-pill-primary flex-1 text-xs"
            >
              Done
            </button>
          </div>
        </div>
      </MobileBottomSheet>

      {/* ========================================================================= */}
      {/* 8. MOBILE PRODUCT DOSSIER BOTTOM SHEET (Triggered by View Dossier)        */}
      {/* ========================================================================= */}
      <MobileBottomSheet
        isOpen={Boolean(selectedProductForSheet)}
        onClose={() => setSelectedProductForSheet(null)}
        title={selectedProductForSheet?.name}
        subtitle={selectedProductForSheet?.category}
      >
        {selectedProductForSheet && (
          <div className="space-y-4 text-left">
            {/* Image Preview */}
            {selectedProductForSheet.image && (
              <div className="h-40 rounded-xl overflow-hidden bg-slate-950 border border-sky-100">
                <img
                  src={selectedProductForSheet.image}
                  alt={selectedProductForSheet.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <p className="text-xs text-slate-700 leading-relaxed bg-sky-50/50 p-3 rounded-xl border border-sky-100">
              {selectedProductForSheet.fullDescription || selectedProductForSheet.shortDescription}
            </p>

            {/* Target Focus */}
            {selectedProductForSheet.chemicalApplication && (
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-[#0B1F6B] block">
                  Target Applications:
                </span>
                <p className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-sky-100">
                  {selectedProductForSheet.chemicalApplication}
                </p>
              </div>
            )}

            {/* Key Specifications (Stacked label-over-value with full wrapping) */}
            {selectedProductForSheet.specifications && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[#0B1F6B] block">
                  Technical Specifications:
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar">
                  {selectedProductForSheet.specifications.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white border border-sky-100 space-y-0.5">
                      <div className="font-mono text-[10px] uppercase font-bold text-slate-500">
                        {spec.key}
                      </div>
                      <div className="font-mono text-xs font-bold text-[#0B1F6B] break-words">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Governing Codes */}
            {selectedProductForSheet.standards && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                  Governing Codes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProductForSheet.standards.map((std, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-sky-50 border border-sky-200 text-[#0B1F6B] font-mono text-[10px] font-bold">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Row */}
            <div className="pt-2 flex gap-2">
              <a
                href={`/products/${selectedProductForSheet.slug}`}
                className="btn-pill-primary flex-1 text-xs text-center justify-center min-h-[44px]"
              >
                Full Product Page
              </a>
              <a
                href="/contact"
                className="flex-1 py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#0B1F6B] font-mono text-xs font-bold text-center flex items-center justify-center min-h-[44px]"
              >
                RFQ Estimate
              </a>
            </div>
          </div>
        )}
      </MobileBottomSheet>

    </div>
  )
}
