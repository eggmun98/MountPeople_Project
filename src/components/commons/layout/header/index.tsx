import {
  LoginWrapper,
  Logo,
  LogoWrapper,
  MenuWrapper,
  Wrapper,
} from "./styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <Wrapper>
      <div>
        <LogoWrapper>
          <Logo src="/layout/header/mpLogo.png"></Logo>
        </LogoWrapper>
        <MenuWrapper>
          <h1>커뮤니티</h1>
          <h1>등산 마켓</h1>
          <h1>오늘의 룩</h1>
        </MenuWrapper>
        <LoginWrapper>
          <button>login</button>
        </LoginWrapper>
      </div>
    </Wrapper>
  );
}
