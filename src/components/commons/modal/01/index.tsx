import { useRecoilState } from "recoil";
import * as M from "./styles";
import { messageState } from "../../stores";
import { closeModalMode } from "../../hooks/customs/closeModalMode";

export default function Modal01(): JSX.Element {
  const [message] = useRecoilState(messageState);
  const { onClickClose } = closeModalMode();

  return (
    <>
      <M.Background onClick={onClickClose("01")}></M.Background>
      <M.Wrapper>
        <M.Close onClick={onClickClose("01")}></M.Close>
        <M.MiddleWrapper>
          <p>{message}</p>
        </M.MiddleWrapper>
        <M.BottomWrapper>
          <button onClick={onClickClose("01")}>확인</button>
        </M.BottomWrapper>
      </M.Wrapper>
    </>
  );
}