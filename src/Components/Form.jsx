import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Message received.</h3>
        <p>We'll get back to you within 1–2 business days.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-primary">Send message</button>
    </form>
  )
}

export default Form