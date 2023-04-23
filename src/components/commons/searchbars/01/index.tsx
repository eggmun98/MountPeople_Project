import { Searchbar, SearchbarWrapper } from "./styles";
import { IProps } from "./types";

export default function Searchbars01(props: IProps): JSX.Element {
  return (
    <SearchbarWrapper>
      <Searchbar
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      ></Searchbar>
    </SearchbarWrapper>
  );
}
