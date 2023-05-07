import { openModalMode } from "../../../commons/hooks/customs/myPage/openModalMode";
import * as M from "./styles";
import { IProps } from "./types";

export default function MyPageBody(props: IProps): JSX.Element {
  const { onClickOpenModal } = openModalMode();

  return (
    <M.Wrapper>
      <M.ProfileWrapper>
        <div></div>
        <button>프로필 수정</button>
      </M.ProfileWrapper>
      <M.NameWrapper>
        <div>
          <p>{props.data?.fetchUserLoggedIn.name}</p>
          <p>{props.data?.fetchUserLoggedIn.email}</p>
          <p>{props.data?.fetchUserLoggedIn?.userPoint?.amount} P</p>
        </div>
        <button onClick={onClickOpenModal("point")}>포인트 충전</button>
      </M.NameWrapper>
      <M.PasswordWrapper>
        <p onClick={onClickOpenModal("pass")}>비밀번호 변경</p>
      </M.PasswordWrapper>
    </M.Wrapper>
  );
}
