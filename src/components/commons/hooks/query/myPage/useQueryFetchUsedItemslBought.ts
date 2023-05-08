import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query {
    fetchUseditemsIBought {
      _id
      name
      price
      soldAt
    }
  }
`;
