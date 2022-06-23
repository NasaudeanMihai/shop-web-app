export interface FilterCheckBoxProps {
  item: { name: string; value: string | number };
  handleCheckBoxOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
