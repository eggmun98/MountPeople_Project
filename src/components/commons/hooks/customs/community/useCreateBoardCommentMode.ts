import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { CREATE_BOARD_COMMENTS } from "../../mutation/community/useMutationCreateBoardComment";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { selectionModalMode } from "../closeModalMode";

interface IData {
  writer: string;
  password: string;
  contents: string;
}

export const useCreateBoardCommentMode = (): {
  onClickCreateCommentButton: (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENTS);
  const { onClickModal } = selectionModalMode();

  // 게시글 댓글 등록 함수
  const onClickCreateCommentButton = async (data: IData): Promise<void> => {
    if (!data.writer || !data.password || !data.contents)
      return onClickModal("입력칸을 모두 채워주세요.")();
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.page),
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: 1,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.page },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return { onClickCreateCommentButton };
};
