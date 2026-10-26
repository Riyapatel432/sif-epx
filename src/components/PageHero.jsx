import { motion } from 'motion/react'
import Breadcrumbs from './Breadcrumbs'
import BlurText from './reactbits/BlurText'
import ShinyText from './reactbits/ShinyText'
import AuroraWaves from './reactbits/AuroraWaves'
import { TechnicalBlueprintGridSVG } from './visuals/TechnicalBlueprintGridSVG'

/**
 * Universal Shared PageHero Component
 * Implements the master design system:
 * - Gradient: #031A5D -> #023E92 -> #004999 (navy-900 -> navy-700 -> blue-600)
 * - AuroraWaves dynamic fluid wave canvas
 * - Blueprint vector grid overlay + circuit traces
 * - Breadcrumbs, monospace eyebrow tag with ShinyText, high-contrast H1 with BlurText reveal, and subtitle
 * - Generous spacing so title is never clipped
 */
export default function PageHero({
  eyebrow = '01 // OVERVIEW',
  title,
  subtitle,
  breadcrumbs = [],
  children = null,
  badge = null
}) {
  return (
    <section className="relative py-16 sm:py-24 bg-sif-hero text-white overflow-hidden border-b border-[#22B8F0]/30">
      
      {/* 1. Dynamic Aurora Wave Canvas */}
      <AuroraWaves speed={0.007} />

      {/* 2. Precision Technical Blueprint Grid & Circuit Traces */}
      <TechnicalBlueprintGridSVG className="opacity-25" isLightMode={false} />

      {/* 3. Ambient Radial Energy Glow Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,184,240,0.30)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(2,62,146,0.40)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-sky-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className={`${children ? 'lg:col-span-8' : 'lg:col-span-10'} space-y-5`}>
            
            {/* Eyebrow Pill with ShinyText */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-sky-300/40 backdrop-blur-md shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22B8F0] animate-pulse" />
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-sky-200 font-bold">
                <ShinyText text={eyebrow} speed={3.5} />
              </span>
              {badge && (
                <span className="ml-2 px-2.5 py-0.5 rounded-full bg-[#1E3AAE] text-white text-[10px] font-mono font-bold border border-sky-300/30">
                  {badge}
                </span>
              )}
            </div>

            {/* High-Contrast Title with BlurText reveal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <BlurText
                text={title}
                delay={40}
                direction="top"
                className="text-white"
              />
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-3xl leading-relaxed font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right-side visual slot */}
          {children && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

