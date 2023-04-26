import { useMutation } from "@apollo/client";
import { DELETE_BOARD_COMMENT } from "../../mutation/community/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { useRouter } from "next/router";

export const useDeleteBoardCommentMode = (): {
  onClickDeleteCommentButton: (boardCommentId: string) => () => Promise<void>;
} => {
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const router = useRouter();

  const onClickDeleteCommentButton = (boardCommentId: string) => async () => {
    await deleteBoardComment({
      variables: {
        boardCommentId,
        password: "123",
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.page,
          },
        },
      ],
    });
    alert("댓글 삭제하였습니다.");
  };

  return {
    onClickDeleteCommentButton,
  };
};
