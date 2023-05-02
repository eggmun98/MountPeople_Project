import { useMutation } from "@apollo/client";
import { TOGGLE_USED_ITEM_PICK } from "../../mutation/market/useMutationPickUsedItem";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../query/market/useQueryFetchUsedItem";

export const usePickUsedItemMode = (): {
  onClickPick: () => Promise<void>;
} => {
  const router = useRouter();
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const onClickPick = async (): Promise<void> => {
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
    alert("찜하였습니다.");
  };

  return {
    onClickPick,
  };
};
