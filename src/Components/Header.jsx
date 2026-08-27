function Header({ eyebrow, title, subtitle }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </header>
  )
}

export default Header