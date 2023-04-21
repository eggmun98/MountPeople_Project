import CommentList from "./list";
import { Wrapper } from "./styles";
import CommentWrite from "./write";

export default function CommunityComment(): JSX.Element {
  return (
    <Wrapper>
      <CommentWrite></CommentWrite>
      <CommentList></CommentList>
    </Wrapper>
  );
}
