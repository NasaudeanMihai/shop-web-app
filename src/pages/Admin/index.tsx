import React, { useState, useContext } from 'react';
import { Button, Col, Form, FormGroup } from 'react-bootstrap';
import './style.css';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext';

const Login = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = useContext<AuthContextInterface>(AuthContext);
  const auth = getAuth();

  const handleLogoutButton = () => {
    signOut(auth);
    setUserData(false);
    navigate('/login');
  };

  if (userData) {
    return (
      <div className="wrapper-sign-in">
        <h1>Admin</h1>

        <Col>
          <Button onClick={handleLogoutButton} className="sign-up-bottom">
            <p className="sign-up-bottom-text">Log out</p>
          </Button>
        </Col>
      </div>
    );
  }
  return (
    <Button onClick={handleLogoutButton} className="sign-up-bottom">
      <p className="sign-up-bottom-text">Log out</p>
    </Button>
  );
};

export default Login;
