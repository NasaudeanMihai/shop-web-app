import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
