import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const getCategoryClothesFromFirestore = async (category: string) => {
  const clothesCollection = collection(db, 'web-shop', 'clothes', category);
  const clothesSnapshot = await getDocs(clothesCollection);
  const clothesList = clothesSnapshot.docs.map(doc => doc.data());
  return clothesList;
};

export default getCategoryClothesFromFirestore;