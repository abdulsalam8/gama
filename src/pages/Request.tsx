import { Link, useSearchParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import RequestForm from '../components/RequestForm'
import { BUSINESS, SERVICES, type ServiceId } from '../data/content'

export default function Request() {
  const [params] = useSearchParams()
  const selected = (params.get('service') || 'repair') as ServiceId | string
  const productName = params.get('product') || undefined
  const initialModel = params.get('model') || undefined
  const initialColor = params.get('color') || undefined
  const known = SERVICES.some((s) => s.id === selected)

  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          {productName ? 'Almost done' : 'Send your order'}
        </h1>
        <p className="mt-2 text-sm text-silver-400">
          Name + phone → WhatsApp opens with your details
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <RequestForm
          initialService={known ? selected : 'repair'}
          productName={productName}
          initialModel={initialModel}
          initialColor={initialColor}
        />
      </div>

      <div className="mx-auto mt-8 max-w-md text-center">
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi, I need help with my iPhone.')}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-silver-400 hover:text-gold"
        >
          <MessageCircle className="h-4 w-4" />
          Skip form — chat on WhatsApp directly
        </a>
        {!productName && (
          <p className="mt-3">
            <Link to="/parts" className="text-sm text-gold hover:underline">
              Or pick what you need first
            </Link>
          </p>
        )}
      </div>
    </section>
  )
}
