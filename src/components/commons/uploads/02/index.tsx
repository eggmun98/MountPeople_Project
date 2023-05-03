import { ChangeEvent, useRef } from "react";
import * as U from "./styles";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../../hooks/mutation/useMutationUploadFile";
import { IProps } from "./types";

export default function Uploads02(props: IProps): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeImageUpload =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0];
      const result = await uploadFile({
        variables: { file },
      });
      onChangeImageUrls(result.data?.uploadFile.url, index);
    };

  const onChangeImageUrls = (imageUrl: string, index: number): void => {
    const newImageUrls = [...props.imageUrls];
    newImageUrls[index] = imageUrl;
    props.setImageUrls(newImageUrls);
  };

  const onClickImageNonoMode = (): void => {
    if (fileRef.current !== null) {
      fileRef.current.click();
    }
  };

  return (
    <U.Wrapper>
      {props.el !== "" ? (
        <U.Image
          src={"https:/storage.googleapis.com/" + props.imageUrls[props.index]}
          onClick={onClickImageNonoMode}
        ></U.Image>
      ) : (
        <U.ImageBox onClick={onClickImageNonoMode}>+</U.ImageBox>
      )}

      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={onChangeImageUpload(props.index)}
      ></input>
    </U.Wrapper>
  );
}
