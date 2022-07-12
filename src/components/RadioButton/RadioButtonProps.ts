export interface RadioButtonProps {
  item: { name: string; value: string | number };
  handleRadioButtonOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
