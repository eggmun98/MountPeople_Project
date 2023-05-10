import { ButtonWrapper, NumberWrapper, Wrapper } from "./styles";
import Paginations01 from "../../../../commons/paginations/01";
import { IProps } from "./types";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";

export default function ListFooter(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();

  return (
    <Wrapper>
      <NumberWrapper>
        <Paginations01
          refetch={props.refetch}
          count={props.dataCount?.fetchBoardsCount}
        ></Paginations01>
      </NumberWrapper>
      <ButtonWrapper>
        <button onClick={onClickMovePage("/communitys/new")}>
          게시글 작성하기
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
}
