import { useQuery } from "@apollo/client";
import * as M from "../styles";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_I_SOLD } from "../../../../commons/hooks/query/myPage/useQueryFetchUsedItemlSold";
import { ISaveProps } from "../types";

export default function MyItem(props: ISaveProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD);

  return (
    <M.Wrapper>
      <M.TitleWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>판매가격</p>
        <p>날짜</p>
      </M.TitleWrapper>
      {data?.fetchUseditemsISold.map((el, dex) => (
        <M.ContentsWrapper
          key={el._id}
          onClick={props.onClickMovePage(`/markets/market/${el._id}`)}
        >
          <p>{dex + 1}</p>
          <p>{el.name}</p>
          <p>{el.price?.toLocaleString()}</p>
          <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
        </M.ContentsWrapper>
      ))}
    </M.Wrapper>
  );
}
