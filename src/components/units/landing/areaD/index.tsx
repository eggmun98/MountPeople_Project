import { useRouter } from "next/router";
import * as A from "../styles";
import { movePageMode } from "../../../commons/hooks/customs/movePageMode";

export default function AreaD(): JSX.Element {
  const router = useRouter();
  const { onClickMovePage } = movePageMode();

  return (
    <A.Container style={{ backgroundColor: "#fff" }}>
      <video src="/landing/area04.mp4" muted autoPlay loop></video>

      <A.ScrollBox>
        <A.Btn onClick={onClickMovePage("/communitys")}>Start</A.Btn>
      </A.ScrollBox>
    </A.Container>
  );
}
