import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      writer
      contents
      createdAt
      rating
      _id
    }
  }
`;

export const useQueryFetchBoardComments = (): typeof result => {
  const router = useRouter();
  const result = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.page),
    },
  });

  return result;
};
