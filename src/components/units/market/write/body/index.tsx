import { Quill, Wrapper } from "./styles";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../../../../commons/libraries/modules";
import { IProps } from "../header/types";

export default function WriteBody(props: IProps): JSX.Element {
  const onChangeContents = (value: string): void => {
    props.setValue("contents", value);
  };
  return (
    <Wrapper>
      <Quill modules={modules} onChange={onChangeContents}></Quill>
    </Wrapper>
  );
}
