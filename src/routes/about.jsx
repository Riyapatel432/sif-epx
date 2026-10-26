import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Eye,
  Target,
  HeartHandshake,
  ArrowRight,
  Award,
  ShieldCheck,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  Zap,
  Globe,
  Layers,
  Cpu,
  Gauge,
  Code2,
  Shield,
  ChevronRight,
  ChevronDown,
  Send,
} from 'lucide-react'
import Breadcrumbs from '../components/Breadcrumbs'
import { companyInfo } from '../data/companyData'
import { partnersData, partnersCategories } from '../data/partnersData'
import { clientsList } from '../data/clientsData'
import { TechnicalBlueprintGridSVG } from '../components/visuals/TechnicalBlueprintGridSVG'
import CountUp from '../components/reactbits/CountUp'
import AuroraWaves from '../components/reactbits/AuroraWaves'
import BlurText from '../components/reactbits/BlurText'
import ShinyText from '../components/reactbits/ShinyText'
import { MobileTabs, TabPanel } from '../components/ui/MobileTabs'
import { MobileBottomSheet } from '../components/ui/MobileBottomSheet'
import { MobileSnapSlider } from '../components/ui/MobileSnapSlider'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About SIF Systems & SIF-EPX Group | Technocrat Process Engineering EPCC',
      },
      {
        name: 'description',
        content:
          'Learn about SIF Systems & SIF-EPX Group - ISO 9001:2015 accredited turnkey process engineering, switchgear manufacturing, and automation engineering leader.',
      },
      {
        property: 'og:title',
        content: 'About SIF Systems & SIF-EPX Group | Technocrat Process Engineering EPCC',
      },
      {
        property: 'og:description',
        content:
          'Learn about SIF Systems & SIF-EPX Group - ISO 9001:2015 accredited turnkey process engineering, switchgear manufacturing, and automation engineering leader.',
      },
    ],
  }),
  component: AboutPage,
})

// Clean, Simple Blueprint Background Grid
function HeroBackgroundGraphicsSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="about-hero-clean-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#38BDF8" fillOpacity="0.16" />
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-hero-clean-grid)" />
    </svg>
  )
}



/* ========================================================================= */
/* SIF SYSTEMS & SIF-EPX GROUP — DEDICATED VECTOR ANIMATED ICONS              */
/* ========================================================================= */

// 1. Metric: 18+ Years Track Record — Swinging Medal Ribbon + Shimmering Medallion
function AnimatedMedalRibbonIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Swinging Ribbon Pair */}
      <g className="sif-anim-ribbon-swing" style={{ transformOrigin: '12px 6px' }}>
        <path
          d="M8.5 2.5L6.5 10.5L9 9L11.5 10.5L10 2.5"
          fill="#38BDF8"
          fillOpacity="0.85"
        />
        <path
          d="M15.5 2.5L17.5 10.5L15 9L12.5 10.5L14 2.5"
          fill="#0284C7"
          fillOpacity="0.9"
        />
      </g>
      {/* Gold/Cyan Medallion */}
      <circle cx="12" cy="14" r="6" fill="#001B79" stroke="#38BDF8" strokeWidth="1.6" />
      <circle cx="12" cy="14" r="3.6" stroke="#BAE6FD" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <polygon points="12,11.5 12.8,13.2 14.6,13.4 13.3,14.6 13.6,16.4 12,15.5 10.4,16.4 10.7,14.6 9.4,13.4 11.2,13.2" fill="#FBBF24" />
    </svg>
  )
}

// 2. Metric: 100+ Projects Completed — Pulsing High-Voltage Lightning Bolt with Energy Sparks
function AnimatedLightningBoltIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Main Lightning Bolt */}
      <path
        d="M13 2.5L4.5 13H11.5L10 21.5L19.5 10H12.5L13 2.5Z"
        fill="#0284C7"
        stroke="#38BDF8"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Upper-Right Spark Node */}
      <circle
        cx="19.5"
        cy="4.5"
        r="1.8"
        fill="#38BDF8"
        className="sif-anim-spark-pulse"
        style={{ transformOrigin: '19.5px 4.5px' }}
      />
      {/* Lower-Left Spark Node */}
      <circle
        cx="4"
        cy="19"
        r="1.4"
        fill="#0284C7"
        className="sif-anim-spark-pulse"
        style={{ transformOrigin: '4px 19px', animationDelay: '1.2s' }}
      />
    </svg>
  )
}

// 3. Metric: 10+ Global OEM Platforms — Rotating World Meridian Sphere
function AnimatedGlobalMeridianIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <clipPath id="sif-globe-mask">
          <circle cx="12" cy="12" r="9" />
        </clipPath>
      </defs>
      {/* Outer Sphere Ring */}
      <circle cx="12" cy="12" r="9" stroke="#001B79" strokeWidth="1.6" fill="#F0F9FF" fillOpacity="0.4" />
      {/* Equator */}
      <line x1="3" y1="12" x2="21" y2="12" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="2 1.5" />
      {/* Rotating Longitude Meridians clipped inside circle */}
      <g clipPath="url(#sif-globe-mask)">
        <g className="sif-anim-globe-track">
          <ellipse cx="6" cy="12" rx="4.5" ry="9" stroke="#0284C7" strokeWidth="1.2" fill="none" />
          <ellipse cx="18" cy="12" rx="4.5" ry="9" stroke="#0284C7" strokeWidth="1.2" fill="none" />
          <ellipse cx="30" cy="12" rx="4.5" ry="9" stroke="#0284C7" strokeWidth="1.2" fill="none" />
        </g>
      </g>
      {/* Center Axis Node */}
      <circle cx="12" cy="12" r="1.5" fill="#38BDF8" />
    </svg>
  )
}

// 4. Metric: 100% Safety Compliance — Shield with Self-Drawing Verification Checkmark
function AnimatedShieldCertifiedIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Protective Shield Outer Boundary */}
      <path
        d="M12 2.5L19.5 5.8V11.2C19.5 16.4 16.3 20.2 12 21.8C7.7 20.2 4.5 16.4 4.5 11.2V5.8L12 2.5Z"
        fill="#001B79"
        fillOpacity="0.08"
        stroke="#001B79"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Inner Accent Line */}
      <path
        d="M12 4.6L17.5 7.1V11.2C17.5 15.1 15.1 18 12 19.5C8.9 18 6.5 15.1 6.5 11.2V7.1L12 4.6Z"
        stroke="#38BDF8"
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />
      {/* Check Mark with Loop Animation */}
      <path
        d="M8.5 12L10.8 14.3L15.5 9.5"
        stroke="#059669"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sif-anim-shield-tick sif-anim-tick-bounce"
        style={{ transformOrigin: '12px 12px' }}
      />
    </svg>
  )
}

// 5. Metric: 50+ Technocrats / Headcount — Multidisciplinary Engineering Crew Nodes
function AnimatedHeadcountIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Left Technocrat */}
      <circle cx="6.5" cy="8" r="2.5" stroke="#38BDF8" strokeWidth="1.3" />
      <path d="M2.5 18C2.5 15 4.3 13.5 6.5 13.5C7.5 13.5 8.4 13.9 9 14.5" stroke="#38BDF8" strokeWidth="1.3" strokeLinecap="round" />

      {/* Right Technocrat */}
      <circle cx="17.5" cy="8" r="2.5" stroke="#38BDF8" strokeWidth="1.3" />
      <path d="M21.5 18C21.5 15 19.7 13.5 17.5 13.5C16.5 13.5 15.6 13.9 15 14.5" stroke="#38BDF8" strokeWidth="1.3" strokeLinecap="round" />

      {/* Center Lead Technocrat (Prominent) */}
      <circle cx="12" cy="7" r="3" fill="#001B79" stroke="#0284C7" strokeWidth="1.5" />
      <path
        d="M7.5 19.5C7.5 15.8 9.5 14 12 14C14.5 14 16.5 15.8 16.5 19.5"
        stroke="#001B79"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Core Node Badge */}
      <circle cx="12" cy="18" r="1.3" fill="#38BDF8" />
    </svg>
  )
}

// 6. Metric: Turnkey Accountability — Checked Target Emblem
function AnimatedTurnkeyCheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Concentric Calibration Rim */}
      <circle cx="12" cy="12" r="9.5" stroke="#001B79" strokeWidth="1.6" strokeDasharray="4 2" />
      <circle cx="12" cy="12" r="6.8" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="1.2" />
      {/* Bold Completed Tick */}
      <path
        d="M8.5 12L11 14.5L16 9"
        stroke="#0284C7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="sif-anim-tick-bounce"
        style={{ transformOrigin: '12px 12px' }}
      />
    </svg>
  )
}

// 7. Vision Bento: Human Eye with Scanning Reticle & Blinking Iris
function AnimatedVisionEyeIcon({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Upper & Lower Eyelid Outline with blink scale */}
      <g className="sif-anim-eye-blink" style={{ transformOrigin: '12px 12px' }}>
        <path
          d="M2.5 12C2.5 12 6 5.5 12 5.5C18 5.5 21.5 12 21.5 12C21.5 12 18 18.5 12 18.5C6 18.5 2.5 12 2.5 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Iris Outer Ring */}
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
        {/* Pupil with horizontal scanning motion */}
        <g className="sif-anim-pupil-drift">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <circle cx="13" cy="11" r="0.8" fill="#BAE6FD" />
        </g>
      </g>
    </svg>
  )
}

// 8. Mission Bento: Concentric Bullseye with High-Velocity Piercing Arrow
function AnimatedMissionTargetIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Outer Ring */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      {/* Middle Ring */}
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
      {/* Center Bullseye */}
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      {/* Striking Arrow Head */}
      <g className="sif-anim-arrow-strike">
        <path
          d="M17.5 6.5L12 12"
          stroke="#0284C7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 6.5H17.5V10"
          stroke="#0284C7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

// 9. Ethics Bento: Heart with Resonant Pulse & Interlocking Trust Clasps
function AnimatedEthicsHeartIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g className="sif-anim-heart-pulse" style={{ transformOrigin: '12px 12px' }}>
        <path
          d="M12 20.5S3.5 15.2 3.5 9.2C3.5 6.3 5.8 4 8.7 4C10.4 4 11.5 4.9 12 5.8C12.5 4.9 13.6 4 15.3 4C18.2 4 20.5 6.3 20.5 9.2C20.5 15.2 12 20.5 12 20.5Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Handshake / Trust Interlock Ribs */}
        <path
          d="M8.5 10.5L11 13L15.5 8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

// 10. Leadership Head: Executive Star Badge
function AnimatedExecutiveStarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g className="sif-anim-star-twinkle" style={{ transformOrigin: '12px 12px' }}>
        <polygon
          points="12,2 14.8,8.5 22,9.2 16.5,14.1 18.2,21.2 12,17.4 5.8,21.2 7.5,14.1 2,9.2 9.2,8.5"
          fill="#38BDF8"
          stroke="#0284C7"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  )
}

// 11. Strategic Timeline: Calendar Node with Advancing Arrow
function AnimatedCalendarIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="3" stroke="#001B79" strokeWidth="1.6" fill="#F0F9FF" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="#0284C7" strokeWidth="1.4" />
      {/* Calendar Binder Rings */}
      <line x1="7" y1="2" x2="7" y2="5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="2" x2="17" y2="5" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      {/* Advancing Date Arrow inside */}
      <g className="sif-anim-cal-arrow">
        <path d="M8.5 14.5H14.5M12.5 12.5L14.5 14.5L12.5 16.5" stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

// 12. Newsletter Strip: Flight Paperplane with Hover Nudge
function AnimatedSendPaperplaneIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g className="sif-paperplane-wing">
        <path
          d="M22 2L11 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function AboutPage() {
  const milestones = [
    {
      year: '2006',
      title: 'DIC India Association Initiated',
      desc: 'Began long-standing association as vendor and process consultant of choice for DIC India Limited across Automation, Electrical, and C&I capital projects.',
      badge: 'MNC Partnership',
    },
    {
      year: '2012',
      title: 'Toyo Ink Partnership Formed',
      desc: 'Established strategic relationship with Toyo Ink India Pvt. Ltd. for turnkey execution of PU Plant at Dahej and Gravure Ink Plant at Noida.',
      badge: 'Turnkey E&I',
    },
    {
      year: '2017',
      title: 'SIF Systems Formalized',
      desc: 'Consolidation of multidisciplinary engineering, electrical panel fabrication works at Murad Nagar, and process automation solutions under SIF Systems.',
      badge: 'Works Expansion',
    },
    {
      year: '2022',
      title: 'EPX India / SIF-EPX Group Formed',
      desc: 'Synergistic unification into SIF-EPX Group, scaling comprehensive EPCM project management consultancy, solar EPC, and multinational client execution.',
      badge: 'Group Synergy',
    },
  ]

  // Category Tabs Configuration
  const categoryTabs = [
    { id: 'All Categories', label: 'All Categories', icon: Layers },
    { id: 'Automation & DCS/PLC', label: 'Automation', icon: Cpu },
    { id: 'Electrical & Switchgear', label: 'Electrical', icon: Zap },
    { id: 'Field Instrumentation & Valves', label: 'Instruments', icon: Gauge },
    { id: 'Enterprise Software & SCADA', label: 'Software', icon: Code2 },
    { id: 'Enclosures & Connectivity', label: 'Enclosures', icon: Shield },
  ]

  const [selectedPartnerCat, setSelectedPartnerCat] = useState('All Categories')
  const [selectedPartnerName, setSelectedPartnerName] = useState('Rockwell Automation / Allen-Bradley')
  const [isAutoCyclePaused, setIsAutoCyclePaused] = useState(false)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [isPartnerSheetOpen, setIsPartnerSheetOpen] = useState(false)
  const [selectedSheetPartner, setSelectedSheetPartner] = useState(null)
  const [showAllMilestones, setShowAllMilestones] = useState(false)
  const [showAllPartnersMobile, setShowAllPartnersMobile] = useState(false)
  const [showAllClientsMobile, setShowAllClientsMobile] = useState(false)
  const [philosophyTabIndex, setPhilosophyTabIndex] = useState(0)
  const listContainerRef = useRef(null)

  const partnerIcons = {
    'All Categories': Layers,
    'Automation & DCS/PLC': Cpu,
    'Electrical & Switchgear': Zap,
    'Field Instrumentation & Valves': Gauge,
    'Enterprise Software & SCADA': Code2,
    'Enclosures & Connectivity': Shield,
  }

  // Calculate count badge for each category
  const categoryCounts = useMemo(() => {
    const counts = { 'All Categories': partnersData.length }
    partnersCategories.forEach((cat) => {
      if (cat !== 'All Categories') {
        counts[cat] = partnersData.filter((p) => p.category === cat).length
      }
    })
    return counts
  }, [])

  const filteredPartners = useMemo(() => {
    return partnersData.filter(
      (p) => selectedPartnerCat === 'All Categories' || p.category === selectedPartnerCat
    )
  }, [selectedPartnerCat])

  // Ensure selected partner is always visible within current filter
  useEffect(() => {
    if (!filteredPartners.some((p) => p.name === selectedPartnerName)) {
      if (filteredPartners.length > 0) {
        setSelectedPartnerName(filteredPartners[0].name)
      }
    }
  }, [filteredPartners, selectedPartnerName])

  // Auto-cycle every 6 seconds unless paused by user interaction
  useEffect(() => {
    if (isAutoCyclePaused || filteredPartners.length <= 1) return

    const timer = setInterval(() => {
      setSelectedPartnerName((curr) => {
        const idx = filteredPartners.findIndex((p) => p.name === curr)
        const nextIdx = (idx + 1) % filteredPartners.length
        return filteredPartners[nextIdx].name
      })
    }, 6000)

    return () => clearInterval(timer)
  }, [isAutoCyclePaused, filteredPartners])

  // Keyboard navigation (Arrow Up / Arrow Down)
  const handlePartnerKeyDown = useCallback((e) => {
    if (filteredPartners.length <= 1) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsAutoCyclePaused(true)
      setSelectedPartnerName((curr) => {
        const idx = filteredPartners.findIndex((p) => p.name === curr)
        const nextIdx = (idx + 1) % filteredPartners.length
        return filteredPartners[nextIdx].name
      })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIsAutoCyclePaused(true)
      setSelectedPartnerName((curr) => {
        const idx = filteredPartners.findIndex((p) => p.name === curr)
        const prevIdx = (idx - 1 + filteredPartners.length) % filteredPartners.length
        return filteredPartners[prevIdx].name
      })
    }
  }, [filteredPartners])

  // Currently spotlighted partner object
  const activePartner = useMemo(() => {
    return (
      filteredPartners.find((p) => p.name === selectedPartnerName) ||
      filteredPartners[0] ||
      partnersData[0]
    )
  }, [filteredPartners, selectedPartnerName])

  const statsIcons = [
    AnimatedMedalRibbonIcon,
    AnimatedLightningBoltIcon,
    AnimatedGlobalMeridianIcon,
    AnimatedShieldCertifiedIcon,
    AnimatedHeadcountIcon,
    AnimatedTurnkeyCheckIcon,
  ]



  const rowOneClients = clientsList.slice(0, 8)
  const rowTwoClients = clientsList.slice(8)

  const brandTints = [
    'bg-blue-100 text-[#001B79] border-blue-200',
    'bg-sky-100 text-[#0284C7] border-sky-200',
    'bg-teal-100 text-teal-800 border-teal-200',
    'bg-indigo-100 text-indigo-900 border-indigo-200',
    'bg-cyan-100 text-cyan-900 border-cyan-200',
  ]

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Automation & DCS/PLC':
        return {
          chip: 'bg-blue-50 text-blue-700 border-blue-200',
          accentBar: 'bg-blue-600',
          monogramBg: 'bg-blue-50 text-blue-800 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
          hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/10',
          gradientBorder: 'from-blue-600 via-sky-400 to-indigo-600',
        }
      case 'Electrical & Switchgear':
        return {
          chip: 'bg-amber-50 text-amber-800 border-amber-200',
          accentBar: 'bg-amber-500',
          monogramBg: 'bg-amber-50 text-amber-900 border-amber-200 group-hover:bg-amber-500 group-hover:text-white',
          hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/10',
          gradientBorder: 'from-amber-500 via-yellow-400 to-orange-500',
        }
      case 'Field Instrumentation & Valves':
        return {
          chip: 'bg-teal-50 text-teal-800 border-teal-200',
          accentBar: 'bg-teal-600',
          monogramBg: 'bg-teal-50 text-teal-900 border-teal-200 group-hover:bg-teal-600 group-hover:text-white',
          hoverBorder: 'hover:border-teal-400 hover:shadow-teal-500/10',
          gradientBorder: 'from-teal-600 via-emerald-400 to-cyan-500',
        }
      case 'Enterprise Software & SCADA':
        return {
          chip: 'bg-purple-50 text-purple-800 border-purple-200',
          accentBar: 'bg-purple-600',
          monogramBg: 'bg-purple-50 text-purple-900 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
          hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/10',
          gradientBorder: 'from-purple-600 via-fuchsia-400 to-indigo-500',
        }
      case 'Enclosures & Connectivity':
        return {
          chip: 'bg-slate-100 text-slate-800 border-slate-300',
          accentBar: 'bg-slate-600',
          monogramBg: 'bg-slate-100 text-slate-800 border-slate-300 group-hover:bg-slate-700 group-hover:text-white',
          hoverBorder: 'hover:border-slate-400 hover:shadow-slate-500/10',
          gradientBorder: 'from-slate-600 via-slate-400 to-zinc-500',
        }
      default:
        return {
          chip: 'bg-sky-50 text-sky-800 border-sky-200',
          accentBar: 'bg-[#0284C7]',
          monogramBg: 'bg-sky-50 text-[#001B79] border-sky-200 group-hover:bg-[#0284C7] group-hover:text-white',
          hoverBorder: 'hover:border-[#0284C7] hover:shadow-sky-500/10',
          gradientBorder: 'from-[#001B79] via-[#0284C7] to-[#38BDF8]',
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white antialiased overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO — LAYERED BLUEPRINT, GLOWING ORBS, AND PROCESS VECTOR COMPOSITION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-36 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] text-white overflow-hidden border-b border-sky-400/30">
        <AuroraWaves speed={0.007} />
        <HeroBackgroundGraphicsSVG />

        {/* Ambient Glowing Gradient Orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35)_0%,transparent_70%)] blur-3xl pointer-events-none animate-pulse-ring" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.3)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="mb-4 sm:mb-6">
            <Breadcrumbs items={[{ label: 'About Us' }]} />
          </div>

          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-sky-200 font-bold">
                   CORPORATE PROFILE
                </span>
              </div>
              <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-mono font-bold border border-white/30 shadow-xs">
                <ShinyText text="ISO 9001:2015" speed={4} />
              </span>
            </div>

            {/* Headline with Fluid Clamp on Mobile, Huge on Desktop */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] sm:leading-[1.05] text-white">
              <BlurText
                text="About SIF Systems & SIF-EPX Group"
                delay={40}
                direction="top"
                className="text-white"
              />
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg md:text-xl text-sky-100 max-w-3xl leading-relaxed font-normal">
              Enlighten Process Excellence — Technocrat-driven Process Engineering EPCC company providing turnkey solutions for Process Instrumentation, Automation, and all Electrical Packages across India.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FLOATING GLASS STATS BAND (2-col grid on mobile, 6-col strip on desktop) */}
      {/* ========================================================================= */}
      <div className="relative z-20 -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl border border-sky-300/60 bg-white/95 backdrop-blur-xl shadow-xl sm:shadow-2xl shadow-sky-900/15 p-3.5 sm:p-6 lg:p-8"
        >
          {/* Mobile 2-column grid / Desktop 6-column horizontal divide strip */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-sky-200/80">
            {companyInfo.keyStats.map((stat, idx) => {
              const Icon = statsIcons[idx % statsIcons.length]
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3 lg:px-4 lg:py-2 rounded-xl bg-sky-50/50 lg:bg-transparent border border-sky-100/80 lg:border-none group"
                >
                  <div className="mb-1.5 sm:mb-2.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-100 text-[#001B79] group-hover:bg-[#001B79] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#001B79] via-[#0284C7] to-[#0369A1]">
                    {stat.value === '2017' ? (
                      <CountUp to={2017} duration={1.5} />
                    ) : stat.value === '9+' ? (
                      <span><CountUp to={9} duration={1.2} />+</span>
                    ) : stat.value === '15+' ? (
                      <span><CountUp to={15} duration={1.4} />+</span>
                    ) : stat.value === '100%' ? (
                      <span><CountUp to={100} duration={1.5} />%</span>
                    ) : (
                      stat.value
                    )}
                  </div>
                  {stat.suffix && (
                    <span className="text-[9px] sm:text-[11px] font-bold text-[#0284C7] font-mono mt-0.5 truncate max-w-full">
                      {stat.suffix}
                    </span>
                  )}
                  <div className="mt-1 text-[11px] sm:text-xs font-semibold text-slate-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 3. VISION, MISSION & ETHICS — ASYMMETRIC BENTO GRID                       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-32 section-sky-a">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="eyebrow-pill">COMPANY PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
              Vision, Mission &amp; Uncompromising Ethics
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Guiding principles driving plant-wide optimization, technical integrity, and enduring customer delight.
            </p>
          </div>

          {/* Mobile Tabs View (< lg screens) */}
          <div className="lg:hidden">
            {/* Tab selection pills */}
            <div
              role="tablist"
              aria-label="Philosophy Sections"
              className="flex items-center gap-1.5 p-1 rounded-2xl bg-sky-100/70 border border-sky-200 overflow-x-auto no-scrollbar mb-4"
            >
              {[
                { id: 0, label: 'Vision', icon: Eye },
                { id: 1, label: 'Mission', icon: Target },
                { id: 2, label: 'Ethics', icon: HeartHandshake },
              ].map((t) => {
                const isSelected = philosophyTabIndex === t.id
                const Icon = t.icon
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setPhilosophyTabIndex(t.id)}
                    className={`flex-1 min-w-max py-2.5 px-3.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer touch-target-min flex items-center justify-center gap-1.5 focus:outline-hidden ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-sm ring-1 ring-sky-300'
                        : 'text-slate-600 hover:text-[#001B79] hover:bg-white/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{t.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Tab Panel */}
            {philosophyTabIndex === 0 && (
              <div role="tabpanel" aria-label="Vision" className="relative overflow-hidden rounded-2xl border border-sky-300 bg-gradient-to-br from-white via-sky-50/40 to-white p-5 shadow-lg shadow-sky-100/60">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white shadow-md shadow-sky-300/50">
                    <AnimatedVisionEyeIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#001B79] text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-200">
                    FEATURED OBJECTIVE
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#001B79] tracking-tight mb-2">
                  {companyInfo.vision.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                  {companyInfo.vision.statement}
                </p>

                <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono font-bold text-[#0369A1]">
                  <span>PLATFORM-NEUTRAL EXCELLENCE</span>
                  <span className="text-[#001B79]">DELIGHT BENCHMARK</span>
                </div>
              </div>
            )}

            {philosophyTabIndex === 1 && (
              <div role="tabpanel" aria-label="Mission" className="relative overflow-hidden rounded-2xl border border-sky-200 bg-white p-5 shadow-md shadow-sky-100/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-[#001B79]">
                    <AnimatedMissionTargetIcon className="h-5 w-5 text-[#001B79]" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-800 text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-200">
                    STRATEGIC MISSION
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#001B79] mb-2">
                  {companyInfo.mission.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {companyInfo.mission.statement}
                </p>

                <div className="pt-3 border-t border-sky-100 text-[10px] font-mono font-bold text-[#0369A1]">
                  ATMOSPHERE OF TOTAL TRUST
                </div>
              </div>
            )}

            {philosophyTabIndex === 2 && (
              <div role="tabpanel" aria-label="Ethics" className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-white p-5 shadow-md shadow-emerald-100/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <AnimatedEthicsHeartIcon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-200">
                    UNCOMPROMISING PRINCIPLE
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#001B79] mb-2">
                  {companyInfo.ethics.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {companyInfo.ethics.statement}
                </p>

                <div className="pt-3 border-t border-emerald-100 text-[10px] font-mono font-bold text-emerald-700">
                  INDUSTRY 4.0 INTEGRITY
                </div>
              </div>
            )}
          </div>

          {/* Desktop Asymmetric Bento Grid (lg+ screens only) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Featured Bento Card: Our Vision (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-sky-300 bg-gradient-to-br from-white via-sky-50/40 to-white p-8 lg:p-12 shadow-xl shadow-sky-100/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Watermark Icon */}
              <AnimatedVisionEyeIcon className="absolute -bottom-6 -right-6 w-64 h-64 text-sky-200/25 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white shadow-md shadow-sky-300/50">
                    <AnimatedVisionEyeIcon className="h-7 w-7 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-[#001B79] text-xs font-mono font-bold uppercase tracking-wider border border-sky-200">
                    FEATURED OBJECTIVE
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-[#001B79] tracking-tight">
                  {companyInfo.vision.title}
                </h3>

                <p className="text-sm lg:text-base text-slate-700 leading-relaxed font-normal">
                  {companyInfo.vision.statement}
                </p>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-sky-100 flex items-center justify-between text-xs font-mono font-bold text-[#0284C7]">
                <span>PLATFORM-NEUTRAL EXCELLENCE</span>
                <span className="text-[#001B79]">DELIGHT BENCHMARK</span>
              </div>
            </motion.div>

            {/* Stacked Bento Cards: Mission & Ethics (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-7 lg:p-8 shadow-lg shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between group"
              >
                <AnimatedMissionTargetIcon className="absolute -bottom-6 -right-6 w-36 h-36 text-sky-100/40 pointer-events-none group-hover:scale-105 transition-transform" />

                <div className="relative z-10 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#001B79] mb-4">
                    <AnimatedMissionTargetIcon className="h-6 w-6 text-[#001B79]" />
                  </div>
                  <h3 className="text-xl font-black text-[#001B79]">
                    {companyInfo.mission.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {companyInfo.mission.statement}
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-5 border-t border-sky-100 text-xs font-mono font-bold text-[#0284C7]">
                  ATMOSPHERE OF TOTAL TRUST
                </div>
              </motion.div>

              {/* Ethics Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-sky-200 bg-white p-7 lg:p-8 shadow-lg shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-between group"
              >
                <AnimatedEthicsHeartIcon className="absolute -bottom-6 -right-6 w-36 h-36 text-emerald-100/40 pointer-events-none group-hover:scale-105 transition-transform" />

                <div className="relative z-10 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 mb-4 border border-emerald-200">
                    <AnimatedEthicsHeartIcon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-black text-[#001B79]">
                    {companyInfo.ethics.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {companyInfo.ethics.statement}
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-5 border-t border-sky-100 text-xs font-mono font-bold text-emerald-700">
                  INDUSTRY 4.0 INTEGRITY
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HISTORY & VERIFIED HERITAGE — COMPACT VERTICAL ON MOBILE / HORIZONTAL ON DESKTOP */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-32 section-sky-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 pb-4 sm:pb-6 border-b border-sky-200">
            <div>
              <span className="eyebrow-pill mb-2 inline-flex items-center space-x-1.5">
                <AnimatedCalendarIcon className="h-4 w-4" />
                <span>GROUP EVOLUTION MILESTONES</span>
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
                History &amp; Verified Heritage
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
              Key historical milestones verified by our business profile documentation — charting two decades of process engineering excellence.
            </p>
          </div>

          {/* Mobile Horizontal Snap Timeline (<lg) */}
          <div className="lg:hidden">
            <MobileSnapSlider
              ariaLabel="Group Evolution Milestones Slider"
              itemWidth="w-[82vw] max-w-[320px]"
              showDots={true}
              desktopClassName="hidden"
            >
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm flex flex-col justify-between h-[200px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shadow-xs" />
                        <span className="text-xl font-black font-mono text-[#001B79]">
                          {m.year}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-100 text-[#001B79] text-[9px] font-mono font-bold border border-sky-200">
                        {m.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1 leading-snug">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-[9px] font-mono">
                    <span className="text-slate-600 font-medium">MILESTONE 0{idx + 1}</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                      VERIFIED
                    </span>
                  </div>
                </div>
              ))}
            </MobileSnapSlider>
          </div>

          {/* Desktop Central Horizontal Axis Timeline (lg and up) */}
          <div className="hidden lg:block relative">
            {/* Desktop Central Horizontal Axis Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sky-200 via-[#0284C7] to-sky-200 -translate-y-1/2" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex flex-col justify-between rounded-3xl border border-sky-200 bg-white p-7 shadow-xl shadow-sky-100/50 hover:border-[#0284C7] hover:-translate-y-2 transition-all duration-300 ${
                      isEven ? 'mb-12' : 'mt-12'
                    }`}
                  >
                    <div>
                      {/* Top Node Header with Glowing Year */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="w-3 h-3 rounded-full bg-[#0284C7] shadow-sm shadow-sky-400" />
                          <span className="text-2xl font-black font-mono text-[#001B79]">
                            {m.year}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#001B79] text-[10px] font-mono font-bold border border-sky-200">
                          {m.badge}
                        </span>
                      </div>

                      <h4 className="font-black text-base text-slate-900 mb-2 leading-snug">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {m.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">MILESTONE 0{idx + 1}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        VERIFIED
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ORGANIZATION HIERARCHY — VERTICAL TREE ON MOBILE / BRANCHING ORG-CHART ON DESKTOP */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-32 section-sky-a">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="eyebrow-pill">GOVERNANCE STRUCTURE</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
              Organization Hierarchy &amp; Functional Leadership
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Multidisciplinary organizational framework structured across core process engineering, electrical switchgear manufacturing, and automation execution.
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Top Node: Business Head (EPCC Division) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl sm:rounded-3xl border-2 border-sky-400 bg-gradient-to-br from-white via-sky-50/60 to-white p-5 sm:p-8 shadow-xl sm:shadow-2xl shadow-sky-200/50 text-center max-w-md w-full hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto mb-2.5 sm:mb-3 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white font-mono font-black text-base sm:text-lg shadow-md shadow-sky-300">
                SP
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#0284C7] uppercase inline-flex items-center justify-center space-x-1.5 tracking-wider mb-1">
                <AnimatedExecutiveStarIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>EXECUTIVE HEAD // EPCC DIVISION</span>
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#001B79]">
                {companyInfo.leadership[0].name}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 sm:mt-1 font-medium">
                {companyInfo.leadership[0].role}
              </p>
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-sky-100 flex items-center justify-center space-x-2 text-[10px] sm:text-[11px] font-mono text-emerald-700 font-bold">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>PDF 1 Page 5 Verified</span>
              </div>
            </motion.div>

            {/* Connecting Vertical Stem */}
            <div className="w-0.5 h-6 sm:h-10 bg-gradient-to-b from-sky-400 to-sky-300" />

            {/* Horizontal Branch Bar on Tablet/Desktop only */}
            <div className="hidden sm:block w-3/4 max-w-3xl h-0.5 bg-sky-300 relative">
              <div className="absolute left-0 top-0 w-0.5 h-6 bg-sky-300" />
              <div className="absolute left-1/2 top-0 w-0.5 h-6 bg-sky-300 -translate-x-1/2" />
              <div className="absolute right-0 top-0 w-0.5 h-6 bg-sky-300" />
            </div>

            {/* Subordinate Leadership: Mobile Swipe Slider (<sm) and 3-col Grid (sm+) */}
            <div className="w-full pt-1 sm:pt-6">
              {/* Mobile View: Swipe Slider */}
              <div className="sm:hidden">
                <MobileSnapSlider
                  ariaLabel="Functional Leadership Slider"
                  itemWidth="w-[82vw] max-w-[320px]"
                  showDots={true}
                  desktopClassName="hidden"
                >
                  {companyInfo.leadership.slice(1).map((partner, pIdx) => {
                    const initials = partner.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                    return (
                      <div
                        key={pIdx}
                        className="rounded-2xl border border-sky-200 bg-white p-5 text-center shadow-sm flex flex-col justify-between h-[200px]"
                      >
                        <div>
                          <div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-[#001B79] font-mono font-bold text-xs shadow-xs">
                            {initials}
                          </div>
                          <span className="text-[9px] font-mono font-bold text-[#0369A1] uppercase block mb-1">
                            PARTNER // PROCESS EXPERT
                          </span>
                          <h4 className="text-sm font-black text-slate-900 leading-snug mb-1">
                            {partner.name}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                            {partner.role}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-sky-100 text-[9px] font-mono font-bold text-slate-600">
                          PARTNER 0{pIdx + 1}
                        </div>
                      </div>
                    )
                  })}
                </MobileSnapSlider>
              </div>

              {/* Tablet & Desktop View: 3-column Grid Unchanged */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-6">
                {companyInfo.leadership.slice(1).map((partner, pIdx) => {
                  const initials = partner.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                  return (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIdx * 0.1 }}
                      className="rounded-3xl border border-sky-200 bg-white p-6 text-center shadow-lg shadow-sky-100/50 hover:border-[#0284C7] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-[#001B79] font-mono font-bold text-sm shadow-xs">
                          {initials}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase block mb-1">
                          PARTNER // PROCESS EXPERT
                        </span>
                        <h4 className="text-base font-black text-slate-900 leading-snug mb-1">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {partner.role}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-sky-100 text-[10px] font-mono font-bold text-slate-400">
                        PARTNER 0{pIdx + 1}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PLATFORM-NEUTRAL PARTNERS — SPOTLIGHT DIRECTORY (MASTER-DETAIL)       */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-28 relative z-20 overflow-visible lg:overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE]/70 border-t border-sky-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Main Clean Light Card Container (rounded 20px on mobile, 28px on desktop) */}
          <div className="relative rounded-2xl sm:rounded-[28px] bg-white border border-sky-200 p-4 sm:p-8 lg:p-14 shadow-xl sm:shadow-2xl shadow-sky-100/70 overflow-visible lg:overflow-hidden text-slate-900">
            
            {/* Background Subtle Light Grid & Corner Ambient Glows wrapped in overflow-hidden */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-[28px] overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />
            </div>

            {/* Header: Title on Left, Description on Right */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-5 sm:pb-8 border-b border-sky-100">
              <div>
                <div className="inline-flex flex-col items-start mb-2 sm:mb-3">
                  <span className="eyebrow-pill">
                    GLOBAL OEM ALLIANCES
                  </span>
                  <span className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#0284C7] to-sky-300 mt-1.5 sm:mt-2 rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
                  Platform-Neutral <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001B79] via-[#0284C7] to-[#38BDF8]">Technology Partners</span>
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
                Platform-neutral systems integrator partnering with global tier-1 automation, switchgear, instrumentation, and software OEMs.
              </p>
            </div>

            {/* Mobile Category Dropdown Selector (< lg screen) */}
            <div className="lg:hidden relative z-30 mb-4 sm:mb-6">
              <label htmlFor="partner-category-mobile-select" className="block text-[10px] font-mono uppercase tracking-wider text-[#0369A1] font-bold mb-1.5">
                FILTER OEM CATEGORY
              </label>

              {/* Click outside backdrop when dropdown is open */}
              {isCategoryDropdownOpen && (
                <div
                  className="fixed inset-0 z-40 bg-transparent"
                  onClick={() => setIsCategoryDropdownOpen(false)}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-50">
                <button
                  id="partner-category-mobile-select"
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-sky-300 bg-gradient-to-r from-sky-50/90 to-white text-slate-900 shadow-sm text-xs font-mono font-bold cursor-pointer min-h-[44px]"
                  aria-haspopup="listbox"
                  aria-expanded={isCategoryDropdownOpen}
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    {(() => {
                      const SelectedIcon = partnerIcons[selectedPartnerCat] || Layers
                      return <SelectedIcon className="w-4 h-4 text-[#001B79] shrink-0" />
                    })()}
                    <span className="truncate">{selectedPartnerCat}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#001B79] text-white font-mono shrink-0">
                      {categoryCounts[selectedPartnerCat] || 0}
                    </span>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isCategoryDropdownOpen ? 'rotate-180 text-[#001B79]' : ''}`} />
                </button>

                {isCategoryDropdownOpen && (
                  <div
                    role="listbox"
                    aria-label="Partner Categories"
                    className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-sky-200 rounded-xl shadow-2xl z-50 py-1.5 max-h-72 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-1"
                  >
                    {partnersCategories.map((cat) => {
                      const isAct = selectedPartnerCat === cat
                      const Icon = partnerIcons[cat] || Layers
                      const count = categoryCounts[cat] || 0

                      return (
                        <button
                          key={cat}
                          role="option"
                          aria-selected={isAct}
                          onClick={() => {
                            setIsAutoCyclePaused(true)
                            setSelectedPartnerCat(cat)
                            setIsCategoryDropdownOpen(false)
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-mono font-bold text-left cursor-pointer transition-colors ${
                            isAct
                              ? 'bg-[#001B79] text-white'
                              : 'text-slate-700 hover:bg-sky-50'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <Icon className={`w-3.5 h-3.5 shrink-0 ${isAct ? 'text-sky-300' : 'text-[#0284C7]'}`} />
                            <span className="truncate">{cat}</span>
                          </div>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${
                            isAct ? 'bg-white/20 text-white' : 'bg-sky-100 text-[#001B79]'
                          }`}>
                            {count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop 3-Zone Layout (Left Rail: 22%, Middle List: 33%, Right Spotlight: 45%) */}
            <div
              className="hidden lg:grid lg:grid-cols-12 gap-6 relative z-10 items-start"
              onKeyDown={handlePartnerKeyDown}
              tabIndex={0}
              aria-label="Partner Directory Navigation. Use Up and Down arrow keys to cycle through partners."
            >
              
              {/* ZONE 1: VERTICAL CATEGORY RAIL (~22% width -> 3 cols of 12) */}
              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Partner Categories"
                className="lg:col-span-3 space-y-2 pr-2 border-r border-sky-100"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#0369A1] mb-3 font-bold px-2">
                  // Filter by Category
                </div>
                {partnersCategories.map((cat) => {
                  const isAct = selectedPartnerCat === cat
                  const Icon = partnerIcons[cat] || Layers
                  const count = categoryCounts[cat] || 0

                  return (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={isAct}
                      onClick={() => {
                        setIsAutoCyclePaused(true)
                        setSelectedPartnerCat(cat)
                      }}
                      className={`relative w-full flex items-center justify-between px-3.5 py-3 rounded-2xl text-xs font-mono font-bold transition-all duration-300 text-left cursor-pointer group border ${
                        isAct
                          ? 'bg-gradient-to-r from-sky-50 to-white text-[#001B79] border-sky-300 shadow-md shadow-sky-100'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-sky-50/60 border-transparent'
                      }`}
                    >
                      {/* Active Indicator Bar */}
                      {isAct && (
                        <motion.div
                          layoutId="activeCategoryBarLight"
                          className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#0284C7] rounded-r-full shadow-xs"
                        />
                      )}

                      <div className="flex items-center space-x-2.5 pl-1.5 min-w-0">
                        <Icon className={`w-4 h-4 shrink-0 transition-colors ${isAct ? 'text-[#0284C7]' : 'text-slate-400 group-hover:text-[#0284C7]'}`} />
                        <span className="truncate">{cat}</span>
                      </div>

                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border shrink-0 font-bold ${
                        isAct
                          ? 'bg-[#001B79] text-white border-[#001B79]'
                          : 'bg-sky-100 text-[#001B79] border-sky-200 group-hover:bg-sky-200'
                      }`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* ZONE 2: COMPACT PARTNER LIST (~33% width -> 4 cols of 12) */}
              <div
                ref={listContainerRef}
                role="listbox"
                aria-label="Technology Partners List"
                className="lg:col-span-4 space-y-2 pr-2 max-h-[520px] overflow-y-auto no-scrollbar border-r border-sky-100"
                onMouseEnter={() => setIsAutoCyclePaused(true)}
              >
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#0369A1] mb-3 font-bold px-2">
                  <span>// Partners ({filteredPartners.length})</span>
                  <span className="text-[10px] text-slate-600 normal-case font-sans font-medium">↑↓ key navigates</span>
                </div>

                {filteredPartners.map((partner) => {
                  const isSelected = activePartner.name === partner.name
                  const isRockwell = partner.name.includes('Rockwell')

                  const words = partner.name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
                  const monogram = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : partner.name.slice(0, 2).toUpperCase()

                  // Category Accent Color Map
                  const getCategoryDot = (category) => {
                    switch (category) {
                      case 'Automation & DCS/PLC':
                        return 'bg-blue-600'
                      case 'Electrical & Switchgear':
                        return 'bg-amber-500'
                      case 'Field Instrumentation & Valves':
                        return 'bg-teal-600'
                      case 'Enterprise Software & SCADA':
                        return 'bg-purple-600'
                      case 'Enclosures & Connectivity':
                        return 'bg-slate-500'
                      default:
                        return 'bg-sky-600'
                    }
                  }

                  return (
                    <div
                      key={partner.name}
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => {
                        setIsAutoCyclePaused(true)
                        setSelectedPartnerName(partner.name)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setIsAutoCyclePaused(true)
                          setSelectedPartnerName(partner.name)
                        }
                      }}
                      className={`relative flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 group border focus:outline-hidden focus:ring-2 focus:ring-[#0284C7] ${
                        isSelected
                          ? 'bg-gradient-to-r from-sky-100/80 via-white to-sky-50 border-sky-400 shadow-md shadow-sky-100'
                          : 'bg-white hover:bg-sky-50/60 border-slate-200 hover:border-sky-300'
                      }`}
                    >
                      {/* Active Left Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full bg-[#0284C7] shadow-sm shadow-sky-300" />
                      )}

                      <div className="flex items-center space-x-3 min-w-0 pl-1">
                        {/* Monogram Badge */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 border transition-transform duration-200 ${
                          isSelected
                            ? 'bg-[#001B79] text-white border-[#001B79] shadow-xs scale-105'
                            : 'bg-sky-100 text-[#001B79] border-sky-200 group-hover:scale-105'
                        }`}>
                          {monogram}
                        </div>

                        {/* Partner Name + Category Tag */}
                        <div className="min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs font-bold truncate leading-tight transition-colors ${
                              isSelected ? 'text-[#001B79]' : 'text-slate-800 group-hover:text-[#001B79]'
                            }`}>
                              {partner.name}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getCategoryDot(partner.category)}`} />
                            <span className="text-[10px] font-mono text-slate-500 truncate">
                              {partner.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Tag / Arrow */}
                      <div className="flex items-center space-x-2 shrink-0 pl-2">
                        {isRockwell && (
                          <span className="hidden xl:inline-flex text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                            PRIMARY
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? 'text-[#0284C7] translate-x-0.5 font-bold' : 'text-slate-400 group-hover:text-[#001B79] group-hover:translate-x-0.5'
                        }`} />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* ZONE 3: STICKY SPOTLIGHT DETAIL PANEL (~45% width -> 5 cols of 12) */}
              <div className="lg:col-span-5 sticky top-24">
                <AnimatePresence mode="wait">
                  {(() => {
                    const partner = activePartner
                    const words = partner.name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
                    const monogram = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : partner.name.slice(0, 2).toUpperCase()

                    const getSpotlightAccent = (category) => {
                      switch (category) {
                        case 'Automation & DCS/PLC':
                          return {
                            chip: 'bg-blue-50 text-blue-800 border-blue-200',
                            glow: 'from-blue-200/40 via-sky-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white border-sky-300',
                          }
                        case 'Electrical & Switchgear':
                          return {
                            chip: 'bg-amber-50 text-amber-800 border-amber-200',
                            glow: 'from-amber-200/40 via-yellow-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-amber-600 to-amber-500 text-white border-amber-300',
                          }
                        case 'Field Instrumentation & Valves':
                          return {
                            chip: 'bg-teal-50 text-teal-800 border-teal-200',
                            glow: 'from-teal-200/40 via-cyan-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-teal-700 to-teal-500 text-white border-teal-300',
                          }
                        case 'Enterprise Software & SCADA':
                          return {
                            chip: 'bg-purple-50 text-purple-800 border-purple-200',
                            glow: 'from-purple-200/40 via-fuchsia-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-purple-700 to-indigo-600 text-white border-purple-300',
                          }
                        case 'Enclosures & Connectivity':
                          return {
                            chip: 'bg-slate-100 text-slate-800 border-slate-300',
                            glow: 'from-slate-200/40 via-sky-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-slate-700 to-slate-500 text-white border-slate-300',
                          }
                        default:
                          return {
                            chip: 'bg-sky-50 text-sky-800 border-sky-200',
                            glow: 'from-sky-200/40 via-cyan-100/30 to-transparent',
                            monogramBg: 'bg-gradient-to-br from-[#001B79] to-[#0284C7] text-white border-sky-300',
                          }
                      }
                    }

                    const spotStyle = getSpotlightAccent(partner.category)

                    return (
                      <motion.div
                        key={partner.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="relative rounded-3xl bg-gradient-to-br from-white via-sky-50/40 to-white border border-sky-300 p-8 shadow-xl shadow-sky-100/80 overflow-hidden"
                      >
                        {/* Decorative Radial Ambient Glow */}
                        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${spotStyle.glow} blur-3xl pointer-events-none`} />

                        {/* Top Row: Category Chip + Primary Automation Platform Badge */}
                        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
                          <span className={`text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full border ${spotStyle.chip}`}>
                            {partner.category}
                          </span>

                          {partner.highlight && (
                            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-mono font-bold shadow-xs">
                              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{partner.highlight}</span>
                            </div>
                          )}
                        </div>

                        {/* Monogram Block + Partner Name */}
                        <div className="relative z-10 flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center font-mono font-black text-xl shadow-md shrink-0 ${spotStyle.monogramBg}`}>
                            {monogram}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block mb-1">
                              VERIFIED STRATEGIC OEM
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-[#001B79] leading-tight">
                              {partner.name}
                            </h3>
                          </div>
                        </div>

                        {/* Full Description Paragraph */}
                        <div className="relative z-10 mb-8 pt-4 border-t border-sky-100">
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {partner.description}
                          </p>
                        </div>

                        {/* Footer Strip: SYSTEM INTEGRATOR + VERIFIED TIER-1 */}
                        <div className="relative z-10 pt-4 border-t border-dashed border-sky-200 flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 uppercase tracking-wider font-semibold">
                            SYSTEM INTEGRATOR
                          </span>
                          <span className="inline-flex items-center space-x-1.5 text-emerald-800 font-bold px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>VERIFIED TIER-1</span>
                          </span>
                        </div>
                      </motion.div>
                    )
                  })()}
                </AnimatePresence>
              </div>

            </div>

            {/* Mobile / Tablet Compact Rows with Inline Expandable Accordion (< lg screen) */}
            <div className="lg:hidden relative z-10 space-y-2">
              {(showAllPartnersMobile ? filteredPartners : filteredPartners.slice(0, 5)).map((partner) => {
                const words = partner.name.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
                const monogram = words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : partner.name.slice(0, 2).toUpperCase()
                const isExpanded = selectedPartnerName === partner.name

                return (
                  <div
                    key={partner.name}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isExpanded
                        ? 'bg-gradient-to-br from-sky-50/90 via-white to-sky-50/50 border-[#0284C7] shadow-md shadow-sky-100'
                        : 'bg-white hover:bg-sky-50/50 border-slate-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setIsAutoCyclePaused(true)
                        setSelectedPartnerName(isExpanded ? '' : partner.name)
                      }}
                      className="w-full p-3 flex items-center justify-between text-left cursor-pointer min-h-[48px] group"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0 border transition-colors ${
                          isExpanded
                            ? 'bg-[#001B79] text-white border-[#001B79]'
                            : 'bg-sky-100 text-[#001B79] border-sky-200 group-hover:bg-[#001B79] group-hover:text-white'
                        }`}>
                          {monogram}
                        </div>
                        <div className="min-w-0">
                          <h4 className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                            isExpanded ? 'text-[#001B79]' : 'text-slate-900 group-hover:text-[#001B79]'
                          }`}>
                            {partner.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500 block truncate">
                            {partner.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0 pl-2">
                        {partner.highlight && (
                          <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 whitespace-nowrap">
                            PRIMARY
                          </span>
                        )}
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#0284C7]' : 'group-hover:text-[#0284C7]'
                        }`} />
                      </div>
                    </button>

                    {/* Inline Expanded Detail Drawer */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-3.5 pb-3.5 pt-1 border-t border-sky-100 text-slate-800 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1.5 pt-2">
                          <span className="inline-flex items-center space-x-1 text-emerald-800 font-bold px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-[10px] font-mono">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>VERIFIED TIER-1 OEM</span>
                          </span>
                          {partner.highlight && (
                            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-sky-100 border border-sky-200 text-[#001B79] text-[10px] font-mono font-bold">
                              <Sparkles className="w-3 h-3 text-[#0284C7]" />
                              <span>{partner.highlight}</span>
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed font-normal">
                          {partner.description}
                        </p>

                        <div className="pt-2.5 border-t border-dashed border-sky-200 flex items-center justify-between text-[10px] font-mono text-slate-500">
                          <span>SYSTEM INTEGRATOR ALLIANCE</span>
                          <span className="font-bold text-[#001B79]">ACTIVE PORTFOLIO</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )
              })}

              {filteredPartners.length > 5 && (
                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllPartnersMobile(!showAllPartnersMobile)}
                    className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-sky-300 bg-white hover:bg-sky-50 text-[#001B79] text-xs font-mono font-bold shadow-xs transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>{showAllPartnersMobile ? 'Show Fewer Partners' : `View All ${filteredPartners.length} Partners`}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${showAllPartnersMobile ? '-rotate-90' : 'rotate-90'}`} />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ESTEEMED CLIENTELE — CLIENT WALL (BENTO TRUST GRID)                    */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/50 to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Main Rounded (28px) Light Panel with Soft Gradient & Blueprint Dot Grid */}
          <div className="relative rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE]/60 border border-sky-300/80 p-4 sm:p-8 lg:p-14 shadow-xl sm:shadow-2xl shadow-sky-900/10 overflow-hidden border-t-2 border-t-[#0284C7]">
            
            {/* Faint Blueprint Dot Grid Overlay */}
            <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

            {/* Decorative Outline Shapes (Hexagons & Gears) in Corners at Low Opacity */}
            <svg
              className="absolute -top-16 -right-16 w-64 h-64 text-sky-400/20 pointer-events-none transform rotate-12"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="50 3, 90 25, 90 75, 50 97, 10 75, 10 25" />
              <circle cx="50" cy="50" r="22" strokeDasharray="3 3" />
            </svg>

            <svg
              className="absolute -bottom-20 -left-20 w-72 h-72 text-sky-400/20 pointer-events-none transform -rotate-45"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <circle cx="50" cy="50" r="42" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="26" />
              <line x1="50" y1="2" x2="50" y2="98" />
              <line x1="2" y1="50" x2="98" y2="50" />
            </svg>

            {/* Header: Title on Left with Gradient Underline Accent, Description on Right */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-5 sm:mb-12 pb-4 sm:pb-8 border-b border-sky-100 sm:border-sky-200/90">
              <div className="space-y-1 sm:space-y-2">
                <div className="inline-flex items-center space-x-2">
                  <span className="eyebrow-pill text-[10px] sm:text-xs py-0.5 px-2.5">PROVEN TRACK RECORD</span>
                  <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#001B79] to-[#0284C7] rounded-full" />
                </div>
                <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight leading-tight">
                  Esteemed Industrial Clientele
                </h2>
                {/* Short Cyan Gradient Underline Accent */}
                <div className="w-14 sm:w-20 h-1 bg-gradient-to-r from-[#001B79] via-[#0284C7] to-[#38BDF8] rounded-full" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed pt-1 sm:pt-0">
                Trusted by Fortune 500 chemical multinationals, domestic heavy manufacturing leaders, and international ink corporations.
              </p>
            </div>

            {/* Client Wall Bento Grid: Optimized for Mobile & Desktop */}
            {(() => {
              // Featured clients to prioritize: DIC India, Toyo Ink, DAE
              const validClients = clientsList.filter((client) => Boolean(client.logo))
              const featuredIds = ['dic-india', 'toyo-ink', 'dae']
              const featuredClients = validClients.filter((c) => featuredIds.includes(c.id))
              const regularClients = validClients.filter((c) => !featuredIds.includes(c.id))
              const orderedClients = [...featuredClients, ...regularClients]

              // Rotating Brand Tint Palettes (blue, cyan, teal, indigo)
              const brandTints = [
                {
                  bg: 'bg-blue-100 text-[#001B79] border-blue-200',
                  wideBg: 'bg-white/20 text-white border-white/30',
                },
                {
                  bg: 'bg-sky-100 text-[#0284C7] border-sky-200',
                  wideBg: 'bg-sky-400/25 text-sky-100 border-sky-300/40',
                },
                {
                  bg: 'bg-teal-100 text-teal-800 border-teal-200',
                  wideBg: 'bg-teal-400/25 text-teal-100 border-teal-300/40',
                },
                {
                  bg: 'bg-indigo-100 text-indigo-900 border-indigo-200',
                  wideBg: 'bg-indigo-400/25 text-indigo-100 border-indigo-300/40',
                },
              ]

              return (
                <>
                  {/* MOBILE VIEW (< lg screen): Premium Full-Detail Swipe Slider */}
                  <div className="lg:hidden relative z-10">
                    <MobileSnapSlider
                      ariaLabel="Esteemed Industrial Clientele Slider"
                      itemWidth="w-[82vw] max-w-[320px]"
                      showDots={true}
                      desktopClassName="hidden"
                    >
                      {orderedClients.map((client, idx) => {
                        const isFeatured = featuredIds.includes(client.id)
                        const indexNum = String(idx + 1).padStart(2, '0')

                        return (
                          <div
                            key={client.id || client.name}
                            className={`rounded-2xl p-4 flex flex-col justify-between min-h-[160px] h-full shadow-sm transition-all border ${
                              isFeatured
                                ? 'bg-gradient-to-br from-white via-sky-50/70 to-white border-sky-300 ring-1 ring-sky-200/50'
                                : 'bg-white border-slate-200'
                            }`}
                          >
                            {/* Card Top: Large Logo Tile + Ranking Badge */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="h-10 px-3 py-1.5 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                                <img
                                  src={client.logo}
                                  alt={`${client.name} logo`}
                                  className="h-6 w-auto max-w-[95px] object-contain mix-blend-multiply"
                                  loading="lazy"
                                />
                              </div>

                              <div className="flex items-center space-x-1.5">
                                {isFeatured ? (
                                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#001B79] text-white">
                                    KEY ACCOUNT
                                  </span>
                                ) : (
                                  <span className="font-mono text-xs font-bold text-slate-400">
                                    {indexNum}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Card Body: Complete Company Name without truncation */}
                            <div className="mb-2">
                              <h4 className="text-sm font-bold text-[#001B79] leading-snug">
                                {client.name}
                              </h4>
                            </div>

                            {/* Card Footer: Full Industry Description (no ellipsis truncation) */}
                            <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-600">
                              <span className="leading-tight">{client.industry}</span>
                            </div>
                          </div>
                        )
                      })}
                    </MobileSnapSlider>
                  </div>

                  {/* DESKTOP VIEW (lg+): Exactly original full 4-col Bento Grid unchanged */}
                  <div className="hidden lg:grid relative z-10 grid-cols-4 gap-5">
                    {orderedClients.map((client, idx) => {
                      const isFeaturedTop = featuredIds.includes(client.id)
                      const isWide = idx % 5 === 0
                      const initials = client.name
                        .replace(/[^a-zA-Z0-9\s]/g, '')
                        .split(/\s+/)
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join('')
                        .toUpperCase()
                      const indexNum = String(idx + 1).padStart(2, '0')
                      const tint = brandTints[idx % brandTints.length]

                      return (
                        <motion.div
                          key={client.id || client.name}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-20px' }}
                          transition={{ duration: 0.35, delay: (idx % 8) * 0.03 }}
                          className={`group relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0284C7] overflow-hidden ${
                            isFeaturedTop
                              ? 'col-span-2 bg-gradient-to-r from-[#001B79] via-[#0028A8] to-[#0284C7] text-white shadow-md shadow-sky-900/15 border border-sky-300/40'
                              : isWide
                              ? 'col-span-2 bg-gradient-to-br from-[#001B79] via-[#00229C] to-[#0284C7] text-white border border-sky-200/90 shadow-2xs'
                              : 'col-span-1 bg-white text-slate-900 border border-sky-200/90 shadow-2xs hover:border-[#0284C7] hover:shadow-cyan-100/60'
                          }`}
                          tabIndex={0}
                        >
                          {/* Animated Gradient Sweep along bottom edge on hover */}
                          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div>
                            {/* Top Row: Logo Image or Monogram on Left, Index Number in Monospace on Right */}
                            <div className="flex items-center justify-between mb-3.5">
                              {client.logo ? (
                                <div
                                  className={`h-11 px-3 py-1.5 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs ${
                                    isFeaturedTop
                                      ? 'bg-white border-white/60 shadow-sky-950/20'
                                      : isWide
                                      ? 'bg-white border-white/40 shadow-slate-200/50'
                                      : 'bg-white border-sky-100 shadow-slate-200/50'
                                  }`}
                                >
                                  <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    className="h-7 w-auto max-w-[120px] object-contain mix-blend-multiply"
                                    loading="lazy"
                                  />
                                </div>
                              ) : (
                                <div
                                  className={`w-10 h-10 rounded-xl border flex items-center justify-center font-mono font-black text-xs shrink-0 transition-transform duration-300 group-hover:rotate-6 shadow-xs ${
                                    isFeaturedTop ? 'bg-white/20 text-white border-white/30' : isWide ? tint.wideBg : tint.bg
                                  }`}
                                >
                                  {initials}
                                </div>
                              )}

                              <div className="flex items-center space-x-1.5">
                                <span
                                  className={`font-mono text-xs font-bold tracking-widest ${
                                    isFeaturedTop || isWide ? 'text-sky-200/90' : 'text-slate-400'
                                  }`}
                                >
                                  {indexNum}
                                </span>
                              </div>
                            </div>

                            {/* Company Name in Semibold */}
                            <h4
                              className={`text-base font-bold leading-snug tracking-tight mb-2 transition-colors ${
                                isFeaturedTop || isWide
                                  ? 'text-white'
                                  : 'text-[#001B79] group-hover:text-[#0284C7]'
                              }`}
                            >
                              {client.name}
                            </h4>
                          </div>

                          {/* Sub-label in Readable Typography */}
                          <div
                            className={`pt-2.5 border-t text-xs font-mono font-medium leading-relaxed line-clamp-2 ${
                              isFeaturedTop || isWide
                                ? 'border-white/20 text-sky-100'
                                : 'border-sky-100 text-slate-600'
                            }`}
                          >
                            {client.industry}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </>
              )
            })()}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INTENTION FOR LONG-TERM ASSOCIATION — NUMBERED STEP CARDS & CTA        */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-20 lg:py-32 section-sky-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="eyebrow-pill">LONG-TERM VALUE</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#001B79] tracking-tight">
              {companyInfo.longTermVision.heading}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              {companyInfo.longTermVision.summary}
            </p>
          </div>

          {/* MOBILE VIEW (< lg screen): Interactive Horizontal Snap Slider for 5 Strategic Points + CTA Card */}
          <div className="lg:hidden">
            <MobileSnapSlider
              ariaLabel="Strategic Goals Slider"
              itemWidth="w-[82vw] max-w-[320px]"
              showDots={true}
              desktopClassName="hidden"
            >
              {companyInfo.longTermVision.points.map((point, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm flex flex-col justify-between h-[190px]"
                >
                  <div>
                    <div className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#001B79] to-[#0284C7] mb-2">
                      0{idx + 1}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-sky-100 text-[10px] font-mono font-bold text-[#0369A1] uppercase">
                    STRATEGIC GOAL 0{idx + 1}
                  </div>
                </div>
              ))}

              {/* Direct Consultation Card in slider */}
              <div className="rounded-2xl border border-sky-300 bg-gradient-to-br from-[#001B79] via-[#00229C] to-[#0284C7] text-white p-5 flex flex-col justify-between h-[190px] shadow-md">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-sky-200 uppercase tracking-wider block">
                    DIRECT CONSULTATION
                  </span>
                  <h4 className="text-base font-black text-white leading-tight">
                    Initiate a Strategic Partnership
                  </h4>
                  <p className="text-xs text-sky-100 leading-relaxed line-clamp-2">
                    Enabling clients to execute projects with speed, quality, and cost efficiency.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-200 hover:text-white transition-all pt-1"
                >
                  <span>Initiate Discussion</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </MobileSnapSlider>
          </div>

          {/* DESKTOP VIEW (lg+ screen): 3-Column Bento Grid Unchanged */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {companyInfo.longTermVision.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-3xl border border-sky-200 bg-white p-7 shadow-lg shadow-sky-100/50 hover:border-[#0284C7] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#001B79] to-[#0284C7] mb-4">
                    0{idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                    {point}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-sky-100 text-[10px] font-mono font-bold text-[#0284C7] uppercase">
                  STRATEGIC GOAL 0{idx + 1}
                </div>
              </motion.div>
            ))}

            {/* Direct Consultation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-sky-300 bg-gradient-to-br from-[#001B79] via-[#00229C] to-[#0284C7] text-white p-8 flex flex-col justify-between shadow-2xl shadow-sky-900/20 group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold text-sky-200 uppercase tracking-wider block">
                  DIRECT CONSULTATION
                </span>
                <h4 className="text-xl font-black text-white leading-tight">
                  Initiate a Strategic Partnership
                </h4>
                <p className="text-xs text-sky-100 leading-relaxed">
                  Enabling clients to execute projects with speed, quality, technical accuracy, and cost efficiency.
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-200 hover:text-white group-hover:translate-x-1 transition-all min-h-[44px]"
              >
                <span>Initiate Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL CTA SECTION — FULL-WIDTH GRADIENT BANNER & FEATURE PILLS         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE] border-t border-sky-200">
        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#001B79] via-[#0284C7] to-[#38BDF8] p-6 sm:p-12 lg:p-16 text-white shadow-xl sm:shadow-2xl border border-sky-300/40">
            <TechnicalBlueprintGridSVG className="opacity-25" isLightMode={false} />

            <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-3 sm:space-y-4 lg:col-span-8">
                <div className="inline-flex items-center space-x-2 rounded-full bg-white/15 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-mono font-bold text-sky-200 border border-sky-300/40 backdrop-blur-md">
                  <AnimatedExecutiveStarIcon className="h-3.5 w-3.5 text-sky-300 shrink-0" />
                  <span>{companyInfo.certification}</span>
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.2]">
                  Partner with SIF-EPX Group for Your Next Industrial Project
                </h2>
                <p className="text-xs sm:text-base text-sky-100 leading-relaxed max-w-2xl font-normal">
                  Leverage our comprehensive EPCC, Process Automation, Electrical Switchgear, and Project Management capabilities to accelerate plant execution with zero compromise on safety.
                </p>
                {/* Feature Chips: Single horizontal scroll row on mobile (<sm), wrap on tablet/desktop */}
                <div
                  tabIndex={0}
                  role="region"
                  aria-label="Capabilities and certifications"
                  className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 sm:flex-wrap sm:gap-3 pt-2 text-xs sm:text-sm text-sky-100 font-medium focus:outline-none focus:ring-1 focus:ring-sky-400 rounded"
                >
                  <div className="px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm flex items-center space-x-1.5 shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300 shrink-0" />
                    <span>Turnkey EPCC Execution</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm flex items-center space-x-1.5 shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300 shrink-0" />
                    <span>Pan-India Engineering Network</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm flex items-center space-x-1.5 shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-300 shrink-0" />
                    <span>Single-Point Accountability</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:col-span-4 lg:flex-col lg:space-x-0 lg:space-y-3 pt-2 sm:pt-0">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 rounded-full bg-white hover:bg-sky-50 text-[#001B79] font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 px-6 sm:px-8 shadow-xl transition-all hover:scale-105 cursor-pointer text-center min-h-[44px]"
                >
                  <span>Request Project Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${companyInfo.contact.phones[0]}`}
                  className="w-full inline-flex items-center justify-center space-x-2 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 px-5 sm:px-6 py-3 sm:py-3.5 text-center font-bold text-white transition-all text-xs uppercase tracking-wider backdrop-blur-md min-h-[44px]"
                >
                  <Phone className="h-4 w-4 text-sky-200" />
                  <span>Direct: {companyInfo.contact.phones[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

