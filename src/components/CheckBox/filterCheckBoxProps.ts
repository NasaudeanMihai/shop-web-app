export interface FilterCheckBoxProps {
  checked: boolean;
  item: { name: string; value: string | number };
  handleCheckBoxOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
