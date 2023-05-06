import * as M from "./styles";
import { isModeState } from "../../stores";
import { useRecoilState } from "recoil";
import { useCreatePointMode } from "../../hooks/customs/myPage/useCreatePointMode";
import { useResetPasswordMode } from "../../hooks/customs/myPage/useResetPasswordMode";
import { openModalMode } from "../../hooks/customs/myPage/openModalMOde";
import { useForm } from "react-hook-form";
import Script from "next/script";

interface IData {
  pass: string;
  point: number;
}

export default function Modal02(): JSX.Element {
  const [isMode] = useRecoilState(isModeState);

  const { onClickPasswordEdit } = useResetPasswordMode();
  const { onClickPayment } = useCreatePointMode();
  const { onClickOpenModal } = openModalMode();
  const { handleSubmit, register } = useForm<IData>();

  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      <M.Background onClick={onClickOpenModal("")}></M.Background>
      <M.Wrapper
        onSubmit={handleSubmit(isMode ? onClickPasswordEdit : onClickPayment)}
      >
        <M.Close onClick={onClickOpenModal("")}></M.Close>
        <M.MiddleWrapper>
          <div>
            {isMode ? "비밀번호를 입력하세요." : "충전금액을 입력하세요."}
          </div>
          <input {...register(isMode ? "pass" : "point")}></input>
        </M.MiddleWrapper>
        <M.BottomWrapper>
          <button>확인</button>
        </M.BottomWrapper>
      </M.Wrapper>
    </>
  );
}
