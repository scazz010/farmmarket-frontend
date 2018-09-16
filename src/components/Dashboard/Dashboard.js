import React from "react";

import { Fa, Card, CardBody, CardTitle } from "mdbreact";
import { Table, TableBody, TableHead } from "mdbreact";
import { Query } from "react-apollo";

import { graphql } from "react-apollo";

import SalesOverview from "./SalesOverview";

import FarmRegistration from "../FarmRegistration/FarmRegistration";

import { ProfileQuery } from "../../Store/Queries";

const Dashboard = ({ data: { loading, error, me } }) => {
  if (loading || error) {
    return null;
  }

  if (!me.farm) {
    return <FarmRegistration />;
  }

  return (
    <div style={{ marginTop: "100px", paddingLeft: 50, paddingRight: 50 }}>
      <SalesOverview
        totalRevenue={me.farm.totalRevenue}
        totalCustomers={me.farm.totalCustomers}
        totalSales={me.farm.totalSales}
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
};

export default graphql(ProfileQuery)(Dashboard);
