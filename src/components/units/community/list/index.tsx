import { useSearchbarMode } from "../../../commons/hooks/customs/useSearchbarMode";
import { useQueryFetchBoarCount } from "../../../commons/hooks/query/community/useQueryFetchBoardCount";
import { useQueryFetchBoards } from "../../../commons/hooks/query/community/useQueryFetchBoards";
import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";
import { Wrapper } from "./styles";

export default function CommunityList(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  const { data: dataCount } = useQueryFetchBoarCount();
  const { onChangeSearchbar } = useSearchbarMode({
    refetch,
  });

  return (
    <Wrapper>
      <ListHeader onChangeSearchbar={onChangeSearchbar}></ListHeader>
      <ListBody data={data} count={dataCount?.fetchBoardsCount ?? 0}></ListBody>
      <ListFooter dataCount={dataCount} refetch={refetch}></ListFooter>
    </Wrapper>
  );
}
