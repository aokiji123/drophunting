export interface ISelectProps {
  value: string;
  onChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  options: { label: string; value: string }[];
}
