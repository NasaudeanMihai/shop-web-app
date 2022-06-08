import { db } from '../firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { DataItemProps } from '../interface/dataItemProps';

const updateItemInFirebase = async (category: string, id: string, { brand, image, price, size }: DataItemProps) => {
  const categoryRef = doc(db, 'web-shop', 'clothes', category, id);
  try {
    await updateDoc(categoryRef, {
      brand,
      image,
      price,
      size,
    });
  } catch (error) {
    console.log('err');
  }
};

export default updateItemInFirebase;
