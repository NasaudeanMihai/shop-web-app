import './App.css';

import Routes from './routes/routes';
import Tabs from './routes/tabs';

import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.body.style.background = '#f2f2f7';
  }, []);
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Tabs />
          <Routes />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
