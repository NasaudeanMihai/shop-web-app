import './App.css';

import Routes from './routes/routes';
import Tabs from './routes/tabs';

import { AuthProvider } from './context/authContext/authContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Tabs />
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
