import { ButtonWrapper, NumberWrapper, Wrapper } from "./styles";
import { useQueryFetchBoarCount } from "../../../../commons/hooks/query/community/useQueryFetchBoardCount";
import Paginations01 from "../../../../commons/paginations/01";
import { IProps } from "./types";

export default function ListFooter(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <NumberWrapper>
        <Paginations01
          refetch={props.refetch}
          count={props.dataCount?.fetchBoardsCount}
        ></Paginations01>
      </NumberWrapper>
      <ButtonWrapper>
        <button>게시글 작성하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
}
