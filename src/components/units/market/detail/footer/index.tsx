import { useRouter } from "next/router";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";
import * as D from "./styles";
import { useDeleteProductMode } from "../../../../commons/hooks/customs/market/useDeleteProductMode";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/hooks/query/useQueryFetchUsedLoggedIn";
import { IProps } from "./types";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useBuyingUsedItemMode } from "../../../../commons/hooks/customs/market/useBuyingUsedItmMode";

export default function DetailFooter(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const { onClickDeleteProduct } = useDeleteProductMode();
  const { onClickBuy } = useBuyingUsedItemMode();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  return (
    <D.Wrapper>
      {props.data?.fetchUseditem.seller?._id ===
        data?.fetchUserLoggedIn._id && (
        <button
          onClick={onClickMovePage(
            `/markets/market/${String(router.query.page)}/edit`
          )}
        >
          수정 하기
        </button>
      )}

      <button onClick={onClickMovePage("/markets")}>목록 가기</button>
      {props.data?.fetchUseditem.seller?._id === data?.fetchUserLoggedIn._id ? (
        <button onClick={onClickDeleteProduct}>삭제 하기</button>
      ) : (
        <button onClick={onClickBuy}>구매 하기</button>
      )}
    </D.Wrapper>
  );
}
