import { useQueryFetchBoard } from "../../../../commons/hooks/query/community/useQueryFetchBoard";
import * as D from "./styles";

export default function DetailHeader(): JSX.Element {
  const { data } = useQueryFetchBoard();

  return (
    <D.Wrapper>
      <D.TitleWrapper>
        <h1>{data?.fetchBoard.title}</h1>
        <p>{data?.fetchBoard.writer}</p>
      </D.TitleWrapper>
      <D.ContentWrapper>
        <div>{data?.fetchBoard.contents}</div>
        <div>
          {data?.fetchBoard.createdAt.slice(0, 10).replaceAll("-", ".")}
        </div>
      </D.ContentWrapper>
      {data?.fetchBoard.images
        ?.filter((el: string) => el)
        .map((el: string, dex: number) => (
          <D.ImageWrapper key={dex}>
            <img src={`https://storage.googleapis.com/${el}`}></img>
          </D.ImageWrapper>
        ))}
    </D.Wrapper>
  );
}
