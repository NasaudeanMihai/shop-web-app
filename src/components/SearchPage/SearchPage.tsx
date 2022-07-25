import { ReactElement, FC, useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';
import { CategoryProps, FilterItemBoxProps } from '../Filter/FilterProps';
import { getFilterBrandData } from '../../utils/getFilterData';
import { DataProps } from '../../interface/dataItemProps';
import ItemButton from '../Buttons/ItemButton/ItemButton';
import Loading from '../Loader/Loading';
import Filter from '../Filter/Filter';

const SearchPage: FC = (): ReactElement => {
  const { brand, category: categoryParams, price } = useParams();
  const navigate = useNavigate();

  const [dataList, setDataList] = useState<DataProps[]>([]);
  const [dataListFiltered, setDataListFiltered] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryProps>({
    name: categoryParams ? categoryParams : '',
    selected: categoryParams ? true : false,
  });
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string[]>(brand ? [brand] : []);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<Array<FilterItemBoxProps>>(
    price ? [{ name: price, value: parseInt(price) }] : [],
  );

  const checkIsLoading = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="row align-items-start">
          {dataListFiltered.map(({ data }: DataProps, id: number) => {
            if (data) {
              return (
                <ItemButton
                  key={`item-button-${data.brand}-${id}`}
                  handleItemButton={() =>
                    navigate(
                      {
                        pathname: '/item',
                      },
                      {
                        state: { data },
                      },
                    )
                  }
                  item={data}
                  altImage={data.brand}
                />
              );
            }
            return null;
          })}
        </div>
      );
    }
  };

  const getFilteredData = useCallback(() => {
    if (selectedBrandFilter.length !== 0 || selectedPriceFilter.length !== 0) {
      getFilterBrandData(
        dataList,
        setDataListFiltered,
        setIsLoading,
        category,
        selectedBrandFilter,
        selectedPriceFilter,
      );
    } else {
      setDataListFiltered(dataList);
    }
  }, [category, dataList, selectedBrandFilter, selectedPriceFilter]);

  useEffect(() => {
    getFilteredData();
  }, [getFilteredData]);

  useEffect(() => {
    const getDataFromFirestore = async () => {
      if (category.selected) {
        setDataList(await getCategoryClothesFromFirestore(category.name));
        setIsLoading(false);
        setCategory({ ...category, ...{ selected: false } });
      }
    };

    getDataFromFirestore();
  }, [category]);

  return (
    <div className="wrapper-home-page container">
      <div className="row" style={{ backgroundColor: 'transparent' }}>
        <Filter
          setCategory={setCategory}
          category={category}
          selectedBrandFilter={selectedBrandFilter}
          setSelectedBrandFilter={setSelectedBrandFilter}
          selectedPriceFilter={selectedPriceFilter}
          setSelectedPriceFilter={setSelectedPriceFilter}
        />
        <div className="wrapper-home-category col align-items-center">{checkIsLoading()}</div>
      </div>
    </div>
  );
};

export default SearchPage;
