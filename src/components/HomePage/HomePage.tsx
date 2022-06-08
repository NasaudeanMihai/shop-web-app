import { useEffect, useState, FC, ReactElement } from 'react';

import { DataProps } from '../../interface/dataItemProps';
import Filter from './Filter';
import CategoryButton from '../Buttons/CategoryButton/CategoryButton';
import ItemButton from '../Buttons/ItemButton/ItemButton';
import Loading from '../Loader/Loading';
import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';
import { image } from '../../assets/image/category';
import './homePage.css';
import { SelectedFilterProps } from '../../interface/getFilterData';
import { getFilterData } from '../../utils/getFilterData';

const HomePage: FC = (): ReactElement => {
  const [category, setCategory] = useState<string | null>(null);
  const [dataUser, setDataUser] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterProps>({
    nike: false,
    adidas: false,
    mustang: false,
    ['< 10$']: false,
    ['10$ - 100$']: false,
    ['> 100$']: false,
  });

  console.log('here', selectedFilter['< 10$']);
  const handlePantsButton = async () => {
    setIsLoading(true);
    setCategory('pants');
  };

  const handleShirtButton = async () => {
    setIsLoading(true);
    setCategory('shirt');
  };

  const categoryAndNrOfProducts = () => {
    if (dataUser) {
      return (
        <div className="row justify-content-md-center" style={{ marginLeft: '3rem' }}>
          <div className="col-auto">
            <p style={{ fontWeight: 'bold' }}>{category?.toUpperCase()}</p>
          </div>

          <div className="col-auto">
            <p> {dataUser.length} de produse</p>
          </div>
        </div>
      );
    }
  };

  const checkIsLoading = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="row align-items-start">
          {dataUser.map(({ data }: DataProps) => {
            if (data) {
              return <ItemButton handleItemButton={() => null} item={data} altImage={data.brand} />;
            }
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    getFilterData(dataUser, setDataUser, setIsLoading, category, selectedFilter);
  }, [getFilterData, dataUser, setDataUser, setIsLoading, category, selectedFilter]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      if (category) {
        setDataUser(await getCategoryClothesFromFirestore(category));
        setIsLoading(false);
      }
    };

    getDataFromFirestore();
  }, [category]);

  return (
    <div className="wrapper-home-page container" style={{ backgroundColor: '#f2f2f7' }}>
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <div className="col align-items-start" style={{ backgroundColor: 'transparent', paddingTop: 20 }}>
          <div className="row align-items-center">
            <h2>Select Category</h2>
            <CategoryButton handleCategoryButton={handlePantsButton} image={image.pants} altImage={'Pants'} />
            <CategoryButton handleCategoryButton={handleShirtButton} image={image.shirt} altImage={'Shirt'} />
          </div>
          {categoryAndNrOfProducts()}
          {checkIsLoading()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
