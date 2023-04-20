import WriteHeader from "./header";
import WriteFooter from "./footer";
import WriteBody from "./body";
import { UploadWrapper, Wrapper } from "./styles";
import Uploads01 from "../../../commons/uploads/01";
import { useForm } from "react-hook-form";
import { useCreateBoardMode } from "../../../commons/hooks/customs/useCrateBoardMode";

export interface IData {
  writer?: string;
  title?: string;
  password?: string;
  contents?: string;
  youtubeUrl?: string;
  addressDetail?: string;
}

export default function CommunityWrite(): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickCreateBoard } = useCreateBoardMode();
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickCreateBoard)}>
        <WriteHeader register={register}></WriteHeader>
        <WriteBody register={register}></WriteBody>
        <UploadWrapper>
          {new Array(3).fill("").map((el, dex) => (
            <Uploads01 key={dex}></Uploads01>
          ))}
        </UploadWrapper>
        <WriteFooter></WriteFooter>
      </form>
    </Wrapper>
  );
}
