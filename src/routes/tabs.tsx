import { Link } from 'react-router-dom';

const Tabs = () => {
  return (
    <div
      className="row justify-content-end"
      style={{ marginRight: '5%', marginLeft: '5%', position: 'fixed', top: 0, width: '90%', zIndex: 1 }}>
      <Link className="links-btn wrapper-links" to="/">
        <li className="links-btn li-btn" style={{ fontSize: 20 }}>
          Home
        </li>
      </Link>

      <Link className="links-btn wrapper-links" to="/login">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Login
        </li>
      </Link>
      <Link className="links-btn wrapper-links" to="/signUp">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Sign Up
        </li>
      </Link>
      <Link className="links-btn wrapper-links profile-link" to="/admin">
        <li className="links-btn" style={{ fontSize: 20 }}>
          Profile
        </li>
      </Link>
    </div>
  );
};

export default Tabs;
