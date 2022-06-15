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

export interface FetchedDataProps {
  id: string;
  data: DataItemProps;
}

export interface FetchedDataItemProps {
  brand: string;
  image: string;
  price: string;
  size: string[];
  id: string;
}
