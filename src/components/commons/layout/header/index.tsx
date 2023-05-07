import {
  LoginWrapper,
  Logo,
  LogoWrapper,
  MenuTitle,
  MenuWrapper,
  Wrapper,
} from "./styles";
import { IProps } from "../types";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../hooks/query/useQueryFetchUsedLoggedIn";
import { IQuery } from "../../../../commons/types/generated/types";
import { useLogoutMode } from "../../hooks/customs/useLogoutMode";

export default function LayoutHeader(props: IProps): JSX.Element {
  const { onClickLogout } = useLogoutMode();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log("page", props.page);

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
          {data?.fetchUserLoggedIn ? (
            <button onClick={onClickLogout}>logout</button>
          ) : (
            <button onClick={props.onClickMovePage("/sign/signIn")}>
              login
            </button>
          )}
        </LoginWrapper>
      </div>
    </Wrapper>
  );
}
