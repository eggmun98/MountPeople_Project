import { useForm } from "react-hook-form";
import * as CW from "./styles";
import { useCreateBoardCommentMode } from "../../../../commons/hooks/customs/community/useCreateBoardCommentMode";
import { IData } from "./types";

export default function CommentWrite(): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickCreateCommentButton } = useCreateBoardCommentMode();

  return (
    <CW.Wrapper>
      <form onSubmit={handleSubmit(onClickCreateCommentButton)}>
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
