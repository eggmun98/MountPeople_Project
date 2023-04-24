import { useQuery } from "@apollo/client";
import { useScrollMode } from "../../../../commons/hooks/customs/useScrollMode";
import * as L from "./styles";
import { FETCH_USED_ITEMS } from "../../../../commons/hooks/query/market/useQueryFetchUsedItems";
import { IEl, IProps } from "./types";

export default function ListFooter(props: IProps): JSX.Element {
  // const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data, fetchMore } = props;
  const { onLoadMore } = useScrollMode({
    data,
    fetchKey: "fetchUseditems",
    fetchMore,
  });

  return (
    <L.Scroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      <L.Wrapper>
        {data?.fetchUseditems.map((el: IEl) => (
          <L.ProductWrapper key={el._id}>
            {el.images[0] !== "" ? (
              <L.ProductImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></L.ProductImg>
            ) : (
              <L.HiddenImg></L.HiddenImg>
            )}
            <div>
              <p>{el.remarks}</p>
              <p>{el.name}</p>
              <p>{el.price}</p>
            </div>
          </L.ProductWrapper>
        ))}
      </L.Wrapper>
    </L.Scroll>
  );
}
