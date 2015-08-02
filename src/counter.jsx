var React = require('react');

var Counter = React.createClass({
  getInitialState: function () {
    return { count: 0 };
  },
  clamp: function (value) {
    return Math.max(Math.min(value, 100), 0);
  },
  clickHandler: function () {
    var count = this.state.count + 1;
    this.setState({
      count: count
    });
    this.props.setCount && this.props.setCount(count);
  },
  render: function () {
    return <button onClick={this.clickHandler}>{this.state.count}</button>;
  }
});

module.exports = Counter;