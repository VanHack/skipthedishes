import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = document.getElementById("root");

render(renderApp(), root);
registerServiceWorker();

console.log(
  `%c  ________                                        __
/        |                                      /  |
$$$$$$$$/  _______       __   ______   __    __ $$ |
$$ |__    /       \\     /  | /      \\ /  |  /  |$$ |
$$    |   $$$$$$$  |    $$/ /$$$$$$  |$$ |  $$ |$$ |
$$$$$/    $$ |  $$ |    /  |$$ |  $$ |$$ |  $$ |$$/
$$ |_____ $$ |  $$ |    $$ |$$ \\__$$ |$$ \\__$$ | __
$$       |$$ |  $$ |    $$ |$$    $$/ $$    $$ |/  |
$$$$$$$$/ $$/   $$/__   $$ | $$$$$$/   $$$$$$$ |$$/
                  /  \\__$$ |          /  \\__$$ |
                  $$    $$/           $$    $$/
                   $$$$$$/             $$$$$$/      `,
  "font-family:monospace"
);
