import { Link } from 'react-router-dom'
import { SCREEN_TYPES } from '../data/content'
import { PART_IMAGES } from '../data/iphone-colors'

export default function Screens() {
  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          Screen repair
        </h1>
        <p className="mt-2 text-sm text-silver-400">
          Original, OLED, or budget — tap to choose
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <img
            src={PART_IMAGES.screenOled}
            alt="OLED iPhone screen"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <img
            src={PART_IMAGES.screenIncell}
            alt="Incell iPhone screen"
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-md text-center">
        <Link to="/parts?need=screen" className="btn-primary w-full !py-4 text-base">
          Pick your model & screen type
        </Link>
      </div>

      <section className="mx-auto mt-12 max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {SCREEN_TYPES.map((screen) => (
            <div
              key={screen.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-display text-xl font-semibold text-gold">
                {screen.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver-300">
                {screen.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
