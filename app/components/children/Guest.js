// Include React
var React = require("react");
import {Link} from "react-router";

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("../utils/API");

// Creating the Guest component
var Guest = React.createClass({

// full app psuedocode
  // 1) on page load: a modal pops up (or separate page) with options to login or "guest slay" (first wire frame)
  // 2) click guest slay redirect to pre-written workout (3rd wire frame)
  // 3) click login redirect to google authentication
  // 4) google login is approved (or error message thrown)
  // 5) login approved: redirect to welcome slayer (second wire frame)
  // 6) if user chooses time, style and clicks "ready to slay"- workout is generated from database and displayed (3rd wire frame)
  // 7) if user chooses track redirect to tracker page (4th wire frame)
  // 8) add a button on each page (besides login) the reditects to a workout resources list (for now straight up weblinks, will complie ASAP)

  // Here we render the function

  //   loginPage: function() {
  //   console.log("test"); 
  //   window.location.href = "../Login"

  // },

  render: function() {
    return (

      <div>
        <div className="text-center" idName="subHeader"> 
          <h3 idName="welcome">
            Welcome Potential Slayer!
          </h3> 
          Ready to train? 
        </div> 
        <div idName=  "guestWorkout"> 
          <div className ="text-center"> 
           <h1> Sample Full Buffy Workout</h1>
            <ul className ="text-center">   
              <li>Standing Side Stretch (Mobility) </li>
              <li>3 Sun Salutations (Mobility)</li> 
              <li>Standing Baby Cradle Hip Stretch (Mobility)</li>
              <li>5 Minute AMRP: 10 push-ups, 15 sit-ups, 10 squats, 20 Bicycle Crunches, 10 Jump Squats (Strength)</li>
              <li>5 minutes Walk or Run (Endurance)</li>
              <li>5 minute Breath Count Meditation (inhale for count of 6, hold for 2, exhale 6, hold 2)</li> 
            </ul>
          </div>
        </div>
          <p className ="text-center"> 
           Like what you slayed? Join the Slayer Army!  <br></br>
             <Link to={"login"}>
               <button className = "btn-danger"> Signup to Slay!</button>
             </Link>
          </p>
          <p className ="text-center"> 
           What the heck is a Mountain Climber? Not to worry potential Slayer! <br></br>
           We've compiled links to tutorials for some of the moves for you. You'll be apocolypse ready in no time!  <br></br>
             <Link to={"resources"}>
               <button className = "btn-danger"> Workout Resources</button>
             </Link>
          </p>            
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Guest;
