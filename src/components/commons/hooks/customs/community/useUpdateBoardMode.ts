import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { UPDATE_BOARD } from "../../mutation/community/useMutationUpdateBoard";
import { useRecoilState } from "recoil";
import { addressState, zipCodeState } from "../../../stores";

export const useUpdateBoardMode = () => {
  const router = useRouter();
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [zipcode] = useRecoilState(zipCodeState);
  const [address] = useRecoilState(addressState);

  const onClickUpdateButton = async (data) => {
    await updateBoard({
      variables: {
        boardId: router.query.page,
        password: data.password,
        updateBoardInput: {
          title: data.title,
          contents: data.contents,
          youtubeUrl: data.youtubeUrl,
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
