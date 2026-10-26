export default function StickySectionNav({ items = [], activeId = '', onSelect = null }) {
  if (!items || items.length === 0) return null

  const handleClick = (id) => {
    if (onSelect) {
      onSelect(id)
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-y border-sky-200 py-3 px-4 shadow-xs">
      <div className="max-w-[1440px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-2">
          JUMP TO:
        </span>
        {items.map((item) => {
          const isAct = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shrink-0 transition-all ${
                isAct
                  ? 'bg-[#001B79] text-white shadow-xs'
                  : 'bg-sky-50 text-slate-700 hover:bg-sky-100 hover:text-[#001B79] border border-sky-200'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
