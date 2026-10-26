import React from 'react'

/**
 * ShinyText - React Bits subtle metallic shine component.
 * Used exclusively for small technical badges/accents, never on long body text.
 */
export default function ShinyText({
  text = '',
  disabled = false,
  speed = 4,
  className = '',
  children,
}) {
  const content = children || text

  if (disabled) {
    return <span className={className}>{content}</span>
  }

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-[#22B8F0] bg-[length:200%_auto] animate-shine ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {content}
    </span>
  )
}
