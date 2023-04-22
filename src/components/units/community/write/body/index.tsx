import { useRecoilState } from "recoil";
import { addressState, zipCodeState } from "../../../../commons/stores";
import * as W from "./styles";
import { IAddress, IProps } from "./types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useState } from "react";
import { useMapCreationMode } from "../../../../commons/hooks/customs/ every/useMapCreationMode";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function WriteBody(props: IProps): JSX.Element {
  const { mapCreation, isOpen } = useMapCreationMode();

  const [zipcode, setZipcode] = useRecoilState<string>(zipCodeState);
  const [address, setAddress] = useRecoilState<string>(addressState);
  const [isModal, setIsModal] = useState<boolean>(false);

  mapCreation();
  const myKey = String(process.env.NEXT_PUBLIC_API_KEY);
  console.log("나의 키", myKey);

  const handleComplete = (data: IAddress): void => {
    addressShowModal();
    setAddress(data.address);
    setZipcode(data.zonecode);
  };

  const addressShowModal = (): void => {
    setIsModal((prev) => !prev);
  };

  return (
    <W.OutWrapper>
      <W.MapWrapper>
        {isOpen && (
          <Map
            center={{
              lat: 33.450701,
              lng: 126.570667,
            }}
            style={{
              width: "100%",
              height: "160px",
            }}
            level={3}
          >
            <MapMarker
              position={{ lat: 33.450701, lng: 126.570667 }}
            ></MapMarker>
          </Map>
        )}
      </W.MapWrapper>
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
    </W.OutWrapper>
  );
}
