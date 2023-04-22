import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD } from "../../mutation/community/useMutationDeleteBoard";

export const useDeleteBoardMode = (): {
  onClickDeleteButton: () => Promise<void>;
} => {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDeleteButton = async (): Promise<void> => {
    await deleteBoard({
      variables: {
        boardId: router.query.page,
      },
    });
    alert("삭제 하였습니다.");
  };
  return { onClickDeleteButton };
};
