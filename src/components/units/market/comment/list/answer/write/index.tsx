import * as A from "../list/styles";

export default function AnswerWrite(): JSX.Element {
  return (
    <A.Wrapper>
      <A.LeftWrapper>
        <div></div>
      </A.LeftWrapper>
      <A.AnswerWrapper>
        <form>
          <A.TopWrapper>
            <div></div>
            <A.ButtonWrapper>
              <button>작성하기</button>
              <button type="button">취소하기</button>
            </A.ButtonWrapper>
          </A.TopWrapper>
          <A.Input01></A.Input01>
        </form>
      </A.AnswerWrapper>
    </A.Wrapper>
  );
}
