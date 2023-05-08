import { useRecoilState } from "recoil";
import { selectionModalMode } from "../closeModalMode";
import { imagesState03 } from "../../../stores";
import { UPLOAD_FILE } from "../../mutation/useMutationUploadFile";
import { useMutation } from "@apollo/client";
import { ChangeEvent } from "react";
import { useProfileUpdateMode } from "./useProfileUpdateMode";

export const useImageUploadMode = (): {
  onChangeImageUpload: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickImageNonoMode: (ref: React.RefObject<HTMLDivElement>) => () => void;
} => {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [, setImageUrl] = useRecoilState(imagesState03);
  const { onClickUpdate } = useProfileUpdateMode();
  const { onClickModal } = selectionModalMode();

  const onChangeImageUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    try {
      const result = await uploadFile({
        variables: { file },
      });
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) onClickModal(error.message)();
    }
    await onClickUpdate();
  };

  const onClickImageNonoMode =
    (ref: React.RefObject<HTMLDivElement>) => (): void => {
      if (ref.current !== null) {
        ref.current.click();
      }
    };

  return {
    onChangeImageUpload,
    onClickImageNonoMode,
  };
};
