import { ContentsWrapper, ImgWrapper, Wrapper } from "./styles";

export default function DetailBody(): JSX.Element {
  return (
    <Wrapper>
      <ImgWrapper>
        <div></div>
        <div></div>
        <div></div>
      </ImgWrapper>
      <ContentsWrapper>
        제가 산에서 직접 공수해서 만든 등산 스틱입니다. 최고급 나무를 이용해서
        장인의 마음으로 한땀한땀 깎아서 만들었습니다. 지금 당장 사시면 10%
        할인해드리겠습니다~
      </ContentsWrapper>
    </Wrapper>
  );
}
