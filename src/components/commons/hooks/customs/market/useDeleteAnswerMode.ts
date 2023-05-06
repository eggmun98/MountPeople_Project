import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationDeleteUsedItemAnswer";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";
import { selectionModalMode } from "../closeModalMode";

export const useDeleteAnswerMode = (): {
  onClickDeleteAnswer: (
    useditemQuestionAnswerId: string,
    useditemQuestionId: string
  ) => () => Promise<void>;
} => {
  const [deleteUsedItemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const { onClickModal } = selectionModalMode();

  // 상품 답변 제거 함수
  const onClickDeleteAnswer =
    (useditemQuestionAnswerId: string, useditemQuestionId: string) =>
    async (): Promise<void> => {
      try {
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
        onClickModal("댓글을 삭제하였습니다.")();
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }
    };

  return {
    onClickDeleteAnswer,
  };
};
