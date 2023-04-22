import { UseFormRegister } from "react-hook-form";
import { IQuery } from "../../../../../commons/types/generated/types";
import { IData } from "../types";

export interface IProps {
  register: UseFormRegister<IData>;
  data: Pick<IQuery, "fetchBoard"> | undefined;
  isEdit: boolean;
}
