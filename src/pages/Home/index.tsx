import { useEffect, useState, FC, ReactElement } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

import { Card, Row } from 'react-bootstrap';

import './style.css';

interface DataUserProps {
  Jeans: [];
  tShirt: [];
}

const HomePage: FC = (): ReactElement => {
  const [dataUser, setDataUser] = useState<DataUserProps>({ tShirt: [], Jeans: [] });

  useEffect(() => {
    const getDataFromFirestore = async () => {
      const clothesCollection = collection(db, 'web-shop');
      const clothesSnapshot = await getDocs(clothesCollection);
      const clothesList = clothesSnapshot.docs.map(doc => doc.data());

      setDataUser({ ...dataUser, ...clothesList[0] });
    };

    getDataFromFirestore();
  }, [dataUser]);

  return (
    <div className="wrapper-home-page">
      <h1>Home</h1>

      <h3>Jeans</h3>
      <Row className="wrapper-row">
        {dataUser.Jeans.map(item => (
          <Card className="wrapper-card-img">
            <Card.Img className="card-img" src={item} />
            <Card.Body>
              <Card.Title>Example</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>

      <h3>T-Shirts</h3>
      <Row className="wrapper-row">
        {dataUser.tShirt.map(item => (
          <Card className="wrapper-card-img">
            <Card.Img className="card-img" src={item} />
            <Card.Body>
              <Card.Title>Example</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
