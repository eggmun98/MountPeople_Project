import { useForm } from "react-hook-form";
import * as CW from "./styles";
import { useCreateBoardCommentMode } from "../../../../commons/hooks/customs/community/useCreateBoardCommentMode";
import { IData } from "./types";

export default function CommentWrite(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<IData>();
  const { onClickCreateCommentButton } = useCreateBoardCommentMode();
  const onSubmit = async (data: IData): Promise<void> => {
    await onClickCreateCommentButton(data);
    reset();
  };

  return (
    <CW.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CW.TopWrapper>
          <input {...register("writer")}></input>
          <input {...register("password")}></input>
        </CW.TopWrapper>
        <CW.BottomWrapper>
          <input {...register("contents")}></input>
          <button>작성하기</button>
        </CW.BottomWrapper>
      </form>
    </CW.Wrapper>
  );
}
