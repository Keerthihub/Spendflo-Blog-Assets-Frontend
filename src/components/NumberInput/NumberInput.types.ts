export interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}
