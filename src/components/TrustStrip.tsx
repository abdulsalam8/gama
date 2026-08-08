import { Shield, Smartphone, MessageCircle, MapPin } from 'lucide-react'

const items = [
  { icon: Smartphone, text: 'iPhone XR → 17 Pro Max' },
  { icon: MessageCircle, text: 'Order on WhatsApp' },
  { icon: Shield, text: 'Quality parts & repair' },
  { icon: MapPin, text: 'Lagos · Home service' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-ink-950/80 py-6">
      <div className="container-page">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-3 sm:px-4"
            >
              <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span className="text-xs font-medium text-silver-300 sm:text-sm">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
