import * as A from "../styles";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";
import { IProps } from "./types";

export default function AreaD(props: IProps): JSX.Element {
  const { onClickMovePage } = movePageMode();

  return (
    <A.Container ref={props.scrollRefD}>
      <video src="/landing/area04.mp4" muted autoPlay loop></video>
      <div>
        <h2>Mount People</h2>
        <A.Btn onClick={onClickMovePage("/communitys")}>Start</A.Btn>
      </div>
      <A.ScrollBox></A.ScrollBox>
    </A.Container>
  );
}
