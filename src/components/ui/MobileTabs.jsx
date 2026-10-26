import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

/**
 * MobileTabs
 * Segmented control / scrollable chip tabs built with @headlessui/react.
 * Allows switching between related content on mobile without long vertical stacks.
 */
export function MobileTabs({
  tabs = [], // [{ id, label, icon: Icon, badge, count }]
  selectedIndex,
  onChange,
  children,
  className = '',
  listClassName = '',
}) {
  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={onChange}
      className={`w-full ${className}`}
    >
      <TabList className={`flex items-center gap-1.5 p-1 rounded-2xl bg-sky-100/70 border border-sky-200 overflow-x-auto no-scrollbar ${listClassName}`}>
        {tabs.map((tab, idx) => {
          const Icon = tab.icon
          return (
            <Tab
              key={tab.id || idx}
              className={({ selected }) =>
                `flex-1 min-w-max py-2.5 px-3.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer touch-target-min flex items-center justify-center gap-1.5 focus:outline-hidden ${
                  selected
                    ? 'bg-gradient-to-r from-[#001B79] to-[#0284C7] text-white shadow-sm ring-1 ring-sky-300'
                    : 'text-slate-600 hover:text-[#001B79] hover:bg-white/60'
                }`
              }
            >
              {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-white/20 text-white font-mono">
                  {tab.badge}
                </span>
              )}
            </Tab>
          )
        })}
      </TabList>

      {children && (
        <TabPanels className="mt-4">
          {children}
        </TabPanels>
      )}
    </TabGroup>
  )
}

export { TabPanel }
export default MobileTabs
