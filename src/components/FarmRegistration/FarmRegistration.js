import { withFormik } from "formik";
import * as Yup from "yup";
import { graphql, compose } from "react-apollo";

import FarmRegistrationForm from "./FarmRegistrationView";
import gql from "graphql-tag";

const mutation = gql`
  mutation RegisterFarm($name: String!, $postCode: String!) {
    RegisterFarm(name: $name, postCode: $postCode) {
      id
      name
    }
  }
`;

export default compose(
  graphql(mutation),
  withFormik({
    mapPropsToValues: props => ({
      farmName: "",
      postCode: ""
    }),

    validationSchema: Yup.object().shape({
      farmName: Yup.string().required("You must enter a farm name"),
      postCode: Yup.string().required(
        "You must enter the postcode for your farm"
      )
    }),
    handleSubmit: (payload, { props, setSubmitting, setErrors }) => {
      const { farmName, postCode } = payload;
      props.mutate({ variables: { name: farmName, postCode } }).then(
        response => {
          console.log(response);
        },
        e => {
          const errors = e.graphQLErrors.map(error => error.message);
          console.log(errors);
          setSubmitting(false);
          setErrors({ email: " ", password: " ", form: errors });
        }
      );
    }
  })
)(FarmRegistrationForm);
