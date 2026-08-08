/** Site-wide config from env (all VITE_* vars are public in the bundle) */
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://abumunifa.com'

export const ADMIN_PIN =
  (import.meta.env.VITE_ADMIN_PIN as string | undefined) || 'munifa2026'

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`
