import { useState } from "react";
import { useDeleteBoardCommentMode } from "../../../../commons/hooks/customs/community/useDeleteBoardCommentMode";
import { useQueryFetchBoardComments } from "../../../../commons/hooks/query/community/useQueryFetchBoardComments";

import * as CL from "./styles";
import CommentEdit from "./edit";

export default function CommentList(): JSX.Element {
  const { data } = useQueryFetchBoardComments();
  const { onClickDeleteCommentButton } = useDeleteBoardCommentMode();
  const [originIndex, setOriginIndex] = useState<number>(-1);
  const onClickEditWindow = (dex: number) => () => {
    setOriginIndex(dex);
  };
  return (
    <CL.Wrapper>
      {data?.fetchBoardComments.map((el, dex) =>
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
      )}
    </CL.Wrapper>
  );
}
