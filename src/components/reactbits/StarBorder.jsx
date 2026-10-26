import React from 'react'

/**
 * StarBorder - React Bits animated glowing border container for primary buttons/CTAs.
 * Features an elegant traveling light beam around the perimeter.
 */
export default function StarBorder({
  as: Component = 'div',
  className = '',
  color = '#22B8F0',
  speed = '4s',
  children,
  ...props
}) {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-full p-[1.5px] ${className}`}
      {...props}
    >
      {/* Rotating Star Beam Effect */}
      <span
        className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] rounded-full pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${color} 60deg, transparent 120deg)`,
          animationDuration: speed,
        }}
      />
      <div className="relative rounded-full z-1">
        {children}
      </div>
    </Component>
  )
}
