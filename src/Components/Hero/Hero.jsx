import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import all_products from '../Assets/all_product'

const Hero = () => {
  const menImage = all_products.find(p => p.category === "men")?.image
  const womenImage = all_products.find(p => p.category === "women")?.image
  const kidsImage = all_products.find(p => p.category === "kid")?.image

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>Shop the latest trends for everyone</p>

        <div className="hero-categories">
          <Link to="/mens" className="category-card">
            <img src={menImage} alt="Men" />
            <span>Men</span>
          </Link>

          <Link to="/womens" className="category-card">
            <img src={womenImage} alt="Women" />
            <span>Women</span>
          </Link>

          <Link to="/kids" className="category-card">
            <img src={kidsImage} alt="Kids" />
            <span>Kids</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
