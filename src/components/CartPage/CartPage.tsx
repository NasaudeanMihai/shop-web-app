import { FC, ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

import './CartPage.css';

const ItemPage: FC = (): ReactElement => {
  let navigate = useNavigate();
  const { itemsAddedToCart, setItemsAddedToCart } = useContext(CartContext);

  const handleDeleteItemButton = (index: number) => {
    let cloneAddedItems = itemsAddedToCart;
    cloneAddedItems.splice(index, 1);
    setItemsAddedToCart([...cloneAddedItems]);
  };

  return (
    <div className="container-lg wrapper-container">
      <div className="row align-items-start wrapper-h1-title">
        <div className="col align-items-start">
          <h1>Items Added {itemsAddedToCart.length}</h1>
        </div>
      </div>
      <div className=" wrapper-images">
        {itemsAddedToCart?.map((item, index) => (
          <div className="row wrapper-img-details">
            <div className="col-2">
              <img className="img rounded mx-auto d-block" src={item.image} alt={'woods'} />
            </div>
            <div className="col-2 justify-content-center">
              <h3>{item.brand}</h3>
              <h5>Price: {item.price}$</h5>
            </div>
            <div className="col-8 align-self-center">
              <button onClick={() => handleDeleteItemButton(index)} className="btn btn-danger">
                delete
              </button>
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
