import { useForm } from "react-hook-form";
import * as U from "./styles";
import { IData } from "./types";
import { useSignUpMode } from "../../../commons/hooks/customs/useSignUpMode";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { onClickSignUp } = useSignUpMode();
  const { onClickMovePage } = movePageMode();

  return (
    <U.Wrapper>
      <U.InWrapper>
        <U.TopWrapper>
          <U.ImageWrapper>
            <img
              src="/layout/header/mainLogo08.png"
              onClick={onClickMovePage("/communitys")}
            ></img>
          </U.ImageWrapper>
          <U.TitleWrapper>
            <h1>MountPeople</h1>
          </U.TitleWrapper>
        </U.TopWrapper>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <input {...register("name")} placeholder="이름을 입력하세요."></input>
          <div>
            <p>{errors.name?.message}</p>
          </div>
          <input
            {...register("email")}
            placeholder="이메일을 입력하세요."
          ></input>
          <div>
            <p>{errors.email?.message}</p>
          </div>
          <input
            {...register("password")}
            placeholder="비밀번호를 입력하세요."
            type="password"
          ></input>
          <div>
            <p>{errors.password?.message}</p>
          </div>
          <input
            {...register("passwordCheck")}
            placeholder="비밀번호를 확인하세요."
            type="password"
          ></input>
          <div>
            <p>{errors.passwordCheck?.message}</p>
          </div>
          <p onClick={onClickMovePage("/sign/signIn")}>이미 회원이신가요?</p>
          <button>가입하기</button>
        </form>
      </U.InWrapper>
    </U.Wrapper>
  );
}
