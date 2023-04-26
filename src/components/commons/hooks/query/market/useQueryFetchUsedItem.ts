import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      seller {
        name
        _id
      }
      useditemAddress {
        address
      }
    }
  }
`;

export const useQueryFetchUsedItem = (): typeof result => {
  const router = useRouter();
  const result = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchBoardArgs>(
    FETCH_USED_ITEM,
    {
      variables: {
        useditemId: router.query.page,
      },
    }
  );
  return result;
};
