import { IData } from "../../../../units/community/write";
import { useMutationCrateBoard } from "../../mutation/community/useMutationCrateBoard";

export const useCreateBoardMode = (): {
  onClickCreateBoard: (data: IData) => Promise<void>;
} => {
  const [createBoard] = useMutationCrateBoard();

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
            boardAddress: {
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
