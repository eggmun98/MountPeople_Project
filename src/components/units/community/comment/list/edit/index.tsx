import { useForm } from "react-hook-form";
import * as CE from "../styles";
import { IData, IProps } from "./types";
import { useUpdateBoardCommentMode } from "../../../../../commons/hooks/customs/community/useUpdateBoardCommentMode";

export default function CommentEdit(props: IProps): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickUpdateComment } = useUpdateBoardCommentMode();

  const onClickCancel = (): void => {
    props.setOriginIndex(-1);
  };

  return (
    <CE.CommentWrapper>
      <form
        onSubmit={handleSubmit(onClickUpdateComment(String(props.el?._id)))}
      >
        <CE.TopWrapper>
          <CE.NameWrapper>
            <div>{props.el?.writer}</div>
            <input {...register("password")}></input>
          </CE.NameWrapper>
          <CE.ButtonWrapper>
            <button>수정하기</button>
            <button onClick={onClickCancel} type="button">
              취소하기
            </button>
          </CE.ButtonWrapper>
        </CE.TopWrapper>
        <CE.Input01 {...register("contents")}></CE.Input01>
      </form>
    </CE.CommentWrapper>
  );
}
