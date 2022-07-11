export interface FilterProps {
  selectedFilter: SelectedFilterProps;
  category: CategoryProps;
  selectedBrandFilter: string[];
  selectedPriceFilter: Array<PriceFilterProps>;
  setSelectedPriceFilter: (selectedPriceFilter: Array<PriceFilterProps>) => void;
  setSelectedBrandFilter: (selectedBrandFilter: string[]) => void;
  setCategory: (category: CategoryProps) => void;
}

export interface PriceFilterProps {
  name: string;
  value: number;
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
