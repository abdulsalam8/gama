import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { IPhonePart } from '../data/content'
import { COLOR_HEX } from '../data/iphone-colors'

interface Props {
  part: IPhonePart
  model?: string
}

function colorSwatchStyle(color: string): CSSProperties {
  const hex = COLOR_HEX[color]
  if (!hex) return { backgroundColor: '#3a3a3c', borderColor: '#555558' }
  if (color === 'Clear') {
    return {
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
      borderColor: hex.border,
    }
  }
  return { backgroundColor: hex.bg, borderColor: hex.border }
}

export default function PartCard({ part, model }: Props) {
  const [color, setColor] = useState(part.colors?.[0] ?? '')

  const params = new URLSearchParams({
    service: part.service,
    product: color ? `${part.name} (${color})` : part.name,
  })
  if (model) params.set('model', model)
  if (color) params.set('color', color)

  const visibleColors = part.colors?.slice(0, 8) ?? []
  const moreColors = (part.colors?.length ?? 0) - visibleColors.length

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/30 transition hover:border-gold/40">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={part.image}
          alt={part.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
        {part.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-950">
            {part.tag}
          </span>
        )}
        {part.proOnly && (
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] text-silver-200 backdrop-blur">
            Pro models
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-silver-50">
          {part.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-400">
          {part.description}
        </p>

        {part.grades && part.grades.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {part.grades.map((g) => (
              <span
                key={g}
                className="rounded-full border border-gold/30 px-2 py-0.5 text-[10px] font-medium text-gold"
              >
                {g}
              </span>
            ))}
          </div>
        )}

        {part.colors && part.colors.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-medium text-silver-300">
              Choose colour
            </p>
            <div className="flex flex-wrap gap-2">
              {visibleColors.map((c) => (
                <button
                  key={c}
                  type="button"
                  title={c}
                  onClick={() => setColor(c)}
                  className={`h-7 w-7 rounded-full border-2 transition ${
                    color === c
                      ? 'ring-2 ring-gold ring-offset-2 ring-offset-ink-900'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={colorSwatchStyle(c)}
                >
                  <span className="sr-only">{c}</span>
                </button>
              ))}
              {moreColors > 0 && (
                <span className="self-center text-[10px] text-silver-400">
                  +{moreColors} more
                </span>
              )}
            </div>
            {color && (
              <p className="mt-2 text-xs text-gold">Selected: {color}</p>
            )}
          </div>
        )}

        <p className="mt-3 text-xs font-medium text-silver-300">
          {part.priceNote}
        </p>

        <Link
          to={`/request?${params.toString()}`}
          className="btn-primary mt-4 w-full !py-2.5 text-sm"
        >
          Request this
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
