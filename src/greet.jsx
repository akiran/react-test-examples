var React = require('react');
var Hello = require('./hello');

var Greet = React.createClass({
  getDefaultProps: function () {
    return {names: []};
  },  
  render: function () {
    return (
      <div>
        {this.props.names.map(function (name, index) {
          return <Hello key={index} name={name} />
        })}
      </div>
    );
  }
});

module.exports = Greet;