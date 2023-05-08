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
          defaultValue={String(props.data?.fetchBoard.writer ?? "")}
          placeholder="작성자를 입력하세요."
        ></input>
        <input
          {...props.register("password")}
          placeholder="비밀번호를 입력하세요."
        ></input>
      </W.WriteWrapper>
      <W.InputWrapper01>
        <input
          {...props.register("title")}
          defaultValue={props.data?.fetchBoard.title}
          placeholder="제목을 입력하세요."
        ></input>
      </W.InputWrapper01>
      <W.ContentsWrapper>
        <textarea
          {...props.register("contents")}
          defaultValue={props.data?.fetchBoard?.contents}
          placeholder="내용을 입력하세요."
        ></textarea>
      </W.ContentsWrapper>
      <W.InputWrapper01>
        <input
          {...props.register("youtubeUrl")}
          defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
          placeholder="YouTuBe URL을 입력하세요."
        ></input>
      </W.InputWrapper01>
    </W.Wrapper>
  );
}
