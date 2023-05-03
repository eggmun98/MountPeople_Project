import { useQuery } from "@apollo/client";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";
import * as L from "./styles";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "../../../../commons/hooks/query/market/useQueryFetchUsedItemOfTheBest";
import { IQuery } from "../../../../../commons/types/generated/types";

export default function ListBody(): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const { data } = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THE_BEST
  );
  interface IEl {
    name: string;
    _id: string;
    images: string[];
    price: number;
  }

  console.log("베스트 상품", data);

  return (
    <L.Wrapper>
      <L.TitleWrapper>
        <h1>인기 등산물품</h1>
        <button onClick={onClickMovePage("/markets/new")}>상품 등록</button>
      </L.TitleWrapper>
      <L.ListWrapper>
        {data?.fetchUseditemsOfTheBest.map((el) => (
          <L.ProductWrapper
            key={el._id}
            onClick={onClickMovePage(`/markets/market/${el._id}`)}
          >
            {el?.images && (
              <L.ProductImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></L.ProductImg>
            )}
            {!el?.images && <L.HiddenImg></L.HiddenImg>}
            <L.TextWrapper>
              <p>{el.name}</p>
              <p>{el.price ? el.price.toLocaleString() : 0}원</p>
            </L.TextWrapper>
          </L.ProductWrapper>
        ))}
      </L.ListWrapper>
    </L.Wrapper>
  );
}
