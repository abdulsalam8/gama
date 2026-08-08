import { Link, NavLink } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { BUSINESS, NAV_LINKS } from '../data/content'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur-xl">
      <div className="container-page flex h-14 items-center justify-between sm:h-16 lg:h-20">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 font-display text-sm font-bold text-gold transition group-hover:bg-gold/20">
            AM
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-bold tracking-wide text-silver-50">
              ABU MUNIFA
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
              Apple Care +
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/10 text-gold'
                    : 'text-silver-300 hover:text-silver-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/parts"
            className="btn-primary hidden !px-4 !py-2 text-xs lg:inline-flex"
          >
            Order parts
          </Link>
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !px-3 !py-2"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </header>
  )
}
