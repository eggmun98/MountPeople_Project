import * as A from "../styles";
import { IProps } from "./types";

export default function AreaC(props: IProps): JSX.Element {
  return (
    <A.Container ref={props.scrollRefC}>
      <video src="/landing/area03.mp4" muted autoPlay loop></video>
      <div>
        <h1>안쓰는 등산물품?</h1>
        <h2>Mount People</h2>
        <h3>로 팔아보자~</h3>
      </div>
      <A.ScrollBox onClick={props.onClickArea(props.scrollRefD)}>
        <A.ScrollText>SCROLL</A.ScrollText>
        <A.ScrollIcon src="/landing/arrow01.png" />
      </A.ScrollBox>
    </A.Container>
  );
}
