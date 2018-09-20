import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { authActions } from "../../redux/modules/auth";
import AppView from "./AppView";

const mapDispatchToProps = dispatch => ({
  loginError: error => dispatch(authActions.loginError(error)),
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile))
});

export default withRouter(
  connect(
    null, // no mapStateToProps
    mapDispatchToProps
  )(AppView)
);
