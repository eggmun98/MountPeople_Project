import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  margin-top: 40px;
  height: 100%;
`;

export const Quill = styled(ReactQuill)`
  border-radius: 5px;
  border: 1px solid #3a6625;
  .ql-toolbar.ql-snow {
    border: none;
  }

  .ql-container.ql-snow {
    border: none;
  }
`;
