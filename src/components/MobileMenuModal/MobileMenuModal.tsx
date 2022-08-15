import { FC, ReactElement, useContext, useEffect } from 'react';
import { IoClose, IoShirtSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { MobileMenuModalProps } from './mobileMenuModalProps';

import './mobileMenuModal.css';

const MobileMenuModal: FC<MobileMenuModalProps> = ({
  handleMobileMenuModalButton,
  handleCloseMobileMenuModalButton,
}: MobileMenuModalProps): ReactElement => {
  const { itemsAddedToCart } = useContext(CartContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  });

  return (
    <div className="containerMobileMenu">
      <div className="row justify-content-between wrapper-menu-cart">
        <div className="col-2">
          <IoShirtSharp className="icon" size={30} />
        </div>
        <div className="col-3">
          <div className="row justify-content-end ">
            <div className="col">
              {itemsAddedToCart.length !== 0 && (
                <Link className="links-btn wrapper-links profile-link" to="/cart">
                  <li className="links-btn li-text">Cart {itemsAddedToCart.length !== 0 && itemsAddedToCart.length}</li>
                </Link>
              )}
            </div>
            <div className="col">
              <button className="btn" onClick={handleMobileMenuModalButton}>
                <IoClose className="icon" size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col align-items-start wrapper-content-link ">
        <Link className="links-btn wrapper-links" to="/" onClick={handleCloseMobileMenuModalButton}>
          <li className="links-btn li-text">Home</li>
        </Link>

        <Link className="links-btn wrapper-links" to="/login" onClick={handleCloseMobileMenuModalButton}>
          <li className="links-btn li-text">Login</li>
        </Link>
        <Link className="links-btn wrapper-links" to="/signUp" onClick={handleCloseMobileMenuModalButton}>
          <li className="links-btn li-text">Sign Up</li>
        </Link>
        <Link className="links-btn wrapper-links profile-link" to="/admin" onClick={handleCloseMobileMenuModalButton}>
          <li className="links-btn li-text">Profile</li>
        </Link>
        {itemsAddedToCart.length !== 0 && (
          <Link className="links-btn wrapper-links profile-link" to="/cart" onClick={handleCloseMobileMenuModalButton}>
            <li className="links-btn li-text">Cart {itemsAddedToCart.length !== 0 && itemsAddedToCart.length}</li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenuModal;
