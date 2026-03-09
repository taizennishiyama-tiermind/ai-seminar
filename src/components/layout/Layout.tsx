import { useState, useCallback } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Target, Zap, GraduationCap, Rocket, Users, Shield, RefreshCw,
  HelpCircle, Mail, Menu, PanelLeftClose, PanelLeft,
} from 'lucide-react'
import { navigation } from '@/data/navigation'

const iconMap: Record<string, React.ElementType> = {
  Home, Target, Zap, GraduationCap, Rocket, Users, Shield, RefreshCw,
  HelpCircle, Mail,
}

interface LayoutProps {
  readonly children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  const closeMobile = useCallback(() => setSidebarOpen(false), [])
  const toggleCollapse = useCallback(() => setSidebarCollapsed((p) => !p), [])

  return (
    <div className="flex h-screen bg-surface-0">
      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:flex flex-col border-r border-gray-200 bg-white overflow-y-auto"
        animate={{ width: sidebarCollapsed ? 0 : 272 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {!sidebarCollapsed && (
          <SidebarContent currentPath={location.pathname} onNavigate={closeMobile} />
        )}
      </motion.aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl lg:hidden overflow-y-auto"
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SidebarContent currentPath={location.pathname} onNavigate={closeMobile} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center gap-3 px-5 py-3 glass lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            aria-label="メニューを開く"
          >
            <Menu size={20} />
          </button>
          <span className="text-sm font-bold text-gray-900 tracking-[0.01em]">AI JEDI</span>
        </header>

        {/* Desktop collapse toggle */}
        <div className="hidden lg:flex items-center px-4 py-2">
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
            aria-label={sidebarCollapsed ? 'サイドバーを開く' : 'サイドバーを閉じる'}
          >
            {sidebarCollapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 py-10 lg:py-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

interface SidebarContentProps {
  readonly currentPath: string
  readonly onNavigate: () => void
}

function SidebarContent({ currentPath, onNavigate }: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-4 border-b border-gray-100">
        <Link to="/" onClick={onNavigate} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary-900 flex items-center justify-center">
            <span className="text-white text-xs font-black">AI</span>
          </div>
          <div>
            <span className="text-sm font-bold text-gray-900 tracking-[0.01em]">AI JEDI</span>
            <span className="block text-[10px] text-gray-400">事業説明ストーリーブック</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-5">
        {navigation.map((group) => (
          <div key={group.category}>
            <p className="px-3 mb-2 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
              {group.category}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon]
                const isActive = item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path)

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={onNavigate}
                    className={`
                      relative flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors
                      ${isActive
                        ? 'bg-primary-50 text-primary-900'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-full bg-primary-900"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {Icon && <Icon size={16} />}
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100">
        <p className="text-[10px] text-gray-400">&copy; AI JEDI Inc.</p>
      </div>
    </div>
  )
}
