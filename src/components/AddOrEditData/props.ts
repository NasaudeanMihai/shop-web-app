import { DataItemProps } from '../../interface';

export interface AddDataProps {
  addData: DataItemProps;
  setAddData: (addData: DataItemProps) => void;
  handleSendButton: () => void;
}
