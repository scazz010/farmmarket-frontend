import Auth0Lock from "auth0-lock";
import jwtDecode from "jwt-decode";

import config from "./config";

// Configure Auth0 lock
export const lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN, {
  auth: {
    redirectUrl: config.REDIRECT_URL,
    audience: "FarmMarket",
    responseType: "token"
  },
  theme: {
    primaryColor: "#b81b1c"
  },
  languageDictionary: {
    title: "Farm Market"
  }
});

export const login = () => {
  // Call the show method to display the widget.
  lock.show();
};

export const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getAccessToken();
  return !!token && !isTokenExpired();
};

export const logout = () => {
  // Clear user token and profile data from window.localStorage
  window.localStorage.removeItem("id_token");
  window.localStorage.removeItem("profile");
};

export const getProfile = () => {
  // Retrieves the profile data from window.localStorage
  const profile = window.localStorage.getItem("profile");
  return profile ? JSON.parse(window.localStorage.profile) : {};
};

export const setProfile = profile => {
  // Saves profile data to window.localStorage
  window.localStorage.setItem("profile", JSON.stringify(profile));
  // Triggers profile_updated event to update the UI
};

export const setToken = idToken => {
  // Saves user token to window.localStorage
  window.localStorage.setItem("id_token", idToken);
};

export const getToken = () => {
  // Retrieves the user token from window.localStorage
  return window.localStorage.getItem("id_token");
};

export const setAccessToken = accessToken =>
  window.localStorage.setItem("access_token", accessToken);

export const getAccessToken = () => window.localStorage.getItem("access_token");

export const getTokenExpirationDate = token => {
  token = token || getAccessToken();
  const decoded = jwtDecode(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
};

export const isTokenExpired = token => {
  token = token || getAccessToken();
  const date = getTokenExpirationDate(token);
  const offsetSeconds = 0;

  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
};
