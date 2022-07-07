import './App.css';

import Routes from './routes/routes';
import Tabs from './routes/tabs';

import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/cartContext';

function App() {
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
