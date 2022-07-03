import './subscribe.css';

const Subscribe = () => {
  return (
    <div className="wrapper-subscribe">
      <div className="row">
        <p>Subscribe to our newsletter and get notified about updates, discounts and changes.</p>
      </div>

      <div className="row wrapper-input">
        <div className="input-group">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">
            Send
          </button>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
