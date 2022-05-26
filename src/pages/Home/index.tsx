import { useEffect, useState, FC, ReactElement } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import './style.css';

interface DataUserProps {
  brand: string;
  size: string[];
  clothes: string;
  image: string;
  price: string;
}

const HomePage: FC = (): ReactElement => {
  const [dataUser, setDataUser] = useState<DataUserProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const clothesCollection = collection(db, 'web-shop');
      const clothesSnapshot = await getDocs(clothesCollection);
      const clothesList = clothesSnapshot.docs.map(doc => doc.data());
      console.log(clothesList);

      setIsLoading(false);
      // setDataUser(clothesList);
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
        {dataUser.map(item => {
          console.log(item);
          if (item) {
            return (
              <div className="wrapper-card-img">
                {/* <Card.Img className="card-img" src={item.image} />
                <Card.Body>
                  <Card.Title>Example</Card.Title>
                </Card.Body> */}
              </div>
            );
          }
        })}
      </div>

      <h3>T-Shirts</h3>
      {/* <Row className="wrapper-row">
        {dataUser.tShirt.map(item => (
          <Card className="wrapper-card-img">
            <Card.Img className="card-img" src={item} />
            <Card.Body>
              <Card.Title>Example</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row> */}
    </div>
  );
};

export default HomePage;
