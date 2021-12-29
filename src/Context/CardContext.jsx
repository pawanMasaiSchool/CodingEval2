import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartContextProvider({ children }) {
  const [total, setTotal] = useState(0);

  const [totalprice, setPrice] = useState(0);

  const handleChangeOfCount = (val) => {
    setTotal(val + total);
  };

  const handleTotalPrice = (pri) => {
    setPrice(totalprice + pri);
  };

  return (
    <CartContext.Provider
      value={[total, handleChangeOfCount, totalprice, handleTotalPrice]}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
