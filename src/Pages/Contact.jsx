import Header from '../Components/Header'
import Form from '../Components/Form'

function Contact() {
  return (
    <>
      <Header
        eyebrow="Contact"
        title="Let's run a reaction"
        subtitle="Tell us about your brand and what you're trying to solve — we'll take it from there."
      />
      <section id="contact-section">
        <Form />
      </section>
    </>
  )
}

export default Contact