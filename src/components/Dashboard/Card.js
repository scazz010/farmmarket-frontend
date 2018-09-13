import React from "react";
import { Card, CardBody } from "mdbreact";

const DashboardCard = props => (
  <Card>
    <CardBody>
      <div className="d-flex">
        <div>{props.icon}</div>

        <div className="text-right d-flex flex-column" style={{ flexGrow: 1 }}>
          <div>{props.value}</div>
          <div> {props.description} </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

export default DashboardCard;
