import * as types from "./types";

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = profile => ({
  payload: { profile },
  type: types.LOGIN_SUCCESS
});

export const loginError = error => ({
  error,
  type: types.LOGIN_ERROR
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});
