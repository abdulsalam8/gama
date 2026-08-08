import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '../data/content'

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: 'Fastest way to order',
    href: `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I need help with my iPhone.')}`,
    action: 'Chat now',
    primary: true,
  },
  {
    icon: Phone,
    title: 'Call',
    detail: BUSINESS.phoneDisplay,
    href: `tel:${BUSINESS.phone}`,
    action: 'Call now',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    detail: BUSINESS.address,
    href: BUSINESS.mapsUrl,
    action: 'Directions',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    action: 'Send email',
  },
]

export default function Contact() {
  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-2 text-sm text-silver-400">
          Tap how you want to reach us
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-lg gap-3">
        {contacts.map((c) => {
          const Icon = c.icon
          return (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`flex items-center gap-4 rounded-2xl border p-4 transition active:scale-[0.98] ${
                c.primary
                  ? 'border-gold/40 bg-gold/10'
                  : 'border-white/10 bg-ink-800/30 hover:border-gold/30'
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  c.primary
                    ? 'bg-gold text-ink-950'
                    : 'border border-gold/30 bg-gold/10 text-gold'
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1 text-left">
                <span className="block font-display font-semibold text-silver-50">
                  {c.title}
                </span>
                <span className="block truncate text-sm text-silver-400">
                  {c.detail}
                </span>
              </span>
              <span className="text-sm font-medium text-gold">{c.action}</span>
            </a>
          )
        })}

        <a
          href={BUSINESS.tiktokUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/30 p-4 transition hover:border-gold/30 active:scale-[0.98]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-display text-sm font-bold text-gold">
            TT
          </span>
          <span className="flex-1 text-left">
            <span className="block font-display font-semibold text-silver-50">
              TikTok
            </span>
            <span className="block text-sm text-silver-400">
              {BUSINESS.tiktokHandle}
            </span>
          </span>
          <span className="text-sm font-medium text-gold">Watch</span>
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/10 bg-ink-800/30 p-5">
        <div className="flex items-start gap-3 text-sm text-silver-300">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="font-medium text-silver-50">Open hours</p>
            <p className="mt-1">{BUSINESS.hours}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-lg text-center">
        <Link to="/parts" className="btn-primary w-full max-w-xs !py-3.5">
          Order parts (tap pictures)
        </Link>
      </div>
    </section>
  )
}
