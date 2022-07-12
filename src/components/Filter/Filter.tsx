import { FC, ReactElement } from 'react';

import { FilterProps, FilterItemBoxProps } from './FilterProps';
import RadioButton from '../RadioButton/RadioButton';
import FilterBox from './FilterBox';
import { mockBrand, mockCategory, mockPrice } from '../HomePage/mockData';
import './filter.css';

const Filter: FC<FilterProps> = ({
  setSelectedBrandFilter,
  selectedBrandFilter,
  selectedPriceFilter,
  setSelectedPriceFilter,
  setCategory,
  category,
}: FilterProps): ReactElement => {
  const handleRadioButtonOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ name: event.target.name, selected: true });
  };
  const handleBrandCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedBrandFilter([...selectedBrandFilter, event.target.name]);
    } else {
      const uncheckBox = selectedBrandFilter.filter((item: string) => item !== event.target.name);
      setSelectedBrandFilter(uncheckBox);
    }
  };

  const handlePriceCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedPriceFilter([
        ...selectedPriceFilter,
        { name: event.target.name, value: event.target.name === '10' ? 10 : event.target.name === '100' ? 100 : 0 },
      ]);
    } else {
      const uncheckBox = selectedPriceFilter.filter(({ name }: FilterItemBoxProps) => name !== event.target.name);
      setSelectedPriceFilter(uncheckBox);
    }
  };

  return (
    <div className="col-3" style={{ backgroundColor: 'transparent' }}>
      <div className="row wrapper-filter">
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Category:</p>
        <div className="col col-scroll">
          {mockCategory.map(item => (
            <RadioButton
              item={item}
              checked={category.name === item.name}
              handleRadioButtonOnChange={event => handleRadioButtonOnChange(event)}
            />
          ))}
        </div>
      </div>
      <FilterBox filterData={mockBrand} handleCheckBox={event => handleBrandCheckBox(event)} title={'Brand'} />
      <FilterBox filterData={mockPrice} handleCheckBox={event => handlePriceCheckBox(event)} title={'Price'} />
    </div>
  );
};

export default Filter;
