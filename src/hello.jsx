var React = require('react');

var Hello = React.createClass({
  render: function () {
    return (
      <div className='hello' style={{width: 100}}>
        Hello {this.props.name || 'World'}
      </div>
    );
  }
});

module.exports = Hello;