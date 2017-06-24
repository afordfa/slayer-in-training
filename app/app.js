// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("../config/routes");


// Include the Form Component
var Form = require("./components/children/timer/Clock");


// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));
