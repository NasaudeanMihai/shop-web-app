import React, { useState } from 'react';

import { childrenProp, CartContextInterface } from '../interface/cartContext';
import { DataItemProps } from '../interface/dataItemProps';

const initialState: CartContextInterface = {
  itemsAddedToCart: [],
  setItemsAddedToCart: () => null,
};

const CartContext = React.createContext(initialState);

const CartProvider = ({ children }: childrenProp) => {
  const [itemsAddedToCart, setItemsAddedToCart] = useState<DataItemProps[]>([]);

  return (
    <CartContext.Provider
      value={{
        itemsAddedToCart,
        setItemsAddedToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
