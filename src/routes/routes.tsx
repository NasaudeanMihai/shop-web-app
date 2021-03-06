import { Route, Routes as ReactRoutes } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage';
import ItemPage from '../components/ItemPage/ItemPage';
import CartPage from '../components/CartPage/CartPage';
import AdminPage from '../components/AdminPage/AdminPage';
import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';
import SearchPage from '../components/SearchPage/SearchPage';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/item" element={<ItemPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/:category" element={<SearchPage />} />
      <Route path="/search/:category/:brand" element={<SearchPage />} />
      <Route path="/search/:category/:brand/:price" element={<SearchPage />} />
    </ReactRoutes>
  );
};

export default Routes;
