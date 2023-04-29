import { useForm } from "react-hook-form";
import * as A from "../styles";
import { useUpdateAnswerMode } from "../../../../../../../commons/hooks/customs/market/useUpdateAnswerMode";

export default function AnswerEdit(props): JSX.Element {
  const { handleSubmit, register } = useForm();
  const { onClickUpdateAnswer } = useUpdateAnswerMode();

  return (
    <A.Wrapper>
      <A.LeftWrapper>
        <div></div>
      </A.LeftWrapper>
      <A.AnswerWrapper>
        <form
          onSubmit={handleSubmit(
            onClickUpdateAnswer(props.el._id, props.questionId)
          )}
        >
          <A.TopWrapper>
            <div></div>
            <A.ButtonWrapper>
              <button>수정하기</button>
              <button type="button">취소하기</button>
            </A.ButtonWrapper>
          </A.TopWrapper>
          <A.Input01
            {...register("contents")}
            defaultValue={props.el.contents}
          ></A.Input01>
        </form>
      </A.AnswerWrapper>
    </A.Wrapper>
  );
}
