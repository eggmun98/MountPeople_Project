import * as D from "./styles";

export default function DetailHeader(): JSX.Element {
  return (
    <D.Wrapper>
      <D.TitleWrapper>
        <h1>관악산 후기</h1>
        <p>문성진</p>
      </D.TitleWrapper>
      <D.ContentWrapper>
        <div>
          부자와 당나귀 어느날 아버지와 아들이 당나귀를 시장에 팔러 갔는데 어는
          처녀들이 어 당나귀다로 그랬다. 그러자 아들이 이 당나귀는 세상에서 가장
          귀한 당나귀라고 하였다. 그러자 어느 처녀들은 이 당나귀를 갖고 싶다고
          그랬다. 하지만 아버지와 아들은 당나귀를 더 비싸게 팔고 싶어 가격을
          비싸게 올렸다. 그러자 어느 처녀들은 너무 비싸다고하여 안산다고 하였다.
        </div>
        <div>2024.05.10</div>
      </D.ContentWrapper>
      <D.ImageWrapper>
        <div></div>
      </D.ImageWrapper>
      <D.ImageWrapper>
        <div></div>
      </D.ImageWrapper>
      <D.ImageWrapper>
        <div></div>
      </D.ImageWrapper>
    </D.Wrapper>
  );
}
