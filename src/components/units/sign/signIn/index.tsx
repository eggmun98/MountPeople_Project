import { useForm } from "react-hook-form";
import * as I from "./styles";
import { useLoginMode } from "../../../commons/hooks/customs/useLoginMode";
import { IData } from "./types";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignIn(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { onClickLogin } = useLoginMode();
  const { onClickMovePage } = movePageMode();

  return (
    <I.Wrapper>
      <I.InWrapper>
        <I.TopWrapper>
          <I.ImageWrapper>
            <img
              src="/layout/header/mainLogo08.png"
              onClick={onClickMovePage("/communitys")}
            ></img>
          </I.ImageWrapper>
          <I.TitleWrapper>
            <h1>MountPeople</h1>
          </I.TitleWrapper>
        </I.TopWrapper>
        <form onSubmit={handleSubmit(onClickLogin)}>
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
          <p onClick={onClickMovePage("/sign/signUp")}>
            아직 회원이 아니신가요?
          </p>
          <button>로그인</button>
        </form>
      </I.InWrapper>
    </I.Wrapper>
  );
}
