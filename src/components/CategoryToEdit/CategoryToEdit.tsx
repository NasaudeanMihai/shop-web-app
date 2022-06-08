import { useEffect, useState } from 'react';
import { DataProps, DataItemProps } from '../../interface/dataItemProps';
import CategoryButton from '../Buttons/CategoryButton/CategoryButton';
import ItemButton from '../Buttons/ItemButton/ItemButton';
import { image } from '../../assets/image/category';
import Loading from '../Loader/Loading';
import getCategoryClothesFromFirestore from '../../client/getClothesFromFirestore';
import AddOrEditData from '../AddOrEditData/AddOrEditData';
import updateItemInFirebase from '../../client/updateItem';

const CategoryToEdit = () => {
  const [addData, setAddData] = useState<DataItemProps>({
    category: '',
    brand: '',
    image: '',
    price: '',
    size: ['S', 'M', 'L', 'XL'],
  });
  const [category, setCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState(false);
  const [id, setId] = useState('');

  const handlePantsButton = async () => {
    setIsLoading(true);
    setCategory('pants');
  };

  const handleShirtButton = async () => {
    setIsLoading(true);
    setCategory('shirt');
  };

  const handleSelectedItem = (data: DataItemProps, id: string) => {
    setAddData(data);
    setSelectedItem(!selectedItem);
    setId(id);
  };

  const handleEditButton = () => {
    if (category && id) {
      updateItemInFirebase(category, id, addData);
      setAddData({
        category: '',
        brand: '',
        image: '',
        price: '',
        size: ['S', 'M', 'L', 'XL'],
      });
      setSelectedItem(false);
    }
  };

  const checkIsLoading = () => {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="row align-items-start">
          {dataUser.map(({ data, id }: DataProps) => {
            if (data) {
              return (
                <ItemButton handleItemButton={() => handleSelectedItem(data, id)} item={data} altImage={data.brand} />
              );
            }
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    const getDataFromFirestore = async () => {
      if (category) {
        setDataUser(await getCategoryClothesFromFirestore(category));
        setIsLoading(false);
      }
    };

    getDataFromFirestore();
  }, [category]);

  return (
    <div style={{ paddingBottom: 100 }}>
      <div className="row align-items-center">
        <h2>Select Category</h2>
        <CategoryButton handleCategoryButton={handlePantsButton} image={image.pants} altImage={'Pants'} />
        <CategoryButton handleCategoryButton={handleShirtButton} image={image.shirt} altImage={'Shirt'} />
      </div>
      {checkIsLoading()}
      {selectedItem && <AddOrEditData addData={addData} setAddData={setAddData} handleSendButton={handleEditButton} />}
    </div>
  );
};

export default CategoryToEdit;
