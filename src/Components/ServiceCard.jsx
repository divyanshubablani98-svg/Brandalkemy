function ServiceCard({ number, symbol, name, description }) {
  return (
    <div className="element-tile">
      <span className="element-number">{number}</span>
      <span className="element-symbol">{symbol}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard