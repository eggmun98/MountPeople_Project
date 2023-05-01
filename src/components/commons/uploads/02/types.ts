import { Dispatch, SetStateAction } from "react";

export interface IProps {
  el: string;
  index: number;
  imageUrls: string[];
  setImageUrls: Dispatch<SetStateAction<string[]>>;
}
