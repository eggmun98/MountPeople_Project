import AnswerList from "./answerList";
import { Wrapper } from "./styles";
import AnswerWrite from "./answerWrite";
import { useRecoilState } from "recoil";
import { answerIndexState } from "../../../../../commons/stores";
import { IProps } from "./types";

export default function MarketAnswer(props: IProps): JSX.Element {
  const [answerIndex] = useRecoilState(answerIndexState);

  return (
    <Wrapper>
      {answerIndex === props.dex && <AnswerWrite el={props.el}></AnswerWrite>}
      <AnswerList el={props.el}></AnswerList>
    </Wrapper>
  );
}
