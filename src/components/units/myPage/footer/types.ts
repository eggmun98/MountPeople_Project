import { IQuery } from "../../../../commons/types/generated/types";

export interface IProps {
  data: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
  save: string;
}

export interface ISaveProps {
  onClickMovePage: (link: string) => () => Promise<void>;
}
