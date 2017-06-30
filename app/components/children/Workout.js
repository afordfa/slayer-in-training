// Include React
var React = require("react");
import {Link} from "react-router";

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("../utils/API");
var Details = require("./workout/Details")

// Creating the Main component
var Workout = React.createClass({

// psuedocode
  // 1) on page load: a modal pops up (or separate page) with options to login or "guest slay" (first wire frame)
  // 2) click guest slay redirect to pre-written workout (3rd wire frame)
  // 3) click login redirect to google authentication
  // 4) google login is approved (or error message thrown)
  // 5) login approved: redirect to welcome slayer (second wire frame)
  // 6) if user chooses time, style and clicks "ready to slay"- workout is generated from database and displayed (3rd wire frame)
  // 7) if user chooses track redirect to tracker page (4th wire frame)
  // 8) add a button on each page (besides login) the reditects to a workout resources list (for now straight up weblinks, will complie ASAP)

  // Here we render the function

  render: function() {
    return (

      <div>
        <div className="text-center" idName="subHeader"> <h3 idName="welcome">Welcome Slayer!</h3> 
          Ready to train? 
        </div> 
        <div idName=  "howLong"> <p className ="text-center"> How long can you train today? &nbsp;
                <select>
                <option >15 Minutes Mobility</option>
                <option >30 Minutes Mobility</option>
                <option >15 Minutes Strength</option>
                <option >30 Minutes Strength</option>
                <option >30 Minutes Endurance</option>
                <option >45 Minutes Endurance</option>
                <option >60 Minutes Full Buffy</option>
              </select></p></div>
        <p className ="text-center">
            <button className = "btn-danger"> Ready. Set. Slay!</button> 
        </p>
        <p className ="text-center">
          <Link to={"track"}> 
            <button className = "btn-danger"> Track Progress</button>
          </Link>  
        </p>
        <p className ="text-center">
          <Link to={"timer"}> 
            <button className = "btn-danger"> Timer</button>
          </Link>  
        </p>        
        <div idName= "track"> <p className ="text-center"> Better, faster, stronger. Outrun the demons. </p></div> 

        <div className="text-center" idName="subHeader"> 
          Ready. Set. SLAY!  
        </div> 
        <div className="text-center"> 
          <Details />
        </div>
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
module.exports = Workout;
