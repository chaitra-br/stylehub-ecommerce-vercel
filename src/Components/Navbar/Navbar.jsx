import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import search_icon from '../Assets/search.png'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import all_products from '../Assets/all_product'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false);

  const getActiveMenu = () => {
    if (location.pathname === "/mens") return "mens"
    if (location.pathname === "/womens") return "womens"
    if (location.pathname === "/kids") return "kids"
    return "shop"
  }

  const activeMenu = getActiveMenu()

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    if (!value.trim()) {
      setFilteredProducts([])
      return
    }

    const results = all_products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredProducts(results.slice(0, 6))
  }

  return (
    <div className='navbar'>
      <Link to='/' className="nav-logo">
        <img src={logo} alt="logo" />
        <p>STYLE HUB</p>
      </Link>

      <div className="nav-search-wrapper">
        <div className="nav-search">
          <img src={search_icon} alt="search" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {filteredProducts.length > 0 && (
          <div className="search-dropdown">
            {filteredProducts.map(product => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="search-item"
              >
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <span>₹{product.new_price}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <ul ref={menuRef} className="nav-menu">
        <li><Link to='/'>Shop</Link>{activeMenu === "shop" && <hr />}</li>
        <li><Link to='/mens'>Men</Link>{activeMenu === "mens" && <hr />}</li>
        <li><Link to='/womens'>Women</Link>{activeMenu === "womens" && <hr />}</li>
        <li><Link to='/kids'>Kids</Link>{activeMenu === "kids" && <hr />}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

        <img
          src={nav_dropdown}
          alt="menu"
          className="mobile-hamburger"
          onClick={() => setMobileOpen(true)}
        />
      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={() => setMobileOpen(false)}>×</button>

        <Link to="/" onClick={() => setMobileOpen(false)}>Shop</Link>
        <Link to="/mens" onClick={() => setMobileOpen(false)}>Men</Link>
        <Link to="/womens" onClick={() => setMobileOpen(false)}>Women</Link>
        <Link to="/kids" onClick={() => setMobileOpen(false)}>Kids</Link>

        <Link to="/login" className="drawer-login" onClick={() => setMobileOpen(false)}>
          Login
        </Link>
      </div>

      {mobileOpen && (
        <div className="drawer-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </div>
  )
}

export default Navbar
