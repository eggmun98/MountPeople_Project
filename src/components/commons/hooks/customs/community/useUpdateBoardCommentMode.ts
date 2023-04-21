import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT } from "../../mutation/community/useQueryUpdateBoardComment";
import { FETCH_BOARD_COMMENTS } from "../../query/community/useQueryFetchBoardComments";
import { useRouter } from "next/router";

interface IData {
  contents: string;
  password: string;
}

export const useUpdateBoardCommentMode = (): {
  onClickUpdateComment: (
    boardCommentId: string
  ) => (data: IData) => Promise<void>;
} => {
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const router = useRouter();

  const onClickUpdateComment =
    (boardCommentId: string) =>
    async (data: IData): Promise<void> => {
      console.log(data, "Data");
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
      alert("수정하였음");
    };

  return {
    onClickUpdateComment,
  };
};
