import { useForm } from "react-hook-form";
import * as CE from "../styles";
import { IData, IProps } from "./types";
import { useUpdateQuestionMode } from "../../../../../commons/hooks/customs/market/useUpdateQuestionMode";

export default function CommentEdit(props: IProps): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickUpdateQuestion } = useUpdateQuestionMode();

  const onClickCancel = (): void => {
    props.setOriginIndex(-1);
  };

  return (
    <CE.CommentWrapper>
      <form
        onSubmit={handleSubmit(onClickUpdateQuestion(String(props.el?._id)))}
      >
        <CE.TopWrapper>
          <div></div>
          <CE.ButtonWrapper>
            <button>수정완료</button>
            <button onClick={onClickCancel} type="button">
              취소하기
            </button>
          </CE.ButtonWrapper>
        </CE.TopWrapper>
        <CE.Input01
          {...register("contents")}
          defaultValue={props.el?.contents}
        ></CE.Input01>
      </form>
    </CE.CommentWrapper>
  );
}
