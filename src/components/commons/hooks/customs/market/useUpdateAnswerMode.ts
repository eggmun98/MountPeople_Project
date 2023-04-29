import { useMutation } from "@apollo/client";
import { UPDATE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationUpdateUsedItemAnaswer";
import { useRecoilState } from "recoil";
import { answerEditIndexState } from "../../../stores";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";

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

  const onClickUpdateAnswer =
    (useditemQuestionAnswerId: string, useditemQuestionId: string) =>
    async (data: { contents: string }) => {
      const result = await updateUsedItemQuestionAnswer({
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

      alert("수정하였습니다.");
      setEditIndex(-1);
    };

  return {
    onClickUpdateAnswer,
  };
};
