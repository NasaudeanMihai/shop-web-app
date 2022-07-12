import { FC, ReactElement } from 'react';
import { RadioButtonProps } from './RadioButtonProps';
import './radioButton.css';

const RadioButton: FC<RadioButtonProps> = ({ handleRadioButtonOnChange, item }: RadioButtonProps): ReactElement => {
  return (
    <div className="form-check row ">
      <input
        name={`${item.value}`}
        className="form-check-input input-style "
        type="radio"
        onChange={event => handleRadioButtonOnChange(event)}
      />
      <p className="text-name">{item.name}</p>
    </div>
  );
};

export default RadioButton;
