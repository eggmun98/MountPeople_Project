import { useQuery } from "@apollo/client";
import * as M from "../styles";

import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS_I_PICKED } from "../../../../commons/hooks/query/myPage/useQueryFetchUsedItemslPicked";
import { ISaveProps } from "../types";

export default function MyPick(props: ISaveProps): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: { search: "" },
  });

  return (
    <M.Wrapper>
      <M.TitleWrapper>
        <p>번호</p>
        <p>상품명</p>
        <p>판매가격</p>
        <p>날짜</p>
      </M.TitleWrapper>
      {data?.fetchUseditemsIPicked.map((el, dex) => (
        <M.ContentsWrapper
          key={el._id}
          onClick={props.onClickMovePage(`/markets/market/${el._id}`)}
        >
          <p>{10 - dex}</p>
          <p>{el.name}</p>
          <p>{el.price?.toLocaleString()}</p>
          <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
        </M.ContentsWrapper>
      ))}
    </M.Wrapper>
  );
}
