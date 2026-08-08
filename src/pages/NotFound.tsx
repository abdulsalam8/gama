import { Link } from 'react-router-dom'
import { Home, MessageCircle, Smartphone } from 'lucide-react'
import { BUSINESS } from '../data/content'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center pb-28 pt-24 text-center">
      <p className="font-display text-6xl font-bold text-gold/30">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-silver-50 sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-silver-400">
        This page does not exist. Tap below to order parts or chat on WhatsApp.
      </p>
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
        <Link to="/parts" className="btn-primary w-full !py-3.5">
          <Smartphone className="h-5 w-5" />
          Pick parts
        </Link>
        <Link to="/" className="btn-secondary w-full !py-3.5">
          <Home className="h-5 w-5" />
          Go home
        </Link>
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I need help with my iPhone.')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm text-silver-300 hover:border-gold/40 hover:text-gold"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp us
        </a>
      </div>
    </section>
  )
}
