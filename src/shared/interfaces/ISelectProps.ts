import { StaticImageData } from "next/image";

export interface ISelectProps {
  value: string;
  onChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
  modal?: boolean;
  options: { label: string; value: string; image?: StaticImageData }[];
}
