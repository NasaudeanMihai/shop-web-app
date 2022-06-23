import React, { useState } from 'react';

import { childrenProp, AuthContextInterface } from '../interface/authContext';
import { DataItemProps } from '../interface/dataItemProps';

const initialState: AuthContextInterface = {
  userData: false,
  setUserData: () => null,
  itemsAddedToCart: [],
  setItemsAddedToCart: () => null,
};

const AuthContext = React.createContext(initialState);

const AuthProvider = ({ children }: childrenProp) => {
  const [userData, setUserData] = useState<boolean>(false);
  const [itemsAddedToCart, setItemsAddedToCart] = useState<DataItemProps[]>([]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        itemsAddedToCart,
        setItemsAddedToCart,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
