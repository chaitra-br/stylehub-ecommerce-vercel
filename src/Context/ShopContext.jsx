import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (productId, size) => {
    const key = `${productId}_${size}`;

    setCartItems((prev) => ({
      ...prev,
      [key]: prev[key]
        ? { ...prev[key], qty: prev[key].qty + 1 }
        : { id: productId, size, qty: 1 },
    }));
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    Object.values(cartItems).forEach((item) => {
      const product = all_product.find(p => p.id === item.id);
      total += product.new_price * item.qty;
    });
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    Object.values(cartItems).forEach(item => {
      total += item.qty;
    });
    return total;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
