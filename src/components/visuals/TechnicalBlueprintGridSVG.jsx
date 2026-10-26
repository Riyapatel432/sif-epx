export function TechnicalBlueprintGridSVG({ className = '', isLightMode = false }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`blueprint-grid-${isLightMode ? 'light' : 'dark'}`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke={isLightMode ? "#0284C7" : "#38BDF8"} strokeWidth="0.4" strokeOpacity={isLightMode ? "0.15" : "0.12"} />
          <circle cx="24" cy="24" r="0.75" fill="#38BDF8" fillOpacity={isLightMode ? "0.35" : "0.25"} />
        </pattern>
        <linearGradient id={`trace-glow-${isLightMode ? 'light' : 'dark'}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#0284C7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#001B79" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#blueprint-grid-${isLightMode ? 'light' : 'dark'})`} />
      <path
        d="M 60 140 L 320 140 L 400 220 L 750 220 L 840 130 L 1220 130"
        stroke={`url(#trace-glow-${isLightMode ? 'light' : 'dark'})`}
        strokeWidth="1.2"
        strokeDasharray="6 6"
        fill="none"
        opacity={isLightMode ? "0.3" : "0.5"}
      />
    </svg>
  )
}

export default TechnicalBlueprintGridSVG

