import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);
  const [mainImage, setMainImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    addToCart(product.id, selectedSize);
    setAdded(true);
    setError(false);

    setTimeout(() => {
      setAdded(false);  
    }, 1200);
  };

  return (
    <div className="productdisplay">
      {/* LEFT */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[1, 2, 3, 4].map((_, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>

        <div className="productdisplay-img">
          <img src={mainImage} alt="" className="productdisplay-main-img" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="productdisplay-right">
        <h1 className="product-title">{product.name}</h1>

        <div className="rating-row">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>(122)</span>
        </div>

        {/* SINGLE PRICE ONLY */}
        <div className="price">${product.new_price}</div>

        <p className="desc">
          Premium quality fabric with modern fit. Comfortable, durable and
          perfect for everyday wear.
        </p>

        {/* SIZE */}
        <div className="sizes">
          <p className="size-label">Select Size</p>
          <div className="size-options">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active" : ""}
                onClick={() => {
                  setSelectedSize(size);
                  setError(false);
                }}
              >
                {size}
              </button>
            ))}
          </div>
          {error && <p className="error-text">Please select a size</p>}
        </div>

        <button
          className={`add-btn ${added ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          {added ? "✓ Added" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
