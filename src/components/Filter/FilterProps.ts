export interface FilterProps {
  category: CategoryProps;
  selectedBrandFilter: string[];
  selectedPriceFilter: Array<FilterItemBoxProps>;
  setSelectedPriceFilter: (selectedPriceFilter: Array<FilterItemBoxProps>) => void;
  setSelectedBrandFilter: (selectedBrandFilter: string[]) => void;
  setCategory: (category: CategoryProps) => void;
}

export interface FilterItemBoxProps {
  name: string;
  value: number | string;
}

export interface CategoryProps {
  name: string;
  selected: boolean;
}

export interface SelectedFilterProps {
  category: { name: string; selected: boolean };
  brand: string;
  price: { name: string; value: number };
}

export interface FilterBoxProps {
  title: string;
  brandFilter?: string[];
  priceFilter?: FilterItemBoxProps[];
  radioButton?: boolean;
  filterData: Array<FilterItemBoxProps>;
  category?: { name: string; selected: boolean };
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
