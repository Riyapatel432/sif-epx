import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Award, CheckCircle2 } from 'lucide-react'
import { companyInfo } from '../data/companyData'
import LordIcon from './LordIcon'
import StarBorder from './reactbits/StarBorder'
import Magnet from './reactbits/Magnet'

export function CTASection({
  title = "Partner with SIF-EPX Group for Your Next Industrial Project",
  subtitle = "Leverage our comprehensive EPCC, Process Automation, Electrical Switchgear, and Project Management capabilities to accelerate plant execution with zero compromise on safety.",
}) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-20 bg-gradient-to-b from-[#EAF4FF] via-white to-[#EAF4FF] border-t border-sky-200">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Banner with BGJar Stacked Wave & Polygon Luminary in cyan/royal gradient + circuit overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] bg-sif-cta p-6 sm:p-12 lg:p-14 text-white shadow-2xl border border-[#22B8F0]/30 text-left"
        >
          
          {/* Subtle Aurora / Wave Beams Atmospheric Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22B8F0]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1F6B]/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-5 lg:col-span-8 text-left">
              <div className="inline-flex items-center space-x-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-mono font-bold text-sky-200 border border-sky-300/40 backdrop-blur-md">
                <Award className="h-3.5 w-3.5 text-[#22B8F0]" />
                <span>{companyInfo.certification}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15]">
                {title}
              </h2>
              
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl font-normal">
                {subtitle}
              </p>

              {/* 3 CTA Trust Points in horizontal scroll row on mobile (< 1024px) */}
              <div
                tabIndex={0}
                role="region"
                aria-label="Key Service Highlights"
                className="flex items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-sky-100 font-medium overflow-x-auto no-scrollbar snap-x snap-mandatory py-1 -mx-2 px-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-300 rounded-lg"
              >
                <div className="flex items-center space-x-2 shrink-0 snap-start bg-white/10 sm:bg-transparent px-3 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none border border-white/15 sm:border-none">
                  <LordIcon
                    src="https://cdn.lordicon.com/lomfljuq.json"
                    trigger="hover"
                    primaryColor="#22B8F0"
                    secondaryColor="#ffffff"
                    size={18}
                    stroke={70}
                    fallback={<CheckCircle2 className="h-4 w-4 text-emerald-300" />}
                  />
                  <span className="whitespace-nowrap">Turnkey EPCC Execution</span>
                </div>
                
                <div className="flex items-center space-x-2 shrink-0 snap-start bg-white/10 sm:bg-transparent px-3 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none border border-white/15 sm:border-none">
                  <LordIcon
                    src="https://cdn.lordicon.com/lomfljuq.json"
                    trigger="hover"
                    primaryColor="#22B8F0"
                    secondaryColor="#ffffff"
                    size={18}
                    stroke={70}
                    fallback={<CheckCircle2 className="h-4 w-4 text-emerald-300" />}
                  />
                  <span className="whitespace-nowrap">Pan-India Engineering Network</span>
                </div>
                
                <div className="flex items-center space-x-2 shrink-0 snap-start bg-white/10 sm:bg-transparent px-3 py-1.5 sm:px-0 sm:py-0 rounded-full sm:rounded-none border border-white/15 sm:border-none">
                  <LordIcon
                    src="https://cdn.lordicon.com/lomfljuq.json"
                    trigger="hover"
                    primaryColor="#22B8F0"
                    secondaryColor="#ffffff"
                    size={18}
                    stroke={70}
                    fallback={<CheckCircle2 className="h-4 w-4 text-emerald-300" />}
                  />
                  <span className="whitespace-nowrap">Single-Point Accountability</span>
                </div>
              </div>
            </div>

            {/* Right CTAs with StarBorder on Primary Button & Magnet Hover Interaction (Stacked Full Width on Mobile) */}
            <div className="flex flex-col space-y-3 w-full lg:col-span-4">
              <Magnet padding={30} magnetStrength={0.2} className="w-full">
                <StarBorder
                  color="#22B8F0"
                  speed="3.5s"
                  className="w-full"
                >
                  <Link
                    to="/contact"
                    className="btn-pill-secondary text-center shadow-lg hover:shadow-xl group flex items-center justify-center space-x-2 w-full min-h-[48px]"
                  >
                    <span>Request Project Proposal</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </StarBorder>
              </Magnet>
              
              <Magnet padding={20} magnetStrength={0.15} className="w-full">
                <a
                  href={`tel:${companyInfo.contact.phones[0]}`}
                  className="inline-flex items-center justify-center space-x-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-6 py-3.5 text-center font-bold text-white transition-all text-xs uppercase tracking-wider backdrop-blur-md min-h-[48px] group w-full"
                >
                  <LordIcon
                    src="https://cdn.lordicon.com/tftaqjwp.json"
                    trigger="hover"
                    primaryColor="#22B8F0"
                    secondaryColor="#ffffff"
                    size={18}
                    stroke={60}
                    fallback={<Phone className="h-4 w-4 text-sky-200" />}
                  />
                  <span>Direct: {companyInfo.contact.phones[0]}</span>
                </a>
              </Magnet>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
