import React, { useState } from 'react';

import { childrenProp, AuthContextInterface } from '../interface/authContext/authContext';

const initialState: AuthContextInterface = {
  userData: false,
  setUserData: () => null,
};

const AuthContext = React.createContext(initialState);

const AuthProvider = ({ children }: childrenProp) => {
  const [userData, setUserData] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
