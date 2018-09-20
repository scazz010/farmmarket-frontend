import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Farms = () => (
  <Query
    query={gql`
      {
        farms {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      return data.farms.map(({ id, name }) => (
        <div key={id}>
          <p>{`${id}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default Farms;
