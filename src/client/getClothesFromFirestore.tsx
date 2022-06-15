import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { FetchedDataProps } from '../interface/dataItemProps';

const getCategoryClothesFromFirestore = async (category: string) => {
  const clothesCollection = collection(db, 'web-shop', 'clothes', category);
  const clothesSnapshot = await getDocs(clothesCollection);
  const clothesList = clothesSnapshot.docs.map(doc => {
    return { data: doc.data(), id: doc.id } as FetchedDataProps;
  });

  return clothesList as FetchedDataProps[];
};

export default getCategoryClothesFromFirestore;
