import { useRouter } from "next/router";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING } from "../../mutation/market/useMutationCreateBuyingAndSelling";
import { useMutation } from "@apollo/client";

export const useBuyingUsedItemMode = (): {
  onClickBuy: () => Promise<void>;
} => {
  const router = useRouter();
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickBuy = async (): Promise<void> => {
    await createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.page,
      },
    });
    alert("상품을 구매하였습니다.");
  };

  return {
    onClickBuy,
  };
};
