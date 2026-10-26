import { Factory, ShieldCheck, Cpu, Award } from 'lucide-react'

export function ProductFacilityBanner() {
  const facilityHighlights = [
    {
      icon: <Factory className="w-5 h-5 text-[#0284C7]" />,
      title: "Murad Nagar Works",
      desc: "Dedicated switchgear fabrication, modular skid staging & testing facility in Ghaziabad (UP)."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      title: "9-Tank Pre-Treatment",
      desc: "70-80+ Micron thermoset polyester powder coating tested for 1000+ hours salt spray."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#001B79]" />,
      title: "CPRI Type-Tested",
      desc: "Form 3b / Form 4b internal compartmentalization up to 6300A busbar rating and 40kA breaking."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      title: "Factory FAT Protocols",
      desc: "Full routine dielectric, megger insulation, primary injection, and functional logic simulation."
    }
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-200/90 bg-gradient-to-br from-[#060E28] via-[#001B79] to-[#0284C7] p-8 text-white shadow-xl">
      {/* Background technical grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/15">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs font-bold text-sky-200 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MANUFACTURING EXCELLENCE // MURAD NAGAR</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              Type-Tested Electrical Panels, Engineered Process Skids &amp; Turnkey Systems
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-normal">
              Manufactured with rigid compartmentalization conforming to IEC 61439-1/2, IS 8623, and international ASME Section VIII codes.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <a
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#001B79] font-mono text-xs font-bold uppercase tracking-wider hover:bg-sky-50 transition-colors shadow-md text-center min-h-[46px]"
            >
              Request Custom Sizing
            </a>
          </div>
        </div>

        {/* 4 Feature Cards: 2x2 grid on mobile (< lg), 4-col on desktop (>= lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 pt-6 sm:pt-8 text-left">
          {facilityHighlights.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
              <div className="p-2 sm:p-2.5 rounded-lg bg-white/95 shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">{item.title}</h4>
                <p className="text-[10px] sm:text-[11px] text-sky-200/80 leading-relaxed font-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductFacilityBanner
