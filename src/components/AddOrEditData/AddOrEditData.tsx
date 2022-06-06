import { AddDataProps } from './AddOrEditDataProps';

const AddData = ({ addData, setAddData, handleSendButton }: AddDataProps) => {
  return (
    <div className="col">
      <div style={{ marginTop: '1rem' }}>
        <p>Brand</p>
        <input
          value={addData.brand}
          placeholder="Brand"
          onChange={event => setAddData({ ...addData, ...{ brand: event.target.value } })}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
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
          onChange={event => setAddData({ ...addData, ...{ price: event.target.value.toLowerCase() } })}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <div className="input-group mb-3">
          <label className="input-group-text">Category</label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={event => setAddData({ ...addData, ...{ category: event.target.value.toLowerCase() } })}>
            <option selected value={'shirt'}>
              Shirt
            </option>
            <option value={'pants'}>Pants</option>
          </select>
        </div>
      </div>

      <button onClick={handleSendButton}>
        <p>Send</p>
      </button>
    </div>
  );
};

export default AddData;
