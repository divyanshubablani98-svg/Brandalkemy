import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <span className="footer-logo">Brandalkemy</span>
        <p>Digital marketing, formulated.</p>
      </div>

      <div className="footer-links">
        <div>
          <h4>Sectors</h4>
          <ul>
            <li>Healthcare</li>
            <li>Hospitality</li>
            <li>Employer Branding</li>
          </ul>
        </div>
        <div>
          <h4>Site</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brandalkemy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer