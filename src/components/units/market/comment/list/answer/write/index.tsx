import { useRecoilState } from "recoil";
import * as A from "../list/styles";
import { answerIndexState } from "../../../../../../commons/stores";
import { useForm } from "react-hook-form";
import { useCreateAnswerMode } from "../../../../../../commons/hooks/customs/market/useCrateAnswerMode";

export default function AnswerWrite(props): JSX.Element {
  const [queAnswerIndex, setAnswerIndex] = useRecoilState(answerIndexState);
  const { handleSubmit, register } = useForm();
  const { onClickCreateAnswer } = useCreateAnswerMode();

  const onClickCancel = (): void => {
    setAnswerIndex(-1);
  };

  return (
    <A.Wrapper>
      <A.LeftWrapper>
        <div></div>
      </A.LeftWrapper>
      <A.AnswerWrapper>
        <form onSubmit={handleSubmit(onClickCreateAnswer(props.el))}>
          <A.TopWrapper>
            <div></div>
            <A.ButtonWrapper>
              <button>작성하기</button>
              <button type="button" onClick={onClickCancel}>
                취소하기
              </button>
            </A.ButtonWrapper>
          </A.TopWrapper>
          <A.Input01 {...register("contents")}></A.Input01>
        </form>
      </A.AnswerWrapper>
    </A.Wrapper>
  );
}
