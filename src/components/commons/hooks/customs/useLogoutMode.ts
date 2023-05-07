import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../mutation/useMutationLogoutUser";
import { IMutation } from "../../../../commons/types/generated/types";
import { selectionModalMode } from "./closeModalMode";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUsedLoggedIn";

export const useLogoutMode = (): {
  onClickLogout: () => Promise<void>;
} => {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { onClickModal } = selectionModalMode();

  // 로그아웃 버튼
  const onClickLogout = async (): Promise<void> => {
    try {
      await logoutUser({
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      onClickModal("로그아웃 하였습니다.", "/")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickLogout,
  };
};
