import React from "react";

import { Container, Row, Col, Card, CardBody, Button } from "mdbreact";
import ValidatableInput from "../Form/ValidatableInput";

const FarmRegistrationForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <ValidatableInput
                    name="farmName"
                    className={`form-control ${errors.farmName &&
                      touched.farmName &&
                      "invalid is-invalid"}`}
                    value={values.farmName}
                    label="Farm Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {errors.farmName && (
                      <div className="invalid-feedback">{errors.farmName}</div>
                    )}
                  </ValidatableInput>

                  <ValidatableInput
                    name="postCode"
                    className={`form-control ${errors.postCode &&
                      touched.postCode &&
                      "invalid is-invalid"}`}
                    value={values.postCode}
                    label="Post Code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {errors.postCode && (
                      <div className="invalid-feedback">{errors.postCode}</div>
                    )}
                  </ValidatableInput>
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="cyan" type="submit" disabled={isSubmitting}>
                    Register
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FarmRegistrationForm;
