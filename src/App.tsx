import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div>
          <div className="row">
            <div className="wrapper-navbar">
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
