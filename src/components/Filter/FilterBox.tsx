import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterBoxProps } from './FilterProps';
import './filter.css';
import RadioButton from '../RadioButton/RadioButton';

const FilterBox = ({ filterData, handleCheckBox, title, radioButton = false }: FilterBoxProps) => {
  return (
    <div className="row wrapper-filter">
      <p className="filter-title">{title}:</p>
      <div className="col col-scroll">
        {filterData.map(item =>
          radioButton ? (
            <RadioButton
              key={`${title}-${item.value}`}
              item={item}
              handleRadioButtonOnChange={event => handleCheckBox(event)}
            />
          ) : (
            <FilterCheckBox
              key={`${title}-${item.value}`}
              checked={false}
              item={item}
              handleCheckBoxOnChange={event => handleCheckBox(event)}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default FilterBox;
