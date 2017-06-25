var React = require('react');
var ReactTable = require('react-table').default
var helpers = require("../../utils/helpers");


// react-table documentation
// https://www.npmjs.com/package/react-table
// var apiData = [
//   {"id": 1,"distance": "1 mile","minutes": 8,"seconds": 42,"date": "2017-06-15T00:00:00.000Z","createdAt": "2017-06-21T14:44:14.000Z","updatedAt": "2017-06-21T14:44:14.000Z","UserId": 1},
//   {"id": 2,"distance": "2 miles","minutes": 12,"seconds": 15,"date": "2017-06-16T00:00:00.000Z","createdAt": "2017-06-21T14:46:10.000Z","updatedAt": "2017-06-21T14:46:10.000Z","UserId": 1},
//   {"id": 3,"distance": "5K","minutes": 22,"seconds": 6,"date": "2017-06-17T00:00:00.000Z","createdAt": "2017-06-21T14:46:10.000Z","updatedAt": "2017-06-21T14:46:10.000Z","UserId": 1},
//   {"id": 4,"distance": "10K","minutes": 40,"seconds": 57,"date": "2017-06-17T00:00:00.000Z","createdAt": "2017-06-21T14:46:10.000Z","updatedAt": "2017-06-21T14:46:10.000Z","UserId": 3}
// ];

var apiData = helpers.getTimes;

var Times = React.createClass({
  render: function() {
    var data = [];
    for (var i = 0; i < apiData.length; i++) {
      var month = apiData[i].date.substr(5, 2);
      var day = apiData[i].date.substr(8, 2);
      var year = apiData[i].date.substr(0, 4);
      var formattedDate = month + "/" + day + "/" + year;
      data.push({date: formattedDate, distance: apiData[i].distance, time: apiData[i].minutes + ":" + apiData[i].seconds});
    }
   
    const columns = [{
      Header: 'Date',
      accessor: 'date', 
      filterable: false
    }, {
      Header: 'Distance',
      accessor: 'distance',
    }, {
      Header: 'Time',
      accessor: 'time',
      filterable: false
    }
    ] 
   return (
    <ReactTable
      data={data}
      columns={columns}
      className="-striped"
      defaultPageSize={10}
      filterable = "true"
    />)
  }
})
// Export the component back for use in other files
module.exports = Times;