import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationCreateUsedItemAnswer";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../query/market/useQueryFetchUsedItemAnswers";
import { useRecoilState } from "recoil";
import { answerIndexState } from "../../../stores";

export const useCreateAnswerMode = (): {
  onClickCreateAnswer: (
    useditemQuestionId: string
  ) => (data: { contents: string }) => Promise<void>;
} => {
  const [createUsedItemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [answerIndex, setAnswerIndex] = useRecoilState(answerIndexState);

  const onClickCreateAnswer =
    (useditemQuestionId: string) =>
    async (data: { contents: string }): Promise<void> => {
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
      alert("대댓글 달았음");
      setAnswerIndex(-1);
    };

  return {
    onClickCreateAnswer,
  };
};
