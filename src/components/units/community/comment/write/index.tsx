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
          <input
            {...register("writer")}
            placeholder="작성자를 입력하세요."
          ></input>
          <input
            {...register("password")}
            placeholder="비밀번호를 입력하세요."
            type="password"
          ></input>
        </CW.TopWrapper>
        <CW.BottomWrapper>
          <input
            {...register("contents")}
            placeholder="내용을 입력하세요."
          ></input>
          <button>등록</button>
        </CW.BottomWrapper>
      </form>
    </CW.Wrapper>
  );
}
