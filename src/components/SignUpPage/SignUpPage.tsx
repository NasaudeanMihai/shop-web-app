import { useState, useContext, FC, ReactElement } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import UserCredentialInput from '../Input/UserCredentialInput';
import { AuthContext } from '../../context/authContext';

import { AuthContextInterface } from '../../interface/authContext/authContext';

import './style.css';

const SignUpPage: FC = (): ReactElement => {
  const { setUserData } = useContext<AuthContextInterface>(AuthContext);
  const [userCredential, setUserCredential] = useState({ email: '', name: '', password: '' });
  const { email, name, password } = userCredential;
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

  return (
    <div className="wrapper-sign-up">
      <h1>Create Account</h1>
      <div className="col">
        <UserCredentialInput
          name={'name'}
          label={'User Name'}
          inputType={'name'}
          ariaLabel={'User name'}
          placeholder="Example: John"
          userCredential={userCredential}
          setUserCredential={setUserCredential}
        />

        <UserCredentialInput
          name={'email'}
          label={'Email Address'}
          inputType={'email'}
          ariaLabel={'Email Address'}
          placeholder="Example@email.com"
          userCredential={userCredential}
          setUserCredential={setUserCredential}
        />

        <UserCredentialInput
          name={'password'}
          label={'Password'}
          inputType={'password'}
          ariaLabel={'Password'}
          placeholder="Password"
          userCredential={userCredential}
          setUserCredential={setUserCredential}
        />

        <button onClick={handleSignUpButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
