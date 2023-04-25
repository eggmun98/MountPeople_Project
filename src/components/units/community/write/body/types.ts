import { UseFormRegister } from "react-hook-form";
import { IData } from "../types";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IProps {
  register: UseFormRegister<IData>;
  data: Pick<IQuery, "fetchBoard"> | undefined;
}

export interface IAddress {
  zonecode: string;
  address: string;
}
