import "normalize.css";
import "stylesheets/application.css";

import React from "react";
import ReactDOM from "react-dom";
import { Router,  browserHistory } from 'react-router';
import locale, { getLocale, setLocale } from "./locale";
import getRoutes from './routes';
import ga from 'react-ga';
ga.initialize('UA-102190863-2');

browserHistory.listen(location => ga.pageview(location.pathname));
const component = (
  <Router history={browserHistory} >
    {getRoutes()}
  </Router>
);

setLocale("en-US");

ReactDOM.render(component, document.getElementById('react-root'));
