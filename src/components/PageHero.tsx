import { Link } from 'react-router-dom'

interface Props {
  label?: string
  title: string
  subtitle?: string
  cta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
}

function ActionLink({
  to,
  className,
  children,
}: {
  to: string
  className: string
  children: React.ReactNode
}) {
  if (to.startsWith('http')) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export default function PageHero({
  label,
  title,
  subtitle,
  cta,
  secondaryCta,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="container-page relative">
        {label && <p className="section-label animate-fade-up">{label}</p>}
        <h1
          className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-silver-50 animate-fade-up sm:text-5xl md:text-6xl"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-2xl text-base leading-relaxed text-silver-300 animate-fade-up sm:text-lg"
            style={{ animationDelay: '140ms' }}
          >
            {subtitle}
          </p>
        )}
        {(cta || secondaryCta) && (
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            {cta && (
              <ActionLink to={cta.to} className="btn-primary">
                {cta.label}
              </ActionLink>
            )}
            {secondaryCta && (
              <ActionLink to={secondaryCta.to} className="btn-secondary">
                {secondaryCta.label}
              </ActionLink>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
