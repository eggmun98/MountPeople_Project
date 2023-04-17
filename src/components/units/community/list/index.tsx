import ListBody from "./body";
import ListFooter from "./footer";
import ListHeader from "./header";
import { Wrapper } from "./styles";

export default function CommunityListUI(): JSX.Element {
  return (
    <Wrapper>
      <ListHeader></ListHeader>
      <ListBody></ListBody>
      <ListFooter></ListFooter>
    </Wrapper>
  );
}
