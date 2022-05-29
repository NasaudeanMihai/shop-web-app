import './App.css';

import Routes from './routes/routes';
import Tabs from './routes/tabs';

import { AuthProvider } from './context/authContext/authContext';

function App() {
  return (
    <AuthProvider>
      <Tabs>
        <Routes />
      </Tabs>
    </AuthProvider>
  );
}

export default App;
