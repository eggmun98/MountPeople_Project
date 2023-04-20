import * as W from "./styles";
import { IProps } from "./types";

export default function WriteBody(props: IProps): JSX.Element {
  return (
    <W.Wrapper>
      <W.TopWrapper>
        <input></input>
        <button>등록</button>
      </W.TopWrapper>
      <W.InputWrapper01>
        <input></input>
      </W.InputWrapper01>
      <W.InputWrapper01>
        <input {...props.register("addressDetail")}></input>
      </W.InputWrapper01>
    </W.Wrapper>
  );
}
