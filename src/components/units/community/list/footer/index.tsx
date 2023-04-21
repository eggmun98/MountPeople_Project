import { ButtonWrapper, NumberWrapper, Wrapper } from "./styles";
import { useQueryFetchBoarCount } from "../../../../commons/hooks/query/community/useQueryFetchBoardCount";
import Paginations01 from "../../../../commons/paginations/01";

export default function ListFooter(props: {
  refetch: (params: { page: number }) => void;
}): JSX.Element {
  const { data } = useQueryFetchBoarCount();

  return (
    <Wrapper>
      <NumberWrapper>
        <Paginations01
          refetch={props.refetch}
          count={data?.fetchBoardsCount}
        ></Paginations01>
      </NumberWrapper>
      <ButtonWrapper>
        <button>게시글 작성하기</button>
      </ButtonWrapper>
    </Wrapper>
  );
}
