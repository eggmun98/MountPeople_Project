import { Wrapper } from "./styles";
import { IProps } from "./types";

export default function WriteFooter(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <button>{props.isEdit ? "수정" : "등록"}</button>
    </Wrapper>
  );
}
