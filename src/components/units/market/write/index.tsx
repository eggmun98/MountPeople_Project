import WriteBody from "./body";
import WriteHeader from "./header";
import { Wrapper } from "./styles";

export default function MarketWrite(): JSX.Element {
  return (
    <Wrapper>
      <WriteHeader></WriteHeader>
      <WriteBody></WriteBody>
    </Wrapper>
  );
}
