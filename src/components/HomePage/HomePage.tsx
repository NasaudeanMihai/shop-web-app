import { useEffect, useState, FC, ReactElement, useCallback } from 'react';

import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';

import Filter from './Filter';
import CategoryButton from '../Buttons/CategoryButton/CategoryButton';
import ItemButton from '../Buttons/ItemButton/ItemButton';
import Loading from '../Loader/Loading';
import { getFilterData } from '../../utils/getFilterData';
import { DataProps, FetchedDataProps } from '../../interface/dataItemProps';

import { image } from '../../assets/image/category';
import './homePage.css';

const HomePage: FC = (): ReactElement => {
  const [category, setCategory] = useState<string | null>(null);
  const [dataUser, setDataUser] = useState<FetchedDataProps[]>([]);
  const [dataUserList, setDataUserList] = useState<FetchedDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

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
          {dataUserList.map(({ data }: DataProps) => {
            if (data) {
              return <ItemButton handleItemButton={() => null} item={data} altImage={data.brand} />;
            }
          })}
        </div>
      );
    }
  };

  const getFilteredData = useCallback(() => {
    if (selectedFilter.length !== 0) {
      getFilterData(dataUser, setDataUserList, setIsLoading, category, selectedFilter);
    } else {
      setDataUserList(dataUser);
    }
  }, [category, dataUser, selectedFilter]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      if (category) {
        setDataUser(await getCategoryClothesFromFirestore(category));
        setIsLoading(false);
        setCategory(null);
      }
    };

    getDataFromFirestore();
  }, [category]);

  useEffect(() => {
    setDataUserList(dataUser);
  }, [dataUser]);
  useEffect(() => {
    getFilteredData();
  }, [getFilteredData]);
  return (
    <div className="wrapper-home-page container">
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <div className="wrapper-home-category col align-items-start">
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
