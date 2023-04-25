import Searchbars01 from "../../../../commons/searchbars/01";
import * as L from "./styles";
import { IProps } from "./types";

export default function ListHeader(props: IProps): JSX.Element {
  return (
    <L.Wrapper>
      <L.ImgWrapper>
        <h1>자유롭게 이야기를 나눠 보세요~</h1>
      </L.ImgWrapper>
      <Searchbars01 onChangeSearchbar={props.onChangeSearchbar}></Searchbars01>
    </L.Wrapper>
  );
}
