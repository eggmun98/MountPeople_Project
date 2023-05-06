import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutation/useMutationCreateUser";
import { IData } from "../../../units/sign/signUp/types";
import { selectionModalMode } from "./closeModalMode";

export const useSignUpMode = (): {
  onClickSignUp: (data: IData) => Promise<void>;
} => {
  const [createUser] = useMutation(CREATE_USER);
  const { onClickModal } = selectionModalMode();

  // 회원가입 함수
  const onClickSignUp = async (data: IData): Promise<void> => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      onClickModal("회원가입 하였습니다.", "/communitys")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickSignUp,
  };
};
