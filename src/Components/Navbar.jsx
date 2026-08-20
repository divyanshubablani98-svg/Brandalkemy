import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Brandalkemy" className="logo-mark" />
        <span>Brandalkemy</span>
      </Link>

      <ul className="navbar-links">
        {['/', '/about', '/work', '/services', '/blog', '/contact'].map((path, i) => {
          const labels = ['Home', 'About', 'Work', 'Services', 'Blog', 'Contact']
          return (
            <li key={path}>
              <NavLink to={path} end={path === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {labels[i]}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <Link to="/contact" className="navbar-cta">Start a project</Link>
    </nav>
  )
}

export default Navbar