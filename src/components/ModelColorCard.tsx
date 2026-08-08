import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import IphoneColorVisual from './IphoneColorVisual'

interface Props {
  model: string
  color: string
  type: 'back-glass' | 'case'
  caseStyle?: string
}

export default function ModelColorCard({ model, color, type, caseStyle }: Props) {
  const name =
    type === 'back-glass'
      ? `Back Glass — ${color}`
      : `${caseStyle ?? 'Case'} — ${color}`

  const params = new URLSearchParams({
    service: type === 'back-glass' ? 'back-glass' : 'case',
    product: name,
    model,
    color,
  })

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/30 transition hover:border-gold/40">
      <IphoneColorVisual color={color} model={model} variant={type === 'case' ? 'case' : 'back-glass'} />
      <div className="p-4">
        <h3 className="font-display text-sm font-semibold text-silver-50">{name}</h3>
        <p className="mt-1 text-xs text-silver-400">{model}</p>
        <Link
          to={`/request?${params.toString()}`}
          className="btn-primary mt-3 w-full !py-2 text-xs"
        >
          Request
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}
