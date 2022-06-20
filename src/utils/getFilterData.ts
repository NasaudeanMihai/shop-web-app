import { PriceFilterProps } from '../components/HomePage/FilterProps';
import { DataProps } from '../interface/dataItemProps';
import { FetchedDataProps } from '../interface/dataItemProps';

export const getFilterBrandData = async (
  dataUser: FetchedDataProps[],
  setDataUserList: (getFilteredData: FetchedDataProps[]) => void,
  setIsLoading: (value: boolean) => void,
  category: string | null,
  selectedBrandFilter: string[],
  selectedPriceFilter: Array<PriceFilterProps>,
) => {
  if (selectedBrandFilter.length !== 0) {
    let filteredItemByBrandList: Array<FetchedDataProps> = [];
    for (let i = 0; i < selectedBrandFilter.length; i++) {
      const getBrandFilteredData = dataUser.filter(
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
      setDataUserList(filteredPriceItemList);
    } else {
      setDataUserList(filteredItemByBrandList);
    }
  } else if (selectedPriceFilter.length !== 0) {
    let priceItemList: Array<FetchedDataProps> = [];
    for (let i = 0; i < selectedPriceFilter.length; i++) {
      if (selectedPriceFilter[i].value <= 10 && selectedPriceFilter[i].value !== 0) {
        const getPriceFilteredData = dataUser.filter(
          ({ data }: DataProps) => !(selectedPriceFilter[i].value < parseInt(data.price)),
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      } else if (selectedPriceFilter[i].value >= 100) {
        const getPriceFilteredData = dataUser.filter(
          ({ data }: DataProps) => selectedPriceFilter[i].value < parseInt(data.price),
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      } else {
        const getPriceFilteredData = dataUser.filter(
          ({ data }: DataProps) => parseInt(data.price) > 10 && parseInt(data.price) < 100,
        );
        priceItemList = [...priceItemList, ...getPriceFilteredData];
      }
    }
    setDataUserList(priceItemList);
  }

  if (category) {
    setDataUserList(dataUser);
    setIsLoading(false);
  }
};
