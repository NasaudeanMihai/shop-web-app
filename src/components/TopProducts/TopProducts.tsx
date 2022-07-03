import { FC, ReactElement } from 'react';

import TopProductsItem from './TopProductsItem';
import { mockDataImage } from '../../mockData/image';
import './topProducts.css';

const TopProducts: FC = (): ReactElement => {
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
          <div className="row">
            <TopProductsItem image={mockDataImage[3].img} handleAddToCartItem={() => {}} />
            <TopProductsItem image={mockDataImage[2].img} handleAddToCartItem={() => {}} />
            <TopProductsItem image={mockDataImage[1].img} handleAddToCartItem={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
