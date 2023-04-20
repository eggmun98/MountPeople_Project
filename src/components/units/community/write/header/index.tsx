import * as W from "./styles";
import { IProps } from "./types";

export default function WriteHeader(props: IProps): JSX.Element {
  return (
    <W.Wrapper>
      <W.TextWrapper>
        <h1>게시글 등록</h1>
      </W.TextWrapper>
      <W.WriteWrapper>
        <input {...props.register("writer")}></input>
        <input {...props.register("password")}></input>
      </W.WriteWrapper>
      <W.InputWrapper01>
        <input {...props.register("title")}></input>
      </W.InputWrapper01>
      <W.ContentsWrapper>
        <textarea {...props.register("contents")}></textarea>
      </W.ContentsWrapper>
      <W.InputWrapper01>
        <input {...props.register("youtubeUrl")}></input>
      </W.InputWrapper01>
    </W.Wrapper>
  );
}
