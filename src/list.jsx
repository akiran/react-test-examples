var React = require('react');

var MenuList = React.createClass({
  render: function () {
    return (
      <ul>
        <li className='active'>Docs</li>
        <li>Code</li>
        <li>Support</li>
        <li>Blog</li>
      </ul>
    );
  }
});

module.exports = MenuList;