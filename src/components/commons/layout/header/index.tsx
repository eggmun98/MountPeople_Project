import {
  LoginWrapper,
  Logo,
  LogoWrapper,
  MenuTitle,
  MenuWrapper,
  Wrapper,
} from "./styles";
import { useRouter } from "next/router";
import { movePageMode } from "../../hooks/customs/movePageMode";
import { useAllPageLink } from "../../hooks/customs/allPageLink";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const { onClickMovePage } = movePageMode();
  const { ALL_PAGE } = useAllPageLink();

  const page = [];
  page[0] = ALL_PAGE.community.includes(router.asPath);
  page[1] = ALL_PAGE.market.includes(router.asPath);
  page[2] = "/myPage".includes(router.asPath);

  return (
    <Wrapper>
      <div>
        <LogoWrapper>
          <Logo src="/layout/header/mpLogo.png"></Logo>
        </LogoWrapper>
        <MenuWrapper>
          <MenuTitle
            isActive={page[0]}
            onClick={onClickMovePage(ALL_PAGE.community[2])}
          >
            커뮤니티
          </MenuTitle>
          <MenuTitle
            isActive={page[1]}
            onClick={onClickMovePage(ALL_PAGE.market[2])}
          >
            등산 마켓
          </MenuTitle>
          <MenuTitle isActive={page[2]} onClick={onClickMovePage("/myPage")}>
            마이 페이지
          </MenuTitle>
        </MenuWrapper>
        <LoginWrapper>
          <button>login</button>
        </LoginWrapper>
      </div>
    </Wrapper>
  );
}
