import * as A from "./styles";

export default function AnswerList(): JSX.Element {
  return (
    <>
      <A.Wrapper>
        <A.LeftWrapper>
          <div></div>
        </A.LeftWrapper>
        <A.AnswerWrapper>
          <A.TopWrapper>
            <A.NameWrapper>
              <p>문성진</p>
              {/* <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p> */}
            </A.NameWrapper>
            <A.ButtonWrapper>
              <button>답변달기</button>
              <button>수정하기</button>
              <button>삭제하기</button>
            </A.ButtonWrapper>
          </A.TopWrapper>
          <A.BottomWrapper>
            {"대대대대대대대댓글입니다~~~~~~~~~~~~"}
          </A.BottomWrapper>
        </A.AnswerWrapper>
      </A.Wrapper>

      <A.Wrapper>
        <A.LeftWrapper>
          <div></div>
        </A.LeftWrapper>
        <A.AnswerWrapper>
          <form>
            <A.TopWrapper>
              <div></div>
              <A.ButtonWrapper>
                <button>수정하기</button>
                <button type="button">취소하기</button>
              </A.ButtonWrapper>
            </A.TopWrapper>
            <A.Input01></A.Input01>
          </form>
        </A.AnswerWrapper>
      </A.Wrapper>
    </>
  );
}
