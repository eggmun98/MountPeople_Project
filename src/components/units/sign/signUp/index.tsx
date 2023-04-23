import * as U from "./styles";

export default function SignUp(): JSX.Element {
  return (
    <U.Wrapper>
      <U.InWrapper>
        <U.TopWrapper>
          <U.ImageWrapper>
            <img src="/layout/header/mpLogo.png"></img>
          </U.ImageWrapper>
          <U.TitleWrapper>
            <h1>MountainPeople</h1>
          </U.TitleWrapper>
        </U.TopWrapper>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button>가입하기</button>
      </U.InWrapper>
    </U.Wrapper>
  );
}
