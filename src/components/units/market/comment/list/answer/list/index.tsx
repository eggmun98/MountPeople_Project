import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM_QUESTIONS_ANSWERS } from "../../../../../../commons/hooks/query/market/useQueryFetchUsedItemAnswers";
import AnswerEdit from "./edit";
import * as A from "./styles";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../../../commons/types/generated/types";
import { useDeleteAnswerMode } from "../../../../../../commons/hooks/customs/market/useDeleteAnswerMode";
import { useRecoilState } from "recoil";
import { answerEditIndexState } from "../../../../../../commons/stores";

export default function AnswerList(props): JSX.Element {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el,
    },
  });
  const { onClickDeleteAnswer } = useDeleteAnswerMode();
  const [editIndex, setEditIndex] = useRecoilState(answerEditIndexState);

  const onClickWindow = (dex: number) => () => {
    setEditIndex(dex);
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers.map((el, dex) =>
        editIndex !== dex ? (
          <A.Wrapper key={el._id}>
            <A.LeftWrapper>
              <div></div>
            </A.LeftWrapper>
            <A.AnswerWrapper>
              <A.TopWrapper>
                <A.NameWrapper>
                  <p>{el.user.name}</p>
                  <p>{"2023.02.30"}</p>
                </A.NameWrapper>
                <A.ButtonWrapper>
                  <button onClick={onClickWindow(dex)}>수정하기</button>
                  <button onClick={onClickDeleteAnswer(el._id, props.el)}>
                    삭제하기
                  </button>
                </A.ButtonWrapper>
              </A.TopWrapper>
              <A.BottomWrapper>{el.contents}</A.BottomWrapper>
            </A.AnswerWrapper>
          </A.Wrapper>
        ) : (
          <AnswerEdit key={el._id} qId={props.el} aId={el._id}></AnswerEdit>
        )
      )}
    </>
  );
}
