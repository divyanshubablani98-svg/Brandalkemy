function ServiceCard({ number, symbol, name, category, description }) {
  return (
    <div className="element-tile">
      <div className="element-top-row">
        <span className="element-number">{number}</span>
        {category && <span className="element-category">{category}</span>}
      </div>
      <span className="element-symbol">{symbol}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard