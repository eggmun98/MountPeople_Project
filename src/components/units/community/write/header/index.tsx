import * as W from "./styles";

export default function WriteHeader(): JSX.Element {
  return (
    <W.Wrapper>
      <W.TextWrapper>
        <h1>게시글 등록</h1>
      </W.TextWrapper>
      <W.WriteWrapper>
        <input></input>
        <input></input>
      </W.WriteWrapper>
      <W.InputWrapper01>
        <input></input>
      </W.InputWrapper01>
      <W.ContentsWrapper>
        <textarea></textarea>
      </W.ContentsWrapper>
      <W.InputWrapper01>
        <input></input>
      </W.InputWrapper01>
    </W.Wrapper>
  );
}
