import React from 'react'
import "../css/Card.css";

const Card = ({title, description, color}) => {
  return (
  <>    
    <div className="card" style={{ backgroundColor: color }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
    </div>
    </>
  )
}

export default Card
