import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM_QUESTION } from "../../mutation/market/useMutationCreateUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../../query/market/useQueryFetchUseditemQuestions";
import { selectionModalMode } from "../closeModalMode";

export const useCreateQuestionMode = (): {
  onClickCreateQuestion: (data: { contents: string }) => Promise<void>;
} => {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const { onClickModal } = selectionModalMode();

  // 상품 댓글 작성 함수
  const onClickCreateQuestion = async (data: {
    contents: string;
  }): Promise<void> => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.page,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.page },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickCreateQuestion,
  };
};
