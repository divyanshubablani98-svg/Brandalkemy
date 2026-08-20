import { useState } from 'react'
import Header from '../Components/Header'
import ServiceCard from '../Components/ServiceCard'

const services = [
  { number: '01', symbol: 'St', name: 'Strategy', category: 'Foundation', description: 'Positioning and messaging that make the offer obvious in one sentence.' },
  { number: '02', symbol: 'Bd', name: 'Brand Design', category: 'Identity', description: 'Identity systems built to survive every touchpoint, not just a homepage.' },
  { number: '03', symbol: 'Wb', name: 'Web Design', category: 'Presence', description: 'Sites engineered to convert visitors into enquiries, not just impress.' },
  { number: '04', symbol: 'Ct', name: 'Content', category: 'Voice', description: 'Words and visuals that sound like your team, not a template.' },
  { number: '05', symbol: 'So', name: 'Social Media', category: 'Channels', description: "Channels run on a real editorial calendar, not posted when there's time." },
  { number: '06', symbol: 'Se', name: 'SEO', category: 'Discovery', description: 'Findability engineered into every page, not bolted on afterward.' },
  { number: '07', symbol: 'Ad', name: 'Paid Media', category: 'Reach', description: 'Budgets tracked to the enquiry, not just to impressions and clicks.' },
  { number: '08', symbol: 'An', name: 'Analytics', category: 'Proof', description: 'Reporting that tells you what to do next, not just what happened.' },
]

const PER_PAGE = 4

function Services() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(services.length / PER_PAGE)
  const visible = services.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))
  const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))

  return (
    <>
      <Header
        eyebrow="— The Table of Elements"
        title="Eight elements. One periodic system for building brands."
        subtitle="Every project draws from the same table — combined differently depending on what your business needs to grow."
      />

      <section id="services-carousel">
        <div className="element-grid services-page-grid">
          {visible.map((s) => (
            <ServiceCard key={s.symbol} {...s} />
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-arrow" onClick={goPrev} aria-label="Previous">‹</button>
          <div className="carousel-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={`dot ${i === page ? 'dot-active' : ''}`}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
          <button className="carousel-arrow" onClick={goNext} aria-label="Next">›</button>
        </div>
      </section>
    </>
  )
}

export default Services