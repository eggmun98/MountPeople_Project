import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationDeleteUsedItemAnswer";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";

export const useDeleteAnswerMode = (): {
  onClickDeleteAnswer: (
    useditemQuestionAnswerId: string,
    useditemQuestionId: string
  ) => () => Promise<void>;
} => {
  const [deleteUsedItemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickDeleteAnswer =
    (useditemQuestionAnswerId: string, useditemQuestionId: string) =>
    async (): Promise<void> => {
      await deleteUsedItemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId },
          },
        ],
      });
      alert("대댓글 삭제하였습니다.");
    };

  return {
    onClickDeleteAnswer,
  };
};
