import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../mutation/useMutationCreateUser";
import { useRouter } from "next/router";
import { IData } from "../../../units/sign/signUp/types";

export const useSignUpMode = (): {
  onClickSignUp: (data: IData) => Promise<void>;
} => {
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  const onClickSignUp = async (data: IData): Promise<void> => {
    await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    await router.push("/communitys");
  };

  return {
    onClickSignUp,
  };
};
