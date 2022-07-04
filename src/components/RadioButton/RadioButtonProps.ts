export interface RadioButtonProps {
  checked: boolean;
  item: { name: string; value: string | number };
  handleRadioButtonOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
