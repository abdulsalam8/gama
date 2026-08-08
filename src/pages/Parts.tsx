import { Link, useSearchParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import SimplePartsWizard from '../components/parts/SimplePartsWizard'
import { BUSINESS } from '../data/content'
import { SIMPLE_NEEDS, type SimpleNeed } from '../data/simple-catalog'

const VALID_NEEDS = new Set(SIMPLE_NEEDS.map((n) => n.id))

export default function Parts() {
  const [params] = useSearchParams()
  const needParam = params.get('need')
  const initialNeed =
    needParam && VALID_NEEDS.has(needParam as SimpleNeed)
      ? (needParam as SimpleNeed)
      : undefined

  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mb-8 text-center sm:mb-10">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          Fix or order parts
        </h1>
        <p className="mt-2 text-sm text-silver-400 sm:text-base">
          Tap pictures — no long lists
        </p>
      </div>

      <SimplePartsWizard initialNeed={initialNeed} />

      <div className="mx-auto mt-10 max-w-2xl">
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I need help with my iPhone.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-4 text-sm font-medium text-silver-300 transition hover:border-gold/30 hover:text-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Prefer to chat? WhatsApp us anytime
        </a>
        <p className="mt-4 text-center text-xs text-silver-500">
          iPhone XR to 17 Pro Max ·{' '}
          <Link to="/shop" className="text-gold hover:underline">
            Shop chargers & accessories
          </Link>
        </p>
      </div>
    </section>
  )
}
