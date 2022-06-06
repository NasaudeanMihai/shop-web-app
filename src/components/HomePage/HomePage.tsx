import { useEffect, useState, FC, ReactElement } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { DataItemProps } from '../../interface/interface';
import Filter from './Filter';
import CategoryButton from '../Buttons/CategoryButton/CategoryButton';
import ItemButton from '../Buttons/ItemButton/ItemButton';
import Loading from '../Loader/Loading';

import './homePage.css';

const image = {
  pants:
    'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800',
  shirt:
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
};

const HomePage: FC = (): ReactElement => {
  const [category, setCategory] = useState<string | null>(null);
  const [dataUser, setDataUser] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePantsButton = async () => {
    setIsLoading(true);
    setCategory('pants');
  };

  const handleShirtButton = async () => {
    setIsLoading(true);
    setCategory('shirt');
  };

  const checkIsLoading = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="row align-items-start">
          {dataUser.map((item: DataItemProps) => {
            if (item) {
              return <ItemButton handleItemButton={() => null} item={item} altImage={item.brand} />;
            }
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    const getDataFromFirestore = async () => {
      if (category) {
        const clothesCollection = collection(db, 'web-shop', 'clothes', category);
        const clothesSnapshot = await getDocs(clothesCollection);
        const clothesList = clothesSnapshot.docs.map(doc => doc.data());

        setIsLoading(false);
        setDataUser(clothesList);
      }
    };

    getDataFromFirestore();
  }, [category]);

  return (
    <div className="wrapper-home-page container" style={{ backgroundColor: '#f2f2f7' }}>
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <Filter />
        <div className="col align-items-start" style={{ backgroundColor: 'transparent', paddingTop: 20 }}>
          <div className="row align-items-center">
            <h2>Select Category</h2>
            <CategoryButton handleCategoryButton={handlePantsButton} image={image.pants} altImage={'Pants'} />
            <CategoryButton handleCategoryButton={handleShirtButton} image={image.shirt} altImage={'Shirt'} />
          </div>
          <div className="row justify-content-md-center" style={{ marginLeft: '3rem' }}>
            <div className="col-auto">
              <p style={{ fontWeight: 'bold' }}>{category?.toUpperCase()}</p>
            </div>
            {dataUser && (
              <div className="col-auto">
                <p> {dataUser.length} de produse</p>
              </div>
            )}
          </div>
          {checkIsLoading()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
