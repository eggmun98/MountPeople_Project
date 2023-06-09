import { gql, GraphQLClient } from "graphql-request";
import { selectionModalMode } from "../../components/commons/hooks/customs/closeModalMode";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

interface IToken {
  restoreAccessToken: {
    accessToken: string;
  };
}

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend11.codebootcamp.co.kr/graphql06",
      {
        credentials: "include",
      }
    );
    const result = await graphQLClient.request<IToken>(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
