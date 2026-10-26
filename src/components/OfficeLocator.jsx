import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MapPin, Phone, Mail, Building, Navigation2, Radio } from 'lucide-react'
import indiaMap from '@svg-maps/india'
import { companyInfo } from '../data/companyData'
import { ChipScroller } from './ui/ChipScroller'

const offices = [
  {
    id: 'noida',
    name: 'Corporate Engineering HQ',
    city: 'Noida (NCR)',
    mapLabel: 'Noida HQ',
    stateId: 'up',
    address: 'B-31, Sector 63, Noida, Uttar Pradesh, 201301',
    role: 'Corporate Management, Basic & Detail Engineering, SCADA Labs',
    phone: companyInfo.contact.phones[0],
    email: companyInfo.contact.emails[0],
    coords: { x: 194, y: 222 },
    badge: { x: 236, y: 228, w: 124, h: 32 },
    directionsUrl: 'https://maps.google.com/?q=Sector+63+Noida+Uttar+Pradesh'
  },
  {
    id: 'ghaziabad',
    name: 'Panel Works & Integration Facility',
    city: 'Murad Nagar (Ghaziabad)',
    mapLabel: 'Ghaziabad Works',
    stateId: 'up',
    address: 'Works Facility, Murad Nagar Industrial Area, Ghaziabad, UP',
    role: '25,000 sq ft Switchgear Works, 9-Tank Pretreatment, Testing Bay',
    phone: companyInfo.contact.phones[0],
    email: companyInfo.contact.emails[0],
    coords: { x: 200, y: 196 },
    badge: { x: 236, y: 172, w: 156, h: 32 },
    directionsUrl: 'https://maps.google.com/?q=Murad+Nagar+Industrial+Area+Ghaziabad'
  },
  {
    id: 'ahmedabad',
    name: 'Western Branch Office',
    city: 'Ahmedabad (Gujarat)',
    mapLabel: 'Ahmedabad Desk',
    stateId: 'gj',
    address: 'Branch Operations Desk, SG Highway, Ahmedabad, Gujarat',
    role: 'Western Regional Operations, Client Liaison, Renewable EPC',
    phone: companyInfo.contact.phones[0],
    email: 'ahmedabad@sifsystems.com',
    coords: { x: 94, y: 346 },
    badge: { x: 14, y: 300, w: 154, h: 32 },
    directionsUrl: 'https://maps.google.com/?q=SG+Highway+Ahmedabad+Gujarat'
  },
  {
    id: 'vadodara',
    name: 'Gujarat Regional Project Office',
    city: 'Vadodara (Gujarat)',
    mapLabel: 'Vadodara Office',
    stateId: 'gj',
    address: 'Regional Branch Office, Alkapuri / GIDC Belt, Vadodara, Gujarat',
    role: 'Project Management, Site Commissioning, Sayakha & Dahej Corridor Support',
    phone: companyInfo.contact.phones[1] || companyInfo.contact.phones[0],
    email: 'vadodara@sifsystems.com',
    coords: { x: 108, y: 378 },
    badge: { x: 138, y: 382, w: 152, h: 32 },
    directionsUrl: 'https://maps.google.com/?q=Alkapuri+Vadodara+Gujarat'
  }
]

export default function OfficeLocator() {
  const [selectedOfficeId, setSelectedOfficeId] = useState('noida')
  const selectedOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0]

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-4 sm:p-6 md:p-10 shadow-xl shadow-sky-100/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-sky-100 text-left">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            OFFICE &amp; WORKS FOOTPRINT
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#001B79]">
            Strategic Office &amp; Manufacturing Locations
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Headquartered in NCR with state-of-the-art switchgear works and regional execution centers across Gujarat. Click a pin or office card to locate.
        </p>
      </div>

      {/* Mobile-First Layout: Map full width on top (~280px tall), ChipScroller below, Detail Card with Call/Email/Directions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left / Top: Interactive Subcontinent Radar Map */}
        <div className="lg:col-span-7 bg-gradient-to-br from-white via-sky-50/50 to-blue-50/70 rounded-3xl p-3 sm:p-6 md:p-8 border border-sky-200 shadow-xl shadow-sky-100/60 relative flex flex-col justify-between overflow-hidden">
          
          {/* Subtle radar sweep background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40 rounded-3xl overflow-hidden">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_35%_35%,rgba(186,230,253,0.6)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#001B79] mb-2 sm:mb-4 border-b border-sky-200 pb-2.5">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span className="font-black tracking-wider text-xs sm:text-sm">PAN-INDIA RADAR</span>
            </div>
            <span className="text-[#0369A1] font-bold px-2.5 py-0.5 rounded-full bg-white border border-sky-200 shadow-xs text-[10px] sm:text-xs">
              4 HUBS ACTIVE
            </span>
          </div>

          {/* SVG Container: ~280px tall on mobile */}
          <div className="relative w-full max-w-[560px] mx-auto h-[260px] sm:h-[340px] lg:h-auto flex items-center justify-center py-1">
            <svg
              viewBox="0 0 612 696"
              className="w-full h-full max-h-[260px] sm:max-h-[340px] lg:max-h-none select-none filter drop-shadow-sm"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="activeHubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="selectedHubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#001B79" stopOpacity="0.95" />
                </linearGradient>

                <pattern id="radarGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0284C7" strokeWidth="0.5" strokeOpacity="0.08" />
                </pattern>
              </defs>

              <rect width="612" height="696" fill="url(#radarGrid)" />

              <line x1="40" y1="210" x2="580" y2="210" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" strokeDasharray="3 4" />
              <line x1="40" y1="360" x2="580" y2="360" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" strokeDasharray="3 4" />
              <line x1="40" y1="510" x2="580" y2="510" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" strokeDasharray="3 4" />
              <line x1="190" y1="40" x2="190" y2="660" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" strokeDasharray="3 4" />
              <line x1="340" y1="40" x2="340" y2="660" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.16" strokeDasharray="3 4" />

              <circle cx="210" cy="300" r="260" stroke="#0284C7" strokeWidth="0.7" strokeOpacity="0.14" strokeDasharray="4 4" />
              <circle cx="210" cy="300" r="170" stroke="#0284C7" strokeWidth="0.9" strokeOpacity="0.2" />
              <circle cx="210" cy="300" r="90" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.22" strokeDasharray="3 3" />
              <circle cx="210" cy="300" r="3.5" fill="#0284C7" fillOpacity="0.6" />

              <g className="transition-all duration-300">
                {indiaMap.locations.map((loc) => {
                  const isUpOrDl = loc.id === 'up' || loc.id === 'dl'
                  const isGujarat = loc.id === 'gj'
                  const isHubState = isUpOrDl || isGujarat

                  const isSelectedCluster =
                    (isUpOrDl && (selectedOfficeId === 'noida' || selectedOfficeId === 'ghaziabad')) ||
                    (isGujarat && (selectedOfficeId === 'vadodara' || selectedOfficeId === 'ahmedabad'))

                  let fill = '#FFFFFF'
                  let fillOpacity = 0.92
                  let stroke = '#93C5FD'
                  let strokeWidth = 0.85
                  let strokeOpacity = 0.65

                  if (isSelectedCluster) {
                    fill = 'url(#selectedHubGradient)'
                    fillOpacity = 1
                    stroke = '#001B79'
                    strokeWidth = 1.8
                    strokeOpacity = 1
                  } else if (isHubState) {
                    fill = 'url(#activeHubGradient)'
                    fillOpacity = 0.85
                    stroke = '#0284C7'
                    strokeWidth = 1.3
                    strokeOpacity = 0.9
                  }

                  return (
                    <path
                      key={loc.id}
                      id={`state-${loc.id}`}
                      d={loc.path}
                      tabIndex={0}
                      role="button"
                      aria-label={`${loc.name || loc.id}${isHubState ? ' (Operational Hub Region)' : ''}`}
                      fill={fill}
                      fillOpacity={fillOpacity}
                      stroke={stroke}
                      strokeWidth={strokeWidth}
                      strokeOpacity={strokeOpacity}
                      className="transition-colors duration-300 outline-hidden focus-visible:stroke-[#001B79] focus-visible:stroke-[3] focus-visible:fill-sky-200"
                    />
                  )
                })}
              </g>

              {/* Corridor Line */}
              <path
                d="M 200 196 L 194 222 L 94 346 L 108 378"
                stroke="#0284C7"
                strokeWidth="2.2"
                strokeDasharray="5 5"
                strokeOpacity="0.85"
                fill="none"
              />

              {/* Interactive Office Hub Pins */}
              {offices.map((off) => {
                const isSel = off.id === selectedOfficeId
                return (
                  <g
                    key={off.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`${off.mapLabel} - ${off.name}, ${off.city}`}
                    aria-pressed={isSel}
                    className="cursor-pointer group outline-hidden focus-visible:ring-4 focus-visible:ring-[#001B79]"
                    onClick={() => setSelectedOfficeId(off.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedOfficeId(off.id)
                      }
                    }}
                  >
                    {isSel && (
                      <circle
                        cx={off.coords.x}
                        cy={off.coords.y}
                        r="24"
                        fill="#0284C7"
                        fillOpacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Touch-Friendly Expanded Target Area */}
                    <circle
                      cx={off.coords.x}
                      cy={off.coords.y}
                      r="22"
                      fill="transparent"
                    />

                    <circle
                      cx={off.coords.x}
                      cy={off.coords.y}
                      r={isSel ? 12 : 8.5}
                      fill={isSel ? '#001B79' : '#0284C7'}
                      fillOpacity={1}
                      stroke="#FFFFFF"
                      strokeWidth={isSel ? 3.5 : 2.5}
                    />

                    <circle
                      cx={off.coords.x}
                      cy={off.coords.y}
                      r={isSel ? 4.5 : 3}
                      fill={isSel ? '#38BDF8' : '#FFFFFF'}
                    />

                    <line
                      x1={off.coords.x}
                      y1={off.coords.y}
                      x2={
                        off.id === 'ahmedabad'
                          ? off.badge.x + off.badge.w - 20
                          : off.badge.x
                      }
                      y2={
                        off.id === 'ahmedabad'
                          ? off.badge.y + off.badge.h
                          : off.badge.y + off.badge.h / 2
                      }
                      stroke={isSel ? '#001B79' : '#0284C7'}
                      strokeWidth="2"
                      strokeDasharray={isSel ? undefined : '3 3'}
                      strokeOpacity={isSel ? 1 : 0.7}
                    />

                    <rect
                      x={off.badge.x}
                      y={off.badge.y}
                      width={off.badge.w}
                      height={off.badge.h}
                      rx="8"
                      fill={isSel ? '#001B79' : '#FFFFFF'}
                      stroke={isSel ? '#001B79' : '#38BDF8'}
                      strokeWidth={isSel ? 2.5 : 1.5}
                      className="group-focus-visible:stroke-[#001B79] group-focus-visible:stroke-3"
                    />

                    <circle
                      cx={off.badge.x + 14}
                      cy={off.badge.y + off.badge.h / 2}
                      r="4.5"
                      fill={isSel ? '#38BDF8' : '#0284C7'}
                    />

                    <text
                      x={off.badge.x + 25}
                      y={off.badge.y + off.badge.h / 2 + 5}
                      fill={isSel ? '#FFFFFF' : '#001B79'}
                      fontSize="14"
                      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                      fontWeight="800"
                    >
                      {off.mapLabel}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="mt-2 pt-2 border-t border-sky-200 flex items-center justify-between text-[11px] font-mono text-slate-700">
            <span className="flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-[#0284C7] animate-pulse" />
              <span className="font-bold text-[#001B79]">LOCK: {selectedOffice.city.toUpperCase()}</span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              100% OPERATIONAL
            </span>
          </div>
        </div>

        {/* Right / Bottom: Office Directory Tabs & Active Office Card */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          
          {/* Mobile ChipScroller for Office selection (< 1024px) */}
          <div className="block lg:hidden">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
              Select Regional Desk:
            </span>
            <ChipScroller
              items={offices.map((o) => ({
                id: o.id,
                label: o.mapLabel,
                city: o.city,
              }))}
              activeId={selectedOfficeId}
              onSelect={(id) => setSelectedOfficeId(id)}
              className="pb-1"
            />
          </div>

          {/* Desktop 2-Col Button Grid (>= 1024px) */}
          <div className="hidden lg:grid grid-cols-2 gap-2.5">
            {offices.map((off) => {
              const isSel = off.id === selectedOfficeId
              return (
                <button
                  key={off.id}
                  onClick={() => setSelectedOfficeId(off.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isSel
                      ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white border-sky-400 shadow-md ring-2 ring-sky-300'
                      : 'bg-slate-50 border-sky-200 hover:bg-sky-50 text-slate-700'
                  }`}
                >
                  <span className={`text-[10px] font-mono block ${isSel ? 'text-sky-200' : 'text-[#0369A1] font-bold'}`}>
                    {off.city}
                  </span>
                  <span className="font-bold text-xs leading-tight block truncate">
                    {off.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Selected Office Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedOffice.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#F0F9FF] via-white to-sky-50/50 border border-sky-200 space-y-4 shadow-sm text-left"
            >
              <div className="flex items-start justify-between border-b border-sky-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0284C7] uppercase">
                    OFFICE DETAILS // {selectedOffice.city}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-[#001B79] mt-0.5">
                    {selectedOffice.name}
                  </h4>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-100 text-[#001B79] shrink-0">
                  <Building className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>{selectedOffice.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <a href={`tel:${selectedOffice.phone}`} className="font-bold text-[#001B79] hover:underline">
                    {selectedOffice.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <a href={`mailto:${selectedOffice.email}`} className="font-bold text-[#001B79] hover:underline">
                    {selectedOffice.email}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-sky-100 text-[11px] font-mono text-slate-600">
                <span className="font-bold text-[#001B79] block mb-0.5">CORE FACILITY ROLE:</span>
                {selectedOffice.role}
              </div>

              {/* Action Buttons: Call, Email & Get Directions (Touch-Friendly >= 44px) */}
              <div className="grid grid-cols-3 gap-2 pt-1 border-t border-sky-100">
                <a
                  href={`tel:${selectedOffice.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={`mailto:${selectedOffice.email}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-[#001B79] font-mono text-xs font-bold transition-all min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <a
                  href={selectedOffice.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#001B79] hover:bg-[#0284C7] text-white font-mono text-xs font-bold transition-all min-h-[44px]"
                >
                  <Navigation2 className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
