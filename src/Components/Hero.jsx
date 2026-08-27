import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTilt } from '../hooks/useTilt'
import ElementCard from './ElementCard'

const HERO_ELEMENTS = [
  {
    number: '01',
    symbol: 'Hc',
    name: 'Healthcare',
    accent: 'amber',
    sparkColor: '#FCCE07',
    layer: 'front',
    depth: 1.0,
    translateZ: 28,
    pos: { top: '2%', left: '14%' },
    floatDelay: '0s',
    floatDuration: '5.2s',
  },
  {
    number: '02',
    symbol: 'Ht',
    name: 'Hospitality',
    accent: 'neutral-amethyst',
    sparkColor: '#d18ce5',
    layer: 'back',
    depth: 0.45,
    translateZ: -8,
    pos: { top: '13%', left: '62%' },
    floatDelay: '-1.4s',
    floatDuration: '5.8s',
  },
  {
    number: '03',
    symbol: 'Eb',
    name: 'Employer Branding',
    accent: 'amethyst',
    sparkColor: '#d18ce5',
    layer: 'front',
    depth: 0.9,
    translateZ: 22,
    pos: { top: '43%', left: '5%' },
    floatDelay: '-2.7s',
    floatDuration: '4.9s',
  },
  {
    number: '04',
    symbol: 'St',
    name: 'Strategy',
    accent: 'neutral-amber',
    sparkColor: '#FCCE07',
    layer: 'back',
    depth: 0.4,
    translateZ: -14,
    pos: { top: '56%', left: '58%' },
    floatDelay: '-3.8s',
    floatDuration: '6.1s',
  },
  {
    number: '05',
    symbol: 'Ct',
    name: 'Content',
    accent: 'neutral-amethyst',
    sparkColor: '#d18ce5',
    layer: 'back',
    depth: 0.5,
    translateZ: -4,
    pos: { top: '80%', left: '33%' },
    floatDelay: '-1.9s',
    floatDuration: '5.4s',
  },
]

function Hero() {
  const heroRef = useRef(null)

  // Initialize smooth 3D tilt & parallax tracking
  useTilt(heroRef, { maxTilt: 12, lerpFactor: 0.08 })

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">— Brand · Alchemy · Growth</p>
          <h1>
            We turn small businesses into
            <br />
            brands people <span className="highlight glowing-text">trust on sight.</span>
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

        <div className="hero-diagram" aria-label="Brandalkemy 3D periodic elements cluster">
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-3d-stage">
            {/* 3D Dotted Connector Lines */}
            <svg
              className="connector-lines-3d"
              viewBox="0 0 420 440"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g className="connector-lines-group">
                {/* 01 Hc to 02 Ht */}
                <line x1="125" y1="58" x2="310" y2="105" className="conn-line conn-amber" strokeDasharray="4 6" />
                {/* 01 Hc to 03 Eb */}
                <line x1="125" y1="78" x2="90" y2="235" className="conn-line conn-amber" strokeDasharray="4 6" />
                {/* 02 Ht to 04 St */}
                <line x1="310" y1="125" x2="300" y2="290" className="conn-line conn-white" strokeDasharray="4 6" />
                {/* 03 Eb to 04 St */}
                <line x1="115" y1="250" x2="280" y2="295" className="conn-line conn-amethyst" strokeDasharray="4 6" />
                {/* 04 St to 05 Ct */}
                <line x1="290" y1="315" x2="195" y2="395" className="conn-line conn-white" strokeDasharray="4 6" />

                {/* Dotted Node Junctions */}
                <circle cx="125" cy="58" r="3" className="conn-dot dot-amber" />
                <circle cx="310" cy="105" r="2.5" className="conn-dot dot-white" />
                <circle cx="90" cy="235" r="3" className="conn-dot dot-amethyst" />
                <circle cx="300" cy="290" r="2.5" className="conn-dot dot-white" />
                <circle cx="195" cy="395" r="2.5" className="conn-dot dot-white" />
              </g>
            </svg>

            {/* 5 Layered 3D Element Cards */}
            {HERO_ELEMENTS.map((el, i) => (
              <div
                key={el.symbol}
                className={`element-parallax-layer layer-${el.layer} node-${i + 1}`}
                style={{
                  top: el.pos.top,
                  left: el.pos.left,
                  '--depth': el.depth,
                  '--tz': `${el.translateZ}px`,
                }}
              >
                <div
                  className="element-float-wrapper"
                  style={{
                    animationDuration: el.floatDuration,
                    animationDelay: el.floatDelay,
                  }}
                >
                  <ElementCard el={el} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
