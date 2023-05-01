import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";
import * as L from "./styles";

export default function ListBody(): JSX.Element {
  const { onClickMovePage } = movePageMode();

  return (
    <L.Wrapper>
      <L.TitleWrapper>
        <h1>오늘의 인기 등산물품</h1>
        <button onClick={onClickMovePage("/markets/new")}>상품 등록</button>
      </L.TitleWrapper>
      <L.ListWrapper>
        <L.ProductWrapper></L.ProductWrapper>
        <L.ProductWrapper></L.ProductWrapper>
        <L.ProductWrapper></L.ProductWrapper>
        <L.ProductWrapper></L.ProductWrapper>
      </L.ListWrapper>
    </L.Wrapper>
  );
}
