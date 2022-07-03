import { FC, ReactElement } from 'react';
import { TopProductsItemProps } from './topProductsProps';

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
            <p className="fw-bold add-cart-text">ADD TO CART</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProductsItem;
