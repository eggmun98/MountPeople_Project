import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM_QUESTION } from "../../mutation/market/useMutationDeleteUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../../query/market/useQueryFetchUseditemQuestions";
import { useRouter } from "next/router";

export const useDeleteQuestionMode = (): {
  onClickDeleteQuestion: (useditemQuestionId: string) => () => Promise<void>;
} => {
  const [deleteUsedItemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const router = useRouter();

  const onClickDeleteQuestion =
    (useditemQuestionId: string) => async (): Promise<void> => {
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
      alert("상품 댓글 삭제하였습니다.");
    };

  return {
    onClickDeleteQuestion,
  };
};
