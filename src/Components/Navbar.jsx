import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Brandalkemy
      </Link>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar