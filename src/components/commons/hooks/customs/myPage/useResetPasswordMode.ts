import { useMutation } from "@apollo/client";
import { RESET_USER_PASSWORD } from "../../mutation/myPage/useMutationResetUserPassword";

export const useResetPasswordMode = () => {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  const onClickPasswordEdit = (password: string) => async () => {
    await resetUserPassword({
      variables: {
        password,
      },
    });
    alert("비밀번호를 변경하였습니다.");
  };

  return {
    onClickPasswordEdit,
  };
};
