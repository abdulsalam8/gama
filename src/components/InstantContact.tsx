import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '../data/content'

export default function InstantContact() {
  return (
    <div className="fixed bottom-6 left-4 z-40 hidden flex-col gap-2 lg:flex sm:left-6">
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi ABU MUNIFA APPLE CARE +, I need help with my iPhone.')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={`tel:${BUSINESS.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink-800/95 text-silver-100 shadow-lg backdrop-blur transition hover:border-gold/50 hover:text-gold sm:w-auto sm:gap-2 sm:px-4"
        aria-label="Call now"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden text-sm font-medium sm:inline">Call</span>
      </a>
    </div>
  )
}
