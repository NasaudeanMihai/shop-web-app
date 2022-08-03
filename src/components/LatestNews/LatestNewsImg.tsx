import { FC, ReactElement } from 'react';
import { LatestNewsImgProps } from './LatestNewsProps';

const LatestNewsImg: FC<LatestNewsImgProps> = ({
  image,
  title,
  imgClassName,
  textClassName,
  handleImageButton,
  wrapperButtonImage,
}: LatestNewsImgProps): ReactElement => {
  return (
    <div className={wrapperButtonImage}>
      <button className="btn add-btn" onClick={handleImageButton}>
        <img src={image} className={imgClassName} alt="..." />
        <p className={textClassName}>{title}</p>
      </button>
    </div>
  );
};
export default LatestNewsImg;
