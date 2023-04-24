import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

interface IArgs {
  data?: Pick<IQuery, "fetchUseditems"> | undefined;
  fetchKey: string;
  fetchMore: <
    TFetchData = Pick<IQuery, "fetchUseditems">,
    TFetchVars extends OperationVariables = IQueryFetchUseditemsArgs
  >(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: TFetchData,
        options: {
          fetchMoreResult?: TFetchData | undefined;
          variables?: TFetchVars | undefined;
        }
      ) => TFetchData;
    }
  ) => Promise<ApolloQueryResult<TFetchData>>;
}

export const useScrollMode = (
  args: IArgs
): {
  onLoadMore: () => Promise<void>;
} => {
  const { fetchKey } = args;
  const onLoadMore = async (): Promise<void> => {
    if (args.data === undefined) return;
    await args.fetchMore({
      variables: {
        page: Math.ceil((args.data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (fetchMoreResult[fetchKey] === undefined) {
          return {
            [fetchKey]: [...prev[fetchKey]],
          };
        }
        return {
          [fetchKey]: [...prev[fetchKey], ...fetchMoreResult[fetchKey]],
        };
      },
    });
  };

  return {
    onLoadMore,
  };
};
