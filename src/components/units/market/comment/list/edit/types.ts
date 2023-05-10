import { Dispatch, SetStateAction } from "react";

export interface IProps {
  setOriginIndex: Dispatch<SetStateAction<number>>;
  el: {
    contents: string;
    _id: string;
  };
}

export interface IData {
  contents: string;
}
