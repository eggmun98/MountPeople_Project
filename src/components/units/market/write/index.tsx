import { useForm } from "react-hook-form";
import WriteBody from "./body";
import WriteHeader from "./header";
import { Wrapper } from "./styles";
import WriteFooter from "./footer";
import { useCreateProductMode } from "../../../commons/hooks/customs/market/useCreateProductMode";
import { IData } from "./header/types";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../../../commons/hooks/query/market/useQueryFetchUsedItem";
import { useUpdateProductMode } from "../../../commons/hooks/customs/market/useUpdateProductMode";
import { IProps } from "./types";
import { useRouter } from "next/router";
import { useAuth } from "../../../commons/hooks/customs/useAuth";

export default function MarketWrite(props: IProps): JSX.Element {
  useAuth();
  const router = useRouter();
  const { handleSubmit, register, setValue } = useForm<IData>();
  const { onClickCreateProduct } = useCreateProductMode();
  const { onClickUpdateProduct } = useUpdateProductMode();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.page,
    },
  });

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit(
          props.isEdit ? onClickUpdateProduct : onClickCreateProduct
        )}
      >
        <WriteHeader
          register={register}
          data={data}
          isEdit={props.isEdit}
        ></WriteHeader>
        <WriteBody setValue={setValue} data={data}></WriteBody>
        <WriteFooter isEdit={props.isEdit}></WriteFooter>
      </form>
    </Wrapper>
  );
}
