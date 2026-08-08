import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { MessageCircle, ShoppingBag, Sparkles } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { BUSINESS, PRODUCTS } from '../data/content'

type Tab = 'cases' | 'accessories'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const tabParam = params.get('tab')
  const tab: Tab = tabParam === 'accessories' ? 'accessories' : 'cases'

  const items = useMemo(() => {
    return PRODUCTS.filter((p) =>
      tab === 'cases' ? p.category === 'case' : p.category === 'accessory',
    )
  }, [tab])

  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          Shop
        </h1>
        <p className="mt-2 text-sm text-silver-400">Tap what you want</p>
      </div>

      {/* Two big choices — not a long tab bar */}
      <div className="mx-auto mb-8 grid max-w-lg grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setParams({ tab: 'cases' })}
          className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 transition active:scale-[0.98] ${
            tab === 'cases'
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-white/10 text-silver-300 hover:border-white/20'
          }`}
        >
          <ShoppingBag className="h-6 w-6" />
          <span className="font-display text-base font-semibold">Cases</span>
        </button>
        <button
          type="button"
          onClick={() => setParams({ tab: 'accessories' })}
          className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 transition active:scale-[0.98] ${
            tab === 'accessories'
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-white/10 text-silver-300 hover:border-white/20'
          }`}
        >
          <Sparkles className="h-6 w-6" />
          <span className="font-display text-base font-semibold">Extras</span>
        </button>
      </div>

      {tab === 'cases' && (
        <p className="mx-auto mb-6 max-w-md text-center text-xs text-silver-400">
          Need a case for your exact iPhone model & colour?{' '}
          <Link to="/parts" className="text-gold hover:underline">
            Use the parts picker
          </Link>
        </p>
      )}

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} simple />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-md text-center">
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I want to order from your shop.')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </section>
  )
}
