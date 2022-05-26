import { useState, useContext, useEffect } from 'react';
import { Button, Col, Form, FormGroup } from 'react-bootstrap';
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
        // const user = userCredential.user;
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
    };
    return checkIfUserIsLoggedIn;
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

      <Col>
        <FormGroup controlId="formEmail" className="wrapper-form">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            onChange={(event: any) => setEmail(event.target.value)}
            type="email"
            placeholder="Example@email.com"
          />
        </FormGroup>
        <FormGroup controlId="formEmail" className="wrapper-form">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event: any) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button onClick={handleLoginButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Login</p>
        </Button>
      </Col>
    </div>
  );
};

export default Login;
