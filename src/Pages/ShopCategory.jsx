import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)

  // map route category → data category
  const categoryMap = {
    men: "men",
    mens: "men",
    women: "women",
    womens: "women",
    kid: "kid",
    kids: "kid",
  }

  const currentCategory = categoryMap[props.category]


  const filteredProducts = all_product.filter(
    (item) => item.category === currentCategory
  )

  return (
    <div className='shop-category'>
      <div className="shopcategory-header">
        <div className="shopcategory-header-content">
          <h1>{props.category.toUpperCase()} COLLECTION</h1>
          <p>Explore our latest {props.category} styles</p>
        </div>
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1–{filteredProducts.length}</span> of {filteredProducts.length} products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
