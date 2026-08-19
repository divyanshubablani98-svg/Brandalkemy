import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const projects = [
  { name: 'Project One', category: 'Brand Identity' },
  { name: 'Project Two', category: 'Social Media' },
  { name: 'Project Three', category: 'Web Design' },
  { name: 'Project Four', category: 'Performance Marketing' },
  { name: 'Project Five', category: 'SEO' },
  { name: 'Project Six', category: 'Content Marketing' },
]

function Work() {
  return (
    <>
      <Header
        eyebrow="Work"
        title="Reactions we've run"
        subtitle="A selection of campaigns and identities across healthcare, hospitality, and employer branding."
      />
      <section id="work-grid">
        <div className="work-cards">
          {projects.map((p) => (
            <div className="work-card" key={p.name}>
              <div className="work-thumb" />
              <span className="work-category">{p.category}</span>
              <h3>{p.name}</h3>
            </div>
          ))}
        </div>
        <div className="work-cta">
          <Link to="/contact" className="btn-primary">Start your project</Link>
        </div>
      </section>
    </>
  )
}

export default Work
