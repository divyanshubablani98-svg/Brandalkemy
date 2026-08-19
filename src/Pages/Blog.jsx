import Header from '../Components/Header'

const posts = [
  { title: 'Why healthcare brands need a different playbook', date: 'Coming soon', tag: 'Healthcare' },
  { title: 'The hospitality brand story that actually sells rooms', date: 'Coming soon', tag: 'Hospitality' },
  { title: 'Employer branding is marketing — treat it that way', date: 'Coming soon', tag: 'Employer Branding' },
]

function Blog() {
  return (
    <>
      <Header
        eyebrow="Blog"
        title="Notes from the lab"
        subtitle="Thinking on brand, marketing, and the sectors we specialize in."
      />
      <section id="blog-list">
        {posts.map((post) => (
          <article className="blog-post" key={post.title}>
            <span className="blog-tag">{post.tag}</span>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Blog