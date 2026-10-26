import { useState } from 'react'
import { AlertTriangle, ShieldCheck, CheckCircle2, Sliders } from 'lucide-react'

export default function RiskFormulaCard() {
  const [frequency, setFrequency] = useState(3) // 1 to 5
  const [damage, setDamage] = useState(3) // 1 to 5

  const riskScore = frequency * damage

  const getRiskTier = (score) => {
    if (score <= 6) {
      return {
        label: 'LOW RISK (ACCEPTABLE)',
        color: 'text-emerald-700 bg-emerald-100 border-emerald-300',
        action: 'Routine administrative controls and standard PPE sufficient. Annual HSE inspection audit.'
      }
    } else if (score <= 15) {
      return {
        label: 'MEDIUM RISK (ALARP ZONE)',
        color: 'text-amber-800 bg-amber-100 border-amber-300',
        action: 'Engineering interlocks, double containment, and secondary alarm thresholds required to mitigate As Low As Reasonably Practicable.'
      }
    } else {
      return {
        label: 'HIGH RISK (INTOLERABLE)',
        color: 'text-rose-700 bg-rose-100 border-rose-300',
        action: 'SIL-2 / SIL-3 certified Emergency Shutdown (ESD) system, automated fire deluge, and third-party HAZOP re-evaluation mandatory before commissioning.'
      }
    }
  }

  const tier = getRiskTier(riskScore)

  return (
    <div className="rounded-3xl bg-white border border-sky-200 p-5 sm:p-10 shadow-xl shadow-sky-100/50 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-sky-100">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-mono font-bold uppercase tracking-widest text-[#001B79] mb-2">
            QUANTITATIVE RISK MATRIX (HAZOP / OHSAS)
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-[#001B79]">
            Interactive Risk Formula: R = F × D
          </h3>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
          Simulate plant hazard scoring where Risk (R) equals Frequency of occurrence (F) multiplied by Severity of damage (D), aligning with ISO 45001.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Sliders Stack: full width, touch friendly 28px thumb, clear labels */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2.5 p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-700 font-bold">Frequency of Hazard Event (F):</span>
              <span className="text-[#001B79] font-black text-sm px-2.5 py-0.5 rounded-lg bg-white border border-sky-200">
                Rating {frequency} / 5
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              aria-label="Hazard Frequency Rating"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full accent-[#001B79] cursor-pointer h-3 bg-sky-200 rounded-lg min-h-[44px]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500 font-medium">
              <span>1 (Rare)</span>
              <span>3 (Occasional)</span>
              <span>5 (Frequent)</span>
            </div>
          </div>

          <div className="space-y-2.5 p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-700 font-bold">Severity of Potential Damage (D):</span>
              <span className="text-[#001B79] font-black text-sm px-2.5 py-0.5 rounded-lg bg-white border border-sky-200">
                Rating {damage} / 5
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              aria-label="Damage Severity Rating"
              value={damage}
              onChange={(e) => setDamage(Number(e.target.value))}
              className="w-full accent-[#0284C7] cursor-pointer h-3 bg-sky-200 rounded-lg min-h-[44px]"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500 font-medium">
              <span>1 (Negligible)</span>
              <span>3 (Moderate Lost Time)</span>
              <span>5 (Catastrophic)</span>
            </div>
          </div>
        </div>

        {/* Calculated Result Chip & Action Console: Right below on mobile, always visible */}
        <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#F0F9FF] via-white to-sky-50/60 border border-sky-200 p-5 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-sky-100 pb-3">
            <span className="text-xs font-mono font-bold text-slate-600 uppercase">
              CALCULATED RISK INDEX:
            </span>
            <span className="text-3xl font-black font-mono text-[#001B79] px-3 py-1 rounded-xl bg-white border border-sky-200 shadow-2xs">
              R = {riskScore}
            </span>
          </div>

          <div className={`p-3 rounded-xl border text-xs font-mono font-bold uppercase text-center ${tier.color}`}>
            {tier.label}
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-sky-100">
            <span className="font-bold text-[#001B79] block mb-1">MANDATED SIF RISK MITIGATION:</span>
            {tier.action}
          </p>
        </div>
      </div>
    </div>
  )
}
