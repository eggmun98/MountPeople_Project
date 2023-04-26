import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";

export interface IProps {
  data: Pick<IQuery, "fetchUseditem">;
}
