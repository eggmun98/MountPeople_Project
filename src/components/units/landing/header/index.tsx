import { useQuery } from "@apollo/client";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { Wrapper } from "./styles";
import * as H from "./styles";
import { FETCH_USER_LOGGED_IN } from "../../../commons/hooks/query/useQueryFetchUsedLoggedIn";
import { IQuery } from "../../../../commons/types/generated/types";
import { useLogoutMode } from "../../../commons/hooks/customs/useLogoutMode";

export default function Header(): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const { onClickLogout } = useLogoutMode();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log("유저 로그인 데이터", data);

  return (
    <Wrapper>
      <div>
        <H.LogoWrapper>
          <H.Logo src="/layout/header/mainLogo08.png"></H.Logo>
        </H.LogoWrapper>

        <H.LoginWrapper>
          {data?.fetchUserLoggedIn ? (
            <>
              <p>{data?.fetchUserLoggedIn?.name}님</p>
              <p>{data?.fetchUserLoggedIn?.userPoint?.amount} P</p>
              <H.LogoutBtn onClick={onClickLogout}>로그아웃</H.LogoutBtn>
            </>
          ) : (
            <button onClick={onClickMovePage("/sign/signIn")}>login</button>
          )}
        </H.LoginWrapper>
      </div>
    </Wrapper>
  );
}
