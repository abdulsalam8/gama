import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  CORE_REPAIRS,
  CUSTOMIZATION_POINTS,
  REPAIR_TYPES,
  SCREEN_TYPES,
} from '../data/content'

export default function Repairs() {
  return (
    <>
      <PageHero
        label="Repair"
        title="Battery, screen, camera & every part"
        subtitle="We repair all parts of the iPhone — and we can customize the look to another model style if you want."
        cta={{ label: 'Start repair request', to: '/request?service=repair' }}
        secondaryCta={{ label: 'Home service', to: '/request?service=home-service' }}
      />

      <section className="container-page pb-16">
        <div className="mb-10 overflow-hidden rounded-[1.5rem] border border-white/10">
          <img
            src="/services/repair.jpg"
            alt="iPhone repair"
            className="max-h-72 w-full object-cover"
          />
        </div>

        <h2 className="font-display text-2xl font-bold text-silver-50">
          Main repair services
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {CORE_REPAIRS.map((item) => (
            <Link
              key={item.id}
              to={`/request?service=repair&product=${encodeURIComponent(item.query)}`}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-gold/40"
            >
              <h3 className="font-display text-lg font-semibold text-silver-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-silver-400">
                {item.text}
              </p>
              <p className="mt-3 text-sm text-gold">Request this →</p>
            </Link>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-silver-50">
          Screen types we install
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-silver-400">
          Original, OLED, Soft OLED, Incell and other grades — we’ll explain
          the difference so you pick what fits you.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SCREEN_TYPES.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="font-display font-semibold text-gold">{s.name}</h3>
              <p className="mt-2 text-sm text-silver-400">{s.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-silver-50">
          Phone customization
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-silver-400">
          Change housing / case look — e.g. XR to 14 Pro Max style, or any
          model finish you want.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {CUSTOMIZATION_POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="font-display font-semibold text-silver-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-silver-400">{p.text}</p>
            </div>
          ))}
        </div>
        <Link to="/request?service=customization" className="btn-primary mt-6">
          Request customization
        </Link>

        <h2 className="mt-14 font-display text-2xl font-bold text-silver-50">
          All repair options
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_TYPES.map((type) => (
            <Link
              key={type}
              to={`/request?service=repair&product=${encodeURIComponent(type)}`}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:border-gold/40"
            >
              <h3 className="font-display text-base font-semibold text-silver-50">
                {type}
              </h3>
              <p className="mt-1 text-sm text-gold">Request this →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
