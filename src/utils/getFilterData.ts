import { Console } from 'console';
import getCategoryClothesFromFirestore from '../client/getClothesFromFirestore';
import { DataProps } from '../interface/dataItemProps';
import { FetchedDataProps, FetchedDataItemProps } from '../interface/dataItemProps';

export const getFilterData = async (
  dataUser: FetchedDataProps[],
  setDataUserList: (getFilteredData: FetchedDataProps[]) => void,
  setIsLoading: (value: boolean) => void,
  category: string | null,
  selectedFilter: string[],
) => {
  if (selectedFilter.length !== 0) {
    let filteredItemList: Array<FetchedDataProps> = [];
    for (let i = 0; i < selectedFilter.length; i++) {
      const getFilteredData = dataUser.filter(
        ({ data }: DataProps) => data.brand.toLowerCase() === selectedFilter[i].toLowerCase(),
      );
      filteredItemList = [...filteredItemList, ...getFilteredData];
    }
    setDataUserList(filteredItemList);
  }

  if (category) {
    setDataUserList(dataUser);
    setIsLoading(false);
  }
};
