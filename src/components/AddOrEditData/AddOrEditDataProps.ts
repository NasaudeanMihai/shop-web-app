import { DataItemProps } from '../../interface/dataItemProps';

export interface AddDataProps {
  addData: DataItemProps;
  setAddData: (addData: DataItemProps) => void;
  handleSendButton: () => void;
}
