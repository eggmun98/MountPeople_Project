import WriteHeader from "./header";
import WriteFooter from "./footer";
import WriteBody from "./body";
import { UploadWrapper, Wrapper } from "./styles";
import Uploads01 from "../../../commons/uploads/01";
import { useForm } from "react-hook-form";
import { useCreateBoardMode } from "../../../commons/hooks/customs/community/useCrateBoardMode";
import { IData, IProps } from "./types";
import { useQueryFetchBoard } from "../../../commons/hooks/query/community/useQueryFetchBoard";
import { useUpdateBoardMode } from "../../../commons/hooks/customs/community/useUpdateBoardMode";
import { useRecoilState } from "recoil";
import { imagesState } from "../../../commons/stores";
import { useEffect } from "react";

export default function CommunityWrite(props: IProps): JSX.Element {
  const { register, handleSubmit, setValue } = useForm<IData>();
  const { onClickCreateBoard } = useCreateBoardMode();
  const { onClickUpdateButton } = useUpdateBoardMode();
  const { data } = useQueryFetchBoard();
  const [imageUrls, setImageUrls] = useRecoilState(imagesState);

  useEffect(() => {
    if (props.isEdit) {
      const images = data?.fetchBoard.images;
      if (images !== undefined && images !== null) setImageUrls([...images]);
    }
  }, [data]);

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit(
          props.isEdit ? onClickUpdateButton : onClickCreateBoard
        )}
      >
        <WriteHeader
          register={register}
          isEdit={props.isEdit}
          data={data}
        ></WriteHeader>
        <WriteBody register={register} data={data}></WriteBody>
        <UploadWrapper>
          {imageUrls.map((el, index) => (
            <Uploads01
              key={index}
              el={el}
              index={index}
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
            ></Uploads01>
          ))}
        </UploadWrapper>
        <WriteFooter isEdit={props.isEdit}></WriteFooter>
      </form>
    </Wrapper>
  );
}
