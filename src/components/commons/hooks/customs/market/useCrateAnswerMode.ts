import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationCreateUsedItemAnswer";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";
import { useRecoilState } from "recoil";
import { answerIndexState } from "../../../stores";
import { selectionModalMode } from "../closeModalMode";

export const useCreateAnswerMode = (): {
  onClickCreateAnswer: (
    useditemQuestionId: string
  ) => (data: { contents: string }) => Promise<void>;
} => {
  const [createUsedItemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [_, setAnswerIndex] = useRecoilState(answerIndexState);
  const { onClickModal } = selectionModalMode();

  // 상품 답변 함수
  const onClickCreateAnswer =
    (useditemQuestionId: string) =>
    async (data: { contents: string }): Promise<void> => {
      if (!data.contents) return onClickModal("내용이 비었습니다.")();
      try {
        await createUsedItemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: data.contents,
            },
            useditemQuestionId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
              variables: { useditemQuestionId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }
      setAnswerIndex(-1);
    };

  return {
    onClickCreateAnswer,
  };
};
