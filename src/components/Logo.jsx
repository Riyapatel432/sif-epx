export function Logo({
  className = "h-14 sm:h-16",
  variant = "default", // 'default' | 'light' | 'dark' | 'white'
}) {
  const isDark = variant === "white" || variant === "dark"

  return (
    <div className={`inline-flex items-center justify-center select-none shrink-0 ${className}`}>
      <img
        src="/images/logo_tight.png"
        alt="SIF - Group of Technocrat | EPX GROUP"
        className={`h-full w-auto max-w-none object-contain block transition-all duration-200 ${
          isDark
            ? 'bg-white p-2 rounded-xl shadow-md border border-white/20'
            : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </div>
  )
}
