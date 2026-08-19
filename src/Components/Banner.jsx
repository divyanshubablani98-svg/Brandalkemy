import { Link } from 'react-router-dom'

function Banner({ text, ctaText, ctaLink }) {
  return (
    <div className="banner">
      <p>{text}</p>
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="banner-link">
          {ctaText} →
        </Link>
      )}
    </div>
  )
}

export default Banner