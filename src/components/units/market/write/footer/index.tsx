import { Wrapper } from "./styles";

export default function WriteFooter(props: { isEdit: boolean }): JSX.Element {
  return (
    <Wrapper>
      <button>{props.isEdit ? "상품 수정" : "상품 등록"}</button>
    </Wrapper>
  );
}
