import { useMutation } from "@apollo/client";
import { RESET_USER_PASSWORD } from "../../mutation/myPage/useMutationResetUserPassword";
import { openModalMode } from "./openModalMOde";
import { useRecoilState } from "recoil";
import { isModalState, messageState } from "../../../stores";

export const useResetPasswordMode = (): {
  onClickPasswordEdit: (data: { pass: string }) => Promise<void>;
} => {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const { onClickCloseModal } = openModalMode();
  const [_, setIsModal] = useRecoilState(isModalState);
  const [__, setIsMessage] = useRecoilState(messageState);

  const onClickPasswordEdit = async (data: { pass: string }): Promise<void> => {
    await resetUserPassword({
      variables: {
        password: data.pass,
      },
    });
    onClickCloseModal();
    setIsModal(true);
    setIsMessage("비밀번호를 변경하였습니다.");
  };

  return {
    onClickPasswordEdit,
  };
};
