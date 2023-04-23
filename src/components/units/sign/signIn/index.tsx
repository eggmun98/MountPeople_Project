import * as I from "./styles";

export default function SignIn(): JSX.Element {
  return (
    <I.Wrapper>
      <I.InWrapper>
        <I.TopWrapper>
          <I.ImageWrapper>
            <img src="/layout/header/mpLogo.png"></img>
          </I.ImageWrapper>
          <I.TitleWrapper>
            <h1>MountainPeople</h1>
          </I.TitleWrapper>
        </I.TopWrapper>
        <input></input>
        <input></input>
        <button>로그인</button>
      </I.InWrapper>
    </I.Wrapper>
  );
}
