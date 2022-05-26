import { DataItemProps } from '../../interface';

export interface EditDataProps {
  addData: DataItemProps;
  setAddData: (addData: DataItemProps) => void;
  handleEditButton: () => void;
}
