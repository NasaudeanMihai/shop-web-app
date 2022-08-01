import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { IoShirtSharp } from 'react-icons/io5';
import './tabs.css';

const Tabs = () => {
  const { itemsAddedToCart } = useContext(CartContext);
  const [navbarColor, setNavbarColor] = useState<string>('transparent');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 20) {
        setNavbarColor('#D3D3D3');
      }
      if (window.scrollY <= 19) {
        setNavbarColor('transparent');
      }
    });
  }, []);

  return (
    <div
      className="row justify-content-between align-items-center wrapper-navbar"
      style={{ backgroundColor: navbarColor }}>
      <div className="col">
        <IoShirtSharp className="icon" />
      </div>
      <div className="col">
        <div className="row justify-content-end wrapper-li">
          <Link className="links-btn wrapper-links" to="/">
            <li className="links-btn li-text">Home</li>
          </Link>

          <Link className="links-btn wrapper-links" to="/login">
            <li className="links-btn li-text">Login</li>
          </Link>
          <Link className="links-btn wrapper-links" to="/signUp">
            <li className="links-btn li-text">Sign Up</li>
          </Link>
          <Link className="links-btn wrapper-links profile-link" to="/admin">
            <li className="links-btn li-text">Profile</li>
          </Link>
          {itemsAddedToCart.length !== 0 && (
            <Link className="links-btn wrapper-links profile-link" to="/cart">
              <li className="links-btn li-text">Cart {itemsAddedToCart.length !== 0 && itemsAddedToCart.length}</li>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
