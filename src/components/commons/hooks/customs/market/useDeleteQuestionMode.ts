import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM_QUESTION } from "../../mutation/market/useMutationDeleteUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../../query/market/useQueryFetchUseditemQuestions";
import { useRouter } from "next/router";
import { selectionModalMode } from "../closeModalMode";

export const useDeleteQuestionMode = (): {
  onClickDeleteQuestion: (useditemQuestionId: string) => () => Promise<void>;
} => {
  const router = useRouter();
  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const { onClickModal } = selectionModalMode();

  // 상품 댓글 삭제 함수
  const onClickDeleteQuestion =
    (useditemQuestionId: string) => async (): Promise<void> => {
      try {
        await deleteUsedItemQuestion({
          variables: {
            useditemQuestionId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: { useditemId: router.query.page },
            },
          ],
        });
        onClickModal("댓글을 삭제하였습니다.")();
      } catch (error) {
        if (error instanceof Error) onClickModal(error.message)();
      }
    };

  return {
    onClickDeleteQuestion,
  };
};
