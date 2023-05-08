import { useRecoilState } from "recoil";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";
import { ContentsWrapper, TitleWrapper, Wrapper } from "./styles";
import { IProps } from "./types";
import { numberState } from "../../../../commons/stores";

export default function ListBody(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const [number] = useRecoilState(numberState);

  return (
    <Wrapper>
      <TitleWrapper>
        <p>번호</p>
        <p>제목</p>
        <p>작성자</p>
        <p>날짜</p>
      </TitleWrapper>
      {props.data?.fetchBoards.map((el, dex) => (
        <ContentsWrapper
          key={dex}
          onClick={onClickMovePage(`/communitys/community/${el._id}`)}
        >
          <p>{props.count - number * 10 - dex + 10}</p>
          <p>{el.title}</p>
          <p>{el.writer}</p>
          <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
        </ContentsWrapper>
      ))}
    </Wrapper>
  );
}
