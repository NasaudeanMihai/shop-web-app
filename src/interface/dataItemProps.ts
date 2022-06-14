export interface DataProps {
  id: string;
  data: DataItemProps;
}

export interface DataItemProps {
  category: string;
  brand: string;
  image: string;
  price: string;
  size: string[];
}
