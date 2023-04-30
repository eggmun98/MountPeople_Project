import MarketList from "./list";
import { Wrapper } from "./styles";
import MarketWrite from "./write";

export default function MarketComment(): JSX.Element {
  return (
    <Wrapper>
      <MarketWrite></MarketWrite>
      <MarketList></MarketList>
    </Wrapper>
  );
}
