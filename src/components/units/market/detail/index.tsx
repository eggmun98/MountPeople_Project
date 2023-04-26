import { useQueryFetchUsedItem } from "../../../commons/hooks/query/market/useQueryFetchUsedItem";
import DetailBody from "./body";
import DetailHeader from "./header";
import { Wrapper } from "./styles";

export default function MarketDetail(): JSX.Element {
  const { data } = useQueryFetchUsedItem();
  return (
    <Wrapper>
      <DetailHeader data={data}></DetailHeader>
      <DetailBody data={data}></DetailBody>
    </Wrapper>
  );
}
