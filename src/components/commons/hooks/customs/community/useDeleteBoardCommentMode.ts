import { useMutation } from "@apollo/client";
import { DELETE_BOARD_COMMENT } from "../../mutation/community/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { useRouter } from "next/router";
import { selectionModalMode } from "../closeModalMode";

export const useDeleteBoardCommentMode = (): {
  onClickDeleteCommentButton: (boardCommentId: string) => () => Promise<void>;
} => {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { onClickModal } = selectionModalMode();

  // 게시글 댓글 삭제 함수
  const onClickDeleteCommentButton = (boardCommentId: string) => async () => {
    try {
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
      onClickModal("댓글을 삭제하였습니다.")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickDeleteCommentButton,
  };
};
