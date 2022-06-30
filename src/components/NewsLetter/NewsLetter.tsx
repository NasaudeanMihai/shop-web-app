import { mockData } from './mockData';
import { MockDataProps } from './NewsLetterProps';
import { useState } from 'react';
import './newsLetter.css';

const NewsLetter = () => {
  const [image, setImage] = useState<string>(mockData[0].img);
  const [visible, setVisible] = useState<boolean>(true);

  const handleSliderButton = (item: MockDataProps) => {
    setVisible(false);
    setTimeout(() => {
      setImage(item.img);
      setVisible(true);
    }, 500);
  };
  return (
    <div className="container wrapper-img-container">
      <img src={image} className={`img-thumbnail img-background ${visible ? 'fadeIn' : 'fadeOut'}`} alt="..." />
      <div className="wrapper-buttons">
        <div className="row ">
          {mockData.map((item: MockDataProps) => {
            return (
              <div className="col">
                <button onClick={() => handleSliderButton(item)} className="btn btn-dark btn-item">
                  {item.value}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
