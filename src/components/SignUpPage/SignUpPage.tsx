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
          localStorage.setItem('userData', JSON.stringify({ name, email }));
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
        <div className="wrapper-form">
          <h2>Name</h2>
          <input onChange={handleOnChangeName} type="name" placeholder="Example: John" />
        </div>
        <div className="wrapper-form">
          <h2>Email Address</h2>
          <input onChange={handleOnChangeEmail} type="email" placeholder="Example@email.com" />
        </div>
        <div className="wrapper-form">
          <h2>Password</h2>
          <input onChange={handleOnChangePassword} type="password" placeholder="Password" />
        </div>
        <button onClick={handleSignUpButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
