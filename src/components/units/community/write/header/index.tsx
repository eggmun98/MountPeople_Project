import * as W from "./styles";
import { IProps } from "./types";

export default function WriteHeader(props: IProps): JSX.Element {
  return (
    <W.Wrapper>
      <W.TextWrapper>
        <h1>{props.isEdit ? "게시글 수정" : "게시글 등록"}</h1>
      </W.TextWrapper>
      <W.WriteWrapper>
        <input
          {...props.register("writer")}
          defaultValue={String(props.data?.fetchBoard.writer)}
        ></input>
        <input {...props.register("password")}></input>
      </W.WriteWrapper>
      <W.InputWrapper01>
        <input
          {...props.register("title")}
          defaultValue={props.data?.fetchBoard.title}
        ></input>
      </W.InputWrapper01>
      <W.ContentsWrapper>
        <textarea
          {...props.register("contents")}
          defaultValue={props.data?.fetchBoard?.contents}
        ></textarea>
      </W.ContentsWrapper>
      <W.InputWrapper01>
        <input
          {...props.register("youtubeUrl")}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
        ></input>
      </W.InputWrapper01>
    </W.Wrapper>
  );
}
