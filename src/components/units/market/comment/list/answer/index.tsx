import AnswerList from "./answerList";
import { Wrapper } from "./styles";
import AnswerWrite from "./answerWrite";
import { useRecoilState } from "recoil";
import { answerIndexState } from "../../../../../commons/stores";

export default function MarketAnswer(props): JSX.Element {
  const [answerIndex, setAnswerIndex] = useRecoilState(answerIndexState);

  return (
    <Wrapper>
      {answerIndex === props.dex && <AnswerWrite el={props.el}></AnswerWrite>}
      <AnswerList el={props.el} setAnswerIndex={setAnswerIndex}></AnswerList>
    </Wrapper>
  );
}
