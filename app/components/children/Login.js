// Include React
var React = require("react");
import {Link} from "react-router";

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("../utils/API");

// Creating the Guest component
var Login = React.createClass({

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

  render: function() {
    return (

      <div>
        <p className="text-center">
        Not your average workout app! <br></br>
        Once you login, choose how much time you have to train, and what you'd like to focus on today, 
        and let Slayer in Training generate a workout and/or meditation just for you! <br></br>
        Not sure what you want to focus on? Choose The Full Buffy for a complete mind-body workout including 
        Mobility, Endurance, Strength, and Meditation.</p>        
          <div className="text-center" idName="subHeader"> <h3 idName="welcome">Welcome Slayer!</h3> 
            <p>Ready to train?</p> 
              <form>
                 <label>
                 Name &nbsp;
                   <input type="text" name="name" />
                 </label> <br></br>
                 <label>
                 Email &nbsp;
                   <input type="text" name="email" />
                 </label>
              </form>

              <p className ="text-center">
                <Link to={"welcome"}> 
                  <button className = "btn-danger"> Login </button>
                </Link>  
              </p>
              <p className ="text-center">
                Not sure if you're the chosen one? Try out your potential with this Sample of our Full Buffy Workout! &nbsp; 
                <Link to={"guest"}> 
                  <button className = "btn-danger"> Sample Workout </button>
                </Link>  
              </p>              
          </div> 

        </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Login;