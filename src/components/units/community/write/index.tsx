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

export default function CommunityWrite(props: IProps): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickCreateBoard } = useCreateBoardMode();
  const { onClickUpdateButton } = useUpdateBoardMode();
  const { data } = useQueryFetchBoard();

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
          {new Array(3).fill("").map((el, dex) => (
            <Uploads01 key={dex}></Uploads01>
          ))}
        </UploadWrapper>
        <WriteFooter isEdit={props.isEdit}></WriteFooter>
      </form>
    </Wrapper>
  );
}
