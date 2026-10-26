import { Link } from '@tanstack/react-router'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-sky-200/80 py-2" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-white transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-3.5 w-3.5 text-sky-300/50 shrink-0" />
          {item.to ? (
            <Link to={item.to} className="hover:text-white transition-colors font-medium text-sky-200">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-white drop-shadow-xs">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

export default Breadcrumbs

