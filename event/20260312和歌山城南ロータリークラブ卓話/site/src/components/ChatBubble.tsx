import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChatAttachment {
  readonly name: string
  readonly size: string
  readonly format?: string
}

interface ChatChart {
  readonly label: string
  readonly value: number
  readonly max: number
  readonly color: string
}

interface ChatDownloadFile {
  readonly name: string
  readonly format: string
  readonly formatColor: string
}

interface ChatVideo {
  readonly src: string
  readonly poster?: string
  readonly label: string
}

interface AppPreviewSpot {
  readonly icon: string
  readonly name: string
  readonly tag: string
  readonly tagColor: string
}

interface ChatAppPreview {
  readonly title: string
  readonly subtitle: string
  readonly spots: readonly AppPreviewSpot[]
  readonly categories: readonly string[]
}

interface ChatMessage {
  readonly role: 'user' | 'ai'
  readonly text: string
  readonly attachments?: readonly ChatAttachment[]
  readonly charts?: readonly ChatChart[]
  readonly video?: ChatVideo
  readonly downloadFile?: ChatDownloadFile
  readonly appPreview?: ChatAppPreview
}

interface ChatBubbleProps {
  readonly messages: readonly ChatMessage[]
  readonly title?: string
}

function VideoModal({ src, onClose }: { readonly src: string; readonly onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

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
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxWidth: 'min(32rem, 85vw)', maxHeight: '85vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-full max-h-[85vh] object-contain"
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

export function ChatBubble({ messages, title }: ChatBubbleProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm"
      >
        {/* Chat header */}
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
          <div className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          </div>
          <span className="text-sm font-semibold text-gray-700">
            {title ?? 'AI チャット'}
          </span>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl text-base leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                <div className="px-4 py-3 whitespace-pre-line">
                  {msg.role === 'ai' && (
                    <span className="block text-xs font-bold text-primary-500 mb-1">AI</span>
                  )}
                  {msg.text}
                </div>

                {/* Attachments (user messages) */}
                {msg.attachments && msg.attachments.length > 0 && (
                  <div className="px-4 pb-3 space-y-2">
                    {msg.attachments.map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/20 border border-white/30"
                      >
                        <div className="shrink-0 w-9 h-9 rounded-lg bg-white/30 flex items-center justify-center">
                          <span className="text-xs font-black text-white/90">{file.format ?? 'xlsx'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{file.name}</p>
                          <p className="text-xs text-white/60">{file.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Download file (AI messages) */}
                {msg.downloadFile && (
                  <div className="px-4 pb-3 pt-1">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200">
                      <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${msg.downloadFile.formatColor}`}>
                        <span className="text-xs font-black uppercase">{msg.downloadFile.format}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">{msg.downloadFile.name}</p>
                        <p className="text-xs text-primary-500">クリックでダウンロード</p>
                      </div>
                      <div className="shrink-0 text-gray-300">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v9m0 0l-3-3m3 3l3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Charts (AI messages) */}
                {msg.charts && msg.charts.length > 0 && (
                  <div className="px-4 pb-3 pt-1">
                    <div className="p-3 rounded-xl bg-white border border-gray-200">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">売上推移</p>
                      <div className="space-y-2.5">
                        {msg.charts.map((bar) => (
                          <div key={bar.label} className="flex items-center gap-3">
                            <span className="shrink-0 w-12 text-xs font-medium text-gray-500 text-right">{bar.label}</span>
                            <div className="flex-1 h-5 rounded-full bg-gray-100 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(bar.value / bar.max) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: bar.color }}
                              />
                            </div>
                            <span className="shrink-0 text-xs font-bold text-gray-700 w-16 text-right">
                              {(bar.value / 10000).toFixed(0)}万円
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* App Preview (AI messages) */}
                {msg.appPreview && (
                  <div className="px-3 pb-3 pt-1">
                    <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                      {/* App header */}
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 text-center">
                        <p className="text-sm font-black text-white">{msg.appPreview.title}</p>
                        <p className="text-xs text-white/80">{msg.appPreview.subtitle}</p>
                      </div>
                      {/* Category tabs */}
                      <div className="flex gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100 overflow-x-auto">
                        {msg.appPreview.categories.map((cat, ci) => (
                          <span
                            key={cat}
                            className={`shrink-0 text-xs font-bold px-3 py-1 rounded-full ${
                              ci === 0
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      {/* Spot cards */}
                      <div className="p-3 space-y-2">
                        {msg.appPreview.spots.map((spot) => (
                          <div
                            key={spot.name}
                            className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                          >
                            <span className="text-2xl">{spot.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold text-gray-800">{spot.name}</p>
                            </div>
                            <span
                              className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full ${spot.tagColor}`}
                            >
                              {spot.tag}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* Bottom CTA */}
                      <div className="px-3 pb-3">
                        <div className="w-full py-2 rounded-lg bg-blue-500 text-center">
                          <span className="text-xs font-bold text-white">MAP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Video (AI messages) */}
                {msg.video && (
                  <div className="px-4 pb-3 pt-1 flex justify-center">
                    <button
                      onClick={() => setActiveVideo(msg.video!.src)}
                      className="group w-[60%] rounded-xl overflow-hidden border border-gray-200 bg-black relative cursor-pointer"
                    >
                      <video
                        src={msg.video.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-l-[14px] border-l-primary-600 border-y-[8px] border-y-transparent ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-xs font-bold text-white">{msg.video.label}</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video modal */}
      {activeVideo && (
        <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  )
}
