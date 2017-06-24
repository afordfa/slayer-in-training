
var React = require("react");
var Clock = require("./timer/Clock.js")
var helpers = require("../utils/helpers");


var Timer = React.createClass({


  getInitialState: function() {
    return { time: 0, duration: 1, stopTime: 60, timerType: "amrp" };
    this.updateTimer = this.updateTimer.bind(this);
  },


  // // This function will respond to the user input
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    this.setState( {stopTime: this.state.duration * 60} ) 
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
                <option value="amrp">AMRP (Count Down)</option>
                <option value="meditate">Meditation (Count Down)</option>
                <option value="run">Run Timer (Count Up)</option>
              </select>
            </div>
          </form>
        </div>
        <Clock seconds= {this.state.duration * 60} timerType = {this.state.timerType} handleUpdate={this.updateTimer} />

      </div>

    );
  }
})

// Export the component back for use in other files
module.exports = Timer;
