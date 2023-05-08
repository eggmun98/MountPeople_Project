import { IQuery } from "../../../../../commons/types/generated/types";

export interface IProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  count: number;
}
