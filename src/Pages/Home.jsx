import { useEffect, useRef, useState } from 'react'
import './Home.css'

// Marketing-vocabulary word field for the ambient background —
// the same acronym soup a brand strategist lives in day to day.
const KEYWORD_FIELD = [
  'SEO', 'KPI', 'CTR', 'CRO', 'CPC', 'CPM', 'GEO', 'UGC', 'CVR', 'ROAS',
  'BRAND', 'REACH', 'GROWTH', 'SOCIAL', 'CONTENT', 'CAMPAIGN', 'FUNNEL',
  'INSIGHT', 'CREATIVE', 'IDENTITY', 'STRATEGY', 'LEADS', 'VIRAL', 'TRUST',
  'PERFORMANCE', 'POSITIONING', 'NARRATIVE', 'EQUITY', 'RETENTION', 'ATTENTION',
]

const SECTORS = [
  { no: '01', symbol: 'Hc', name: 'Healthcare', note: 'Trust, made legible' },
  { no: '02', symbol: 'Hp', name: 'Hospitality', note: 'Experience, made loud' },
  { no: '03', symbol: 'Eb', name: 'Employer Branding', note: 'Culture, made visible' },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Home() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    // Triggers the load-in sequence once, on mount.
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className={`hero ${mounted ? 'is-mounted' : ''}`} ref={heroRef}>
      {/* Ambient backdrop: drifting keyword field + amethyst glow */}
      <div className="hero-backdrop" aria-hidden="true">
        <div className="keyword-field">
          {KEYWORD_FIELD.map((word, i) => (
            <span
              key={word}
              className={`keyword ${i % 7 === 0 ? 'keyword--amber' : ''}`}
              style={{ animationDelay: `${(i % 9) * 0.4}s` }}
            >
              {word}
            </span>
          ))}
        </div>
        <div className="hero-glow hero-glow--amethyst" />
        <div className="hero-glow hero-glow--amber" />
      </div>

      <div className="hero-inner">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Brandalkemy&trade; &mdash; Healthcare &middot; Hospitality &middot; Employer Branding
        </p>

        <h1 className="hero-headline">
          We turn brands
          <br />
          into <span className="accent-amber">gold.</span>
        </h1>

        <p className="hero-sub">
          Brandalkemy is the branding, digital and performance lab built for
          sectors where trust has to be earned before attention is &mdash;
          this is <em>the art of brand transformation.</em>
        </p>

        <div className="hero-cta">
          <button type="button" className="btn btn-primary">
            Book a Consultation <ArrowIcon />
          </button>
          <button type="button" className="btn btn-ghost">
            See Our Work <ArrowIcon />
          </button>
        </div>

        {/* Signature element: the alchemical reaction — base brand to brand gold */}
        <div className="reaction-bar">
          <div className="element-tile element-tile--lead">
            <span className="element-no">82</span>
            <span className="element-symbol">Pb</span>
            <span className="element-label">Base Brand</span>
          </div>

          <div className="reaction-arrow">
            <span className="reaction-line" />
            <span className="reaction-label">the brandalkemy process</span>
            <svg className="reaction-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="element-tile element-tile--gold">
            <span className="element-no">79</span>
            <span className="element-symbol">Au</span>
            <span className="element-label">Brand Gold</span>
          </div>
        </div>

        {/* Sector tiles — the three pillars, styled as periodic elements */}
        <div className="sector-row">
          {SECTORS.map((s) => (
            <div className="sector-tile" key={s.symbol}>
              <span className="sector-no">{s.no}</span>
              <span className="sector-symbol">{s.symbol}</span>
              <span className="sector-name">{s.name}</span>
              <span className="sector-note">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
