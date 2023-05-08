import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import MyBuy from "./myBuy";
import MyItem from "./myItem";
import MyPick from "./myPick";
import { IProps } from "./types";

export default function MyPageFooter(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();

  return (
    <>
      {(props.save === "item" && (
        <MyItem onClickMovePage={onClickMovePage}></MyItem>
      )) ||
        (props.save === "buy" && (
          <MyBuy onClickMovePage={onClickMovePage}></MyBuy>
        )) || <MyPick onClickMovePage={onClickMovePage}></MyPick>}
    </>
  );
}
