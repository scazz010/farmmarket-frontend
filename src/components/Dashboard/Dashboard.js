import React from "react";

import SummaryCard from "./Card";
import { Fa, Card, CardBody, CardTitle } from "mdbreact";
import { Table, TableBody, TableHead } from "mdbreact";

const Dashboard = () => (
  <div style={{ marginTop: "100px", paddingLeft: 50, paddingRight: 50 }}>
    <div className="card-deck p-2">
      <SummaryCard
        icon={<Fa icon="dollar" size="2x" className="red-text" />}
        description="total"
        value="234,234"
      />
      <SummaryCard
        icon={<Fa icon="shopping-cart" size="2x" className="teal-text" />}
        description="Total # of sales"
        value="32"
      />
      <SummaryCard
        icon={<Fa icon="user" size="2x" className="indigo-text" />}
        description="Total # of customers"
        value="12"
      />
    </div>

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

export default Dashboard;
