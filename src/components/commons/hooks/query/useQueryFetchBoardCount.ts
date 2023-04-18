import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

const FETCH_BOARD_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export const useQueryFetchBoarCount = (): typeof result => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARD_COUNT);
  return result;
};
