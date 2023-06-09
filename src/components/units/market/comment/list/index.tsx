import * as ML from "./styles";
import CommentEdit from "./edit";
import { useRecoilState } from "recoil";
import {
  answerIndexState,
  originIndexState02,
} from "../../../../commons/stores";
import { useQueryFetchQuestion } from "../../../../commons/hooks/query/market/useQueryFetchUseditemQuestions";
import { useDeleteQuestionMode } from "../../../../commons/hooks/customs/market/useDeleteQuestionMode";
import MarketAnswer from "./answer";
import { useScrollMode } from "../../../../commons/hooks/customs/useScrollMode";
import InfiniteScroll from "react-infinite-scroller";
import { IEl } from "./types";

export default function MarketList(): JSX.Element {
  const { data, fetchMore } = useQueryFetchQuestion();
  const { onLoadMore } = useScrollMode({
    data,
    fetchKey: "fetchUseditemQuestions",
    fetchMore,
  });
  const { onClickDeleteQuestion } = useDeleteQuestionMode();
  const [originIndex, setOriginIndex] = useRecoilState(originIndexState02);
  const [_, setAnswerIndex] = useRecoilState(answerIndexState);

  const onClickWindow = (dex: number, str: string) => () => {
    if (str === "edit") setOriginIndex(dex);
    else setAnswerIndex(dex);
  };

  return (
    <ML.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemQuestions.map((el: IEl, dex: number) =>
          originIndex !== dex ? (
            <div key={el._id}>
              <ML.CommentWrapper>
                <ML.TopWrapper>
                  <ML.NameWrapper>
                    <p>{el.user.name}</p>
                    <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p>
                  </ML.NameWrapper>
                  <ML.ButtonWrapper>
                    <button onClick={onClickWindow(dex, "question")}>
                      답변 달기
                    </button>
                    <button onClick={onClickWindow(dex, "edit")}>
                      수정하기
                    </button>
                    <button onClick={onClickDeleteQuestion(el._id)}>
                      삭제하기
                    </button>
                  </ML.ButtonWrapper>
                </ML.TopWrapper>
                <ML.BottomWrapper>{el.contents}</ML.BottomWrapper>
              </ML.CommentWrapper>
              <MarketAnswer el={el._id} dex={dex}></MarketAnswer>
            </div>
          ) : (
            <CommentEdit
              key={el._id}
              el={el}
              setOriginIndex={setOriginIndex}
            ></CommentEdit>
          )
        ) ?? <div></div>}
      </InfiniteScroll>
    </ML.Wrapper>
  );
}
