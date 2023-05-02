import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
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
      createdAt
      pickedCount
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

  const result = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.page),
    },
  });
  return result;
};
