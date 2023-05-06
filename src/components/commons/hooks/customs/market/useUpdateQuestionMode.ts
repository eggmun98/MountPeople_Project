import { useRecoilState } from "recoil";
import { originIndexState02 } from "../../../stores";
import { FETCH_USED_ITEM_QUESTIONS } from "../../query/market/useQueryFetchUseditemQuestions";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { UPDATE_USED_ITEM_QUESTION } from "../../mutation/market/useMutationUpdateUseditemQuestion";
import { selectionModalMode } from "../closeModalMode";

export const useUpdateQuestionMode = (): {
  onClickUpdateQuestion: (
    useditemQuestionId: string
  ) => (data: { contents: string }) => Promise<void>;
} => {
  const router = useRouter();
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [_, setOriginIndex] = useRecoilState(originIndexState02);
  const { onClickModal } = selectionModalMode();

  // 상품 댓글 수정 함수
  const onClickUpdateQuestion =
    (useditemQuestionId: string) =>
    async (data: { contents: string }): Promise<void> => {
      try {
        await updateUsedItem({
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
        onClickModal("댓글을 수정하였습니다.")();
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }
      setOriginIndex(-1);
    };

  return {
    onClickUpdateQuestion,
  };
};
