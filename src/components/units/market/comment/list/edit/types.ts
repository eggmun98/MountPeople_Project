import { Dispatch, SetStateAction } from "react";
import {
  IBoardComment,
  IQuery,
  IUseditemQuestion,
} from "../../../../../../commons/types/generated/types";

export interface IProps {
  setOriginIndex: Dispatch<SetStateAction<number>>;
  el: IUseditemQuestion;
}

export interface IData {
  contents: string;
}
