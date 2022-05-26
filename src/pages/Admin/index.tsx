import { useContext, FC, ReactElement, useState } from 'react';
import './style.css';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

import AddData from '../../components/AddData';
import EditData from '../../components/EditData';
import { DataItemProps } from '../../interface';

const Admin: FC = (): ReactElement => {
  const [addData, setAddData] = useState<DataItemProps>({
    brand: '',
    image: '',
    price: '',
    size: ['S', 'M', 'L', 'XL'],
  });
  const [addNewData, setAddNewData] = useState<boolean>(false);
  const [editData, setEditData] = useState<boolean>(false);
  const navigate = useNavigate();

  const { userData, setUserData } = useContext<AuthContextInterface>(AuthContext);
  const auth = getAuth();

  const handleLogoutButton = () => {
    signOut(auth);
    setUserData(false);
    navigate('/login');
    localStorage.removeItem('userData');
  };

  const handleSendButton = async () => {
    try {
      if (addData.brand !== '' && addData.price !== '')
        await addDoc(collection(db, 'web-shop', 'clothes', 'jeans'), addData);
      setAddData({ brand: '', image: '', price: '', size: ['S', 'M', 'L', 'XL'] });
      setAddNewData(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditButton = () => null;

  const handleAddDataButton = () => {
    setAddNewData(true);
    setEditData(false);
  };
  const handleEditDataButton = () => {
    setEditData(true);
    setAddNewData(false);
  };

  if (userData) {
    return (
      <div className="wrapper-sign-in">
        <div>
          <button onClick={handleEditDataButton} className="sign-up-bottom">
            <p className="sign-up-bottom-text">Edit Data</p>
          </button>
          <button onClick={handleAddDataButton} className="sign-up-bottom">
            <p className="sign-up-bottom-text">Add Data</p>
          </button>
          <button onClick={handleLogoutButton} className="sign-up-bottom">
            <p className="sign-up-bottom-text">Log out</p>
          </button>
        </div>
        <h1>{addNewData ? 'Add New Data' : editData && 'Edit'}</h1>
        {addNewData && <AddData addData={addData} setAddData={setAddData} handleSendButton={handleSendButton} />}
        {editData && <EditData addData={addData} setAddData={setAddData} handleEditButton={handleEditButton} />}
      </div>
    );
  }
  return (
    <button onClick={handleLogoutButton} className="sign-up-bottom">
      <p className="sign-up-bottom-text">Log out</p>
    </button>
  );
};

export default Admin;
