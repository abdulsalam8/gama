import { ExternalLink } from 'lucide-react'
import { BUSINESS, TIKTOK_VIDEOS } from '../data/content'
import TikTokEmbed from './TikTokEmbed'

interface Props {
  compact?: boolean
}

export default function OurWorkSection({ compact }: Props) {
  return (
    <section
      id="work"
      className={`scroll-mt-24 ${compact ? 'py-12' : 'py-16 sm:py-24'} border-y border-white/5 bg-ink-950/50`}
    >
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="section-label">Our work</p>
            <h2 className="section-title mt-3">Real repair videos</h2>
            <p className="mt-4 text-silver-300">
              Watch our work below. For the full gallery, open our TikTok page.
            </p>
          </div>
          <a
            href={BUSINESS.tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            All videos on TikTok
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div
          className={`mt-10 grid justify-items-center gap-8 ${
            TIKTOK_VIDEOS.length > 1
              ? 'sm:grid-cols-2 lg:grid-cols-3'
              : ''
          }`}
        >
          {TIKTOK_VIDEOS.map((video) => (
            <TikTokEmbed
              key={video.id}
              videoId={video.id}
              url={video.url}
              title={video.title}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-silver-400">
          Follow{' '}
          <a
            href={BUSINESS.tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gold hover:underline"
          >
            {BUSINESS.tiktokHandle}
          </a>{' '}
          for more repairs and customizations.
        </p>
      </div>
    </section>
  )
}
