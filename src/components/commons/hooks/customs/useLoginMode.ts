import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../mutation/useMutationLoginUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../stores";
import { useRouter } from "next/router";
import { IData } from "../../../units/sign/signIn/types";

export const useLoginMode = (): {
  onClickLogin: (data: IData) => Promise<void>;
} => {
  const [loginUser] = useMutation(LOGIN_USER);
  const [_, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const onClickLogin = async (data: IData): Promise<void> => {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;

    if (accessToken === undefined) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요!");
      return;
    }
    setAccessToken(accessToken);
    alert("로그인 하였습니다.");

    await router.push("/communitys");
  };

  return {
    onClickLogin,
  };
};
