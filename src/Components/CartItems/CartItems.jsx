import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    cartItems,
    all_product,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>Your Cart</h2>

        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Qty</span>
          <span>Total</span>
          <span></span>
        </div>

        {Object.entries(cartItems).map(([key, item]) => {
          const product = all_product.find(p => p.id === item.id);

          return (
            <div className="cart-row" key={key}>
              <div className="cart-product">
                <img src={product.image} alt="" />
                <div>
                  <p>{product.name}</p>
                  <span className="size">Size: {item.size}</span>
                </div>
              </div>

              <p>${product.new_price}</p>
              <p>{item.qty}</p>
              <p>${product.new_price * item.qty}</p>

              <img
                src={remove_icon}
                className="remove-icon"
                onClick={() => removeFromCart(key)}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="cart-right">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${getTotalCartAmount()}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>${getTotalCartAmount()}</span>
        </div>

        <button className="checkout-btn">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartItems;
