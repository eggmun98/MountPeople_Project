import {
  LoginWrapper,
  Logo,
  LogoWrapper,
  MenuTitle,
  MenuWrapper,
  Wrapper,
} from "./styles";
import { IProps } from "../types";

export default function LayoutHeader(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <div>
        <LogoWrapper>
          <Logo
            src="/layout/header/mainLogo08.png"
            onClick={props.onClickMovePage("/")}
          ></Logo>
        </LogoWrapper>
        <MenuWrapper>
          <MenuTitle
            isActive={props.page[0]}
            onClick={props.onClickMovePage(props.allPage.community[2])}
          >
            커뮤니티
          </MenuTitle>
          <MenuTitle
            isActive={props.page[1]}
            onClick={props.onClickMovePage(props.allPage.market[2])}
          >
            등산 마켓
          </MenuTitle>
          <MenuTitle
            isActive={props.page[2]}
            onClick={props.onClickMovePage("/myPage")}
          >
            마이 페이지
          </MenuTitle>
        </MenuWrapper>
        <LoginWrapper>
          <button onClick={props.onClickMovePage("/sign/signIn")}>login</button>
        </LoginWrapper>
      </div>
    </Wrapper>
  );
}
