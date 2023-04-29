import { useMutation } from "@apollo/client";
import { UPDATE_USED_ITEM_QUESTION_ANSWER } from "../../mutation/market/useMutationUpdateUsedItemAnaswer";
import { useRecoilState } from "recoil";
import { answerEditIndexState } from "../../../stores";

export const useUpdateAnswerMode = () => {
  const [updateUsedItemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const [editIndex, setEditIndex] = useRecoilState(answerEditIndexState);

  const onClickUpdateAnswer =
    (useditemQuestionAnswerId: string) =>
    async (data: { contents: string }) => {
      const result = await updateUsedItemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: data.contents,
          },
          useditemQuestionAnswerId,
        },
      });

      alert("수정하였습니다.");
      setEditIndex(-1);
    };

  return {
    onClickUpdateAnswer,
  };
};
