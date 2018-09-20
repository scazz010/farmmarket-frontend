import * as types from "./types";
import * as AuthService from "../../../utils/AuthService";

const authReducer = (
  state = {
    error: null,
    isAuthenticated: AuthService.loggedIn(),
    isFetching: false,
    profile: AuthService.getProfile()
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        profile: action.payload.profile
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        isFetching: false,
        profile: {}
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      };
    default:
      return state;
  }
};

export default authReducer;
