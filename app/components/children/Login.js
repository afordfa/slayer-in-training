/* global FB*/
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Link} from "react-router";
import {browserHistory} from 'react-router';
var axios = require("axios");

var Login = React.createClass({


  componentDidMount: function() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '960505730755691',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
      FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
          // this.checkLoginState();
        } else {
          console.log('---->User cancelled login or did not fully authorize.');
        }
      }.bind(this));
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  testAPI: function() {
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log(response);
      console.log(this.props.username);
      console.log(response.id)
      this.props.setUser(response.id);
      var getUrl = "/api/users/" + response.id;
      
      var data = {
      name: response.name,
      fbId: response.id
      }

      axios.get(getUrl).then((res) => {
        console.log(res);
        console.log("response id: " + response.id);
        if(!res.data) {
          var postUrl = "/api/users";
          axios.post(postUrl, data);
        }
      })

      console.log('Successful login for: ' + response.name);
      browserHistory.push('/workout');
    }.bind(this));
  },

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback: function(response) {
    console.log("response here: " + response);
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
    }
  },

  checkLoginState: function() {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  },

  handleClick: function() {
    FB.login(this.checkLoginState());
  },

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
            <p className ="text-center">
              
                <button className = "btn-danger" onClick={this.handleClick}> Login With Facebook</button>
                <div id="status"></div>
            </p>
            <div className ="text-center" style={ {padding: 10, margin: 10, backgroundColor: "black", color: "red", borderStyle: "solid", borderWidth: 0, borderRadius: 50}} > 
              Not sure if you're the chosen one? Find your potential with a sample of our Full Buffy Workout! &nbsp; <br></br>
                <Link to={"guest"}> 
                  <button className = "btn-danger" style={{margin: 10, borderRadius: 50 }}> Sample Workout </button>
                </Link>         
            </div>              
        </div> 
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;

