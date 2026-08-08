import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { BUSINESS } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Your one-stop iPhone plug"
        subtitle={`${BUSINESS.name} specializes in iPhone repairs, original-quality spare parts, accessories — and convenient home service.`}
      />

      <section className="container-page grid gap-12 pb-24 lg:grid-cols-2">
        <div className="space-y-6 text-silver-300 leading-relaxed">
          <p>
            We’re built around one idea: your iPhone should get care that
            matches how much you rely on it. From cracked screens and tired
            batteries to stylish cases and everyday accessories, we keep it
            simple, honest, and professional.
          </p>
          <p>
            Prefer not to leave home? Our home service brings repairs and
            part fitting to your door — so you stay productive while we fix
            what matters.
          </p>
          <p>
            Every request through this site reaches our team with your model,
            details, and photos so we can respond faster and more accurately.
          </p>
          <Link to="/request" className="btn-primary mt-4 inline-flex">
            Get Started
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: 'Repairs', v: 'Screens to software' },
            { k: 'Parts', v: 'Screens & back glass' },
            { k: 'Shop', v: 'Cases & accessories' },
            { k: 'Home', v: 'On-site convenience' },
          ].map((stat) => (
            <div
              key={stat.k}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="font-display text-2xl font-bold text-gold">{stat.k}</p>
              <p className="mt-2 text-sm text-silver-300">{stat.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
