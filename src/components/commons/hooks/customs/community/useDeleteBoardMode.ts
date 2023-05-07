import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOARD } from "../../mutation/community/useMutationDeleteBoard";
import { selectionModalMode } from "../closeModalMode";

export const useDeleteBoardMode = (): {
  onClickDeleteButton: () => Promise<void>;
} => {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { onClickModal } = selectionModalMode();

  // 게시글 삭제 함수
  const onClickDeleteButton = async (): Promise<void> => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.page,
        },
      });
      onClickModal("게시글을 삭제하였습니다.", "/communitys")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };
  return { onClickDeleteButton };
};
