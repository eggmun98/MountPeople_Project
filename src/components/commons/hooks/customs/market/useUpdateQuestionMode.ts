import { useRecoilState } from "recoil";
import { originIndexState02 } from "../../../stores";
import { FETCH_USED_ITEM_QUESTIONS } from "../../query/market/useQueryFetchUseditemQuestions";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { UPDATE_USED_ITEM_QUESTION } from "../../mutation/market/useMutationUpdateUseditemQuestion";

export const useUpdateQuestionMode = (): {
  onClickUpdateQuestion: (
    useditemQuestionId: string
  ) => (data: { contents: string }) => Promise<void>;
} => {
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [_, setOriginIndex] = useRecoilState(originIndexState02);
  const router = useRouter();

  const onClickUpdateQuestion =
    (useditemQuestionId: string) =>
    async (data: { contents: string }): Promise<void> => {
      const result = await updateUsedItem({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.page },
          },
        ],
      });
      alert("수정하였습니다.");
      setOriginIndex(-1);
    };

  return {
    onClickUpdateQuestion,
  };
};
