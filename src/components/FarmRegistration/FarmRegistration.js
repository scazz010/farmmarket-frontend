import { withFormik } from "formik";
import * as Yup from "yup";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import FarmRegistrationForm from "./FarmRegistrationView";

import { ProfileQuery } from "../../Store/Queries";

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
    handleSubmit: (payload, { props, setSubmitting, setErrors }) => {
      const { farmName, postCode } = payload;
      props.mutate({
        refetchQueries: [{ query: ProfileQuery }],
        variables: { name: farmName, postCode }
      });
    },

    mapPropsToValues: props => ({
      farmName: "",
      postCode: ""
    }),

    validationSchema: Yup.object().shape({
      farmName: Yup.string().required("You must enter a farm name"),
      postCode: Yup.string().required(
        "You must enter the postcode for your farm"
      )
    })
  })
)(FarmRegistrationForm);
