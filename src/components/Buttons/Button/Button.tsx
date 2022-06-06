import { FC, ReactElement } from 'react';
import { ButtonProps } from './buttonProps';

import './button.css';

const Button: FC<ButtonProps> = ({ handleButtonOnClick, name }: ButtonProps): ReactElement => {
  return (
    <button onClick={handleButtonOnClick} className="sign-up-bottom">
      <p className="sign-up-bottom-text">{name}</p>
    </button>
  );
};

export default Button;
