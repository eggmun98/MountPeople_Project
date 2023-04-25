import { useForm } from "react-hook-form";
import * as U from "./styles";
import { IData } from "./types";
import { useSignUpMode } from "../../../commons/hooks/customs/useSignUpMode";

export default function SignUp(): JSX.Element {
  const { register, handleSubmit } = useForm<IData>();
  const { onClickSignUp } = useSignUpMode();

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
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <input {...register("name")} placeholder="이름을 입력하세요."></input>
          <input
            {...register("email")}
            placeholder="이메일을 입력하세요."
          ></input>
          <input
            {...register("password")}
            placeholder="비밀번호를 입력하세요."
          ></input>
          <input
            {...register("passwordCheck")}
            placeholder="비밀번호를 확인하세요."
          ></input>
          <button>가입하기</button>
        </form>
      </U.InWrapper>
    </U.Wrapper>
  );
}
