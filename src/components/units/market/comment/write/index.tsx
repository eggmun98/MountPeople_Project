import { useForm } from "react-hook-form";
import * as MW from "./styles";
import { IData } from "./types";
import { useCreateQuestionMode } from "../../../../commons/hooks/customs/market/useCreateQuestionMode";

export default function MarketWrite(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<IData>();
  const { onClickCreateQuestion } = useCreateQuestionMode();
  const onSubmit = async (data: IData): Promise<void> => {
    await onClickCreateQuestion(data);
    reset();
  };

  return (
    <MW.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MW.BottomWrapper>
          <input
            {...register("contents")}
            placeholder="내용을 입력하세요."
          ></input>
          <button>등록</button>
        </MW.BottomWrapper>
      </form>
    </MW.Wrapper>
  );
}
