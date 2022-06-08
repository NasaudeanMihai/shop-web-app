import { Route, Routes as ReactRoutes } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage';
import AdminPage from '../components/AdminPage/AdminPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </ReactRoutes>
  );
};

export default Routes;
