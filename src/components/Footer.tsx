import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-950 pb-[calc(4.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-silver-50">
            {BUSINESS.name}
          </p>
          <p className="mt-2 text-sm text-gold">{BUSINESS.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver-300">
            Premium iPhone repairs, original screens, back glass, cases,
            accessories — plus convenient home service.
          </p>
          <a
            href={BUSINESS.tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm font-medium text-gold hover:underline"
          >
            TikTok {BUSINESS.tiktokHandle}
          </a>
        </div>

        <div>
          <p className="section-label mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-silver-300 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/request"
                className="text-sm text-silver-300 transition hover:text-gold"
              >
                Request Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm text-silver-300">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {BUSINESS.address}
                <br />
                <span className="text-silver-400">{BUSINESS.hours}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-page text-center text-xs text-silver-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="mt-2 text-silver-500">
            Orders via WhatsApp · iPhone repair & parts in Lagos
          </p>
        </div>
      </div>
    </footer>
  )
}
