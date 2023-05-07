import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../query/useQueryFetchUsedLoggedIn";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "../../mutation/myPage/useMutationCreatePointTransactionOfLoading";
import { openModalMode } from "./openModalMode";
import { useRecoilState } from "recoil";
import { isModalState, messageState } from "../../../stores";

declare const window: typeof globalThis & {
  IMP: any;
};

export const useCreatePointMode = (): {
  onClickPayment: (datas: { point: number }) => void;
} => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { onClickCloseModal } = openModalMode();
  const [_, setIsModal] = useRecoilState(isModalState);
  const [__, setIsMessage] = useRecoilState(messageState);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onClickPayment = (datas: { point: number }): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "갤럭시s10",
        amount: Number(datas.point),
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "",  // 모바일 결제 주소
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          onClickCloseModal();
          setIsModal(true);
          setIsMessage("결제에 성공하였습니다.");
        } else {
          onClickCloseModal();
          setIsModal(true);
          setIsMessage("결제에 실패하였습니다.");
        }
      }
    );
  };

  return {
    onClickPayment,
  };
};
