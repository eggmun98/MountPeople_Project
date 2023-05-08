import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../mutation/useMutationLoginUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";
import { IData } from "../../../units/sign/signIn/types";
import { selectionModalMode } from "./closeModalMode";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUsedLoggedIn";

export const useLoginMode = (): {
  onClickLogin: (data: IData) => Promise<void>;
} => {
  const [loginUser] = useMutation(LOGIN_USER);
  const [_, setAccessToken] = useRecoilState(accessTokenState);
  const { onClickModal } = selectionModalMode();

  // 로그인 함수
  const onClickLogin = async (data: IData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        onClickModal("로그인에 실패하였습니다. 다시 시도해주세요!")();
        return;
      }
      setAccessToken(accessToken);
      onClickModal("로그인 하였습니다.", "/communitys")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickLogin,
  };
};
