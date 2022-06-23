import { FC, ReactElement, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { mockSize } from './mockSize';

import './itemPage.css';
import { AuthContext } from '../../context/authContext';

const ItemPage: FC = (): ReactElement => {
  const location = useLocation();
  const { data }: any = location.state;
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(AuthContext);

  return (
    <div className="container-lg wrapper-container">
      <div className="wrapper-h1-title row align-items-start ">
        <div className="col align-items-start">
          <h1>{data.brand}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5">
          <img className="img rounded mx-auto d-block" src={data.image} alt={data.brand} />
        </div>
        <div className="col">
          <div className="container wrapper-small-container">
            <div className="row">
              <div className="col-sm-3 justify-content-center align-items-center wrapper-size">
                <h6>Select Size:</h6>
                <div className="row">
                  {mockSize.map(item => (
                    <div className="col">
                      <div className="row justify-content-center align-items-center">
                        <button className="btn size-button" onClick={() => {}}>
                          <p add-cart-button-text>{item.name}</p>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-sm-8">
                <div className="col-10">
                  <h3>Price: {data.price}$</h3>
                </div>
                <div className="col-10 wrapper-add-button">
                  <button
                    onClick={() => setItemsAddedToCart([...itemsAddedToCart, data])}
                    className="btn btn-outline-primary">
                    <p className="add-cart-button-text fs-3">Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
