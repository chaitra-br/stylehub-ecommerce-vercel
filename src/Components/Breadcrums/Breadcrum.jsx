import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = ({ product }) => {
  if (!product) return null

  // map data category → route + label
  const categoryMap = {
    men: { label: "Men", path: "/mens" },
    wome: { label: "Women", path: "/womens" },
    kid: { label: "Kids", path: "/kids" },
  }

  const category = categoryMap[product.category]

  return (
    <div className="breadcrum">
      <Link to="/" className="breadcrum-link">Home</Link>
      <img src={arrow_icon} alt=">" />

      {category && (
        <>
          <Link to={category.path} className="breadcrum-link">
            {category.label}
          </Link>
          <img src={arrow_icon} alt=">" />
        </>
      )}

      <span className="breadcrum-current">{product.name}</span>
    </div>
  )
}

export default Breadcrum
