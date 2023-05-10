import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_USED_ITEM } from "../../mutation/market/useMutationUpdateUsedItem";
import { imagesState02 } from "../../../stores";
import { useRecoilState } from "recoil";
import { selectionModalMode } from "../closeModalMode";
import { FETCH_USED_ITEM } from "../../query/market/useQueryFetchUsedItem";
import { FETCH_USED_ITEMS } from "../../query/market/useQueryFetchUsedItems";

interface IData {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  tags: string;
}

export const useUpdateProductMode = (): {
  onClickUpdateProduct: (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  const [imageUrls] = useRecoilState(imagesState02);
  const { onClickModal } = selectionModalMode();

  // 상품 수정 함수
  const onClickUpdateProduct = async (data: IData): Promise<void> => {
    if (!data.name) return onClickModal("상품명을 입력해 주세요.")();
    if (!data.price) return onClickModal("가격을 입력해 주세요.")();
    if (!data.contents) return onClickModal("내용을 입력해 주세요.")();

    try {
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
            images: imageUrls,
            tags: data.tags
              .replaceAll(" ", "")
              .split("#")
              .filter((el: string) => el !== "")
              .map((el: string) => "#" + el),
          },
          useditemId: router.query.page,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.page,
            },
          },
          {
            query: FETCH_USED_ITEMS,
          },
        ],
      });
      onClickModal(
        "상품을 수정하였습니다.",
        `/markets/market/${String(result.data.updateUseditem._id)}`
      )();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickUpdateProduct,
  };
};
