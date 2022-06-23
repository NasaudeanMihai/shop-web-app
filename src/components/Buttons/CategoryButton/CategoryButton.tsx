import { FC, ReactElement } from 'react';
import { CategoryButtonProps } from './CategoryButtonProps';

const CategoryButton: FC<CategoryButtonProps> = ({
  handleCategoryButton,
  image,
  altImage,
}: CategoryButtonProps): ReactElement => {
  return (
    <div className="col">
      <button className="btn" onClick={handleCategoryButton}>
        <img className="img" src={image} alt={altImage} />
      </button>
    </div>
  );
};

export default CategoryButton;
