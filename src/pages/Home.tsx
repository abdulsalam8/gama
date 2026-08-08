import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import OurWorkSection from '../components/OurWorkSection'
import TrustStrip from '../components/TrustStrip'
import {
  CORE_REPAIRS,
  CUSTOMIZATION_POINTS,
  PRODUCTS,
  SCREEN_TYPES,
} from '../data/content'

const popularProducts = PRODUCTS.filter((p) =>
  ['c1', 'c2', 'a1', 'a4'].includes(p.id),
)

export default function Home() {
  return (
    <>
      {/* Hero — keep clean */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/services/hero-phone.jpg"
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        </div>

        <div className="container-page relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-20 sm:pt-24">
          <div className="max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-gold animate-fade-up">
              ABU MUNIFA APPLE CARE +
            </p>
            <h1
              className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-silver-50 animate-fade-up sm:text-5xl md:text-6xl"
              style={{ animationDelay: '90ms' }}
            >
              Your iPhone Deserves the Best Care.
            </h1>
            <p
              className="mt-5 max-w-lg text-base leading-relaxed text-silver-200 animate-fade-up sm:text-lg"
              style={{ animationDelay: '160ms' }}
            >
              Battery, screen, camera, full-part repairs, and phone
              customization — plus home service when you need it.
            </p>
            <div
              className="mt-8 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              <Link to="/parts" className="btn-primary">
                Order parts
              </Link>
              <Link to="/shop" className="btn-secondary">
                Shop accessories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Core repairs — battery, screen, camera, every part */}
      <section id="services" className="container-page scroll-mt-24 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="section-label">What we do</p>
          <h2 className="section-title mt-3">
            Every part of your iPhone, repaired
          </h2>
          <p className="mt-4 text-silver-300">
            From everyday battery and screen changes to cameras and deep
            component work — we handle it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {CORE_REPAIRS.map((item) => (
            <Link
              key={item.id}
              to={`/parts?need=${item.id === 'battery' ? 'battery' : item.id === 'screen' ? 'screen' : item.id === 'camera' ? 'camera' : 'other'}`}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-ink-800/20 transition hover:border-gold/40 sm:grid-cols-[140px_1fr]"
            >
              <div className="aspect-[16/10] sm:aspect-auto sm:min-h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold text-silver-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver-300">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Request this
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Screen types */}
      <section className="border-y border-white/5 bg-ink-950/60 py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="section-label">Screen change</p>
              <h2 className="section-title mt-3">
                Different screen types — you choose
              </h2>
              <p className="mt-4 text-silver-300 leading-relaxed">
                Not all screens are the same. We’ll help you pick the right
                grade for quality and budget before we install.
              </p>
              <Link to="/request?service=screen" className="btn-primary mt-8">
                Request a screen change
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {SCREEN_TYPES.map((screen) => (
                <li
                  key={screen.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-silver-50">
                        {screen.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-silver-400">
                        {screen.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="container-page py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-full">
              <img
                src="/parts/iphone-back-glass-colors.png"
                alt="Phone customization"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950/20 to-ink-950/80 lg:bg-gradient-to-l" />
            </div>
            <div className="relative p-7 sm:p-10 lg:p-12">
              <p className="section-label">Phone customization</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-silver-50 sm:text-4xl">
                Change the look — any model you want
              </h2>
              <p className="mt-4 text-silver-300 leading-relaxed">
                We customize housing and finish so your phone can look like a
                newer model. Example: turn an XR look into a 14 Pro Max style —
                or restyle to whatever model finish you prefer.
              </p>
              <ul className="mt-8 space-y-5">
                {CUSTOMIZATION_POINTS.map((point) => (
                  <li key={point.title}>
                    <h3 className="font-display font-semibold text-gold">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-silver-300">{point.text}</p>
                  </li>
                ))}
              </ul>
              <Link
                to="/request?service=customization"
                className="btn-primary mt-8"
              >
                Request customization
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* More parts + home */}
      <section className="border-y border-white/5 py-16 sm:py-20">
        <div className="container-page">
          <p className="section-label">Also available</p>
          <h2 className="section-title mt-3">More services</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Charging port',
                text: 'Not charging or loose cable? We fix the port.',
                to: '/request?service=repair&product=Charging%20Port',
              },
              {
                title: 'Back glass',
                text: 'Cracked back? We replace it cleanly.',
                to: '/back-glass',
              },
              {
                title: 'Face ID & sensors',
                text: 'Sensor and Face ID repairs when possible.',
                to: '/parts?need=face-id',
              },
              {
                title: 'Home service',
                text: 'We come to your location for repair or fitting.',
                to: '/request?service=home-service',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-gold/40"
              >
                <h3 className="font-display text-lg font-semibold text-silver-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-silver-400">{item.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold">
                  Continue <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick start */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="section-title text-center sm:text-4xl">
          Ready to start?
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Book a repair',
              text: 'Battery, screen, camera & more',
              to: '/request?service=repair',
              img: '/services/repair.jpg',
            },
            {
              title: 'Customize my phone',
              text: 'New look / model style change',
              to: '/request?service=customization',
              img: '/parts/iphone-back-glass-pro.png',
            },
            {
              title: 'Shop accessories',
              text: 'Cases, chargers & more',
              to: '/shop',
              img: '/products/clear-case.jpg',
            },
          ].map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/30 transition hover:border-gold/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-silver-50">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-silver-400">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular products */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Shop</p>
              <h2 className="section-title mt-3">Popular items</h2>
            </div>
            <Link to="/shop" className="btn-secondary !py-2 text-sm">
              See all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <OurWorkSection />
    </>
  )
}
