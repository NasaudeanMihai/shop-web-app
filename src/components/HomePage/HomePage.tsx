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
    <div className="wrapper-home-page">
      <h1>Home</h1>

      <h3>Jeans</h3>
      <div className="row">
        {dataUser.map((item: DataItemProps) => {
          console.log(item);
          if (item) {
            return (
              <div className="col">
                <img className="img" src={item.image} />
                <p>{item.price}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HomePage;
