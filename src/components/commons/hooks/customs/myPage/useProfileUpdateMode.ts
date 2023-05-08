import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { imagesState03 } from "../../../stores";
import { UPDATE_USER } from "../../mutation/myPage/useMutationUpdateUserInput";
import { selectionModalMode } from "../closeModalMode";

export const useProfileUpdateMode = (): {
  onClickUpdate: () => Promise<void>;
} => {
  const [updateUser] = useMutation(UPDATE_USER);
  const [image] = useRecoilState(imagesState03);
  const { onClickModal } = selectionModalMode();

  const onClickUpdate = async (): Promise<void> => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            picture: image,
          },
        },
      });
      onClickModal("프로필을 수정하였습니다.")();
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
  };

  return {
    onClickUpdate,
  };
};
