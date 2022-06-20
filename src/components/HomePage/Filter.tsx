import { FC, ReactElement } from 'react';
import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterProps, PriceFilterProps } from './FilterProps';

const price = [
  { name: '<= 10$', value: 10 },
  { name: '10$ - 100$', value: '10and100' },
  { name: '>= 100$', value: 100 },
];

const category = [
  { name: 'nike', value: 'nike' },
  { name: 'adidas', value: 'adidas' },
  { name: 'mustang', value: 'mustang' },
];

const Filter: FC<FilterProps> = ({
  setSelectedBrandFilter,
  selectedBrandFilter,
  selectedPriceFilter,
  setSelectedPriceFilter,
}: FilterProps): ReactElement => {
  const handleNikeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedBrandFilter([...selectedBrandFilter, event.target.name]);
    } else {
      const uncheckBox = selectedBrandFilter.filter(item => item !== event.target.name);
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
      <div
        className="row"
        style={{
          marginTop: 20,
          paddingBottom: 20,
          border: '2px solid #eee',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Brand:</p>
        <div className="col">
          {category.map(item => (
            <FilterCheckBox item={item} handleCheckBoxOnChange={event => handleNikeCheckBox(event)} />
          ))}
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: 20,
          paddingBottom: 20,
          border: '2px solid #eee',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Price:</p>
        <div className="col">
          {price.map(item => (
            <FilterCheckBox item={item} handleCheckBoxOnChange={event => handlePriceCheckBox(event)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
