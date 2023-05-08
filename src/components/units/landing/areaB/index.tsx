import * as A from "../styles";
import { IProps } from "./types";

export default function AreaB(props: IProps): JSX.Element {
  return (
    <A.Container ref={props.scrollRefB}>
      <video src="/landing/area02.mp4" muted autoPlay loop></video>
      <div>
        <h1>좋은 등산 용품을</h1>
        <h2>Mount People</h2>
        <h3>로 구해보자~</h3>
      </div>
      <A.ScrollBox onClick={props.onClickArea(props.scrollRefC)}>
        <A.ScrollText>SCROLL</A.ScrollText>
        <A.ScrollIcon src="/landing/arrow01.png" />
      </A.ScrollBox>
    </A.Container>
  );
}
