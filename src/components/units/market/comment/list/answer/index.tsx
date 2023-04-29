import AnswerList from "./list";
import { Wrapper } from "./styles";
import AnswerWrite from "./write";

export default function MarketAnswer(): JSX.Element {
  return (
    <Wrapper>
      <AnswerList></AnswerList>
      <AnswerWrite></AnswerWrite>
    </Wrapper>
  );
}
