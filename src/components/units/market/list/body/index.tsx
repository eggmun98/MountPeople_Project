import * as L from "./styles";

export default function ListBody(): JSX.Element {
  return (
    <L.Wrapper>
      <L.TitleWrapper>
        <h1>오늘의 인기 등산물품</h1>
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
