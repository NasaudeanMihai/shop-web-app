import { FC, ReactElement } from 'react';
import { TopProductsItemProps } from './topProductsProps';
import { IoCartOutline } from 'react-icons/io5';

const TopProductsItem: FC<TopProductsItemProps> = ({
  image,
  handleAddToCartItem,
}: TopProductsItemProps): ReactElement => {
  return (
    <div className="col">
      <div>
        <img src={image} className={`img-background `} alt="..." />
        <div className="wrapper-button-cart">
          <button onClick={handleAddToCartItem} className="btn add-btn">
            <div className="row">
              <div className="col-9 justify-content-center align-items-center">
                <p className="fw-bold add-cart-text">ADD TO CART</p>
              </div>
              <div className="col-1">
                <IoCartOutline />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProductsItem;
