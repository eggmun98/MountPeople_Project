import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { CREATE_BOARD_COMMENTS } from "../../mutation/community/useMutationCreateBoardComment";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

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

  const onClickCreateCommentButton = async (data: IData): Promise<void> => {
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
    alert("댓글이 작성되었습니다.");
  };

  return { onClickCreateCommentButton };
};
