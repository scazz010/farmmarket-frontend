import gql from "graphql-tag";

export const ProfileQuery = gql`
  {
    me {
      given_name
      family_name
      farm {
        sales {
          id
        }
        totalSales
        totalCustomers
        totalRevenue
      }
    }
  }
`;
