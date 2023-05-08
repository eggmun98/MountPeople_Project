import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../mutation/useMutationLogoutUser";
import { IMutation } from "../../../../commons/types/generated/types";
import { selectionModalMode } from "./closeModalMode";

export const useLogoutMode = (): {
  onClickLogout: () => Promise<void>;
} => {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { onClickModal } = selectionModalMode();

  // 로그아웃 함수
  const onClickLogout = async (): Promise<void> => {
    try {
      await logoutUser();
      onClickModal("로그아웃 하였습니다.", "/communitys")();
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickLogout,
  };
};
