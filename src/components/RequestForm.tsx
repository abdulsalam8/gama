import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react'
import { BUSINESS, SERVICES, type ServiceId } from '../data/content'
import { createRequest } from '../lib/requests'
import { openWhatsAppOrder } from '../lib/whatsapp-order'

interface Props {
  initialService?: ServiceId | string
  productName?: string
  initialModel?: string
  initialColor?: string
}

export default function RequestForm({
  initialService,
  productName,
  initialModel,
  initialColor,
}: Props) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [homeService, setHomeService] = useState(initialService === 'home-service')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const serviceLabel = useMemo(() => {
    return SERVICES.find((s) => s.id === initialService)?.title || 'iPhone service'
  }, [initialService])

  const hasOrder = Boolean(productName || initialModel)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (!fullName.trim()) {
      setError('Please type your name.')
      return
    }
    if (!phone.trim()) {
      setError('Please type your phone number.')
      return
    }

    const orderDetails = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      iphoneModel: initialModel,
      product: productName,
      color: initialColor,
      serviceLabel: productName ? undefined : serviceLabel,
      homeService,
      note,
    }

    setSubmitting(true)
    try {
      try {
        createRequest({
          fullName: orderDetails.fullName,
          phone: orderDetails.phone,
          email: '',
          iphoneModel: initialModel || 'Not specified',
          service: productName
            ? `${serviceLabel} — ${productName}`
            : serviceLabel,
          description: [
            productName && `Item: ${productName}`,
            initialColor && `Colour: ${initialColor}`,
            note.trim(),
          ]
            .filter(Boolean)
            .join('\n') || 'WhatsApp order',
          photos: [],
          contactMethod: 'whatsapp',
          homeService,
        })
      } catch {
        // WhatsApp is the main handoff
      }

      openWhatsAppOrder(orderDetails)
      setSent(true)
    } catch {
      openWhatsAppOrder(orderDetails)
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-ink-800/40 px-6 py-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h2 className="mt-4 font-display text-2xl font-bold text-silver-50">
          Opening WhatsApp…
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-silver-300">
          Your order details are ready to send. Tap send in WhatsApp and we will
          reply shortly.
        </p>
        <p className="mt-4 text-xs text-silver-500">
          Did not open?{' '}
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-gold hover:underline"
          >
            Chat us on WhatsApp
          </a>
        </p>
        <Link to="/parts" className="btn-secondary mt-6 inline-flex">
          Order something else
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-ink-800/40 p-5 sm:p-7">
      <div className="rounded-xl border border-gold/25 bg-gold/5 p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
          Your order
        </p>
        {productName ? (
          <p className="mt-2 font-display text-lg font-semibold text-silver-50">
            {productName}
          </p>
        ) : (
          <p className="mt-2 font-display text-lg font-semibold text-silver-50">
            {serviceLabel}
          </p>
        )}
        {initialModel && (
          <p className="mt-1 text-sm text-silver-300">{initialModel}</p>
        )}
        {initialColor && (
          <p className="mt-0.5 text-sm text-silver-400">Colour: {initialColor}</p>
        )}
        {!hasOrder && (
          <Link
            to="/parts"
            className="mt-3 inline-block text-sm text-gold hover:underline"
          >
            Pick from pictures instead
          </Link>
        )}
      </div>

      <p className="mt-6 text-sm text-silver-400">
        Type your name and number — we open WhatsApp with everything filled in.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label className="label-field" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="input-field !py-3.5 text-base"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Musa"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="label-field" htmlFor="phone">
            Your phone number
          </label>
          <input
            id="phone"
            type="tel"
            className="input-field !py-3.5 text-base"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0904 313 0174"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className="label-field" htmlFor="note">
            Anything else? <span className="text-silver-500">(optional)</span>
          </label>
          <input
            id="note"
            className="input-field !py-3.5"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. Come tomorrow morning"
          />
        </div>

        <button
          type="button"
          onClick={() => setHomeService((v) => !v)}
          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-4 text-left transition ${
            homeService
              ? 'border-gold bg-gold/10'
              : 'border-white/10 hover:border-white/20'
          }`}
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${
              homeService
                ? 'border-gold bg-gold text-ink-950'
                : 'border-white/25 text-transparent'
            }`}
          >
            ✓
          </span>
          <span>
            <span className="block text-sm font-semibold text-silver-50">
              Come to my location
            </span>
            <span className="block text-xs text-silver-400">
              Home service — we visit you
            </span>
          </span>
        </button>
      </div>

      {error && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-6 w-full !py-4 text-base"
      >
        <MessageCircle className="h-5 w-5" />
        {submitting ? 'Opening WhatsApp…' : 'Send order on WhatsApp'}
      </button>

      {hasOrder && (
        <Link
          to="/parts"
          className="mt-4 flex items-center justify-center gap-1.5 text-sm text-silver-400 hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Change order
        </Link>
      )}
    </form>
  )
}
