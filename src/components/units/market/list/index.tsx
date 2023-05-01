import { useQuery } from "@apollo/client";
import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";
import { Wrapper } from "./styles";
import { useSearchbarMode } from "../../../commons/hooks/customs/useSearchbarMode";
import { FETCH_USED_ITEMS } from "../../../commons/hooks/query/market/useQueryFetchUsedItems";

export default function MarketList(): JSX.Element {
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS);
  const { onChangeSearchbar } = useSearchbarMode({
    refetch,
  });
  return (
    <Wrapper>
      <ListHeader onChangeSearchbar={onChangeSearchbar}></ListHeader>
      <ListBody></ListBody>
      <ListFooter data={data} fetchMore={fetchMore}></ListFooter>
    </Wrapper>
  );
}
