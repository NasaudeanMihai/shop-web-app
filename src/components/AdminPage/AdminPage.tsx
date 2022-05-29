import { useContext, FC, ReactElement, useState } from 'react';
import './style.css';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from '../../context/authContext/authContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextInterface } from '../../interface/authContext/authContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

import AddOrEditData from '../AddOrEditData/AddOrEditData';
import { DataItemProps } from '../../interface/interface';

const AdminPage: FC = (): ReactElement => {
  const [addData, setAddData] = useState<DataItemProps>({
    category: '',
    brand: '',
    image: '',
    price: '',
    size: ['S', 'M', 'L', 'XL'],
  });
  const { category, brand, image, price, size } = addData;
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

  const handleAddButton = async () => {
    try {
      if (brand !== '' && price !== '')
        await addDoc(collection(db, 'web-shop', 'clothes', category), {
          brand,
          image,
          price,
          size,
        });
      setAddData({ category: '', brand: '', image: '', price: '', size: ['S', 'M', 'L', 'XL'] });
    } catch (error) {
      return;
    }
  };

  const handleEditButton = () => null;

  const handleAddDataButton = () => {
    setAddNewData(!addNewData);
    setEditData(false);
  };
  const handleEditDataButton = () => {
    setEditData(!editData);
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
        {addNewData && <AddOrEditData addData={addData} setAddData={setAddData} handleSendButton={handleAddButton} />}
        {editData && <AddOrEditData addData={addData} setAddData={setAddData} handleSendButton={handleEditButton} />}
      </div>
    );
  }
  return (
    <button onClick={handleLogoutButton} className="sign-up-bottom">
      <p className="sign-up-bottom-text">Log out</p>
    </button>
  );
};

export default AdminPage;
