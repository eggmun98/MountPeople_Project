import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT } from "../../mutation/community/useQueryUpdateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { useRouter } from "next/router";
import { originIndexState } from "../../../stores";
import { useRecoilState } from "recoil";
import { selectionModalMode } from "../closeModalMode";

interface IData {
  contents: string;
  password: string;
}

export const useUpdateBoardCommentMode = (): {
  onClickUpdateComment: (
    boardCommentId: string
  ) => (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [_, setOriginIndex] = useRecoilState(originIndexState);
  const { onClickModal } = selectionModalMode();

  // 게시글 댓글 수정 함수
  const onClickUpdateComment =
    (boardCommentId: string) =>
    async (data: IData): Promise<void> => {
      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput: {
              contents: data.contents,
            },
            password: data.password,
            boardCommentId,
          },

          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.page },
            },
          ],
        });
        onClickModal("댓글을 수정하였습니다.")();
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }

      setOriginIndex(-1);
    };

  return {
    onClickUpdateComment,
  };
};
