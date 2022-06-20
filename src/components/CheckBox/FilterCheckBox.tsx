import { FC, ReactElement } from 'react';
import { FilterCheckBoxProps } from './filterCheckBoxProps';
import './filterCheckBox.css';

const FilterCheckBox: FC<FilterCheckBoxProps> = ({
  handleCheckBoxOnChange,
  item,
}: FilterCheckBoxProps): ReactElement => {
  return (
    <div className="input-group">
      <input
        name={`${item.value}`}
        className="form-check-input input-style "
        type="checkbox"
        onChange={event => handleCheckBoxOnChange(event)}
      />
      <p className="text-name">{item.name}</p>
    </div>
  );
};

export default FilterCheckBox;
