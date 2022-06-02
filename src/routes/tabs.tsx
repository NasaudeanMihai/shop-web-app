import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TabsProps } from './props';

const Tabs = ({ children }: TabsProps) => {
  useEffect(() => {
    document.body.style.background = '#f2f2f7';
  }, []);
  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="wrapper-navbar" style={{ backgroundColor: 'white' }}>
            <Link className="links-btn wrapper-links" to="/">
              <li className="links-btn li-btn">Home</li>
            </Link>

            <Link className="links-btn wrapper-links" to="/login">
              <li className="links-btn">Login</li>
            </Link>
            <Link className="links-btn wrapper-links" to="/signUp">
              <li className="links-btn">Sign Up</li>
            </Link>
            <Link className="links-btn wrapper-links profile-link" to="/admin">
              <li className="links-btn">Profile</li>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tabs;
