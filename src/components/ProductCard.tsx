import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '../data/content'

interface Props {
  product: Product
  /** Minimal card — big photo, name, price, one button */
  simple?: boolean
}

export default function ProductCard({ product, simple = false }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const orderTo = `/request?service=${
    product.category === 'case' ? 'case' : 'accessories'
  }&product=${encodeURIComponent(product.name)}`

  if (simple) {
    return (
      <>
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 transition hover:border-gold/40">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative block aspect-square w-full overflow-hidden"
            aria-label={product.name}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {product.tag && (
              <span className="absolute left-2 top-2 rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold uppercase text-ink-950">
                {product.tag}
              </span>
            )}
          </button>
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-sm font-semibold leading-snug text-silver-50">
                {product.name}
              </h3>
              <p className="shrink-0 text-sm font-bold text-gold">{product.price}</p>
            </div>
            <Link
              to={orderTo}
              className="btn-primary mt-3 w-full !py-3 text-sm"
            >
              <ShoppingBag className="h-4 w-4" />
              I want this
            </Link>
          </div>
        </article>

        {open && (
          <div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/85 p-4 sm:items-center"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
          >
            <div
              className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-ink-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              <div className="p-5 text-center">
                <p className="font-display text-xl font-bold text-silver-50">
                  {product.name}
                </p>
                <p className="mt-1 text-lg font-semibold text-gold">{product.price}</p>
                <Link
                  to={orderTo}
                  className="btn-primary mt-5 w-full !py-3.5"
                  onClick={() => setOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  I want this
                </Link>
                <button
                  type="button"
                  className="mt-2 w-full py-2 text-sm text-silver-400 hover:text-silver-200"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 transition hover:border-gold/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900 text-left"
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          {product.tag && (
            <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-950">
              {product.tag}
            </span>
          )}
          <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-silver-100 backdrop-blur">
            Tap to view
          </span>
        </button>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold leading-snug text-silver-50 sm:text-lg">
              {product.name}
            </h3>
            <p className="shrink-0 text-base font-semibold text-gold">{product.price}</p>
          </div>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-400">
            {product.blurb}
          </p>
          <Link to={orderTo} className="btn-primary mt-4 w-full !py-2.5 text-sm">
            <ShoppingBag className="h-4 w-4" />
            I want this
          </Link>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-4 sm:items-center"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover sm:aspect-square"
            />

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-2xl font-bold text-silver-50">
                  {product.name}
                </h2>
                <p className="text-xl font-semibold text-gold">{product.price}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-silver-300">
                {product.blurb}
              </p>
              <Link to={orderTo} className="btn-primary mt-5 w-full" onClick={() => setOpen(false)}>
                <ShoppingBag className="h-4 w-4" />
                I want this
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
