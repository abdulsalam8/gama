import { Home, ShoppingBag, Smartphone, Clapperboard, Phone } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'

const TABS = [
  { label: 'Home', path: '/', icon: Home, match: (p: string) => p === '/' },
  {
    label: 'Parts',
    path: '/parts',
    icon: Smartphone,
    match: (p: string) =>
      p === '/parts' ||
      p === '/request' ||
      p.startsWith('/repairs') ||
      p.startsWith('/screens') ||
      p.startsWith('/back-glass'),
  },
  {
    label: 'Shop',
    path: '/shop',
    icon: ShoppingBag,
    match: (p: string) => p.startsWith('/shop'),
  },
  {
    label: 'Work',
    path: '/work',
    icon: Clapperboard,
    match: (p: string) => p.startsWith('/work'),
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: Phone,
    match: (p: string) => p.startsWith('/contact') || p.startsWith('/about'),
  },
] as const

export default function MobileTabBar() {
  const { pathname } = useLocation()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
      aria-label="Main navigation"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 pb-[env(safe-area-inset-bottom,0px)]">
        {TABS.map(({ label, path, icon: Icon, match }) => {
          const active = match(pathname)
          return (
            <li key={path} className="relative flex flex-1">
              <NavLink
                to={path}
                className={`flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-medium transition ${
                  active ? 'text-gold' : 'text-silver-400 active:text-silver-200'
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${active ? 'stroke-[2.5px]' : 'stroke-[1.75px]'}`}
                  aria-hidden
                />
                <span>{label}</span>
              </NavLink>
              {active && (
                <span className="pointer-events-none absolute bottom-1 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-gold" />
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
