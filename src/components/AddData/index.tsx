import { AddDataProps } from './props';

const AddData = ({ addData, setAddData, handleSendButton }: AddDataProps) => {
  return (
    <div className="col">
      <div>
        <p>Brand</p>
        <input
          value={addData.brand}
          placeholder="Brand"
          onChange={event => setAddData({ ...addData, ...{ brand: event.target.value } })}
        />
      </div>
      <div>
        <p>Image address</p>
        <input
          value={addData.image}
          placeholder="Image"
          onChange={event => setAddData({ ...addData, ...{ image: event.target.value } })}
        />
      </div>
      <div>
        <p>Price</p>
        <input
          value={addData.price}
          placeholder="Price"
          onChange={event => setAddData({ ...addData, ...{ price: event.target.value } })}
        />
      </div>

      <button onClick={handleSendButton}>
        <p>Send</p>
      </button>
    </div>
  );
};

export default AddData;
