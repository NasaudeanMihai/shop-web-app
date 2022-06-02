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
      console.log(data);
      if (data) {
        // localStorage.setItem('userData', {email: data.});
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
          <div className="row" style={{ marginTop: 20, paddingBottom: 20, border: '2px solid #eee' }}>
            <h1 style={{ marginBottom: 40 }}>Welcome</h1>

            <div className="col">
              <div className="input-group-4" style={{ marginBottom: 10 }}>
                <span className="input-group-text-2">Email Address</span>
                <input
                  type="email"
                  aria-label="Email Address"
                  className="form-control"
                  onChange={(event: any) => setUserCredential({ ...userCredential, ...{ email: event.target.value } })}
                />
              </div>
              <div className="input-group-4">
                <span className="input-group-text-2">Password</span>
                <input
                  type={'password'}
                  aria-label="Password"
                  className="form-control"
                  onChange={(event: any) =>
                    setUserCredential({ ...userCredential, ...{ password: event.target.value } })
                  }
                />
              </div>
            </div>
          </div>
          <button onClick={handleLoginButton} className="sign-up-bottom">
            <p className="sign-up-bottom-text">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
