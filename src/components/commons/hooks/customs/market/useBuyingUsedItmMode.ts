import { useRouter } from "next/router";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "../../mutation/market/useMutationCreateBuyingAndSelling";
import { useMutation } from "@apollo/client";
import { selectionModalMode } from "../closeModalMode";
import { FETCH_USED_ITEMS } from "../../query/market/useQueryFetchUsedItems";

export const useBuyingUsedItemMode = (): {
  onClickBuy: () => Promise<void>;
} => {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const { onClickModal } = selectionModalMode();

  // 상품 구매 함수
  const onClickBuy = async (): Promise<void> => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.page,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      onClickModal("상품을 구매하였습니다.", "/markets")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message, "/markets")();
    }
  };

  return {
    onClickBuy,
  };
};
