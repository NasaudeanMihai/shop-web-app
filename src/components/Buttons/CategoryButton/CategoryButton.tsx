import { FC, ReactElement } from 'react';
import { CategoryButtonProps } from './CategoryButtonProps';

const CategoryButton: FC<CategoryButtonProps> = ({
  handleCategoryButton,
  image,
  altImage,
}: CategoryButtonProps): ReactElement => {
  return (
    <div className="col">
      <button
        className="btn"
        style={{ marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem' }}
        onClick={handleCategoryButton}>
        <img className="img" src={image} alt={altImage} />
      </button>
    </div>
  );
};

export default CategoryButton;
