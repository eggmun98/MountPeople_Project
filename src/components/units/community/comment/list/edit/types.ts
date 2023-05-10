import { Dispatch, SetStateAction } from "react";

export interface IProps {
  el: {
    writer: string;
    contents: string;
    _id: string;
  };
  setOriginIndex: Dispatch<SetStateAction<number>>;
}

export interface IData {
  contents: string;
  password: string;
}
