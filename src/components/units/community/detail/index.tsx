import CommunityComment from "../comment";
import DetailFooter from "./footer";
import DetailHeader from "./header";
import { Wrapper } from "./styles";

export default function CommunityDetail(): JSX.Element {
  return (
    <Wrapper>
      <DetailHeader></DetailHeader>
      <DetailFooter></DetailFooter>
      <CommunityComment></CommunityComment>
    </Wrapper>
  );
}
