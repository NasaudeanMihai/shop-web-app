import { FC, ReactElement } from 'react';
import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterProps } from './FilterProps';

const Filter: FC<FilterProps> = ({ setSelectedFilter, selectedFilter }: FilterProps): ReactElement => {
  const size = ['X', 'M', 'L', 'XL'];
  const price = ['< 10$', '10$ - 100$', '> 100$'];
  const handleNikeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedFilter([...selectedFilter, 'nike']);
    } else {
      const uncheckBox = selectedFilter.filter(item => item !== 'nike');
      setSelectedFilter(uncheckBox);
    }
  };

  const handleAdidasCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedFilter([...selectedFilter, 'adidas']);
    } else {
      const uncheckBox = selectedFilter.filter(item => item !== 'adidas');
      setSelectedFilter(uncheckBox);
    }
  };

  const handleMustangCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedFilter([...selectedFilter, 'mustang']);
    } else {
      const uncheckBox = selectedFilter.filter(item => item !== 'mustang');
      setSelectedFilter(uncheckBox);
    }
  };

  const handlePriceCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => event.target.name;

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
          <FilterCheckBox name={'nike'} handleCheckBoxOnChange={event => handleNikeCheckBox(event)} />
          <FilterCheckBox name={'adidas'} handleCheckBoxOnChange={event => handleAdidasCheckBox(event)} />
          <FilterCheckBox name={'mustang'} handleCheckBoxOnChange={event => handleMustangCheckBox(event)} />
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
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Size:</p>
        <div className="col">
          {size.map(item => (
            <FilterCheckBox name={item} handleCheckBoxOnChange={() => null} />
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
            <FilterCheckBox name={item} handleCheckBoxOnChange={event => handlePriceCheckBox(event)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
