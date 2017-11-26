import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.getElementById("root");

render(renderApp(), root);
registerServiceWorker();
