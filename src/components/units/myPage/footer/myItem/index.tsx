import { useQuery } from "@apollo/client";
import * as M from "./styles";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import { IProps } from "./types";
import { FETCH_USED_ITEMS } from "../../../../commons/hooks/query/market/useQueryFetchUsedItems";

export default function MyItem(props: IProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return (
    <M.Wrapper>
      <M.ContentsWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>판매가격</p>
        <p>날짜</p>
      </M.ContentsWrapper>

      {data?.fetchUseditems
        .filter((el) =>
          el.seller?.name.includes(String(props.data?.fetchUserLoggedIn.name))
        )
        .map((el) => (
          <M.ContentsWrapper key={el._id}>
            <p>{1}</p>
            <p>{el.name}</p>
            <p>{el.price}</p>
            <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
          </M.ContentsWrapper>
        ))}
    </M.Wrapper>
  );
}
