import Header from '../Components/Header'
import ServiceCard from '../Components/ServiceCard'

const services = [
  { number: '01', symbol: 'Bi', name: 'Brand Identity', description: 'Logos, visual systems, and brand guidelines built to hold up across every touchpoint.' },
  { number: '02', symbol: 'Sm', name: 'Social Media', description: 'Content and management that builds a following that actually engages.' },
  { number: '03', symbol: 'Wd', name: 'Web Design', description: 'Fast, on-brand websites that convert visitors into leads.' },
  { number: '04', symbol: 'Pm', name: 'Performance Marketing', description: 'Paid campaigns tracked to ROI, not just impressions.' },
  { number: '05', symbol: 'Se', name: 'SEO', description: 'Rankings that compound — built on real search intent, not shortcuts.' },
  { number: '06', symbol: 'Cm', name: 'Content Marketing', description: 'Editorial and storytelling that earns trust before the pitch.' },
]

function Services() {
  return (
    <>
      <Header
        eyebrow="Services"
        title="Every element we offer"
        subtitle="Pick one, or combine them — most brands need more than a single reaction to transform."
      />
      <section id="services-grid">
        <div className="element-grid">
          {services.map((s) => (
            <ServiceCard key={s.symbol} {...s} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
