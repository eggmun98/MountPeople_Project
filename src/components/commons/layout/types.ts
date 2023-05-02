import path from "path";

export interface IProps {
  page: boolean[];
  allPage: {
    community: string[];
    market: string[];
  };
  onClickMovePage: (link: string) => () => Promise<void>;
}
