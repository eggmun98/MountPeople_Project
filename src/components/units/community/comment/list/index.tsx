import { useDeleteBoardCommentMode } from "../../../../commons/hooks/customs/community/useDeleteBoardCommentMode";
import { useQueryFetchBoardComments } from "../../../../commons/hooks/query/community/useQueryFetchBoardComments";

import * as CL from "./styles";
import CommentEdit from "./edit";
import { useRecoilState } from "recoil";
import { originIndexState } from "../../../../commons/stores";
import { useScrollMode } from "../../../../commons/hooks/customs/useScrollMode";
import InfiniteScroll from "react-infinite-scroller";
import { IEl } from "./tyeps";

export default function CommentList(): JSX.Element {
  const { data, fetchMore } = useQueryFetchBoardComments();
  const { onLoadMore } = useScrollMode({
    data,
    fetchKey: "fetchBoardComments",
    fetchMore,
  });
  const { onClickDeleteCommentButton } = useDeleteBoardCommentMode();
  const [originIndex, setOriginIndex] = useRecoilState(originIndexState);
  const onClickEditWindow = (dex: number) => () => {
    setOriginIndex(dex);
  };
  return (
    <CL.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchBoardComments.map((el: IEl, dex: number) =>
          originIndex !== dex ? (
            <CL.CommentWrapper key={el._id}>
              <CL.TopWrapper>
                <CL.NameWrapper>
                  <p>{el.writer}</p>
                  <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
                </CL.NameWrapper>
                <CL.ButtonWrapper>
                  <button onClick={onClickEditWindow(dex)}>수정하기</button>
                  <button onClick={onClickDeleteCommentButton(el._id)}>
                    삭제하기
                  </button>
                </CL.ButtonWrapper>
              </CL.TopWrapper>
              <CL.BottomWrapper>{el.contents}</CL.BottomWrapper>
            </CL.CommentWrapper>
          ) : (
            <CommentEdit
              key={el._id}
              el={el}
              setOriginIndex={setOriginIndex}
            ></CommentEdit>
          )
        ) ?? <div></div>}
      </InfiniteScroll>
    </CL.Wrapper>
  );
}
