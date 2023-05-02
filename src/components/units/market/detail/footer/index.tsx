import { useRouter } from "next/router";
import { movePageMode } from "../../../../commons/hooks/customs/movePageMode";
import * as D from "./styles";
import { useDeleteProductMode } from "../../../../commons/hooks/customs/market/useDeleteProductMode";

export default function DetailFooter(): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const { onClickDeleteProduct } = useDeleteProductMode();
  const router = useRouter();

  return (
    <D.Wrapper>
      <button
        onClick={onClickMovePage(
          `/markets/market/${String(router.query.page)}/edit`
        )}
      >
        수정 하기
      </button>
      <button onClick={onClickMovePage("/markets")}>목록 가기</button>
      <button onClick={onClickDeleteProduct}>삭제 하기</button>
    </D.Wrapper>
  );
}
