// Simulate method
// test react state , set state to verify render,

describe('counter', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var Counter = require('../src/counter');

  // can access state
  it('should have 0 as content by default', function() {
    var counter = ReactTestUtils.renderIntoDocument(<Counter />);
    expect(counter.state.count).toBe(0);
    expect(counter.getDOMNode().textContent).toBe('0');
  });

  it('should increment on click', function() {
    var counter = ReactTestUtils.renderIntoDocument(<Counter />);
    ReactTestUtils.Simulate.click(counter.getDOMNode());
    expect(counter.state.count).toBe(1);
    expect(counter.getDOMNode().textContent).toBe('1');
  });

  //can set State
  it('should the count in state', function() {
    var counter = ReactTestUtils.renderIntoDocument(<Counter />);
    counter.setState({
      count: 100
    })
    expect(counter.getDOMNode().textContent).toBe('100');
  });
  
});