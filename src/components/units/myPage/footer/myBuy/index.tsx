import { useQuery } from "@apollo/client";
import * as M from "../styles";
import { FETCH_USED_ITEMS_I_BOUGHT } from "../../../../commons/hooks/query/myPage/useQueryFetchUsedItemslBought";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../../commons/types/generated/types";
import { ISaveProps } from "../types";

export default function MyBuy(props: ISaveProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_USED_ITEMS_I_BOUGHT);
  return (
    <M.Wrapper>
      <M.TitleWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>구매가격</p>
        <p>날짜</p>
      </M.TitleWrapper>
      {data?.fetchUseditemsIBought.map((el, dex) => (
        <M.ContentsWrapper
          key={el._id}
          onClick={props.onClickMovePage(`/markets/market/${el._id}`)}
        >
          <p>{10 - dex}</p>
          <p>{el.name}</p>
          <p>{el.price?.toLocaleString()}</p>
          <p>{el.soldAt.slice(0, 10).replaceAll("-", ".")}</p>
        </M.ContentsWrapper>
      ))}
    </M.Wrapper>
  );
}
