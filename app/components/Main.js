// Include React
var React = require("react");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("./utils/API");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { username: 'rwar' };
    this.setUser = this.setUser.bind(this);
  },

  setUser: function(user){
    this.setState({username: user});
  },

render: function() {
    var that = this;
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { username: that.state.username, setUser: that.setUser });
    });
    return(
      <div className= "mainContainer">
        <div className="jumbotron" style={{backgroundColor: "black", color: "red", borderStyle: "solid", borderWidth: 0, borderRadius: 75}}>
           <h1 className="text-center">Slayer in Training</h1>
            <p className="text-center">Are you ready to reach your full potential?</p>             
        </div>
        <div>
          {children} 
        </div>
      </div>
    )
  }
});



// Export the component back for use in other files
module.exports = Main;
