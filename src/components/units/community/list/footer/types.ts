import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";

export interface IProps {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  dataCount: Pick<IQuery, "fetchBoardsCount"> | undefined;
}
