import { useState } from 'react'

const industries = ['Healthcare', 'Hospitality', 'Employer Branding', 'Other']

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', industry: industries[0], brief: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <section id="contact-hero">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="eyebrow">— Start a Project</p>
          <h1>Tell us where your brand needs to react.</h1>
          <p className="contact-lead">
            Whether it's a full rebrand or a single campaign, send us the
            brief and we'll reply with next steps within two business days.
          </p>

          <div className="contact-detail">
            <span className="detail-label">Email</span>
            <span className="detail-value">hello@brandalkemy.com</span>
          </div>
          <div className="contact-detail">
            <span className="detail-label">Phone</span>
            <span className="detail-value">+91 00000 00000</span>
          </div>
          <div className="contact-detail">
            <span className="detail-label">Studio</span>
            <span className="detail-value">Kota, Rajasthan, India</span>
          </div>
        </div>

        <form className="brief-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success">
              <h3>Brief received.</h3>
              <p>We'll get back to you within two business days.</p>
            </div>
          ) : (
            <>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />

              <label htmlFor="industry">Industry</label>
              <select id="industry" name="industry" value={formData.industry} onChange={handleChange}>
                {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>

              <label htmlFor="brief">Project brief</label>
              <textarea id="brief" name="brief" rows="4" placeholder="What are you looking to build?" value={formData.brief} onChange={handleChange} required />

              <button type="submit" className="btn-primary">Send brief →</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact