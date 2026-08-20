import { Link } from 'react-router-dom'

const elements = [
  { number: '01', symbol: 'Hc', name: 'Healthcare', accent: 'amber' },
  { number: '02', symbol: 'Ht', name: 'Hospitality', accent: 'white' },
  { number: '03', symbol: 'Eb', name: 'Employer Branding', accent: 'amethyst' },
  { number: '04', symbol: 'St', name: 'Strategy', accent: 'white' },
  { number: '05', symbol: 'Ct', name: 'Content', accent: 'white' },
]

function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">— Brand · Alchemy · Growth</p>
            <h1>
              We turn small businesses into
              <br />
              brands people <span className="highlight">trust on sight.</span>
            </h1>
            <p className="hero-sub">
              Brandalkemy is a sector-specialist digital marketing studio for
              healthcare, hospitality, and employer branding — built for
              industries where trust and first impressions decide everything.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Start a project →</Link>
              <Link to="/work" className="btn-ghost">See the work</Link>
            </div>
          </div>

          <div className="hero-diagram">
            <svg className="connector-lines" viewBox="0 0 400 420" preserveAspectRatio="none">
              <line x1="150" y1="90" x2="270" y2="150" strokeDasharray="4 5" />
              <line x1="150" y1="130" x2="150" y2="230" strokeDasharray="4 5" />
              <line x1="150" y1="270" x2="270" y2="300" strokeDasharray="4 5" />
              <line x1="270" y1="230" x2="270" y2="150" strokeDasharray="4 5" />
              <line x1="270" y1="340" x2="180" y2="380" strokeDasharray="4 5" />
            </svg>
            {elements.map((el, i) => (
              <div className={`node node-${i + 1} accent-${el.accent}`} key={el.symbol}>
                <span className="node-number">{el.number}</span>
                <span className="node-symbol">{el.symbol}</span>
                <span className="node-name">{el.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home