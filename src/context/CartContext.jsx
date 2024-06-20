import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeItem = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const value = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useFood = () => {
  const food = useContext(CartContext);
  return food;
};

export default CartProvider;
export { useFood };
