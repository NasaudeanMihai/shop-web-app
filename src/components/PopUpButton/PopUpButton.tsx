import { useState } from 'react';
import { PopUpButtonProps } from './popUpButtonProps';
import './popUpButton.css';
import { useNavigate } from 'react-router-dom';

const PopUpButton = ({ title, options }: PopUpButtonProps) => {
  const navigate = useNavigate();
  const [isOptionVisible, setIsOptionVisible] = useState<boolean>(false);

  const handlePopUpClick = (item: string) =>
    navigate({
      pathname: `/search/${item.toLowerCase()}`,
    });

  return (
    <div className="col align-middle">
      <button
        onMouseEnter={() => setIsOptionVisible(true)}
        onMouseLeave={() => setIsOptionVisible(false)}
        className={`btn align-items-center ${isOptionVisible ? 'title-button-border' : 'title-button'}`}>
        <p className="title-button-text">{title}</p>
      </button>
      {isOptionVisible && (
        <div
          className="wrapper-options"
          onMouseEnter={() => setIsOptionVisible(true)}
          onMouseLeave={() => setIsOptionVisible(false)}>
          <div className="col">
            {options.map(item => (
              <button onClick={() => handlePopUpClick(item)} key={`pop-up-${item}`} className="btn item-button">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default PopUpButton;
