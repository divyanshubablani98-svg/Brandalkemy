import Header from '../Components/Header'

const steps = [
  { number: '01', symbol: 'Ds', name: 'Discover', desc: 'We study the market, the audience, and what your brand actually stands for.' },
  { number: '02', symbol: 'Di', name: 'Distill', desc: 'Strategy gets reduced to the core message — no fluff, no filler.' },
  { number: '03', symbol: 'Fm', name: 'Form', desc: 'Design and content take shape around that strategy, sector by sector.' },
  { number: '04', symbol: 'Rn', name: 'Run', desc: 'Campaigns launch, get measured, and get refined until they compound.' },
]

function About() {
  return (
    <>
      <Header
        eyebrow="About Brandalkemy"
        title="Marketing, treated like a formula."
        subtitle="We believe every brand is a set of raw elements — audience, offer, voice — waiting to be combined the right way. Our job is finding that combination."
      />

      <section id="process">
        <p className="section-label">The Formula</p>
        <h2>How we work</h2>
        <div className="element-grid">
          {steps.map((s) => (
            <div className="element-tile" key={s.symbol}>
              <span className="element-number">{s.number}</span>
              <span className="element-symbol">{s.symbol}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about-values">
        <p className="section-label">What We Believe</p>
        <h2>Three sectors, one standard</h2>
        <p className="values-copy">
          We focus deliberately on Healthcare, Hospitality, and Employer Branding —
          three sectors where trust, experience, and perception decide everything.
          Specializing lets us go deeper than a generalist agency ever could.
        </p>
      </section>
    </>
  )
}

export default About