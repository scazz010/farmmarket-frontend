import React from "react";
import SummaryCard from "./Card";
import { Fa } from "mdbreact";

const SalesOverview = props => (
  <div className="card-deck p-2">
    <SummaryCard
      icon={<Fa icon="dollar" size="2x" className="red-text" />}
      description="total"
      value={`${props.totalRevenue.amount} ${props.totalRevenue.currency}`}
    />
    <SummaryCard
      icon={<Fa icon="shopping-cart" size="2x" className="teal-text" />}
      description="Total # of sales"
      value={props.totalSales}
    />
    <SummaryCard
      icon={<Fa icon="user" size="2x" className="indigo-text" />}
      description="Total # of customers"
      value={props.totalCustomers}
    />
  </div>
);

export default SalesOverview;
