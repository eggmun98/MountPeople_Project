import * as A from "../styles";

export default function AreaC(): JSX.Element {
  return (
    <A.Container>
      <video src="/landing/area07.mp4" muted autoPlay loop></video>

      <A.ScrollBox>
        <A.ScrollText>SCROLL</A.ScrollText>
        <A.ScrollIcon src="/landing/arrow01.png" />
      </A.ScrollBox>
    </A.Container>
  );
}
