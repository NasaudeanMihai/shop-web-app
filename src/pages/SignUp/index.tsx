import { useState, useContext } from 'react';
import { Col, Form, FormGroup, Button } from 'react-bootstrap';
import './style.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import _default from 'react-bootstrap/esm/Accordion';
import { AuthContextInterface } from '../../interface/authContext';

const SignUp = () => {
  const { setUserData } = useContext<AuthContextInterface>(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
          console.log(error);
        });
    }
  };

  const handleOnChangeName = (event: any) => {
    event.preventDefault();
    setName(event?.target.value);
  };
  const handleOnChangeEmail = (event: any) => {
    event.preventDefault();
    setEmail(event?.target.value);
  };
  const handleOnChangePassword = (event: any) => {
    event.preventDefault();
    setPassword(event?.target.value);
  };

  return (
    <div className="wrapper-sign-up">
      <h1>Create Account</h1>
      <Col>
        <FormGroup controlId="formEmail" className="wrapper-form">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleOnChangeName} type="name" placeholder="Example: John" />
        </FormGroup>
        <FormGroup controlId="formEmail" className="wrapper-form">
          <Form.Label>Email Address</Form.Label>
          <Form.Control onChange={handleOnChangeEmail} type="email" placeholder="Example@email.com" />
        </FormGroup>
        <FormGroup controlId="formEmail" className="wrapper-form">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleOnChangePassword} type="password" placeholder="Password" />
        </FormGroup>
        <Button onClick={handleSignUpButton} className="sign-up-bottom">
          <p className="sign-up-bottom-text">Sign up</p>
        </Button>
      </Col>
    </div>
  );
};

export default SignUp;
