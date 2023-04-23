import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseSearchbarArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
  refetchBoardsCount: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchbarMode = (
  args: IUseSearchbarArgs
): {
  keyword: string;
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    void args.refetchBoardsCount({ search: value });
    setKeyword(value);
  }, 500);

  const onChangeSearchbar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword,
    onChangeSearchbar,
  };
};
