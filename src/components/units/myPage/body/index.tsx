import * as M from "./styles";

export default function MyPageBody(): JSX.Element {
  return (
    <M.Wrapper>
      <M.ProfileWrapper>
        <div></div>
        <button>프로필 수정</button>
      </M.ProfileWrapper>
      <M.NameWrapper>
        <div>
          <p>문성진</p>
          <p>eggmun98@gamilc.om</p>
          <p>200,000P</p>
        </div>
        <button>포인트 충전</button>
      </M.NameWrapper>
      <M.PasswordWrapper>
        <p>비밀번호 변경</p>
      </M.PasswordWrapper>
    </M.Wrapper>
  );
}
