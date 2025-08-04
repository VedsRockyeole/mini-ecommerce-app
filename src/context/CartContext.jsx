import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find((item) => item.id === action.product.id);
      if (exists) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.product, qty: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE_QTY":
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: action.qty } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);