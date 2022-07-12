import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterBoxProps } from './FilterProps';
import './filter.css';

const FilterBox = ({ filterData, handleCheckBox, title }: FilterBoxProps) => {
  return (
    <div className="row wrapper-filter">
      <p className="filter-title">{title}:</p>
      <div className="col col-scroll">
        {filterData.map(item => (
          <FilterCheckBox checked={false} item={item} handleCheckBoxOnChange={event => handleCheckBox(event)} />
        ))}
      </div>
    </div>
  );
};

export default FilterBox;
