import getCategoryClothesFromFirestore from '../client/getClothesFromFirestore';
import { DataProps } from '../interface/dataItemProps';
import { SelectedFilterProps } from '../interface/getFilterData';

export const getFilterData = async (
  dataUser: any,
  setDataUser: (getFilteredData: any) => void,
  setIsLoading: (value: boolean) => void,
  category: string | null,
  selectedFilter: SelectedFilterProps,
) => {
  switch (true) {
    case selectedFilter.nike: {
      const getFilteredData = dataUser.filter(({ data }: DataProps) => data.brand.toLowerCase() === 'nike');
      setDataUser(getFilteredData);
      break;
    }
    case selectedFilter.adidas: {
      const getFilteredData = dataUser.filter(({ data }: DataProps) => data.brand.toLowerCase() === 'adidas');
      setDataUser(getFilteredData);
      break;
    }
    case selectedFilter.mustang: {
      const getFilteredData = dataUser.filter(({ data }: DataProps) => data.brand.toLowerCase() === 'mustang');
      setDataUser(getFilteredData);
      break;
    }

    default: {
      if (category) {
        setDataUser(await getCategoryClothesFromFirestore(category));
        setIsLoading(false);
      }
    }
  }
};
