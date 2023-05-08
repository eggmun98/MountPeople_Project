import { useRef } from "react";
import { openModalMode } from "../../../commons/hooks/customs/myPage/openModalMode";
import * as M from "./styles";
import { IProps } from "./types";
import { useRecoilState } from "recoil";
import { imagesState03 } from "../../../commons/stores";
import { useImageUploadMode } from "../../../commons/hooks/customs/myPage/useProfileImageUploadMode";

export default function MyPageBody(props: IProps): JSX.Element {
  const { onClickOpenModal } = openModalMode();
  const fileRef = useRef<HTMLInputElement>(null);
  const { onChangeImageUpload, onClickImageNonoMode } = useImageUploadMode();
  const [imageUrl] = useRecoilState(imagesState03);

  return (
    <M.Wrapper>
      <M.ProfileWrapper>
        {imageUrl ? (
          <img src={`https:/storage.googleapis.com/${imageUrl}`} />
        ) : props.data?.fetchUserLoggedIn.picture ? (
          <img
            src={`https:/storage.googleapis.com/${props.data.fetchUserLoggedIn.picture}`}
          />
        ) : (
          <div></div>
        )}
        <button onClick={onClickImageNonoMode(fileRef)}>프로필 수정</button>
        <input type="file" ref={fileRef} onChange={onChangeImageUpload}></input>
      </M.ProfileWrapper>
      <M.NameWrapper>
        <div>
          <p>{props.data?.fetchUserLoggedIn.name}</p>
          <p>{props.data?.fetchUserLoggedIn.email}</p>
          <p>
            {props.data?.fetchUserLoggedIn?.userPoint?.amount.toLocaleString()}{" "}
            P
          </p>
        </div>
        <button onClick={onClickOpenModal("point")}>포인트 충전</button>
      </M.NameWrapper>
      <M.PasswordWrapper>
        <p onClick={onClickOpenModal("pass")}>비밀번호 변경</p>
      </M.PasswordWrapper>
    </M.Wrapper>
  );
}
