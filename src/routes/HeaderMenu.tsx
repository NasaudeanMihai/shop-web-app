import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoList } from 'react-icons/io5';

import { CartContext } from '../context/cartContext';
import { HeaderMenuProps } from './headerMenuProps';

import './tabs.css';

const HeaderMenu: FC<HeaderMenuProps> = ({ handleMobileMenuButton }: HeaderMenuProps): ReactElement => {
  const { itemsAddedToCart } = useContext(CartContext);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth <= 1080) {
      setMobileMenu(true);
    }
  }, []);

  useEffect(() => {
    const getWidthWindow = () => {
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 1080) {
          setMobileMenu(true);
        } else {
          setMobileMenu(false);
        }
      });
    };
    return getWidthWindow();
  }, []);

  if (mobileMenu) {
    return (
      <div className="row justify-content-end ">
        <button className="btn" onClick={handleMobileMenuButton}>
          <IoList size={30} />
        </button>
      </div>
    );
  }

  return (
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
  );
};

export default HeaderMenu;
