import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';

import TopProductsItem from './TopProductsItem';
import './topProducts.css';
import { DataProps } from '../../interface/dataItemProps';
import { CartContext } from '../../context/cartContext';

const TopProducts: FC = (): ReactElement => {
  const [itemsList, setItemsList] = useState<DataProps[]>();
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(CartContext);

  useEffect(() => {
    const getItemList = async () => {
      setItemsList(await getCategoryClothesFromFirestore('jeans'));
    };
    getItemList();
  }, []);

  return (
    <div className="row">
      <div className="col wrapper-container">
        <p className="fs-4 fw-bold">BEST SELLER</p>
        <p className="fs-9">TOP PRODUCTS OF THE WEEK</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offer-one">
              <div className="row">
                <p>Free shipping</p>
                <p>only from $ 14.000</p>
              </div>
            </div>
            <div className="col-md-8 offer-two">
              <div className="row">
                <p>SHOP WITH CONFIDENCE</p>
                <p>only from $ 14.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container wrapper-top-seller">
          {itemsList && (
            <div className="row">
              <TopProductsItem
                aditionalClass="wrapper-top-product-left"
                image={itemsList[0].data.image}
                handleAddToCartItem={() => setItemsAddedToCart([...itemsAddedToCart, itemsList[0].data])}
              />
              <TopProductsItem
                aditionalClass="wrapper-top-product-middle"
                image={itemsList[25].data.image}
                handleAddToCartItem={() => setItemsAddedToCart([...itemsAddedToCart, itemsList[25].data])}
              />
              <TopProductsItem
                aditionalClass="wrapper-top-product-right"
                image={itemsList[17].data.image}
                handleAddToCartItem={() => setItemsAddedToCart([...itemsAddedToCart, itemsList[17].data])}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
