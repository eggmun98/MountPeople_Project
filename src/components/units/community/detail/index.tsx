import CommunityComment from "../comment";
import DetailHeader from "./header";
import { Wrapper } from "./styles";

export default function CommunityDetail(): JSX.Element {
  return (
    <Wrapper>
      <DetailHeader></DetailHeader>
      <CommunityComment></CommunityComment>
    </Wrapper>
  );
}
