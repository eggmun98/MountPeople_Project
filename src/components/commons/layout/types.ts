export interface IProps {
  page: boolean[];
  allPage: {
    community: string[];
    market: string[];
  };
  onClickMovePage: (link: string) => () => Promise<void>;
}

export interface ILayoutProps {
  children: JSX.Element;
}
