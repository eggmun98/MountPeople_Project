import { useRecoilState } from "recoil";
import { IData } from "../../../../units/community/write/types";
import { useMutationCrateBoard } from "../../mutation/community/useMutationCrateBoard";
import { addressState, imagesState, zipCodeState } from "../../../stores";

export const useCreateBoardMode = (): {
  onClickCreateBoard: (data: IData) => Promise<void>;
} => {
  const [createBoard] = useMutationCrateBoard();
  const [zipcode] = useRecoilState(zipCodeState);
  const [address] = useRecoilState(addressState);
  const [imageUrls] = useRecoilState(imagesState);

  const onClickCreateBoard = async (data: IData): Promise<void> => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: String(data.title),
            password: data.password,
            contents: String(data.contents),
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
      alert("게시글 작성하였습니다.");
    } catch (error) {
      console.error(error);
    }
  };
  return {
    onClickCreateBoard,
  };
};
