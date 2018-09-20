import React from "react";
import { Container, Card, CardBody, ListGroup, ListGroupItem } from "mdbreact";
import { Col, Row } from "mdbreact";

const StockManager = () => {
  return (
    <Container>
      <Card>
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Test</Col>
                <Col>Test2</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Container>
  );
};

export default StockManager;
