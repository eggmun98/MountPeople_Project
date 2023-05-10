import * as L from "./styles";
import { IProps } from "../types";

export default function LayoutNavigation(props: IProps): JSX.Element {
  return (
    <L.MenuWrapper>
      <L.MenuTitle
        isActive={props.page[0]}
        onClick={props.onClickMovePage(props.allPage.community[2])}
      >
        커뮤니티
      </L.MenuTitle>
      <L.MenuTitle
        isActive={props.page[1]}
        onClick={props.onClickMovePage(props.allPage.market[2])}
      >
        등산 마켓
      </L.MenuTitle>
      <L.MenuTitle
        isActive={props.page[2]}
        onClick={props.onClickMovePage("/myPage")}
      >
        마이 페이지
      </L.MenuTitle>
    </L.MenuWrapper>
  );
}
