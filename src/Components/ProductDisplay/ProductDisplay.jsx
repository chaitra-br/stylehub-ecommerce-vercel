import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const isMobile = window.innerWidth <= 900;
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(false);
  const [mainImage, setMainImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }

    const scrollPos = window.scrollY;

    addToCart(product.id, selectedSize);
    setAdded(true);
    setError(false);

    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPos);
    });

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

        <div
          className="productdisplay-img"
          onScroll={(e) => {
            if (!isMobile) return;

            const scrollLeft = e.target.scrollLeft;
            const width = e.target.clientWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
          }}
        >
          {isMobile
            ? [1, 2, 3, 4].map((_, i) => (
                <img
                  key={i}
                  src={product.image}
                  alt=""
                  className="productdisplay-main-img"
                />
              ))
            : (
                <img
                  src={mainImage}
                  alt=""
                  className="productdisplay-main-img"
                />
              )
          }
        </div>

        <div className="swipe-dots">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className={`dot ${activeIndex === i ? "active" : ""}`}></span>
          ))}
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
          type="button"
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
