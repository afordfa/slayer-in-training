
var React = require("react");
var convertTime = require("./convert-time");
var Clock = require("./timer/Clock.js")

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Guest component
var Timer = React.createClass({


  getInitialState: function() {
    return { time: 0, duration: 1, stopTime: 60, timerType: "down" };
    this.updateTimer = this.updateTimer.bind(this);
  },


  // // This function will respond to the user input
  handleChange(event) {
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    this.setState( {stopTime: this.state.duration * 60} ) 
    console.log(this.state.duration);
  },

  updateTimer: function(seconds) {
    this.setState ({ duration: seconds / 60 })
  },

  render: function() {
    return (
      <div className="text-center">
        <div className="panel-body text-center">
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Minutes</strong>
              </h4>
              {/*
                  I DON'T KNOW HOW TO MAKE THIS INPUT NARROWER! PLEASE MAKE IT PRETTY!!!!
              */}
              <input

                type="number"
                min="1"
                value={this.state.duration}
                className="form-control"
                id="duration"
                onChange={this.handleChange}
                required
              />

              <h4>
                <strong>Time Type</strong>
              </h4>
              <select 
              name="timers"
              value={this.state.timerType}
              id="timerType"
              onChange={this.handleChange}
              >
                <option value="down">AMRP (Count Down)</option>
                <option value="down">Meditation (Count Down)</option>
                <option value="up">Run Timer (Count Up)</option>
              </select>
            </div>
          </form>
        </div>

        <p>
          Here there be a fancy timer that counts up or down.
        </p>
        <Clock seconds= {this.state.duration * 60} timeType = {this.state.timerType} handleUpdate={this.updateTimer} />

      </div>

    );
  }
})

// Export the component back for use in other files
module.exports = Timer;
