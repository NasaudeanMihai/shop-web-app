import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Tabs = () => {
  const { itemsAddedToCart } = useContext(AuthContext);

  useEffect(() => {
    document.body.style.background = '#f2f2f7';
  }, []);
  return (
    <div className="row justify-content-end" style={{ backgroundColor: 'white', paddingRight: 30 }}>
      <Link className="links-btn wrapper-links" to="/">
        <li className="links-btn li-btn" style={{ fontSize: 20 }}>
          Home
        </li>
      </Link>

      <Link className="links-btn wrapper-links" to="/login">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Login
        </li>
      </Link>
      <Link className="links-btn wrapper-links" to="/signUp">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Sign Up
        </li>
      </Link>
      <Link className="links-btn wrapper-links profile-link" to="/admin">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Profile
        </li>
      </Link>
      {itemsAddedToCart.length !== 0 && (
        <Link className="links-btn wrapper-links profile-link" to="/cart">
          <li className="links-btn" style={{ fontSize: 20 }}>
            Cart {itemsAddedToCart.length !== 0 && itemsAddedToCart.length}
          </li>
        </Link>
      )}
    </div>
  );
};

export default Tabs;
