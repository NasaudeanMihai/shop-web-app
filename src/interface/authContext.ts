import React from 'react';

export interface childrenProp {
  children: React.ReactNode;
}

export interface AuthContextInterface {
  userData: boolean;
  setUserData: (userData: boolean) => void;
}
