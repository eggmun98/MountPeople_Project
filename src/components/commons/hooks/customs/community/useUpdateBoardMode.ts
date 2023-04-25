import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_BOARD } from "../../mutation/community/useMutationUpdateBoard";
import { useRecoilState } from "recoil";
import { addressState, imagesState, zipCodeState } from "../../../stores";
import { IData } from "../../../../units/community/write/types";

export const useUpdateBoardMode = (): {
  onClickUpdateButton: (data: IData) => Promise<void>;
} => {
  const router = useRouter();
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [zipcode] = useRecoilState(zipCodeState);
  const [address] = useRecoilState(addressState);
  const [imageUrls] = useRecoilState(imagesState);

  const onClickUpdateButton = async (data: IData): Promise<void> => {
    await updateBoard({
      variables: {
        boardId: router.query.page,
        password: data.password,
        updateBoardInput: {
          title: data.title,
          contents: data.contents,
          youtubeUrl: data.youtubeUrl,
          images: imageUrls,
          boardAddress: {
            zipcode,
            address,
            addressDetail: data.addressDetail,
          },
        },
      },
    });
  };

  return {
    onClickUpdateButton,
  };
};
