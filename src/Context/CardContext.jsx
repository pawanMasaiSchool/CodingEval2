import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartContextProvider({ children }) {
  const [total, setTotal] = useState(0);

  const handleChangeOfCount = (c) => {
    setTotal();
  };

  return (
    <CartContext.Provider value={[total, handleChangeOfCount]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
