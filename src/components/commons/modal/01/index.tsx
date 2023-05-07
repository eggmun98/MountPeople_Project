import { useRecoilState } from "recoil";
import * as M from "./styles";
import { messageState } from "../../stores";
import { selectionModalMode } from "../../hooks/customs/closeModalMode";

export default function Modal01(): JSX.Element {
  const [message] = useRecoilState(messageState);
  const { onClickClose } = selectionModalMode();

  return (
    <>
      <M.Background onClick={onClickClose}></M.Background>
      <M.Wrapper>
        <M.Close onClick={onClickClose}></M.Close>
        <M.MiddleWrapper>
          <p>{message}</p>
        </M.MiddleWrapper>
        <M.BottomWrapper>
          <button onClick={onClickClose}>확인</button>
        </M.BottomWrapper>
      </M.Wrapper>
    </>
  );
}
