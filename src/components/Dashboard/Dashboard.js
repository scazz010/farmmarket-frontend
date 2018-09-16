import React from "react";

import { Fa, Card, CardBody, CardTitle } from "mdbreact";
import { Table, TableBody, TableHead } from "mdbreact";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import SalesOverview from "./SalesOverview";

import FarmRegistration from "../FarmRegistration/FarmRegistration";

const dashboardStatistics = gql`
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

const Dashboard = () => (
  <Query query={dashboardStatistics}>
    {({ loading, error, data }) => {
      if (loading || error) {
        return null;
      }

      if (!data.me.farm) {
        return <FarmRegistration />;
      }

      return (
        <div style={{ marginTop: "100px", paddingLeft: 50, paddingRight: 50 }}>
          <SalesOverview
            totalRevenue={data.me.farm.totalRevenue}
            totalCustomers={data.me.farm.totalCustomers}
            totalSales={data.me.farm.totalSales}
          />

          <div className="p-2">
            <Card>
              <CardBody>
                <CardTitle>Recent orders</CardTitle>
                <Table responsiveMd>
                  <TableHead>
                    <tr>
                      <th>Customer</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Payment</th>
                    </tr>
                  </TableHead>
                </Table>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Dashboard;
