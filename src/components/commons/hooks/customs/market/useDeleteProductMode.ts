import { useMutation } from "@apollo/client";
import { DELETE_USED_ITEM } from "../../mutation/market/useMutationDeleteUsedItem";
import { useRouter } from "next/router";

export const useDeleteProductMode = (): {
  onClickDeleteProduct: () => Promise<void>;
} => {
  const router = useRouter();

  const [deleteUsedItem] = useMutation(DELETE_USED_ITEM);

  // 상품 게시글 삭제 버튼
  const onClickDeleteProduct = async (): Promise<void> => {
    await deleteUsedItem({
      variables: {
        useditemId: router.query.page,
      },
    });
    alert("글이 삭제되었습니다.");
    await router.push("/markets");
  };
  return { onClickDeleteProduct };
};
