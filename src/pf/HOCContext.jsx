import React from 'react';
import { createContext, useState } from 'react';

export const myContext = createContext(null);

export default function HOCContext({ children }) {
  //const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function addItem(item, quantity) {
    // agregar cierta cantidad de un ítem al carrito
  }
  function removeItem(itemId) {
    // Remover un item del cart por usando su id
  }
  function clear() {
    //setCart([])
    // Remover todos los items
  }
  const isInCart = (id) => {
    //return i | -1;
  };

  return (
    <>
      <myContext.Provider value={{ darkMode, setDarkMode }}>{children}</myContext.Provider>
    </>
  );
}
