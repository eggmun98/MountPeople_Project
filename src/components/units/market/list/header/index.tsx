import Searchbars01 from "../../../../commons/searchbars/01";
import { Wrapper } from "./styles";
import { IProps } from "./types";

export default function ListHeader(props: IProps): JSX.Element {
  return (
    <Wrapper>
      <Searchbars01 onChangeSearchbar={props.onChangeSearchbar}></Searchbars01>
    </Wrapper>
  );
}
