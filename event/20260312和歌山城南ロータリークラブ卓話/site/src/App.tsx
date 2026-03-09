import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp } from 'lucide-react'
import { Hero } from './sections/Hero'
import { NewEra } from './sections/NewEra'
import { DocumentCreation } from './sections/DocumentCreation'
import { BeforeAfter } from './sections/BeforeAfter'
import { DemoTeaser } from './sections/DemoTeaser'
import { HumanSide } from './sections/HumanSide'
import { ConcreteExamples } from './sections/ConcreteExamples'
import { NextWave } from './sections/NextWave'
import { Closing } from './sections/Closing'
import { GridBackground } from './components/GridBackground'

const NAV_ITEMS = [
  { id: 'hero', label: 'TOP' },
  { id: 'new-era', label: 'AIで何ができる？' },
  { id: 'doc-creation', label: '資料を作る' },
  { id: 'before-after', label: 'サイトを作る' },
  { id: 'demo', label: 'アプリを作る' },
  { id: 'human-side', label: '人間の役割' },
  { id: 'examples', label: '具体例' },
  { id: 'next-wave', label: 'この先の未来' },
  { id: 'closing', label: 'まとめ' },
]

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: 0.2 }
    )

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <span className="text-sm font-bold text-gray-800 tracking-[0.01em]">
            AI x 仕事の未来
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-200"
            >
              <div className="px-5 py-3 flex flex-wrap gap-2">
                {NAV_ITEMS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      activeSection === id
                        ? 'border-primary-300 text-primary-600 bg-primary-50'
                        : 'border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Desktop Side Nav */}
      <nav className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-end gap-2.5"
          >
            <span
              className={`text-xs font-medium transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
                activeSection === id ? 'text-primary-600 opacity-100 translate-x-0' : 'text-gray-400'
              }`}
            >
              {label}
            </span>
            <span className="relative flex items-center justify-center w-3.5 h-3.5">
              {activeSection === id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute inset-0 rounded-full bg-primary-500"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`w-2 h-2 rounded-full transition-colors relative z-10 ${
                  activeSection === id ? 'bg-white' : 'bg-gray-300 group-hover:bg-primary-300'
                }`}
              />
            </span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <NewEra />
        <DocumentCreation />
        <BeforeAfter />
        <DemoTeaser />
        <HumanSide />
        <ConcreteExamples />
        <NextWave />
        <Closing />
      </main>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-500 hover:text-primary-600 hover:border-primary-300 transition-colors"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
