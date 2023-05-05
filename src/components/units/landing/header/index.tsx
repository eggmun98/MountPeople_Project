import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { Wrapper } from "./styles";
import * as H from "./styles";

export default function Header(): JSX.Element {
  const { onClickMovePage } = movePageMode();

  return (
    <Wrapper>
      <div>
        <H.LogoWrapper>
          <H.Logo src="/layout/header/mainLogo08.png"></H.Logo>
        </H.LogoWrapper>

        <H.LoginWrapper>
          <p>문성진님</p>
          <p>100,000p</p>
          <button onClick={onClickMovePage("/sign/signIn")}>login</button>
        </H.LoginWrapper>
      </div>
    </Wrapper>
  );
}
