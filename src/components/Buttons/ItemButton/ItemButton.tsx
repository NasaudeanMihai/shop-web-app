import { FC, ReactElement } from 'react';
import { ItemButtonProps } from './ItemButtonProps';

const ItemButton: FC<ItemButtonProps> = ({ handleItemButton, item, altImage }: ItemButtonProps): ReactElement => {
  return (
    <div className="col">
      <button
        className="btn"
        style={{ marginBottom: '1rem', marginRight: '1rem', marginLeft: '1rem' }}
        onClick={handleItemButton}>
        <img className="img" src={item.image} alt={altImage} />
        <p>Brand: {item.brand}</p>
        <p>Price: {item.price}$</p>
      </button>
    </div>
  );
};

export default ItemButton;
