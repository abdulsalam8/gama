import { BUSINESS } from '../data/content'

export interface WhatsAppOrderDetails {
  fullName: string
  phone: string
  iphoneModel?: string
  product?: string
  color?: string
  serviceLabel?: string
  homeService?: boolean
  note?: string
}

export function buildWhatsAppOrderMessage(details: WhatsAppOrderDetails): string {
  const lines = [
    `Hi ${BUSINESS.name}!`,
    '',
    'I would like to order:',
    '',
    `Name: ${details.fullName}`,
    `Phone: ${details.phone}`,
  ]

  if (details.iphoneModel) lines.push(`iPhone: ${details.iphoneModel}`)
  if (details.product) lines.push(`Item: ${details.product}`)
  if (details.color) lines.push(`Colour: ${details.color}`)
  if (details.serviceLabel && !details.product) {
    lines.push(`Service: ${details.serviceLabel}`)
  }
  lines.push(`Home visit: ${details.homeService ? 'Yes please' : 'No'}`)

  if (details.note?.trim()) {
    lines.push('', `Note: ${details.note.trim()}`)
  }

  return lines.join('\n')
}

export function openWhatsAppOrder(details: WhatsAppOrderDetails) {
  const msg = buildWhatsAppOrderMessage(details)
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`
  const win = window.open(url, '_blank', 'noopener,noreferrer')
  if (!win) window.location.href = url
}
