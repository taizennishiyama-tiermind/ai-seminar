import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import selfIntro1 from '../assets/自己紹介1.png'
import selfIntro2 from '../assets/自己紹介2.png'

const SLIDES = [
  { src: selfIntro1, alt: '自己紹介: 株式会社TierMind 西山泰仙' },
  { src: selfIntro2, alt: '自己紹介: 僧侶 西山寳鑑' },
] as const

function ImageModal({ src, alt, onClose }: { readonly src: string; readonly alt: string; readonly onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative"
          style={{ maxWidth: 'min(56rem, 90vw)', maxHeight: '90vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg font-bold"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export function SelfIntro() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <SectionWrapper id="self-intro">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="inline-block text-xs font-bold text-primary-500 uppercase tracking-widest mb-3">
          Speaker
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
          本日お話しする人
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SLIDES.map((slide, i) => (
          <motion.button
            key={slide.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => setActiveImage({ src: slide.src, alt: slide.alt })}
            className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-auto"
            />
            <div className="py-3 px-4 border-t border-gray-100 bg-gray-50/50">
              <p className="text-sm text-gray-400 group-hover:text-primary-500 transition-colors">
                クリックで拡大
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {activeImage && (
        <ImageModal
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={() => setActiveImage(null)}
        />
      )}
    </SectionWrapper>
  )
}
