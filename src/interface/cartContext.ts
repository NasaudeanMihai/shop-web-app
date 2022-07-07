import React from 'react';
import { DataItemProps } from './dataItemProps';

export interface childrenProp {
  children: React.ReactNode;
}

export interface CartContextInterface {
  itemsAddedToCart: DataItemProps[];
  setItemsAddedToCart: (itemsAddedToCart: DataItemProps[]) => void;
}
