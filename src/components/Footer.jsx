import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  MapPin,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  Sparkles,
  Send,
  CheckCircle2,
  Navigation,
  Globe,
  Building2,
  Layers,
  Clock,
  Compass
} from 'lucide-react'
import { Logo } from './Logo'
import { companyInfo } from '../data/companyData'
import { servicesData } from '../data/servicesData'
import LordIcon from './LordIcon'

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [mobileOfficesOpen, setMobileOfficesOpen] = useState(false)
  const [mobileQuickOpen, setMobileQuickOpen] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setNewsletterEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About SIF-EPX', path: '/about' },
    { name: 'Services Overview', path: '/services' },
    { name: 'Products & Switchgear', path: '/products' },
    { name: 'Industries Served', path: '/industries' },
    { name: 'Esteemed Clients', path: '/clients' },
    { name: 'Infrastructure & Works', path: '/infrastructure-methodology' },
    { name: 'Quality & Safety', path: '/quality-safety' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const industryLinks = [
    { name: 'Specialty Chemicals & Process', path: '/industries' },
    { name: 'Life Sciences & Pharma', path: '/industries' },
    { name: 'Consumer Packaged Goods', path: '/industries' },
    { name: 'Automotive & Rubber', path: '/industries' },
    { name: 'Metals, Mining & Cement', path: '/industries' },
    { name: 'Power & Substation Automation', path: '/industries' },
    { name: 'Solar & Renewable EPC', path: '/industries' },
    { name: 'Oil & Gas (Non-HT)', path: '/industries' },
  ]

  return (
    <footer className="relative border-t border-[#22B8F0]/30 bg-[#0B1F6B] text-white font-sans overflow-hidden">
      
      {/* Background Engineering Blueprint Grid & Soft Atmospheric Glows */}
      <div className="absolute inset-0 bg-dark-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#1E40D8]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#22B8F0]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. Technical Newsletter & RFQ Dispatch Banner */}
      <div className="relative z-10 border-b border-white/20 bg-white/10 backdrop-blur-md px-4 py-5 sm:py-6 sm:px-6 lg:px-8 shadow-sm">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Left Headline (Single Line Merged on Desktop) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <div className="inline-flex items-center space-x-1.5 rounded-full bg-white/15 border border-white/30 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-2xs shrink-0 self-center sm:self-auto">
                <Sparkles className="h-3 w-3 text-[#22B8F0]" />
                <span>TECHNICAL BULLETIN</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                  Stay Updated on Process Engineering &amp; Plant Standards
                </h3>
                <p className="text-xs text-sky-100 font-normal leading-normal">
                  Quarterly technocrat digest featuring DBR methodologies, ASME updates, and EPC case studies.
                </p>
              </div>
            </div>

            {/* Right Newsletter Input Form */}
            <div className="w-full lg:w-auto shrink-0">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 items-center">
                <div className="relative w-full sm:w-72 md:w-80">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    <LordIcon
                      src="https://cdn.lordicon.com/diihvcfp.json"
                      trigger="hover"
                      primaryColor="#1E40D8"
                      secondaryColor="#22B8F0"
                      size={16}
                      stroke={60}
                      fallback={<Mail className="h-3.5 w-3.5 text-[#1E40D8]" />}
                    />
                  </div>
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter official work email..."
                    className="w-full h-10 rounded-xl border border-white/40 bg-white pl-9 pr-3 text-xs text-slate-900 placeholder-slate-400 focus:border-white focus:outline-hidden focus:ring-2 focus:ring-[#22B8F0] transition-all font-mono shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto h-10 inline-flex items-center justify-center space-x-1.5 rounded-xl bg-[#1E40D8] hover:bg-[#0B1F6B] px-5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer border border-[#22B8F0]/30 shrink-0 group"
                >
                  <span>Subscribe</span>
                  <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
              {subscribed && (
                <div className="mt-1.5 text-[11px] font-mono text-emerald-200 flex items-center space-x-1 animate-fadeIn justify-center lg:justify-end">
                  <CheckCircle2 className="h-3 w-3 text-emerald-300" />
                  <span>Thank you for subscribing to EPX Technocrat Digest!</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Thin Wave Divider SVG between Newsletter band and footer */}
      <div className="w-full overflow-hidden leading-none -mt-px pointer-events-none" aria-hidden="true">
        <img
          src="/assets/bg/footer-wave-divider.svg"
          alt=""
          className="w-full h-5 object-cover"
        />
      </div>

      {/* 2. Main Multi-Column Footer Grid */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-6 items-start">
          
          {/* Column 1 (4 cols): Brand Identity & Credentials */}
          <div className="lg:col-span-4 rounded-2xl bg-white/5 p-4 border border-white/10 space-y-3 shadow-sm backdrop-blur-sm">
            <div className="flex items-center">
              <Logo className="h-9 sm:h-10 w-auto" variant="dark" />
            </div>

            <p className="text-xs text-sky-100 leading-relaxed font-normal line-clamp-3">
              <strong className="text-white font-bold">SIF Systems (SIF-EPX Group) – Group of Technocrat</strong> delivers turnkey Process Engineering, PLC/DCS Automation, Electrical Panels &amp; Switchgear, and Solar EPC solutions for industry leaders across India.
            </p>

            {/* Certification Badges: single wrapping row of small pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
              <div className="inline-flex items-center space-x-1 rounded-md bg-white/15 border border-white/25 px-2 py-0.5 text-white font-bold">
                <Award className="h-3 w-3 text-[#22B8F0] shrink-0" />
                <span>{companyInfo.certification}</span>
              </div>
              <span className="rounded-md bg-white/10 px-2 py-0.5 border border-white/20 text-white font-semibold">
                IEC 61439 / IS 8623
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 border border-white/20 text-white font-semibold">
                ISA S-88 BATCH
              </span>
            </div>

            {/* Quick Navigation: 3 columns of small links */}
            <div className="pt-2 border-t border-white/15">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200 mb-1.5">
                Quick Navigation
              </span>
              <div className="grid grid-cols-3 gap-x-2 gap-y-1.5 text-xs">
                {quickLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="text-sky-100 hover:text-white hover:underline transition-colors flex items-center space-x-1"
                  >
                    <ChevronRight className="h-2.5 w-2.5 text-[#22B8F0] shrink-0" />
                    <span className="truncate text-[11px]">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 (3 cols): Key Services (Collapsible on mobile) */}
          <div className="lg:col-span-3">
            {/* Mobile Collapsible View */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5 text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#22B8F0]" />
                  <span>Engineering Services</span>
                </div>
                <span className="text-xs text-sky-200 font-mono">
                  {mobileServicesOpen ? '−' : '+'}
                </span>
              </button>
              {mobileServicesOpen && (
                <ul className="space-y-1.5 text-[13px] pb-2">
                  {servicesData.slice(0, 7).map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex items-start space-x-1.5 text-sky-100 hover:text-white transition-colors leading-tight py-0.5"
                      >
                        <ChevronRight className="h-3 w-3 text-[#22B8F0] group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" />
                        <span className="group-hover:font-medium transition-all">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tablet & Desktop Always Visible View */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5">
                <span className="h-2 w-2 rounded-full bg-[#22B8F0]" />
                <span>Engineering Services</span>
              </div>
              <ul className="space-y-1.5 text-[13px]">
                {servicesData.slice(0, 7).map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="group flex items-start space-x-1.5 text-sky-100 hover:text-white transition-colors leading-tight py-0.5"
                    >
                      <ChevronRight className="h-3 w-3 text-[#22B8F0] group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" />
                      <span className="group-hover:font-medium transition-all">{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 (3 cols): Key Industries (Collapsible on mobile) */}
          <div className="lg:col-span-3">
            {/* Mobile Collapsible View */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5 text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                  <span>Industries</span>
                </div>
                <span className="text-xs text-sky-200 font-mono">
                  {mobileIndustriesOpen ? '−' : '+'}
                </span>
              </button>
              {mobileIndustriesOpen && (
                <ul className="space-y-1.5 text-[13px] pb-2">
                  {industryLinks.map((ind, idx) => (
                    <li key={idx}>
                      <Link
                        to={ind.path}
                        className="group flex items-start space-x-1.5 text-sky-100 hover:text-white transition-colors leading-tight py-0.5"
                      >
                        <ChevronRight className="h-3 w-3 text-[#22B8F0] group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" />
                        <span className="group-hover:font-medium transition-all">{ind.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Tablet & Desktop Always Visible View */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                <span>Industries</span>
              </div>
              <ul className="space-y-1.5 text-[13px]">
                {industryLinks.map((ind, idx) => (
                  <li key={idx}>
                    <Link
                      to={ind.path}
                      className="group flex items-start space-x-1.5 text-sky-100 hover:text-white transition-colors leading-tight py-0.5"
                    >
                      <ChevronRight className="h-3 w-3 text-[#22B8F0] group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" />
                      <span className="group-hover:font-medium transition-all">{ind.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 (2 cols): Corporate HQ & Works */}
          <div className="lg:col-span-2">
            {/* Mobile Collapsible View */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileOfficesOpen(!mobileOfficesOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5 text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>HQ &amp; Works</span>
                </div>
                <span className="text-xs text-sky-200 font-mono">
                  {mobileOfficesOpen ? '−' : '+'}
                </span>
              </button>

              {mobileOfficesOpen && (
                <div className="space-y-2 text-xs pb-2">
                  <div className="mb-1.5">
                    <span className="font-bold text-white block text-xs">Corporate Office</span>
                    <p className="text-sky-100 text-[11px] leading-snug font-normal">
                      {companyInfo.offices.corporate.building}, Sector-62, Noida - {companyInfo.offices.corporate.pincode}, UP
                    </p>
                  </div>
                  <div className="mb-1.5">
                    <span className="font-bold text-yellow-300 block text-xs">Works (Ghaziabad)</span>
                    <p className="text-sky-100 text-[11px] leading-snug font-normal">
                      {companyInfo.offices.works.building}, Murad Nagar, Ghaziabad - {companyInfo.offices.works.pincode}, UP
                    </p>
                  </div>
                  <div className="mb-1.5">
                    <span className="font-bold text-emerald-300 block text-xs">Branches</span>
                    <p className="text-sky-100 text-[11px] leading-snug font-normal">
                      Vadodara &amp; Ahmedabad, Gujarat
                    </p>
                  </div>
                  <div className="pt-1.5 border-t border-white/15 space-y-1 text-white font-medium text-xs">
                    <div className="flex items-center space-x-1.5">
                      <Phone className="h-3 w-3 text-[#22B8F0] shrink-0" />
                      <a href={`tel:${companyInfo.contact.phones[0]}`} className="hover:underline transition-colors font-mono text-[11px]">
                        {companyInfo.contact.phones[0]}
                      </a>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Mail className="h-3 w-3 text-[#22B8F0] shrink-0" />
                      <a href={`mailto:${companyInfo.contact.emails[0]}`} className="truncate hover:underline transition-colors font-mono text-[11px]">
                        {companyInfo.contact.emails[0]}
                      </a>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <Link
                      to="/contact"
                      className="w-full h-8 inline-flex items-center justify-center space-x-1.5 rounded-xl bg-white text-[#0B1F6B] hover:bg-[#EAF4FF] px-3 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                    >
                      <span>Connect</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Tablet & Desktop Always Visible View */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white font-mono border-b border-white/20 pb-1.5 mb-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>HQ &amp; Works</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="mb-2">
                  <span className="font-bold text-white block text-xs">Corporate Office</span>
                  <p className="text-sky-100 text-[11px] leading-snug font-normal">
                    {companyInfo.offices.corporate.building}, Sector-62, Noida - {companyInfo.offices.corporate.pincode}, UP
                  </p>
                </div>

                <div className="mb-2">
                  <span className="font-bold text-yellow-300 block text-xs">Works (Ghaziabad)</span>
                  <p className="text-sky-100 text-[11px] leading-snug font-normal">
                    {companyInfo.offices.works.building}, Murad Nagar, Ghaziabad - {companyInfo.offices.works.pincode}, UP
                  </p>
                </div>

                <div className="mb-2">
                  <span className="font-bold text-emerald-300 block text-xs">Branches</span>
                  <p className="text-sky-100 text-[11px] leading-snug font-normal">
                    Vadodara &amp; Ahmedabad, Gujarat
                  </p>
                </div>

                <div className="pt-2 border-t border-white/15 space-y-1.5 text-white font-medium text-xs">
                  <div className="flex items-center space-x-1.5">
                    <Phone className="h-3 w-3 text-[#22B8F0] shrink-0" />
                    <a href={`tel:${companyInfo.contact.phones[0]}`} className="hover:underline transition-colors font-mono text-[11px]">
                      {companyInfo.contact.phones[0]}
                    </a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Mail className="h-3 w-3 text-[#22B8F0] shrink-0" />
                    <a href={`mailto:${companyInfo.contact.emails[0]}`} className="truncate hover:underline transition-colors font-mono text-[11px]">
                      {companyInfo.contact.emails[0]}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full h-9 inline-flex items-center justify-center space-x-1.5 rounded-xl bg-white text-[#0B1F6B] hover:bg-[#EAF4FF] px-3 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Connect</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Sub-Footer Bar */}
      <div className="relative z-10 border-t border-white/15 bg-[#071648] px-4 py-3 text-xs text-sky-100 font-mono shadow-xs">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white font-bold">SIF Systems (SIF-EPX Group)</strong>. Developed by <a href="https://www.techomaxsolution.com" className="hover:text-white transition-colors underline">Techomax Solution</a>.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sky-100 text-[11px]">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>•</span>
            <Link to="/clients" className="hover:text-white transition-colors">Clients</Link>
            <span>•</span>
            <Link to="/quality-safety" className="hover:text-white transition-colors">Quality</Link>
            <span>•</span>
            <Link to="/infrastructure-methodology" className="hover:text-white transition-colors">Infrastructure</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Floating Smooth Back to Top Button (Positioned above mobile sticky bar) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#1E40D8] text-white shadow-2xl hover:bg-[#0B1F6B] hover:scale-110 active:scale-95 transition-all cursor-pointer border border-[#22B8F0]/40"
        aria-label="Back to Top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

    </footer>
  )
}

export default Footer
