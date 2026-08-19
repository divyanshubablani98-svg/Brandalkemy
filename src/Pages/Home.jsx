import { Link } from 'react-router-dom'

const elements = [
  {
    number: '01',
    symbol: 'Hc',
    name: 'Healthcare',
    desc: 'Marketing built for trust — where every claim has to hold up.',
  },
  {
    number: '02',
    symbol: 'Hp',
    name: 'Hospitality',
    desc: 'Campaigns that turn a stay or a visit into a story worth repeating.',
  },
  {
    number: '03',
    symbol: 'Eb',
    name: 'Employer Branding',
    desc: 'Positioning that makes the right people want to work with you.',
  },
]

function Home() {
  return (
    <>
      <section id="hero">
        <p className="eyebrow">Br · Al · Ky — Brand Alchemy</p>
        <h1>
          We turn <span className="highlight">brands</span> into
          <br />
          something people <span className="highlight">react</span> to.
        </h1>
        <p className="hero-sub">
          Brandalkemy is a digital marketing agency that treats every brand
          like a formula — the right mix of strategy, story, and design,
          combined until something valuable forms.
        </p>
        <div className="hero-cta">
          <Link to="/work" className="btn-primary">See the work</Link>
          <Link to="/contact" className="btn-ghost">Start a project</Link>
        </div>
      </section>

      <section id="periodic-table">
        <p className="section-label">Elements We Work With</p>
        <h2>Three sectors. One process.</h2>
        <div className="element-grid">
          {elements.map((el) => (
            <div className="element-tile" key={el.symbol}>
              <span className="element-number">{el.number}</span>
              <span className="element-symbol">{el.symbol}</span>
              <h3>{el.name}</h3>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cta-strip">
        <h2>Ready to run the reaction?</h2>
        <Link to="/contact" className="btn-primary">Book a call</Link>
      </section>
    </>
  )
}

export default Home