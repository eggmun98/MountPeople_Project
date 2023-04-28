import MyPageBody from "./body";
import MyPageFooter from "./footer";
import MyPageHeader from "./header";
import { Wrapper } from "./styles";

export default function MyPageUI(): JSX.Element {
  return (
    <Wrapper>
      <MyPageHeader></MyPageHeader>
      <MyPageBody></MyPageBody>
      <MyPageFooter></MyPageFooter>
    </Wrapper>
  );
}
