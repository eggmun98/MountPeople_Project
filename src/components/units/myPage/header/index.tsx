import * as M from "./styles";

export default function MyPageHeader(): JSX.Element {
  return (
    <M.Wrapper>
      <h1>내 상품</h1>
      <h1>찜 목록</h1>
      <h1>오늘 본 상품</h1>
    </M.Wrapper>
  );
}
