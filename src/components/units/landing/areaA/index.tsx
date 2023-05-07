import * as A from "../styles";
import { IProps } from "./types";

export default function AreaA(props: IProps): JSX.Element {
  return (
    <A.Container>
      <video src="/landing/area01.mp4" muted autoPlay loop></video>
      <div>
        <h1>어디 좋은 산이 있을까?</h1>
        <h2>Mount People</h2>
        <h3>로 찾아보자~</h3>
      </div>
      <A.ScrollBox onClick={props.onClickArea(props.scrollRefB)}>
        <A.ScrollText>SCROLL</A.ScrollText>
        <A.ScrollIcon src="/landing/arrow01.png" />
      </A.ScrollBox>
    </A.Container>
  );
}
