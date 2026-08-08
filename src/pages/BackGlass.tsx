import { Link } from 'react-router-dom'
import { PART_IMAGES } from '../data/iphone-colors'

export default function BackGlass() {
  return (
    <section className="container-page pb-28 pt-24 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-bold text-silver-50 sm:text-4xl">
          Back glass repair
        </h1>
        <p className="mt-2 text-sm text-silver-400">
          Every colour for your iPhone model
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white sm:col-span-3">
          <img
            src={PART_IMAGES.backGlassColors}
            alt="iPhone back glass colour options"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
          <img
            src={PART_IMAGES.backGlass}
            alt="Replacement back glass panels"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white sm:col-span-2">
          <img
            src={PART_IMAGES.backGlassPro}
            alt="Pro model back glass colours"
            className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-md text-center">
        <Link to="/parts?need=back-glass" className="btn-primary w-full !py-4 text-base">
          Pick your model & colour
        </Link>
        <Link
          to="/request?service=back-glass"
          className="mt-3 block text-sm text-silver-400 hover:text-gold"
        >
          Or request directly
        </Link>
      </div>
    </section>
  )
}
