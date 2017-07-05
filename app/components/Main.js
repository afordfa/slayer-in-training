// Include React
var React = require("react");
var axios = require("axios");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("./utils/API");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { username: '1' };
    this.setUser = this.setUser.bind(this);
  },

  setUser: function(user){
    console.log("user: " + user);
    var getUrl = "/api/users/" + user;
    axios.get(getUrl).then((res) => {
      console.log("set user");
      console.log(res);
      console.log("new id: " + res.data.id)
      this.setState({username: res.data.id});
    })
    
  },

render: function() {
    var that = this;
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { username: that.state.username, setUser: that.setUser });
    });
    return(
      <div className= "mainContainer" style= {{backgroundColor: "#f1e9d2"}} >
        <div className="jumbotron" style={{backgroundColor: "black", color: "#800000", borderStyle: "solid", borderWidth: 0, borderRadius: 75, textAlign: "Center"}}>
           <h1 style={{fontFamily: "New Rocker", fontStyle: "Cursive", fontSize: 78 }}> Slayer in Training </h1>
            <p className="text-center">Are you ready to reach your full potential?</p>             
        </div>
        <div>
          {children} 
        </div>
            <div className="footer" style={{backgroundColor: "#4d4d4d", color: "#f1e9d2", borderStyle: "solid", borderWidth: 0,  textAlign: "Center"}}>     
            &copy; The Scoobies
            </div>
      </div>
    )
  }
});



// Export the component back for use in other files
module.exports = Main;
