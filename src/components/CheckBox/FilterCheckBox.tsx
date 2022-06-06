import { FC, ReactElement } from 'react';
import { FilterCheckBoxProps } from './filterCheckBoxProps';

const FilterCheckBox: FC<FilterCheckBoxProps> = ({
  handleCheckBoxOnChange,
  name,
}: FilterCheckBoxProps): ReactElement => {
  return (
    <div className="input-group">
      <input className="form-check-input" type="checkbox" onChange={handleCheckBoxOnChange} />
      <p style={{ textAlign: 'center', marginLeft: 10 }}>{name}</p>
    </div>
  );
};

export default FilterCheckBox;
