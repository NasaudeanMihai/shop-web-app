export interface FilterProps {
  selectedBrandFilter: string[];
  selectedPriceFilter: Array<PriceFilterProps>;
  setSelectedPriceFilter: (selectedPriceFilter: Array<PriceFilterProps>) => void;
  setSelectedBrandFilter: (selectedBrandFilter: string[]) => void;
}

export interface PriceFilterProps {
  name: string;
  value: number;
}
