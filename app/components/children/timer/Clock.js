// Include React
var React = require("react");


// This is the Form, our main component. It includes the banner and form element
var Clock = React.createClass({


  getInitialState: function() {
    return { time: 0, stopTime: this.props.seconds, time: 0 };
  },

  handleStart: function() {
    // console.log(this.state.duration);
    var newStop = this.props.seconds;
    this.setState({stopTime: newStop});
    this.timer = setInterval(this.tickDown, 1000)
    // console.log(this.props.seconds);
    // console.log(this.state.stopTime);
  },



  handleStop: function() {
    console.log("test");
    var audio = new Audio('sounds/dingdong.wav');
    audio.play(); 
    clearInterval(this.timer);
  

  },



  // tickUp () {
  //   this.setState({ time: Date.now() - this.startTime })
  // }


  tickDown: function () {
    console.log("help me");
    // this.setState({ time: Date.now() - this.stopTime })
    console.log("first " + this.state.stopTime);
    var changeTime = --this.state.stopTime;
    this.setState({stopTime: changeTime });
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    // var converted = this.convert(this.stopTime);
    console.log(this.state.stopTime); 


  },



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
          <button className = "btn-danger" onClick={this.handleStart}
          > 
            START
          </button> 
          <button className = "btn-danger" onClick={this.handleStop}
          > 
            STOP
          </button> 
        </span>
        <div>
           <span>{this.convert(this.state.stopTime)}</span>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Clock;