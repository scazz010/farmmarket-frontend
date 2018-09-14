import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import configureStore from "./redux/configureStore";
import App from "./containers/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloProvider } from "react-apollo";
import client from "./Store/ApolloClient";

const store = configureStore();

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
