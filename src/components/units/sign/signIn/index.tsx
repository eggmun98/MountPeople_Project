import { useForm } from "react-hook-form";
import * as I from "./styles";
import { useLoginMode } from "../../../commons/hooks/customs/useLoginMode";
import { IData } from "./types";

export default function SignIn(): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickLogin } = useLoginMode();

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
        <form onSubmit={handleSubmit(onClickLogin)}>
          <input
            {...register("email")}
            placeholder="이메일을 입력하세요."
          ></input>
          <input
            {...register("password")}
            placeholder="비밀번호를 입력하세요."
          ></input>
          <button>로그인</button>
        </form>
      </I.InWrapper>
    </I.Wrapper>
  );
}
