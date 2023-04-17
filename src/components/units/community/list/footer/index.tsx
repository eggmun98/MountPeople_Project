import { ButtonWrapper, NumberWrapper, Wrapper } from "./styles";

export default function ListFooter(): JSX.Element {
  return (
    <Wrapper>
      <NumberWrapper>
        <div>{"<"}</div>
        {new Array(10).fill("").map((el, dex) => (
          <div key={dex}>{dex + 1} </div>
        ))}
        <div>{">"}</div>
      </NumberWrapper>
      <ButtonWrapper>
        <button>게시글 작성하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
}
