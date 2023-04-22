import { useRecoilState } from "recoil";
import { addressState, zipCodeState } from "../../../../commons/stores";
import * as W from "./styles";
import { IAddress, IProps } from "./types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useState } from "react";

export default function WriteBody(props: IProps): JSX.Element {
  const [zipcode, setZipcode] = useRecoilState<string>(zipCodeState);
  const [address, setAddress] = useRecoilState<string>(addressState);
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleComplete = (data: IAddress): void => {
    addressShowModal();
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const addressShowModal = (): void => {
    setIsModal((prev) => !prev);
  };

  return (
    <W.Wrapper>
      <W.TopWrapper>
        <input
          value={
            zipcode !== ""
              ? zipcode
              : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
          }
        ></input>
        <button type="button" onClick={addressShowModal}>
          등록
        </button>
      </W.TopWrapper>
      <W.InputWrapper01>
        <input
          value={
            address !== ""
              ? address
              : props.data?.fetchBoard?.boardAddress?.address ?? ""
          }
        ></input>
      </W.InputWrapper01>
      <W.InputWrapper01>
        <input
          {...props.register("addressDetail")}
          defaultValue={String(
            props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
          )}
        ></input>
      </W.InputWrapper01>
      {isModal && (
        <Modal
          title="주소"
          open={isModal}
          onOk={addressShowModal}
          onCancel={addressShowModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete}></DaumPostcodeEmbed>
        </Modal>
      )}
    </W.Wrapper>
  );
}
