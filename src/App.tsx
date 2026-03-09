import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { ServiceDetail } from '@/pages/ServiceDetail'
import { FAQPage } from '@/pages/FAQ'
import { ContactPage } from '@/pages/Contact'

export function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
