import { useQueryFetchUsedItem } from "../../../commons/hooks/query/market/useQueryFetchUsedItem";
import MarketComment from "../comment";
import DetailBody from "./body";
import DetailFooter from "./footer";
import DetailHeader from "./header";
import { Wrapper } from "./styles";

export default function MarketDetail(): JSX.Element {
  const { data } = useQueryFetchUsedItem();
  return (
    <Wrapper>
      <DetailHeader data={data}></DetailHeader>
      <DetailBody data={data}></DetailBody>
      <DetailFooter data={data}></DetailFooter>
      <MarketComment></MarketComment>
    </Wrapper>
  );
}
