import { withFormik } from "formik";
import * as Yup from "yup";

import FarmRegistrationForm from "./FarmRegistrationView";

export default withFormik({
  mapPropsToValues: props => ({
    farmName: ""
  }),

  validationSchema: Yup.object().shape({
    farmName: Yup.string().required("You must enter a farm name")
  }),
  handleSubmit: () => {
    console.log("woo");
  }
})(FarmRegistrationForm);
