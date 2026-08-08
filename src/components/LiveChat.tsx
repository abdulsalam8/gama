import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, X, ChevronRight } from 'lucide-react'
import { BUSINESS } from '../data/content'

const CHAT_OPTIONS = [
  { label: 'Pick a part (easy)', to: '/parts' },
  { label: 'Shop cases & extras', to: '/shop' },
  { label: 'See our work', to: '/work' },
  { label: 'Contact us', to: '/contact' },
  {
    label: 'Chat on WhatsApp',
    to: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I need help with my iPhone.')}`,
    external: true,
  },
]

export default function LiveChat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-4 z-40 hidden sm:right-6 lg:block">
      {open && (
        <div className="mb-3 w-[min(100vw-2rem,320px)] overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl animate-slide-in">
          <div className="flex items-start justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-gold/20 to-accent/10 px-4 py-4">
            <div>
              <p className="font-display text-sm font-bold text-silver-50">
                Need help?
              </p>
              <p className="mt-1 text-xs text-silver-300">
                Tap one option below
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-silver-300 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="p-2">
            {CHAT_OPTIONS.map((opt) =>
              opt.external ? (
                <li key={opt.label}>
                  <a
                    href={opt.to}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-silver-200 transition hover:bg-white/5 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {opt.label}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </a>
                </li>
              ) : (
                <li key={opt.label}>
                  <Link
                    to={opt.to}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-silver-200 transition hover:bg-white/5 hover:text-gold"
                    onClick={() => setOpen(false)}
                  >
                    {opt.label}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 items-center gap-2 rounded-full bg-gold px-5 font-semibold text-ink-950 shadow-[0_8px_32px_rgba(201,162,39,0.4)] transition hover:bg-gold-light hover:scale-[1.02]"
        aria-label="Open help menu"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        <span className="text-sm">{open ? 'Close' : 'Help'}</span>
      </button>
    </div>
  )
}
