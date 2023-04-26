import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_USED_ITEM } from "../../mutation/market/useMutationUpdateUsedItem";

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

  const onClickUpdateProduct = async (data: IData): Promise<void> => {
    try {
      const result = await updateUsedItem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: Number(data.price),
            contents: data.contents,
            tags: data.tags
              .replaceAll(" ", "")
              .split("#")
              .filter((el: string) => el !== "")
              .map((el: string) => "#" + el),
          },
          useditemId: router.query.page,
        },
      });

      alert("상품 수정하였습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return {
    onClickUpdateProduct,
  };
};
