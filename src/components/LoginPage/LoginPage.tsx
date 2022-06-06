import { useState, useContext, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import { AuthContextInterface } from '../../interface/authContext/authContext';
import UserCredentialInput from '../Input/UserCredentialInput';
import Button from '../Buttons/Button/Button';

import './style.css';

const LoginPage = () => {
  const [checkIfUserIsLogged, setCheckIfUserIsLogged] = useState<boolean>(true);
  const [userCredential, setUserCredential] = useState({ email: '', password: '' });
  const { email, password } = userCredential;
  const navigate = useNavigate();

  const { setUserData } = useContext<AuthContextInterface>(AuthContext);
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
      <img
        className="img"
        src="https://images.unsplash.com/photo-1618588429012-0559f1cbc5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG5hbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <div className="container">
        <div className="col">
          <div
            className="row"
            style={{
              marginTop: 20,
              paddingBottom: 40,
              border: '2px solid #eee',
              backgroundColor: 'white',
              paddingTop: 20,
            }}>
            <h1 style={{ marginBottom: 40 }}>Welcome</h1>

            <div className="col">
              <UserCredentialInput
                name={'email'}
                label={'Email Address'}
                inputType={'email'}
                ariaLabel={'Email Address'}
                userCredential={userCredential}
                setUserCredential={setUserCredential}
              />

              <UserCredentialInput
                name={'password'}
                label={'Password'}
                inputType={'password'}
                ariaLabel={'Password'}
                userCredential={userCredential}
                setUserCredential={setUserCredential}
              />
            </div>
          </div>
          <Button name={'Login'} handleButtonOnClick={handleLoginButton} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
