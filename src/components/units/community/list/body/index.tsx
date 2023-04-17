import { ContentsWrapper, Wrapper } from "./styles";

export default function ListBody(): JSX.Element {
  return (
    <Wrapper>
      <ContentsWrapper>
        <p>번호</p>
        <p>제목</p>
        <p>작성자</p>
        <p>날짜</p>
      </ContentsWrapper>
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
