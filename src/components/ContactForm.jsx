import { useState } from 'react'
import { CheckCircle2, AlertCircle, Send, Loader2, Check } from 'lucide-react'
import Magnet from './reactbits/Magnet'

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: 'Turnkey Process Automation & Control',
    disciplineInterest: 'All Disciplines (Multidisciplinary EPCC)',
    industry: 'Specialty Chemicals & Process Plants',
    projectLocation: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project scope or requirements'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validate()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  if (isSubmitted) {
    return (
      <div className="card-sky p-6 sm:p-12 text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-[#001B79]">
          Engineering Proposal Request Dispatched
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your project scope for <strong className="text-slate-900">{formData.companyName}</strong> has been transmitted to our application engineering desk. A resident technocrat will respond within 24 business hours.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                serviceInterest: 'Turnkey Process Automation & Control',
                disciplineInterest: 'All Disciplines (Multidisciplinary EPCC)',
                industry: 'Specialty Chemicals & Process Plants',
                projectLocation: '',
                message: '',
              })
            }}
            className="btn-pill-primary text-xs w-full sm:w-auto min-h-[48px]"
          >
            Submit Another Technical Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card-sky p-5 sm:p-10 space-y-5" noValidate>
      <div className="border-b border-sky-100 pb-4">
        <span className="eyebrow-pill text-[11px] mb-2">Technical RFP Dispatch</span>
        <h3 className="text-xl sm:text-2xl font-black text-[#001B79]">
          Request Commercial Proposal &amp; Technical Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Direct consultation with resident technocrats for turnkey EPCC, instrumentation, and electrical packages.
        </p>
      </div>

      {/* Inputs with 16px text on mobile to stop iOS auto-zoom, min 48px height touch target */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Siddhartha Sharma"
            className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none transition-colors ${
              errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-sky-200 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]'
            }`}
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Organization / Company *
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            autoComplete="organization"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Sumi Chemicals / Toyo Ink"
            className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none transition-colors ${
              errors.companyName ? 'border-red-400 bg-red-50/30' : 'border-sky-200 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]'
            }`}
          />
          {errors.companyName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Work Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="engineer@company.com"
            className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none transition-colors ${
              errors.email ? 'border-red-400 bg-red-50/30' : 'border-sky-200 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Direct Contact Number *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none transition-colors ${
              errors.phone ? 'border-red-400 bg-red-50/30' : 'border-sky-200 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]'
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceInterest" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Primary Service Package
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="w-full rounded-xl border border-sky-200 bg-white px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
          >
            <option value="Turnkey Process Automation & Control">Process Automation & Control</option>
            <option value="Electrical Panels (PCC/MCC/VCB)">Electrical Panels (PCC/MCC/VCB)</option>
            <option value="Solar EPC & Renewables">Solar EPC & Renewables</option>
            <option value="MES / MIS / Enterprise IIoT">MES / MIS / Enterprise IIoT</option>
            <option value="EPCM Turnkey Management">EPCM Turnkey Management</option>
            <option value="PMC Project Consultancy">PMC Project Consultancy</option>
            <option value="Detailed Design Engineering">Detailed Design Engineering</option>
            <option value="Composite & BIM 3D Engineering">Composite & BIM 3D Engineering</option>
            <option value="Technical Manpower Deputation">Technical Manpower Deputation</option>
          </select>
        </div>

        <div>
          <label htmlFor="industry" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
            Industry / Plant Sector
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full rounded-xl border border-sky-200 bg-white px-3.5 py-3 text-base sm:text-sm min-h-[48px] outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
          >
            <option value="Specialty Chemicals & Process Plants">Specialty Chemicals & Process</option>
            <option value="Life Sciences & Pharma">Life Sciences & Pharmaceuticals</option>
            <option value="Consumer Packaged Goods">Consumer Packaged Goods (F&B / Inks)</option>
            <option value="Automotive & Rubber">Automotive, Auto Components & Tire</option>
            <option value="Metals, Mining & Cement">Metals, Mining & Cement</option>
            <option value="Power, Energy & Substation">Power, Energy & Substation</option>
            <option value="Solar & Renewable Energy">Solar & Renewable Energy</option>
            <option value="Oil & Gas (Non-HT)">Oil & Gas (Downstream / Terminal)</option>
            <option value="Water Treatment & ZLD">Water, Sewage & Environmental (ETP/ZLD)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
          Project Scope / Technical Deliverables *
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe technical specifications, plant capacity, delivery schedule, or specific panel/automation requirements..."
          className={`w-full rounded-xl border px-3.5 py-3 text-base sm:text-sm outline-none transition-colors ${
            errors.message ? 'border-red-400 bg-red-50/30' : 'border-sky-200 focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]'
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>}
      </div>

      {/* Optional Engineering Document / SLD Upload */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#001B79] mb-1.5">
          Attach Tender Document / Single Line Diagram (SLD) <span className="text-slate-400 font-normal lowercase">(optional)</span>
        </label>
        <div className="relative border-2 border-dashed border-sky-200 hover:border-[#0284C7] rounded-xl p-3 bg-sky-50/40 text-center transition-colors">
          <input
            type="file"
            id="rfqFile"
            name="rfqFile"
            accept=".pdf,.dwg,.dxf,.zip,.doc,.docx"
            onChange={(e) => {
              const file = e.target.files?.[0]
              setFormData((prev) => ({ ...prev, fileName: file ? file.name : '' }))
            }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-[#001B79]">
              {formData.fileName ? `✓ Selected: ${formData.fileName}` : 'Click or drag drawing / scope document (PDF, DWG, ZIP)'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-sky-100">
        <p className="text-[11px] font-mono text-slate-500 order-2 sm:order-1 text-center sm:text-left">
          🔒 ISO 9001:2015 audited &amp; NDA protected proposal handling.
        </p>
        <div className="w-full sm:w-auto order-1 sm:order-2">
          <Magnet padding={25} magnetStrength={0.2} className="w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-pill-primary w-full sm:w-auto cursor-pointer min-h-[48px] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Transmitting Scope...</span>
                </>
              ) : (
                <>
                  <span>Submit Engineering Enquiry</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </Magnet>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
