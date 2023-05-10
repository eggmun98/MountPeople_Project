import { UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IData {
  name: string;
  remarks: string;
  price: number;
  tags: string;
  contents: string;
}

export interface IProps {
  register: UseFormRegister<IData>;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  isEdit: boolean;
}
