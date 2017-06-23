// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../app/components/Main");
var Guest = require("../app/components/children/Guest");
var Modal = require("../app/components/Modal");
var Resources = require("../app/components/children/Resources");
var Track = require("../app/components/children/Track");
var Welcome = require("../app/components/children/Welcome");
var Workout = require("../app/components/children/Workout");
var Timer = require("../app/components/children/Timer");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
	    <Route path="welcome" component={Welcome} />
	    <Route path="guest" component={Guest} />
	    <Route path="modal" component={Modal} />
	    <Route path="resources" component={Resources} />
	    <Route path="track" component={Track} />
	    <Route path="workout" component={Workout}/>
		<Route path="timer" component={Timer} />
	</Route>
  </Router>
);
