import { Quill, Wrapper } from "./styles";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../../../../commons/libraries/modules";
import { useState } from "react";
import { IProps } from "./types";

export default function WriteBody(props: IProps): JSX.Element {
  const [contents, setContents] = useState("");

  const onChangeContents = (value: string): void => {
    props.setValue(
      "contents",
      value === "<p><br></p>"
        ? props.data?.fetchUseditem?.contents ?? ""
        : value
    );
    setContents(
      value === "<p><br>p>" ? props.data?.fetchUseditem.contents ?? "" : value
    );
  };
  return (
    <Wrapper>
      <Quill
        modules={modules}
        onChange={onChangeContents}
        value={contents ? contents : props.data?.fetchUseditem.contents}
      ></Quill>
    </Wrapper>
  );
}
