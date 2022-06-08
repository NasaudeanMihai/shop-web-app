import { FC, ReactElement } from 'react';
import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterProps } from './FilterProps';

const Filter: FC<FilterProps> = ({ setSelectedFilter, selectedFilter }: FilterProps): ReactElement => {
  const size = ['X', 'M', 'L', 'XL'];
  const price = ['< 10$', '10$ - 100$', '> 100$'];
  const handleNikeCheckBox = (event: any) =>
    setSelectedFilter({ ...selectedFilter, ...{ nike: !selectedFilter['nike'] } });

  const handleAdidasCheckBox = (event: any) =>
    setSelectedFilter({ ...selectedFilter, ...{ adidas: !selectedFilter['adidas'] } });

  const handleMustangCheckBox = (event: any) =>
    setSelectedFilter({ ...selectedFilter, ...{ mustang: !selectedFilter['mustang'] } });

  const handlePriceCheckBox = (event: any) => console.log(event.name);
  // setSelectedFilter({ ...selectedFilter, ...{ [event.name]: !selectedFilter[event.name] } });

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
          <FilterCheckBox name={'Nike'} handleCheckBoxOnChange={event => handleNikeCheckBox(event)} />
          <FilterCheckBox name={'Adidas'} handleCheckBoxOnChange={event => handleAdidasCheckBox(event)} />
          <FilterCheckBox name={'Mustang'} handleCheckBoxOnChange={event => handleMustangCheckBox(event)} />
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
