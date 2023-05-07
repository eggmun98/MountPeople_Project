import { useMutation } from "@apollo/client";
import { TOGGLE_USED_ITEM_PICK } from "../../mutation/market/useMutationPickUsedItem";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../query/market/useQueryFetchUsedItem";
import { selectionModalMode } from "../closeModalMode";

export const usePickUsedItemMode = (): {
  onClickPick: () => Promise<void>;
} => {
  const router = useRouter();
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { onClickModal } = selectionModalMode();

  // 상품 찜하기 함수
  const onClickPick = async (): Promise<void> => {
    try {
      await toggleUsedItemPick({
        variables: {
          useditemId: router.query.page,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: router.query.page },
          },
        ],
      });
      onClickModal("상품을 찜하였습니다.")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickPick,
  };
};
