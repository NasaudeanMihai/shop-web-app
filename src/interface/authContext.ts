import React from 'react';
import { DataItemProps } from './dataItemProps';

export interface childrenProp {
  children: React.ReactNode;
}

export interface AuthContextInterface {
  userData: boolean;
  setUserData: (userData: boolean) => void;
  itemsAddedToCart: DataItemProps[];
  setItemsAddedToCart: (itemsAddedToCart: DataItemProps[]) => void;
}
