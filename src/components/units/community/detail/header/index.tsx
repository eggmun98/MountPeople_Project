import { useQuery } from "@apollo/client";
import { useQueryFetchBoard } from "../../../../commons/hooks/query/community/useQueryFetchBoard";
import * as D from "./styles";
import { IQuery } from "../../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/hooks/query/useQueryFetchUsedLoggedIn";

export default function DetailHeader(): JSX.Element {
  const { data } = useQueryFetchBoard();
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <D.Wrapper>
      <D.TitleWrapper>
        <h1> {data?.fetchBoard.title}</h1>
        <div>
          <p>작성자: {data?.fetchBoard.writer}</p>
          <p>{data?.fetchBoard.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
        </div>
      </D.TitleWrapper>
      <D.ContentWrapper>
        <p> {data?.fetchBoard.contents}</p>
      </D.ContentWrapper>
      {data?.fetchBoard.images
        ?.filter((el: string) => el)
        .map((el: string, dex: number) => (
          <D.ImageWrapper key={dex}>
            <img src={`https://storage.googleapis.com/${el}`}></img>
          </D.ImageWrapper>
        ))}
      {data?.fetchBoard.youtubeUrl !== "" && (
        <D.YoutubeWrapper>
          <D.Youtube url={String(data?.fetchBoard.youtubeUrl)}></D.Youtube>
        </D.YoutubeWrapper>
      )}
    </D.Wrapper>
  );
}
