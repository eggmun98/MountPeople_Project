import { Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../../../commons/types/generated/types";

export interface IProps {
  el: IBoardComment | undefined;
  setOriginIndex: Dispatch<SetStateAction<number>>;
}

export interface IData {
  contents: string;
  password: string;
}
