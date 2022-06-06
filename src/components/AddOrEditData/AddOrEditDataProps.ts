import { DataItemProps } from '../../interface/interface';

export interface AddDataProps {
  addData: DataItemProps;
  setAddData: (addData: DataItemProps) => void;
  handleSendButton: () => void;
}
