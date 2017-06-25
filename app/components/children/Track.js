var React = require('react');
var ReactTable = require('react-table').default


// react-table documentation
// https://www.npmjs.com/package/react-table


// import 'react-table/react-table.css'
// this css import throws an error


var Track = React.createClass({
  render: function() {
    const data = [
      {name: "Joe Jones", 
      age: 24},
      {name: "Suzie Queue", 
      age: 18}]
   
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors! 
    }, {
      Header: 'Age',
      accessor: 'age',
    }] 
   return (
    <ReactTable
      data={data}
      columns={columns}
    />)
  }
})
// Export the component back for use in other files
module.exports = Track;