import AreaA from "./areaA";
import AreaB from "./areaB";
import AreaC from "./areaC";
import AreaD from "./areaD";
import Header from "./header";
import { Wrapper } from "./styles";

export default function Lending(): JSX.Element {
  return (
    <div style={{ position: "relative" }}>
      <Header></Header>
      <Wrapper>
        <AreaA />
        <AreaB />
        <AreaC />
        <AreaD />
      </Wrapper>
    </div>
  );
}
