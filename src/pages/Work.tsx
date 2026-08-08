import PageHero from '../components/PageHero'
import OurWorkSection from '../components/OurWorkSection'
import { BUSINESS } from '../data/content'
import { Link } from 'react-router-dom'

export default function Work() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Repairs you can watch"
        subtitle={`Real videos from ${BUSINESS.name} — play them here, or open TikTok for the full page.`}
        cta={{ label: 'Book a repair', to: '/request?service=repair' }}
        secondaryCta={{ label: 'Open TikTok', to: BUSINESS.tiktokUrl }}
      />
      <OurWorkSection compact />
      <section className="container-page pb-20 text-center">
        <p className="text-sm text-silver-400">
          Ready for your phone?{' '}
          <Link to="/request" className="text-gold hover:underline">
            Send a request
          </Link>
        </p>
      </section>
    </>
  )
}
