const Filter = () => {
  return (
    <div className="col-3" style={{ backgroundColor: 'transparent' }}>
      <div
        className="row"
        style={{
          marginTop: 20,
          paddingBottom: 20,
          border: '2px solid #eee',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Brand:</p>
        <div className="col">
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>Nike</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>Adidas</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>Mustang</p>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: 20,
          paddingBottom: 20,
          border: '2px solid #eee',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Size:</p>
        <div className="col">
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>S</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>M</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>L</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>XL</p>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: 20,
          paddingBottom: 20,
          border: '2px solid #eee',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <p style={{ textAlign: 'left', fontSize: 24, fontWeight: 'bold' }}>Price:</p>
        <div className="col">
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}> {'<'} 10$</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>10$ - 100$</p>
          </div>
          <div className="input-group">
            <input className="form-check-input" type="checkbox" />
            <p style={{ textAlign: 'center', marginLeft: 10 }}>{'>'} 100$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
