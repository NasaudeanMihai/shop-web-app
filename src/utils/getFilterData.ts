import { CategoryProps, FilterItemBoxProps } from '../components/Filter/FilterProps';
import { DataProps } from '../interface/dataItemProps';
import { FetchedDataProps } from '../interface/dataItemProps';

export const getFilterBrandData = async (
  dataList: FetchedDataProps[],
  setDataListFiltered: (getFilteredData: FetchedDataProps[]) => void,
  setIsLoading: (value: boolean) => void,
  category: CategoryProps | null,
  selectedBrandFilter: string[],
  selectedPriceFilter: Array<FilterItemBoxProps>,
) => {
  if (selectedBrandFilter.length !== 0) {
    let filteredItemByBrandList: Array<FetchedDataProps> = [];
    for (let i = 0; i < selectedBrandFilter.length; i++) {
      const getBrandFilteredData = dataList.filter(
        ({ data }: DataProps) => data.brand.toLowerCase() === selectedBrandFilter[i].toLowerCase(),
      );
      filteredItemByBrandList = [...filteredItemByBrandList, ...getBrandFilteredData];
    }
    if (selectedPriceFilter.length !== 0) {
      let filteredPriceItemList: Array<FetchedDataProps> = [];
      for (let i = 0; i < selectedPriceFilter.length; i++) {
        if (selectedPriceFilter[i].value <= 10 && selectedPriceFilter[i].value !== 0) {
          const getPriceFilteredData = filteredItemByBrandList.filter(
            ({ data }: DataProps) => !(selectedPriceFilter[i].value < parseInt(data.price)),
          );
          filteredPriceItemList = [...filteredPriceItemList, ...getPriceFilteredData];
        } else if (selectedPriceFilter[i].value >= 100) {
          const getPriceFilteredData = filteredItemByBrandList.filter(
            ({ data }: DataProps) => selectedPriceFilter[i].value < parseInt(data.price),
          );
          filteredPriceItemList = [...filteredPriceItemList, ...getPriceFilteredData];
        } else {
          const getPriceFilteredData = filteredItemByBrandList.filter(
            ({ data }: DataProps) => parseInt(data.price) > 10 && parseInt(data.price) < 100,
          );
          filteredPriceItemList = [...filteredPriceItemList, ...getPriceFilteredData];
        }
      }
      setDataListFiltered(filteredPriceItemList);
    } else {
      setDataListFiltered(filteredItemByBrandList);
    }
  } else if (selectedPriceFilter.length !== 0) {
    let priceItemList: Array<FetchedDataProps> = [];
    for (let i = 0; i < selectedPriceFilter.length; i++) {
      if (selectedPriceFilter[i].value <= 10 && selectedPriceFilter[i].value !== 0) {
        const getPriceFilteredData = dataList.filter(
          ({ data }: DataProps) => !(selectedPriceFilter[i].value < parseInt(data.price)),
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      } else if (selectedPriceFilter[i].value >= 100) {
        const getPriceFilteredData = dataList.filter(
          ({ data }: DataProps) => selectedPriceFilter[i].value < parseInt(data.price),
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      } else {
        const getPriceFilteredData = dataList.filter(
          ({ data }: DataProps) => parseInt(data.price) > 10 && parseInt(data.price) < 100,
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      }
    }
    setDataListFiltered(priceItemList);
  }

  if (category?.selected) {
    setDataListFiltered(dataList);
    setIsLoading(false);
  }
};
