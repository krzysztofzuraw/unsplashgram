import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import PhotoGrid from "./components/PhotoGrid/PhotoGrid.jsx";
import SinglePhoto from "./components/SinglePhoto/SinglePhoto.jsx";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const history = createHistory();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/photo/:photoId" component={SinglePhoto} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
