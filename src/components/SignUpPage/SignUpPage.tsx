import { useState, useContext, FC, ReactElement } from 'react';

import './style.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/authContext/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext/authContext';

const SignUpPage: FC = (): ReactElement => {
  const { setUserData } = useContext<AuthContextInterface>(AuthContext);
  const [userCredential, setUserCredential] = useState({ email: '', name: '' });
  const [password, setPassword] = useState<string>('');
  const { email, name } = userCredential;
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignUpButton = () => {
    if (name !== '' && email !== '' && password !== '' && password.length > 5) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(_ => {
          setUserData(true);
          navigate('/Login');
          localStorage.setItem('userData', JSON.stringify({ name, email, logged: true }));
        })
        .catch(error => {
          return;
        });
    }
  };

  const handleOnChangeName = (event: any) => {
    event.preventDefault();
    setUserCredential({ ...userCredential, ...{ name: event?.target.value } });
  };
  const handleOnChangeEmail = (event: any) => {
    event.preventDefault();
    setUserCredential({ ...userCredential, ...{ email: event?.target.value } });
  };
  const handleOnChangePassword = (event: any) => {
    event.preventDefault();
    setPassword(event?.target.value);
  };

  return (
    <div className="wrapper-sign-up">
      <h1>Create Account</h1>
      <div className="col">
        <div className="input-group-4" style={{ marginBottom: 10 }}>
          <span className="input-group-text-2">User name</span>
          <input
            type="name"
            aria-label="User name"
            className="form-control"
            onChange={handleOnChangeName}
            placeholder="Example: John"
          />
        </div>
        <div className="input-group-4" style={{ marginBottom: 10 }}>
          <span className="input-group-text-2">Email Address</span>
          <input
            type="email"
            aria-label="Email Address"
            className="form-control"
            onChange={handleOnChangeEmail}
            placeholder="Example@email.com"
          />
        </div>
        <div className="input-group-4" style={{ marginBottom: 10 }}>
          <span className="input-group-text-2">User name</span>
          <input
            type="password"
            aria-label="Password"
            className="form-control"
            onChange={handleOnChangePassword}
            placeholder="Password"
          />
        </div>

        <button onClick={handleSignUpButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
