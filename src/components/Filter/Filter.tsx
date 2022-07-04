import { FC, ReactElement } from 'react';
import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterProps, PriceFilterProps } from './FilterProps';
import RadioButton from '../RadioButton/RadioButton';
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
  const handleNikeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      const uncheckBox = selectedPriceFilter.filter(({ name }: PriceFilterProps) => name !== event.target.name);
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
      <div className="row wrapper-filter">
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Brand:</p>
        <div className="col col-scroll">
          {mockBrand.map(item => (
            <FilterCheckBox item={item} handleCheckBoxOnChange={event => handleNikeCheckBox(event)} />
          ))}
        </div>
      </div>
      <div className="row wrapper-filter">
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Price:</p>
        <div className="col col-scroll">
          {mockPrice.map(item => (
            <FilterCheckBox item={item} handleCheckBoxOnChange={event => handlePriceCheckBox(event)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
