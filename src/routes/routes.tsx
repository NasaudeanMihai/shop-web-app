import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/admin" element={<Admin />} />
    </ReactRoutes>
  );
};

export default Routes;
