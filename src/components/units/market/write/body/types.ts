import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IData {
  name: string;
  remarks: string;
  price: number;
  tags: string;
  contents: string;
}

export interface IProps {
  setValue: UseFormSetValue<IData>;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
