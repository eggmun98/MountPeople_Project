import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "../../mutation/market/useMutationCreateUseditem";
import { useRouter } from "next/router";
import { imagesState02 } from "../../../stores";
import { useRecoilState } from "recoil";
import { selectionModalMode } from "../closeModalMode";
import { FETCH_USED_ITEMS } from "../../query/market/useQueryFetchUsedItems";

interface IData {
  name: string;
  remarks: string;
  price: number;
  contents: string;
  tags: string;
}

export const useCreateProductMode = (): {
  onClickCreateProduct: (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [imageUrls] = useRecoilState(imagesState02);
  const { onClickModal } = selectionModalMode();

  // 상품 작성 함수
  const onClickCreateProduct = async (data: IData): Promise<void> => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
            images: imageUrls,
            tags: data.tags
              .replaceAll(" ", "")
              .split("#")
              .filter((el: string) => el !== "")
              .map((el) => "#" + el),
          },
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS,
            variables: {
              useditemId: router.query.page,
            },
          },
        ],
      });
      onClickModal(
        "상품을 등록하였습니다.",
        `/markets/market/${String(result.data.createUseditem._id)}`
      )();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message, "/markets")();
    }
  };

  return {
    onClickCreateProduct,
  };
};
