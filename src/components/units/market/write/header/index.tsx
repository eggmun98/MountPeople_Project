import * as D from "./styles";

export default function WriteHeader(): JSX.Element {
  return (
    <D.Wrapper>
      <D.MainImgWrapper>
        <D.ImgWrapper></D.ImgWrapper>
      </D.MainImgWrapper>
      <D.ContentsWrapper>
        <input placeholder="상품 명을 입력하세요."></input>
        <input placeholder="상품 가격을 입력하세요."></input>
        <input placeholder="상품 요약을 입력하세요."></input>
        <input placeholder="#을 기준으로 태그를 입력하세요."></input>
      </D.ContentsWrapper>
    </D.Wrapper>
  );
}
