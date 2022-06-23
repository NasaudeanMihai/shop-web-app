import { useEffect, useState, FC, ReactElement, useCallback } from 'react';
import { Link } from 'react-router-dom';

import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';

import Filter from './Filter';
import CategoryButton from '../Buttons/CategoryButton/CategoryButton';

import Loading from '../Loader/Loading';
import { getFilterBrandData } from '../../utils/getFilterData';
import { DataProps, FetchedDataProps } from '../../interface/dataItemProps';

import { image } from '../../assets/image/category';
import './homePage.css';
import { PriceFilterProps } from './FilterProps';

const HomePage: FC = (): ReactElement => {
  const [category, setCategory] = useState<string | null>(null);
  const [dataUser, setDataUser] = useState<FetchedDataProps[]>([]);
  const [dataUserList, setDataUserList] = useState<FetchedDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string[]>([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<Array<PriceFilterProps>>([]);
  const [selectedOption, setSelectedOption] = useState<string>('alphabetic');

  const handlePantsButton = () => {
    setIsLoading(true);
    setCategory('pants');
  };

  const handleShirtButton = () => {
    setIsLoading(true);
    setCategory('shirt');
  };

  const categoryAndNrOfProducts = () => {
    if (dataUser) {
      return (
        <div className="row justify-content-between align-items-center w-100">
          <div className="col-auto">
            <p> {dataUser.length} de produse</p>
          </div>

          <div className="col-auto mb-3">
            <select
              defaultValue={'alphabetic'}
              className="form-select "
              id="inputGroupSelect01"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(event.target.value)}>
              <option value="alphabetic">A - Z</option>
              <option value="price">Price</option>
            </select>
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
              return (
                <div className="col">
                  <Link className="btn" to="/item" state={{ data }}>
                    <img className="img" src={data.image} alt={data.brand} />
                    <p>Brand: {data.brand}</p>
                    <p>Price: {data.price}$</p>
                  </Link>
                </div>
              );
            }
            return <></>;
          })}
        </div>
      );
    }
  };

  const getFilteredData = useCallback(() => {
    if (selectedBrandFilter.length !== 0 || selectedPriceFilter.length !== 0) {
      getFilterBrandData(dataUser, setDataUserList, setIsLoading, category, selectedBrandFilter, selectedPriceFilter);
    } else {
      setDataUserList(dataUser);
    }
  }, [category, dataUser, selectedBrandFilter, selectedPriceFilter]);

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
    if (selectedOption !== 'price') {
      const cloneDataUserList = dataUserList.sort(
        (item1, item2) => parseInt(item1.data.price) - parseInt(item2.data.price),
      );
      setDataUserList(cloneDataUserList);
    }
    if (selectedOption !== 'alphabetic') {
      const cloneDataUserList = dataUserList.sort((item1, item2) => item1.data.brand.localeCompare(item2.data.brand));
      setDataUserList(cloneDataUserList);
    }
  }, [dataUserList, selectedOption]);

  useEffect(() => {
    getFilteredData();
  }, [getFilteredData]);

  return (
    <div className="wrapper-home-page container">
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <Filter
          selectedBrandFilter={selectedBrandFilter}
          setSelectedBrandFilter={setSelectedBrandFilter}
          selectedPriceFilter={selectedPriceFilter}
          setSelectedPriceFilter={setSelectedPriceFilter}
        />
        <div className="wrapper-home-category col align-items-center">
          <div className="row align-items-center">
            <h2>Select Category</h2>
            <CategoryButton handleCategoryButton={handleShirtButton} image={image.shirt} altImage={'Shirt'} />
            <CategoryButton handleCategoryButton={handlePantsButton} image={image.pants} altImage={'Pants'} />
          </div>
          {categoryAndNrOfProducts()}
          {checkIsLoading()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
