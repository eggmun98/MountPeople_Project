import { useScrollMode } from "../../../../commons/hooks/customs/useScrollMode";
import * as L from "./styles";
import { IEl, IProps } from "./types";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";

export default function ListFooter(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();
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
          <L.ProductWrapper
            key={el._id}
            onClick={onClickMovePage(`/markets/market/${el._id}`)}
          >
            {el.images[0] ? (
              <L.ProductImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></L.ProductImg>
            ) : (
              <L.HiddenImg></L.HiddenImg>
            )}
            <L.TextWrapper>
              <p>{el.name}</p>
              <p>{el.price.toLocaleString()}원</p>
            </L.TextWrapper>
          </L.ProductWrapper>
        ))}
      </L.Wrapper>
    </L.Scroll>
  );
}
