import { useRouter } from "next/router";
import { movePageMode } from "../../../../commons/hooks/customs/ every/movePageMode";
import * as D from "./styles";
import { useDeleteBoardMode } from "../../../../commons/hooks/customs/community/useDeleteBoardMode";

export default function DetailFooter(): JSX.Element {
  const { onClickMovePage } = movePageMode();
  const { onClickDeleteButton } = useDeleteBoardMode();
  const router = useRouter();

  return (
    <D.Wrapper>
      <button
        onClick={onClickMovePage(
          `/communitys/community/${String(router.query.page)}/edit`
        )}
      >
        수정 하기
      </button>
      <button onClick={onClickMovePage("/communitys")}>목록 가기</button>
      <button onClick={onClickDeleteButton}>삭제 하기</button>
    </D.Wrapper>
  );
}
