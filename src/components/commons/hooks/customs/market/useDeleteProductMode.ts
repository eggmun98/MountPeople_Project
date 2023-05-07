import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM } from "../../mutation/market/useMutationDeleteUsedItem";
import { useRouter } from "next/router";
import { selectionModalMode } from "../closeModalMode";

export const useDeleteProductMode = (): {
  onClickDeleteProduct: () => Promise<void>;
} => {
  const router = useRouter();
  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);
  const { onClickModal } = selectionModalMode();

  // 상품 게시글 삭제 버튼
  const onClickDeleteProduct = async (): Promise<void> => {
    try {
      await deleteUsedItem({
        variables: {
          useditemId: router.query.page,
        },
      });
      onClickModal("상품을 삭제하였습니다.", "/markets")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return { onClickDeleteProduct };
};
