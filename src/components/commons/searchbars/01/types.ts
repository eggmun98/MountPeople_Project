import { ChangeEvent } from "react";

export interface IProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
