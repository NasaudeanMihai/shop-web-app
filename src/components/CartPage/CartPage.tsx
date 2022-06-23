import { FC, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

import './CartPage.css';

const ItemPage: FC = (): ReactElement => {
  let navigate = useNavigate();
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(AuthContext);

  return (
    <div className="container-lg wrapper-container">
      <div className="row align-items-start wrapper-h1-title">
        <div className="col align-items-start">
          <h1>Items Added {itemsAddedToCart.length}</h1>
        </div>
      </div>
      <div className="col align-items-start wrapper-images">
        {itemsAddedToCart.map(item => (
          <div className="row wrapper-img-details">
            <div className="col">
              <img className="img rounded mx-auto d-block" src={item.image} alt={'woods'} />
            </div>
            <div className="col justify-content-center">
              <h3>{item.brand}</h3>
              <h5>Price: {item.price}$</h5>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setItemsAddedToCart([]);
            navigate('/');
          }}
          className="btn btn-primary">
          <h1>Continue</h1>
        </button>
      </div>
    </div>
  );
};

export default ItemPage;
