import { useState, useContext, useEffect } from 'react';
import './style.css';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from '../../context/authContext/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext/authContext';

const LoginPage = () => {
  const [checkIfUserIsLogged, setCheckIfUserIsLogged] = useState<boolean>(true);
  const [userCredential, setUserCredential] = useState({ email: '', password: '' });
  const { email, password } = userCredential;
  const navigate = useNavigate();

  const { userData, setUserData } = useContext<AuthContextInterface>(AuthContext);
  const auth = getAuth();

  const handleLoginButton = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(_ => {
          setUserData(true);
          navigate('/admin');
          setUserCredential({ email: '', password: '' });
        })
        .catch(error => {
          return;
        });
    }
  };

  useEffect(() => {
    const checkIfUserIsLoggedIn = () => {
      const data = localStorage.getItem('userData');
      if (data) {
        navigate('/admin');
        setCheckIfUserIsLogged(false);
      }
      setCheckIfUserIsLogged(false);
    };
    return checkIfUserIsLoggedIn();
  }, [navigate]);

  if (checkIfUserIsLogged) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="wrapper-sign-in">
      <h1>Sign in</h1>

      <div className="col">
        <div className="wrapper-form">
          <h2>Email Address</h2>
          <input
            onChange={(event: any) => setUserCredential({ ...userCredential, ...{ email: event.target.value } })}
            type="email"
            placeholder="Example@email.com"
          />
        </div>
        <div className="wrapper-form">
          <h2>Password</h2>
          <input
            onChange={(event: any) => setUserCredential({ ...userCredential, ...{ password: event.target.value } })}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={handleLoginButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Login</p>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
