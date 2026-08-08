import { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { BUSINESS } from '../data/content'

interface Props {
  videoId: string
  url: string
  title?: string
}

/**
 * Real TikTok player via official iframe embed.
 * Falls back to a “Watch on TikTok” card if TikTok blocks the embed.
 */
export default function TikTokEmbed({ videoId, url, title }: Props) {
  const [blocked, setBlocked] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (blocked) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group relative flex aspect-[9/16] max-h-[720px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-6"
      >
        <img
          src="/services/repair.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink-950">
            <Play className="h-7 w-7 fill-current" />
          </span>
        </div>
        <div className="relative">
          <p className="font-display text-lg font-bold text-silver-50">
            {title || 'Watch this repair'}
          </p>
          <p className="mt-1 flex items-center gap-1 text-sm text-gold">
            Open in TikTok <ExternalLink className="h-3.5 w-3.5" />
          </p>
        </div>
      </a>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
      <div className="relative mx-auto w-full max-w-[325px]">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex min-h-[580px] items-center justify-center bg-ink-900 text-sm text-silver-400">
            Loading video…
          </div>
        )}
        <iframe
          title={title || 'TikTok video'}
          src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`}
          className="w-full border-0"
          style={{ height: 700, maxWidth: 325 }}
          allow="encrypted-media; fullscreen; autoplay; clipboard-write"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setLoaded(true)}
          onError={() => setBlocked(true)}
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
        <p className="truncate text-sm text-silver-300">
          {title || BUSINESS.tiktokHandle}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-xs font-medium text-gold hover:underline"
        >
          Open in TikTok
        </a>
      </div>
      {/* If iframe stays blank (TikTok overload), user can still open it */}
      <button
        type="button"
        onClick={() => setBlocked(true)}
        className="w-full border-t border-white/5 py-2 text-center text-[11px] text-silver-500 hover:text-silver-300"
      >
        Video not loading? Tap for link instead
      </button>
    </div>
  )
}
