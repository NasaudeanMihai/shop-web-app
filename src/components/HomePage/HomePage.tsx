import { useEffect, useState, FC, ReactElement } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { DataItemProps } from '../../interface/interface';

import './style.css';

const HomePage: FC = (): ReactElement => {
  const [dataUser, setDataUser] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const clothesCollection = collection(db, 'web-shop', 'clothes', 'jeans');
      const clothesSnapshot = await getDocs(clothesCollection);
      const clothesList = clothesSnapshot.docs.map(doc => doc.data());
      console.log(clothesList);

      setIsLoading(false);
      setDataUser(clothesList);
    };

    getDataFromFirestore();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="wrapper-home-page container" style={{ backgroundColor: '#f2f2f7' }}>
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <div className="col-3" style={{ backgroundColor: 'transparent' }}>
          <div
            className="row"
            style={{
              marginTop: 20,
              paddingBottom: 20,
              border: '2px solid #eee',
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Category:</p>
            <div className="col">
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>Jeans</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>Pants</p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: 20,
              paddingBottom: 20,
              border: '2px solid #eee',
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Brand:</p>
            <div className="col">
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>Nike</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>Adidas</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>Mustang</p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: 20,
              paddingBottom: 20,
              border: '2px solid #eee',
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Size:</p>
            <div className="col">
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>S</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>M</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>L</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>XL</p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: 20,
              paddingBottom: 20,
              border: '2px solid #eee',
              justifyContent: 'flex-start',
              backgroundColor: 'white',
              borderRadius: 10,
            }}>
            <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Price:</p>
            <div className="col">
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}> {'<'} 10$</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>10$ - 100$</p>
              </div>
              <div className="input-group">
                <input className="form-check-input" type="checkbox" />
                <p style={{ textAlign: 'center', marginLeft: 10 }}>{'>'} 100$</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col align-items-start" style={{ backgroundColor: 'transparent', paddingTop: 20 }}>
          <div className="row justify-content-md-center">
            <div className="col" style={{ marginRight: 10 }}>
              <h3>Jeans</h3>
            </div>
            <div className="col-md-auto">
              <p> 1234 de produse</p>
            </div>
          </div>
          <div className="row align-items-start">
            {dataUser.map((item: DataItemProps) => {
              if (item) {
                return (
                  <div className="col">
                    <button className="btn" style={{ marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem' }}>
                      <img className="img" src={item.image} alt={'Clothes'} />
                      <p>{item.price}</p>
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
