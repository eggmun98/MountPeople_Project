import Searchbars01 from "../../../commons/searchbars/01";
import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";
import { Wrapper } from "./styles";

export default function MarketList(): JSX.Element {
  return (
    <Wrapper>
      <ListHeader></ListHeader>
      <ListBody></ListBody>
      <ListFooter></ListFooter>
    </Wrapper>
  );
}
