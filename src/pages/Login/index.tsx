import { useState, useContext, useEffect } from 'react';
import './style.css';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext';

const Login = () => {
  const [checkIfUserIsLogged, setCheckIfUserIsLogged] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const { userData, setUserData } = useContext<AuthContextInterface>(AuthContext);
  const auth = getAuth();

  const handleLoginButton = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(_ => {
        setUserData(true);
        console.log('logged in');
        navigate('/admin');
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(userData);

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
          <input onChange={(event: any) => setEmail(event.target.value)} type="email" placeholder="Example@email.com" />
        </div>
        <div className="wrapper-form">
          <h2>Password</h2>
          <input onChange={(event: any) => setPassword(event.target.value)} type="password" placeholder="Password" />
        </div>
        <button onClick={handleLoginButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Login</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
