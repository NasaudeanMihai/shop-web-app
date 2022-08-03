import FilterCheckBox from '../CheckBox/FilterCheckBox';
import { FilterBoxProps, FilterItemBoxProps } from './FilterProps';
import './filter.css';
import RadioButton from '../RadioButton/RadioButton';

const FilterBox = ({
  filterData,
  handleCheckBox,
  title,
  radioButton = false,
  category,
  brandFilter = [],
  priceFilter = [],
}: FilterBoxProps) => {
  const checkFilterBox = (brandFilter: string[], priceFilter: FilterItemBoxProps[], item: FilterItemBoxProps) => {
    if (brandFilter.length !== 0) {
      for (let i = 0; i < brandFilter.length; i++) {
        if (item.name === brandFilter[i]) return true;
      }
    }
    if (priceFilter.length !== 0) {
      for (let i = 0; i < priceFilter.length; i++) {
        if (item.value === priceFilter[i].value) return true;
      }
    }
    return false;
  };
  return (
    <div className="row wrapper-filter">
      <p className="filter-title">{title}:</p>
      <div className="col col-scroll">
        {filterData.map(item =>
          radioButton ? (
            <RadioButton
              checked={item.name === category?.name}
              key={`${title}-${item.value}`}
              item={item}
              handleRadioButtonOnChange={event => handleCheckBox(event)}
            />
          ) : (
            <FilterCheckBox
              key={`${title}-${item.value}`}
              checked={checkFilterBox(brandFilter, priceFilter, item)}
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
