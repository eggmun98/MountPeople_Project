import { useQueryFetchBoards } from "../../../commons/hooks/query/community/useQueryFetchBoards";
import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";
import { Wrapper } from "./styles";

export default function CommunityList(): JSX.Element {
  const { data, refetch } = useQueryFetchBoards();
  return (
    <Wrapper>
      <ListHeader></ListHeader>
      <ListBody data={data}></ListBody>
      <ListFooter data={data} refetch={refetch}></ListFooter>
    </Wrapper>
  );
}
