import AreaA from "./areaA";
import AreaB from "./areaB";
import AreaC from "./areaC";
import AreaD from "./areaD";
import Header from "./header";
import { Wrapper } from "./styles";
import { useAreaScrollMode } from "../../commons/hooks/customs/useAreaScrollMode";

export default function Lending(): JSX.Element {
  const { onClickArea, scrollRefB, scrollRefC, scrollRefD } =
    useAreaScrollMode();

  return (
    <div style={{ position: "relative" }}>
      <Header></Header>
      <Wrapper>
        <AreaA onClickArea={onClickArea} scrollRefB={scrollRefB} />
        <AreaB
          onClickArea={onClickArea}
          scrollRefB={scrollRefB}
          scrollRefC={scrollRefC}
        />
        <AreaC
          onClickArea={onClickArea}
          scrollRefC={scrollRefC}
          scrollRefD={scrollRefD}
        />
        <AreaD scrollRefD={scrollRefD} />
      </Wrapper>
    </div>
  );
}
