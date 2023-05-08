import * as M from "./styles";
import { IProps } from "./types";

export default function MyPageHeader(props: IProps): JSX.Element {
  return (
    <M.Wrapper>
      <M.Title onClick={props.onClickSave("item")} save={props.save === "item"}>
        내 상품
      </M.Title>
      <M.Title onClick={props.onClickSave("buy")} save={props.save === "buy"}>
        구매 내역
      </M.Title>
      <M.Title onClick={props.onClickSave("pick")} save={props.save === "pick"}>
        찜 목록
      </M.Title>
    </M.Wrapper>
  );
}
