import * as ML from "./styles";
import CommentEdit from "./edit";
import { useRecoilState } from "recoil";
import { originIndexState02 } from "../../../../commons/stores";
import { useQueryFetchQuestion } from "../../../../commons/hooks/query/market/useQueryFetchUseditemQuestions";
import { useDeleteQuestionMode } from "../../../../commons/hooks/customs/market/useDeleteQuestionMode";
import MarketAnswer from "./answer";

export default function MarketList(): JSX.Element {
  const { data } = useQueryFetchQuestion();
  const { onClickDeleteQuestion } = useDeleteQuestionMode();
  const [originIndex, setOriginIndex] = useRecoilState(originIndexState02);
  const onClickEditWindow = (dex: number) => () => {
    setOriginIndex(dex);
  };
  return (
    <ML.Wrapper>
      {data?.fetchUseditemQuestions.map((el, dex) =>
        originIndex !== dex ? (
          <div key={el._id}>
            <ML.CommentWrapper>
              <ML.TopWrapper>
                <ML.NameWrapper>
                  <p>{el.user.name}</p>
                  {/* <p>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</p> */}
                </ML.NameWrapper>
                <ML.ButtonWrapper>
                  <button onClick={onClickEditWindow(dex)}>수정하기</button>
                  <button onClick={onClickDeleteQuestion(el._id)}>
                    삭제하기
                  </button>
                </ML.ButtonWrapper>
              </ML.TopWrapper>
              <ML.BottomWrapper>{el.contents}</ML.BottomWrapper>
            </ML.CommentWrapper>
            <MarketAnswer></MarketAnswer>
          </div>
        ) : (
          <CommentEdit
            key={el._id}
            el={el}
            setOriginIndex={setOriginIndex}
          ></CommentEdit>
        )
      )}
    </ML.Wrapper>
  );
}
