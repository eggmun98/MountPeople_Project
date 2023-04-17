import { ContentsWrapper, TitleWrapper, Wrapper } from "./styles";

export default function ListBody(): JSX.Element {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>번호</h1>
        <h1>제목</h1>
        <h1>작성자</h1>
        <h1>날짜</h1>
      </TitleWrapper>
      {new Array(10).fill("").map((_, dex) => (
        <ContentsWrapper key={dex}>
          <p>{dex + 1}</p>
          <p>오늘 같이 등산 가실분</p>
          <p>문성진</p>
          <p>2023.04.{dex + 10}</p>
        </ContentsWrapper>
      ))}
    </Wrapper>
  );
}
