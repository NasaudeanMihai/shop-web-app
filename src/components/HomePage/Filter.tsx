import { FC, ReactElement } from 'react';
import FilterCheckBox from '../CheckBox/FilterCheckBox';

const Filter: FC = (): ReactElement => {
  const size = ['X', 'M', 'L', 'XL'];
  const price = ['< 10$', '10$ - 100$', '> 100$'];

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
          <FilterCheckBox name={'Nike'} handleCheckBoxOnChange={() => null} />
          <FilterCheckBox name={'Adidas'} handleCheckBoxOnChange={() => null} />
          <FilterCheckBox name={'Mustang'} handleCheckBoxOnChange={() => null} />
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
            <FilterCheckBox name={item} handleCheckBoxOnChange={() => null} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
