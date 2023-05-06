import { useMutation } from "@apollo/client";
import { UPDATE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationUpdateUsedItemAnaswer";
import { useRecoilState } from "recoil";
import { answerEditIndexState } from "../../../stores";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";
import { selectionModalMode } from "../closeModalMode";

export const useUpdateAnswerMode = (): {
  onClickUpdateAnswer: (
    useditemQuestionAnswerId: string,
    useditemQuestionId: string
  ) => (data: { contents: string }) => Promise<void>;
} => {
  const [updateUsedItemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const [_, setEditIndex] = useRecoilState(answerEditIndexState);
  const { onClickModal } = selectionModalMode();

  // 상품 답변 수정 함수
  const onClickUpdateAnswer =
    (useditemQuestionAnswerId: string, useditemQuestionId: string) =>
    async (data: { contents: string }) => {
      try {
        await updateUsedItemQuestionAnswer({
          variables: {
            updateUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
            useditemQuestionAnswerId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
              variables: { useditemQuestionId },
            },
          ],
        });
        onClickModal("댓글을 수정하였습니다.")();
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }

      setEditIndex(-1);
    };

  return {
    onClickUpdateAnswer,
  };
};
