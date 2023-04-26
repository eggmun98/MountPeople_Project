import { useForm } from "react-hook-form";
import WriteBody from "./body";
import WriteHeader from "./header";
import { Wrapper } from "./styles";
import WriteFooter from "./footer";
import { useCreateProductMode } from "../../../commons/hooks/customs/market/useCreateProductMode";
import { IData } from "./header/types";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../../../commons/hooks/query/market/useQueryFetchUseditem";

export default function MarketWrite(): JSX.Element {
  const { handleSubmit, register, setValue } = useForm<IData>();
  const { onClickCreateProduct } = useCreateProductMode();
  const { data } = useQuery(FETCH_USED_ITEM);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickCreateProduct)}>
        <WriteHeader register={register}></WriteHeader>
        <WriteBody setValue={setValue} data={data}></WriteBody>
        <WriteFooter></WriteFooter>
      </form>
    </Wrapper>
  );
}
