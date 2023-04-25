import { Quill, Wrapper } from "./styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../../../../commons/libraries/modules";

export default function WriteBody(): JSX.Element {
  return (
    <Wrapper>
      <Quill modules={modules}></Quill>
    </Wrapper>
  );
}
