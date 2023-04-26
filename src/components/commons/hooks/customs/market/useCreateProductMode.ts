import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "../../mutation/market/useMutationCreateUseditem";
import { useRouter } from "next/router";

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
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const router = useRouter();

  const onClickCreateProduct = async (data: IData): Promise<void> => {
    const result = await createUsedItem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          price: Number(data.price),
          contents: data.contents,
          tags: data.tags
            .replaceAll(" ", "")
            .split("#")
            .filter((el: string) => el !== "")
            .map((el) => "#" + el),
        },
      },
    });
    alert("상품 등록하였습니다.");
  };

  return {
    onClickCreateProduct,
  };
};
