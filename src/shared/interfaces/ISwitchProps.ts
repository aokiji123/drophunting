import { ChangeEvent } from "react";

export interface ISwitchProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
