// Include React
var React = require("react");


// This is the Form, our main component. It includes the banner and form element
var Clock = React.createClass({


  getInitialState: function() {
    return { time: "", intervalId: this.props.seconds, stopTime: this.props.seconds, timer: "" };
  },

  handleStart: function() {
    console.log(this.state.duration);
    var newStop = this.props.seconds;
    this.setState({stopTime: newStop});
    this.setState ({timer: setInterval(this.count, 1000)})
    console.log(this.props.seconds);
    console.log(this.state.stopTime);
  },


  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    var changeTime = this.stopTime--;
    this.setState({stopTime: changeTime });
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = this.convert(this.stopTime);
    console.log(converted);

  },



  handleStop: function() {
    console.log("test");
    var audio = new Audio('sounds/dingdong.wav');
    audio.play(); 
    clearInterval(this.intervalId);
  

  },


  // tickDown: function () {
  //   console.log("help me");
  //   this.setState ({intervalId: setInterval(this.count, 1000)} );
  //   console.log(this.state.time);
  //   // this.props.handleUpdate(this.state.time);
  // },

  convert: function (seconds) {
    // const seconds = Math.round(mSec / 1000)
    let minutes = Math.floor(seconds / 60)
    let sec = seconds % 60
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    sec = sec < 10 ? `0${sec}` : `${sec}`
    return `${minutes}:${sec}`
  }, 

  // Here we descibe this component's render method
  render: function() {
    return (
      <div>
        <span className ="text-center">
          <button className = "btn-danger" onClick={this.handleStart}> 
            START
          </button> 
          <button className = "btn-danger" onClick={this.handleStop}> 
            STOP
          </button> 
        </span>
        <div>
           <span>{this.convert(this.props.seconds)}</span>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Clock;