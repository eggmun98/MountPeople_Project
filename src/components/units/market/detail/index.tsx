import DetailBody from "./body";
import DetailHeader from "./header";
import { Wrapper } from "./styles";

export default function MarketDetail(): JSX.Element {
  return (
    <Wrapper>
      <DetailHeader></DetailHeader>
      <DetailBody></DetailBody>
    </Wrapper>
  );
}
