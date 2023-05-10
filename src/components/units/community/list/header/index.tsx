import Searchbars01 from "../../../../commons/searchbars/01";
import * as L from "./styles";
import { IProps } from "./types";

export default function ListHeader(props: IProps): JSX.Element {
  return (
    <L.Wrapper>
      <L.ImgWrapper>
        <h1>등산 커뮤니티 Mount People</h1>
      </L.ImgWrapper>
      <Searchbars01 onChangeSearchbar={props.onChangeSearchbar}></Searchbars01>
    </L.Wrapper>
  );
}
