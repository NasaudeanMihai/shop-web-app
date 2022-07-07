import { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { mockSize } from './mockSize';

import './itemPage.css';

const ItemPage: FC = (): ReactElement => {
  const location = useLocation();
  const { data }: any = location.state;

  return (
    <div className="container-lg" style={{ height: '100%', marginTop: '100px' }}>
      <div className="row align-items-start" style={{ backgroundColor: 'transparent', marginBottom: '1rem' }}>
        <div className="col align-items-start" style={{ borderBottom: '2px solid rgb(212, 212, 212)' }}>
          <h1>{data.brand}</h1>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <div className="col-sm-5">
          <img
            className="img rounded mx-auto d-block"
            src={data.image}
            style={{ width: '380px', height: '380px' }}
            alt={'woods'}
          />
        </div>
        <div className="col">
          <div className="container" style={{ marginTop: '50px' }}>
            <div className="row">
              <div className="col-sm-3 justify-content-center align-items-center" style={{ marginRight: '40px' }}>
                <h6>Select Size:</h6>
                <div className="row">
                  {mockSize.map(item => (
                    <div className="col">
                      <div className="row justify-content-center align-items-center">
                        <button
                          className="btn"
                          onClick={() => {}}
                          style={{
                            width: '50px',
                            height: '50px',
                            justifyContent: 'center',
                            marginRight: '10px',
                            marginBottom: '10px',
                            border: '2px solid rgb(169,169,169)',
                            borderRadius: '5px',
                          }}>
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
                <div className="col-10" style={{ marginTop: '40px' }}>
                  <button className="btn btn-outline-primary">
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
