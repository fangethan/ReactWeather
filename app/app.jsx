var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Weather = require("Weather");
var About = require("About");
var Examples = require("Examples");
var CountryCode = require("./components/CountryCodeTable");

require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

require("style!css!applicationStyles")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <Route path="countryCode" component={CountryCode} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
