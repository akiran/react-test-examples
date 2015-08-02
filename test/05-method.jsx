// Testing methods inside react components

describe('counter clamp', function() {
  var ReactTestUtils = React.addons.TestUtils;
  var Counter = require('../src/counter');

  it('should clamp value to range 0 to 100', function() {
    var counter = ReactTestUtils.renderIntoDocument(<Counter />);
    expect(counter.clamp(-5)).toBe(0);
    expect(counter.clamp(120)).toBe(100);
    expect(counter.clamp(45)).toBe(45);
  });

});