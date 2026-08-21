import logo from '../assets/logo.png'

function About() {
  return (
    <section id="about-hero">
      <div className="about-grid">
        <div className="about-visual">
          <img src={logo} alt="Brandalkemy" className="about-logo" />
          <span className="about-visual-label">Brandalkemy</span>
        </div>

        <div className="about-copy">
          <p className="eyebrow">— About the Studio</p>
          <h1>Built for sectors that run on trust, not just impressions.</h1>
          <p>
            Brandalkemy is a sector-specialist studio focused on healthcare,
            hospitality, and employer branding — industries where a first
            impression decides whether someone trusts you at all.
          </p>
          <p>
            We treat every brand like a formula: the right combination of
            strategy, design, and content, applied differently depending on
            what the sector actually demands — not a one-size-fits-all
            template stretched across every client.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-value">3</span>
              <span className="stat-label">Sectors mastered</span>
            </div>
            <div className="about-stat">
              <span className="stat-value">8</span>
              <span className="stat-label">Core services</span>
            </div>
            <div className="about-stat">
              <span className="stat-value">1</span>
              <span className="stat-label">Dedicated studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About