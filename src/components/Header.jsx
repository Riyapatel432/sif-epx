import { useState, useEffect, useId, useRef } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Cpu,
  Layers,
  Users,
  LineChart,
  Award,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sun,
  Layers3,
  CheckCircle2,
  BookmarkCheck,
  FileCheck2,
  Sparkles,
} from 'lucide-react'
import { Logo } from './Logo'
import { companyInfo } from '../data/companyData'
import { servicesData } from '../data/servicesData'
import { productsData } from '../data/productsData'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const dropdownTimeoutRef = useRef(null)
  const productsTimeoutRef = useRef(null)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(64)

  const routerState = useRouterState()
  const currentPath = routerState?.location?.pathname || '/'

  // Track window scroll & header height for precise mobile drawer alignment
  useEffect(() => {
    const updateHeaderMetrics = () => {
      setIsScrolled(window.scrollY > 20)
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    updateHeaderMetrics()
    window.addEventListener('scroll', updateHeaderMetrics, { passive: true })
    window.addEventListener('resize', updateHeaderMetrics)
    return () => {
      window.removeEventListener('scroll', updateHeaderMetrics)
      window.removeEventListener('resize', updateHeaderMetrics)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [currentPath])

  // Body scroll lock & ESC support when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Keep nav order: Home, About, Services, Products, Industries, Clients, Infrastructure, Quality, Contact.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: 'services' },
    { name: 'Products', path: '/products', hasDropdown: 'products' },
    { name: 'Infrastructure', path: '/infrastructure-methodology' },
    { name: 'Quality', path: '/quality-safety' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceIconMap = {
    Building2,
    LineChart,
    Cpu,
    Layers,
    Users,
    Zap,
    Sun,
  }

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current)
    setProductsDropdownOpen(false)
    setServicesDropdownOpen(true)
  }

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false)
    }, 150)
  }

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current)
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setServicesDropdownOpen(false)
    setProductsDropdownOpen(true)
  }

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
    }, 150)
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white shadow-sm border-slate-200/90'
          : 'bg-white lg:bg-white/95 lg:backdrop-blur-md border-slate-200/80 shadow-2xs'
      }`}
    >
      {/* Top Industrial Credential Bar (--ink-900: #1B2336) */}
      <div className="hidden border-b border-white/10 bg-[#1B2336] text-white px-4 py-2 text-xs sm:block shadow-xs">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between font-mono text-xs">
          <div className="flex items-center space-x-2.5 text-slate-300">
            <span className="text-slate-200 font-semibold">Engineering</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-semibold">Procurement</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-semibold">Construction</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-200 font-semibold">Commissioning (EPCC)</span>
          </div>

          <div className="flex items-center space-x-5 text-slate-300">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="flex items-center space-x-1.5 transition-colors hover:text-[#22B8F0]"
            >
              <Phone className="h-3.5 w-3.5 text-[#22B8F0]" />
              <span>{companyInfo.contact.phones[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${companyInfo.contact.emails[0]}`}
              className="flex items-center space-x-1.5 transition-colors hover:text-[#22B8F0]"
            >
              <Mail className="h-3.5 w-3.5 text-[#22B8F0]" />
              <span>{companyInfo.contact.emails[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-[#22B8F0]" />
              <span>{companyInfo.corporateOffice.city}, {companyInfo.corporateOffice.state}, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with SIF & EPX Brandmarks */}
          <Link to="/" className="group flex items-center shrink-0 py-1">
            <Logo className="h-12 sm:h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation Links — Smooth padding & font scaling to prevent line-wrapping between 1024px and 1280px */}
          <nav className="hidden items-center space-x-0.5 lg:flex xl:space-x-1 2xl:space-x-1.5">
            {navLinks.map((link, idx) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path))

              if (link.hasDropdown === 'services') {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      to="/services"
                      className={`relative px-2 xl:px-2.5 2xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-bold tracking-tight transition-all inline-flex items-center space-x-1 rounded-lg ${
                        isActive
                          ? 'text-blue-900 font-black'
                          : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-blue-900' : 'text-slate-400'
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-blue-700" />
                      )}
                    </Link>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[600px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 z-50">
                        {/* Section Quick Jump Bar */}
                        <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2.5 mb-3">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#001B79] mb-1.5 px-1">
                            <span className="flex items-center gap-1.5 uppercase tracking-wider text-slate-500">
                              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>Quick Section Access</span>
                            </span>
                            <Link
                              to="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="text-[#0284C7] hover:text-[#001B79] inline-flex items-center gap-1 font-sans font-bold"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <Link
                              to="/services"
                              hash="services-hero"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Layers className="w-3 h-3 text-[#0284C7]" />
                              <span>Overview &amp; Hero</span>
                            </Link>
                            <Link
                              to="/services"
                              hash="standards-compliance"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>Standards &amp; Codes</span>
                            </Link>
                            <Link
                              to="/services"
                              hash="capabilities-catalog"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Cpu className="w-3 h-3 text-[#001B79]" />
                              <span>Turnkey Packages</span>
                            </Link>
                            <Link
                              to="/contact"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-blue-900 text-white hover:bg-blue-800 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Phone className="w-3 h-3 text-sky-300" />
                              <span>Inquire / SLA</span>
                            </Link>
                          </div>
                        </div>

                        <div className="border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                            Engineering &amp; EPCC Services ({servicesData.length})
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 max-h-[360px] overflow-y-auto pr-1">
                          {servicesData.map((s) => {
                            const SIcon = serviceIconMap[s.icon] || Cpu
                            return (
                              <Link
                                key={s.slug}
                                to="/services/$serviceId"
                                params={{ serviceId: s.slug }}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="group flex items-start space-x-3 rounded-xl p-2.5 transition-colors hover:bg-blue-50/80"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                  <SIcon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-950 truncate">
                                    {s.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1">
                                    {s.subtitle}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              if (link.hasDropdown === 'products') {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <Link
                      to="/products"
                      className={`relative px-2 xl:px-2.5 2xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-bold tracking-tight transition-all inline-flex items-center space-x-1 rounded-lg ${
                        isActive
                          ? 'text-blue-900 font-black'
                          : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-blue-900' : 'text-slate-400'
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-blue-700" />
                      )}
                    </Link>

                    {/* Products Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] max-w-[95vw] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 z-50">
                        {/* Section Quick Jump Bar */}
                        <div className="bg-sky-50/80 border border-sky-100 rounded-xl p-2.5 mb-3">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#001B79] mb-1.5 px-1">
                            <span className="flex items-center gap-1.5 uppercase tracking-wider text-slate-500">
                              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>Quick Section Access</span>
                            </span>
                            <Link
                              to="/products"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="text-[#0284C7] hover:text-[#001B79] inline-flex items-center gap-1 font-sans font-bold"
                            >
                              <span>View All Products</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            <Link
                              to="/products"
                              hash="products-hero"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Layers3 className="w-3 h-3 text-[#0284C7]" />
                              <span>Product Catalog</span>
                            </Link>
                            <Link
                              to="/products"
                              hash="standards-compliance"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>Type Tests (IEC 61439)</span>
                            </Link>
                            <Link
                              to="/infrastructure-methodology"
                              hash="works-spec"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-white border border-sky-200/90 text-slate-700 hover:text-[#001B79] hover:border-[#0284C7] hover:bg-sky-50 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Building2 className="w-3 h-3 text-[#001B79]" />
                              <span>Murad Nagar Works</span>
                            </Link>
                            <Link
                              to="/contact"
                              onClick={() => setProductsDropdownOpen(false)}
                              className="px-2.5 py-1 rounded-lg bg-blue-900 text-white hover:bg-blue-800 text-xs font-semibold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                            >
                              <Phone className="w-3 h-3 text-sky-300" />
                              <span>Request Quote</span>
                            </Link>
                          </div>
                        </div>

                        <div className="border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                            Manufactured Products &amp; Systems ({productsData.length})
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                          {productsData.map((p) => (
                            <Link
                              key={p.slug}
                              to="/products/$productId"
                              params={{ productId: p.slug }}
                              onClick={() => setProductsDropdownOpen(false)}
                              className="group flex items-start space-x-3 rounded-xl p-2.5 transition-colors hover:bg-blue-50/80"
                            >
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-800 border border-sky-200/80 group-hover:bg-[#001B79] group-hover:text-white group-hover:border-[#001B79] transition-colors">
                                <Zap className="h-4 w-4" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-950 leading-snug">
                                  {p.name}
                                </div>
                                <div className="text-[10px] font-mono text-[#0284C7] font-semibold mt-0.5">
                                  {p.category}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`relative px-2 xl:px-2.5 2xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-bold tracking-tight transition-all inline-flex items-center space-x-1 ${
                    isActive
                      ? 'text-blue-900 font-black'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50 rounded-lg'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-blue-700" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button & Direct RFQ */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#001B79] px-3 py-1.5 text-xs font-bold text-white shadow-xs"
            >
              <span>RFQ</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 hover:text-blue-900 touch-target-min flex items-center justify-center transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-rose-600" /> : <Menu className="h-6 w-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Slide-down / Full-screen drawer below lg) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Tap to Close */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            style={{ top: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden shadow-2xl overflow-hidden animate-in fade-in"
          >
            {/* Top Dedicated Mobile Drawer Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-white shrink-0">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center py-0.5">
                <Logo className="h-11 sm:h-12 w-auto" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold active:scale-95 transition-all min-h-[44px] min-w-[44px] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <span>Close</span>
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </div>

            {/* Scrollable Drawer Content */}
            <div className="flex-1 overflow-y-auto px-4 pt-3 pb-safe-offset-8 no-scrollbar">
              {/* Mobile Fast Contact Ribbon */}
              <div className="mb-3 p-3 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 flex items-center justify-between text-xs font-mono">
                <span className="text-[#031A5D] font-bold">24-Hr Technical SLA</span>
                <a
                  href={`tel:${companyInfo.contact.phones[0]}`}
                  className="text-[#1E3AAE] font-bold flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1E3AAE]" />
                  <span>Direct Desk</span>
                </a>
              </div>

            <div className="space-y-1.5 pb-20">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.path === '/'
                    ? currentPath === '/'
                    : currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path))

                if (link.hasDropdown === 'services') {
                  return (
                    <div key={idx} className="rounded-2xl border border-blue-100/80 overflow-hidden bg-white/60">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-expanded={mobileServicesOpen}
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold min-h-[50px] transition-colors ${
                          mobileServicesOpen
                            ? 'bg-blue-50/90 text-[#031A5D]'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <Building2 className={`w-4 h-4 ${mobileServicesOpen ? 'text-[#1E3AAE]' : 'text-slate-500'}`} />
                          <span>{link.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-[#1E3AAE] font-bold">
                            {servicesData.length}
                          </span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 text-slate-500 ${
                            mobileServicesOpen ? 'rotate-180 text-[#1E3AAE]' : ''
                          }`}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="px-3 pt-2 pb-3 bg-gradient-to-b from-blue-50/40 to-white space-y-1.5 border-t border-blue-100 animate-in fade-in">
                          {/* Prominent View All Services Link */}
                          <Link
                            to="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between rounded-xl px-3.5 py-3 text-xs font-mono font-bold text-white bg-gradient-to-r from-[#031A5D] to-[#1E3AAE] shadow-xs min-h-[48px]"
                          >
                            <span className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-sky-300" />
                              <span>View All {servicesData.length} Engineering Services</span>
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          {/* Quick Section Shortcuts */}
                          <div className="grid grid-cols-2 gap-1.5 py-1">
                            <Link
                              to="/services"
                              hash="standards-compliance"
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2.5 py-2 rounded-lg bg-white border border-blue-200/80 text-slate-800 text-[11px] font-semibold flex items-center gap-1.5 shadow-2xs"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">Standards &amp; Codes</span>
                            </Link>
                            <Link
                              to="/services"
                              hash="capabilities-catalog"
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2.5 py-2 rounded-lg bg-white border border-blue-200/80 text-slate-800 text-[11px] font-semibold flex items-center gap-1.5 shadow-2xs"
                            >
                              <Cpu className="w-3.5 h-3.5 text-[#001B79] shrink-0" />
                              <span className="truncate">Turnkey Packages</span>
                            </Link>
                          </div>

                          {/* Child Services Links */}
                          <div className="space-y-1 pt-1">
                            {servicesData.map((s) => {
                              const SIcon = serviceIconMap[s.icon] || Cpu
                              const isServiceActive = currentPath === `/services/${s.slug}`

                              return (
                                <Link
                                  key={s.slug}
                                  to="/services/$serviceId"
                                  params={{ serviceId: s.slug }}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-start space-x-3 rounded-xl px-3 py-2.5 min-h-[48px] transition-colors ${
                                    isServiceActive
                                      ? 'bg-blue-100/90 text-[#031A5D] font-bold'
                                      : 'text-slate-800 hover:bg-blue-50/60'
                                  }`}
                                >
                                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-[#1E3AAE]">
                                    <SIcon className="h-4 w-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold leading-snug">
                                      {s.title}
                                    </div>
                                    <div className="text-[11px] text-slate-500 line-clamp-1 font-normal leading-normal mt-0.5">
                                      {s.subtitle}
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                if (link.hasDropdown === 'products') {
                  return (
                    <div key={idx} className="rounded-2xl border border-sky-100/80 overflow-hidden bg-white/60">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        aria-expanded={mobileProductsOpen}
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold min-h-[50px] transition-colors ${
                          mobileProductsOpen
                            ? 'bg-sky-50/90 text-[#031A5D]'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <Zap className={`w-4 h-4 ${mobileProductsOpen ? 'text-[#0284C7]' : 'text-slate-500'}`} />
                          <span>{link.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-[#0284C7] font-bold">
                            {productsData.length}
                          </span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 text-slate-500 ${
                            mobileProductsOpen ? 'rotate-180 text-[#0284C7]' : ''
                          }`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="px-3 pt-2 pb-3 bg-gradient-to-b from-sky-50/40 to-white space-y-1.5 border-t border-sky-100 animate-in fade-in">
                          {/* Prominent View All Products Link */}
                          <Link
                            to="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between rounded-xl px-3.5 py-3 text-xs font-mono font-bold text-white bg-gradient-to-r from-[#031A5D] via-[#023E92] to-[#0284C7] shadow-xs min-h-[48px]"
                          >
                            <span className="flex items-center gap-2">
                              <ShieldCheck className="w-4 h-4 text-sky-200" />
                              <span>View All {productsData.length} Products &amp; Switchgear</span>
                            </span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          {/* Quick Section Shortcuts */}
                          <div className="grid grid-cols-2 gap-1.5 py-1">
                            <Link
                              to="/products"
                              hash="standards-compliance"
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2.5 py-2 rounded-lg bg-white border border-sky-200/80 text-slate-800 text-[11px] font-semibold flex items-center gap-1.5 shadow-2xs"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">Type Tests (IEC)</span>
                            </Link>
                            <Link
                              to="/infrastructure-methodology"
                              hash="works-spec"
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-2.5 py-2 rounded-lg bg-white border border-sky-200/80 text-slate-800 text-[11px] font-semibold flex items-center gap-1.5 shadow-2xs"
                            >
                              <Building2 className="w-3.5 h-3.5 text-[#001B79] shrink-0" />
                              <span className="truncate">Works Bay</span>
                            </Link>
                          </div>

                          {/* Child Products Links */}
                          <div className="space-y-1 pt-1 max-h-[340px] overflow-y-auto no-scrollbar">
                            {productsData.map((p) => {
                              const isProductActive = currentPath === `/products/${p.slug}`

                              return (
                                <Link
                                  key={p.slug}
                                  to="/products/$productId"
                                  params={{ productId: p.slug }}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`flex items-start space-x-3 rounded-xl px-3 py-2.5 min-h-[48px] transition-colors ${
                                    isProductActive
                                      ? 'bg-sky-100/90 text-[#031A5D] font-bold'
                                      : 'text-slate-800 hover:bg-sky-50/60'
                                  }`}
                                >
                                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-[#0284C7]">
                                    <Zap className="h-4 w-4" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold leading-snug">
                                      {p.name}
                                    </div>
                                    <div className="text-[11px] text-[#0284C7] font-mono font-medium line-clamp-1 mt-0.5">
                                      {p.category}
                                    </div>
                                  </div>
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={idx}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold min-h-[48px] transition-colors ${
                      isActive
                        ? 'bg-[#1E3AAE]/10 text-[#1E3AAE] border border-[#1E3AAE]/20'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#1E3AAE] shadow-xs" />}
                  </Link>
                )
              })}

              {/* Quick Connect Actions in Drawer */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#031A5D] text-white py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider shadow-md min-h-[48px] active:scale-[0.99]"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#22B8F0]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider min-h-[44px] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                  <span>Close Navigation Menu</span>
                </button>
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
